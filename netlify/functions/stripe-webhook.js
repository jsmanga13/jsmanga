const Stripe = require('stripe');
const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return { statusCode: 500, body: 'Stripe webhook is not configured.' };
  }

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const sig = event.headers['stripe-signature'];

  let stripeEvent;
  try {
    stripeEvent = stripe.webhooks.constructEvent(event.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return { statusCode: 400, body: `Webhook signature verification failed: ${err.message}` };
  }

  if (stripeEvent.type === 'checkout.session.completed') {
    const session = stripeEvent.data.object;

    try {
      const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
        expand: ['line_items', 'customer_details'],
      });

      const order = {
        id: session.id,
        createdAt: new Date().toISOString(),
        email: fullSession.customer_details ? fullSession.customer_details.email : session.customer_email,
        shippingAddress: fullSession.customer_details && fullSession.customer_details.address ? fullSession.customer_details.address : null,
        items: (fullSession.line_items ? fullSession.line_items.data : []).map((li) => ({
          name: li.description,
          quantity: li.quantity,
          amount: li.amount_total / 100,
        })),
        total: session.amount_total / 100,
        currency: session.currency,
        status: 'paid',
        trackingNumber: '',
      };

      const store = getStore('orders');
      await store.setJSON(order.id, order);

      return { statusCode: 200, body: JSON.stringify({ received: true }) };
    } catch (err) {
      return { statusCode: 500, body: `Failed to record order: ${err.message}` };
    }
  }

  return { statusCode: 200, body: JSON.stringify({ received: true }) };
};
