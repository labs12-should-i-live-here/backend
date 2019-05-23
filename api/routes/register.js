const router = require("express").Router();
const knex = require("knex");
const jwt = require('jsonwebtoken');

const Users = require('./controller');
// const {generateToken} =require('../middleware/genToken.js')
const knexConfig = require("../../knexfile.js");


const secret = process.env.JWT_SECRET || 'string';

    
function generateToken ( user ) {
  console.log('in generate token',secret)
  const payload = {
    subject: user.userid,
    // username: "taylor"
  }
  const options = {
    expiresIn: '78h'
  }
  console.log(jwt.sign( payload, secret, options))
  return jwt.sign( payload, secret, options);
}

const dbEnv = process.env.DB_ENV || "development";
const db = knex(knexConfig[dbEnv]);

// logs information about each request to the console
router.use(function logger(req, res, next) {
  console.log(
    `Time: ${new Date().toISOString()}, request method: ${req.method} to ${
      req.url
    } from ${req.get("Origin")}`
  );
  next();
});

router.get("/", async (req, res) => {
  try {
    const users = await db("users");
    res.status(200).send(users);
    //json({ message: "Server is ready. Create a username and password to register." });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "A server error has occurred. Please try again later."
      });
  }
});

router.post("/", (req, res) => {
  try {
    const user = req.body;
    
    if (user.userid) {
      let userid = user.userid;
      const token = generateToken(user);
      console.log(token);
      db.insert(user)
        .into("users")
        .then(
          id => { 
          res
            .status(201).json({userid, id, token})
            .send(user.id);
        })
        .catch(error => {
          if (error.errno === 19)
            res
              .status(200).json({userid, token, message: `Welcome back.`})
              .send(user.id);
          else
            res
              .status(501)
              .json({ err: error, user: user, message: "An unknown error occurred." });
        });
    } else {
      // both username and password not provided
      res.status(400).send("Please enter a userid");
    }
  } catch (error) {
    res
      .status(500)
      .json({error, user,
        message: "A server error has occurred. Please try again later."
      });
  }
});

router.put('/:userid', async (req, res) => {
  try {

      console.log(req.params.userid, req.body)
      let id = req.params.userid;
      let {premium_member, numberofsavedlocations} = req.body;
      if( premium_member != null && numberofsavedlocations != null ){
        const count = await db('users').where({ userid : id}).update({ premium_member: premium_member, numberofsavedlocations: numberofsavedlocations });
        if (count > 0)
           res.status(200).send('payment status and number of pins updated');
        else
          res.status(400).send('Could not update payment and # of pins. Please try again later.');
      }
      else if( premium_member != null){
        const count = await db('users').where({ userid : id}).update({ premium_member: premium_member });
        if (count > 0)
           res.status(200).send('payment status updated');
        else
          res.status(400).send('Could not update payment status. Please try again later.');
      } else if( numberofsavedlocations != null){
          const count = await db('users').where({ userid : id}).update({ numberofsavedlocations: numberofsavedlocations });
          if (count > 0)
             res.status(200).send('number of pins updated');
          else
            res.status(400).send('Could not update number of pins . Please try again later.');
      } else 
          res.status(401).send('Please provide either payment status or number of pins to update.');
      
      console.log( 'count is ', count)
   
  } catch (err) {
      res.status(500).send(err);
  }

})



router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {

   
    const user = await  db('users')
       .select('id',
            'userid',
            'premium_member',
            'numberofsavedlocations')
        .where({ userid: id })
        .first();

    if (!user) {
      res
        .status(404)
        .json({ message: `No user with matching id, please try again.` });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ err: error, id: id, user: user, message: 'Internal server error' });
    
  }
});

module.exports = router;
