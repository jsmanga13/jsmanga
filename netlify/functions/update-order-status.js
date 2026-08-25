const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  if (!process.env.ADMIN_PASSWORD) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Admin access is not configured on this site yet.' }) };
  }

  const password = event.headers['x-admin-password'];
  if (password !== process.env.ADMIN_PASSWORD) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Incorrect password.' }) };
  }

  try {
    const { orderId, status, trackingNumber } = JSON.parse(event.body || '{}');
    if (!orderId || !status) {
      return { statusCode: 400, body: JSON.stringify({ error: 'orderId and status are required.' }) };
    }

    const store = getStore('orders');
    const order = await store.get(orderId, { type: 'json' });
    if (!order) {
      return { statusCode: 404, body: JSON.stringify({ error: 'Order not found.' }) };
    }

    order.status = status;
    if (typeof trackingNumber === 'string') order.trackingNumber = trackingNumber;
    await store.setJSON(orderId, order);

    return { statusCode: 200, body: JSON.stringify({ order }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
