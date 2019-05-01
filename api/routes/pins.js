const router = require("express").Router();
//pin end points
//logger
router.use(function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
});

//save pin POST /:user_id/pins/[long,lat]


//GET user pin (should have a list of pins that user saved) /:user_id/pins/:pin_id/

//DELETE pin

//POST /:user_id/homepin/

//GET /:user_id/homepin

//POST /:user_id/compare/[]

