const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const stripeChargeCallback = res => (stripeErr, stripeRes) => {
//   if (stripeErr) {
//     res.status(500).send({ error: stripeErr });
//   } else {
//     res.status(200).send({ success: stripeRes });
//   }
// };

//CRUD

//GET
router.get("/", (req, res) => {
  res.send({
    message: "Hello Stripe checkout server!",
    timestamp: new Date().toISOString()
  });
});
//POST
//version 1 ------------------------------------------
// router.post("/", (req, res) => {
//     const body = {
//       source: req.body.token.id,
//       amount: req.body.amount,
//       currency: "usd"
//     };
//     stripe.charges.create(body, stripeChargeCallback(res));
// });

//version 2 -----------------------------------------
router.post("/", function(req, res, next) {
  const stripeToken = req.body.stripeToken;

  stripe.charges.create(
    {
      amount: 1000,
      currency: "usd",
      description: "Example Charge",
      source: stripeToken
    },
    function(err, charge) {
      console.log('charge');
      console.log(charge);
      if (err) {
        res.send({
          success: false,
          message: 'ERrorr'
        });
      } else {
        res.send({
          success: true,
          message: 'Success'
        });
      }
    }
  );
});

module.exports = router;
