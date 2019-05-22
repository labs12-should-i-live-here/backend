const router = require('express').Router();


    // logs information about each request to the console
router.use(function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
 });

router.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "Server is ready. Create a username and password to register." });

    } catch (err) {
        res.status(500).json({ message: "A server error has occurred. Please try again later." });
    }
});

router.post('/', (req, res) => {
    try {
        const { username, password } = req.body;

        if (username && password) {

            res.status(200).send('username and password received.', token);
        } else {  // both username and password not provided
            res.status(422).send('Please enter a username and password.');
        }
    } catch (error) {
        res.status(500).json({ message: "A server error has occurred. Please try again later." });
    }
})



module.exports = router;