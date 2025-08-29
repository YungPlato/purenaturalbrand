module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  try {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    const bodyRaw = Buffer.concat(chunks).toString('utf8') || '{}';
    const body = JSON.parse(bodyRaw);
    const email = (body.email || '').toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      res.statusCode = 400;
      res.end(JSON.stringify({ ok: false, error: 'Invalid email' }));
      return;
    }

    // Placeholder: In production, integrate with your ESP (Mailchimp, ConvertKit, etc.)
    console.log('New newsletter signup:', email);

    res.statusCode = 200;
    res.end(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error('Subscribe error', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ ok: false, error: 'Server error' }));
  }
};

