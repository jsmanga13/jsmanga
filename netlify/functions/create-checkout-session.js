const Stripe = require('stripe');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!process.env.STRIPE_SECRET_KEY) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Stripe is not configured on this site yet.' }) };
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

  try {
    const body = JSON.parse(event.body || '{}');
    const cart = Array.isArray(body.cart) ? body.cart : [];
    const shippingCost = Number(body.shippingCost) || 0;

    if (cart.length === 0) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Your cart is empty.' }) };
    }

    const line_items = cart.map((item) => {
      const price = Number(item.price);
      const qty = Math.max(1, Number(item.qty) || 1);
      if (!Number.isFinite(price) || price <= 0) {
        throw new Error(`Invalid price for ${item.title || item.slug}`);
      }
      return {
        price_data: {
          currency: 'usd',
          product_data: { name: `${item.title || item.slug}${item.size ? ' — ' + item.size : ''}` },
          unit_amount: Math.round(price * 100),
        },
        quantity: qty,
      };
    });

    if (shippingCost > 0) {
      line_items.push({
        price_data: {
          currency: 'usd',
          product_data: { name: 'Shipping' },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    const siteUrl = process.env.URL || `https://${event.headers.host}`;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items,
      customer_email: body.customerEmail || undefined,
      shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      success_url: `${siteUrl}/cart.html?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cart.html?canceled=true`,
    });

    return { statusCode: 200, body: JSON.stringify({ url: session.url }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message || 'Something went wrong starting checkout.' }) };
  }
};
