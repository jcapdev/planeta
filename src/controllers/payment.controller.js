const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51MbOhOCu58rUlZYzA7pueC2CuHALT0Cnz5vFM4gyg0bXFwTpDh4PjwA5km43IMQZyUwJgevRay5vq3YNi74ekTc8006culPSxn');

const createSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {   
        price: 'price_1OAcKkCu58rUlZYzNVqiLANR',
        quantity: 1,
      }
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000'
  });
  return res.json(session);
};

module.exports = { createSession };
