const router = require("express").Router();
const knex = require("knex");
const Users = require('./controller');

const knexConfig = require("../../knexfile.js");

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
     
      db.insert(user)
        .into("users")
        .then(id => {
          res
            .status(201)
            .send(`Welcome ${user.userid}, you have successfully registered`);
        })
        .catch(error => {
          if (error.errno === 19)
            res
              .status(401)
              .json({
                err: error,
                message:
                  "This userid already taken. Please pick a different userid"
              });
          else
            res
              .status(501)
              .json({ err: error, message: "An unknown error occurred." });
        });
    } else {
      // both username and password not provided
      res.status(400).send("No userid sent");
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "A server error has occurred. Please try again later."
      });
  }
});

// router.put("/:id", (req, res) => {
//   db.update(req.params.id, req.body)
//   .then(newData => {
//   if (newData) {
//       res.status(200).json(newData);
//   } else {
//       res.status(404).json({ message: "No such pin exits!" });
//   }
//   })
//   .catch(error => {
//   res.status(500).json(error);
//   });
// });

//get by Id
router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const user = await Users.findUserById(id);

    if (!user) {
      res
        .status(404)
        .json({ message: `No user with matching id, please try again.` });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
