const router = require('express').Router();
const knex = require('knex');
const bcrypt = require('bcryptjs');

const knexConfig = require('../../knexfile.js');

const dbEnv = process.env.DB_ENV || 'development';
const db = knex(knexConfig[dbEnv]);


    // logs information about each request to the console
router.use(function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
 });

router.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "Server is ready. Create a username and password to register." });

    } catch (error) {
        res.status(500).json({ message: "A server error has occurred. Please try again later." });
    }
});

router.post('/', (req, res) => {
    try {
        const user = req.body;

        if (user.username && user.password) {


            user.password = bcrypt.hashSync(user.password, 10);
            db.insert(user).into('users').then( id => {
                res.status(201).send(`Welcome ${user.username}, you have successfully registered`);
            })
            .catch(error => {
                if ( error.errno === 19) 
                    res.status(401).json({ err: error, message: 'This username is not available. Please pick a different username'});
                else 
                    res.status(501).json({ err: error, message: 'An unknown error occurred.' });
            })
        } else {  // both username and password not provided
            res.status(400).send('Please enter a username and password.');
        }
    } catch (error) {
        res.status(500).json({ message: "A server error has occurred. Please try again later." });
    }
});



module.exports = router;