module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'GET') {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    return;
  }

  const products = [
    {
      id: 'shampoo',
      icon: '🧴',
      name: 'Botanical Repair Shampoo',
      description: 'Signature blend with argan oil, aloe vera, and natural proteins.',
      price: 24.99
    },
    {
      id: 'oil',
      icon: '✨',
      name: 'Natural Hair Oil',
      description: 'Lightweight shine and heat protection for all hair types.',
      price: 29.99
    },
    {
      id: 'set',
      icon: '🎁',
      name: 'Complete Hair Care Set',
      description: 'Shampoo, conditioner, hair mask, and oil in one bundle.',
      price: 89.99
    },
    {
      id: 'conditioner',
      icon: '💧',
      name: 'Deep Moisture Conditioner',
      description: 'Intense hydration that smooths cuticles and reduces frizz.',
      price: 24.99
    },
    {
      id: 'mask',
      icon: '🧴',
      name: 'Intensive Repair Hair Mask',
      description: 'Weekly strengthening treatment to restore hair health.',
      price: 32.99
    },
    {
      id: 'color',
      icon: '🎨',
      name: 'Color Protection Conditioner',
      description: 'Protects color and maintains vibrancy for treated hair.',
      price: 26.99
    }
  ];

  res.statusCode = 200;
  res.end(JSON.stringify({ products }));
};

