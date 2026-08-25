const { getStore } = require('@netlify/blobs');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
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
    const store = getStore('orders');
    const { blobs } = await store.list();
    const orders = await Promise.all(blobs.map((b) => store.get(b.key, { type: 'json' })));
    orders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return { statusCode: 200, body: JSON.stringify({ orders }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
