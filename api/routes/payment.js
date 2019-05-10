const router = require("express").Router();
//SECRET KEY
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//CRUD

//GET
router.get("/", (req, res) => {
  res.send({
    message: "Hello Stripe checkout server!",
    timestamp: new Date().toISOString()
  });
});
//POST
router.post("/", function(req, res, next) {

  //Subscription
  const stripeToken = req.body.stripeToken;

  stripe.customers.create(
    {
      source: stripeToken
    },
    function(err, customer) {
      console.log(err);
      console.log(customer);
      if (err) {
        res.send({
          success: false,
          message: "ERrorr"
        });
      } else {
        const { id } = customer;

        stripe.subscriptions.create(
          {
            customer: id,
            items: [
              {
                //plan ID
                plan: "prime"
              }
            ]
          },
          function(err, subscription) {
            console.log(err);
            console.log(subscription);
            if (err) {
              res.send({
                success: false,
                message: "ERrorr"
              });
            } else {
              res.send({
                success: true,
                message: "Success"
              });
            }
          }
        );
      }
    }
  );

  //One-time paynent
  // stripe.charges.create(
  //   {
  //     amount: 1000,
  //     currency: "usd",
  //     description: "Example Charge",
  //     source: stripeToken
  //   },
  //   function(err, charge) {
  //     console.log('charge');
  //     console.log(charge);
  //     if (err) {
  //       res.send({
  //         success: false,
  //         message: 'ERrorr'
  //       });
  //     } else {
  //       res.send({
  //         success: true,
  //         message: 'Success'
  //       });
  //     }
  //   }
  // );
});

module.exports = router;

//PR 1
// pr 2