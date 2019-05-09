const router = require("express").Router();
const fn = require('./controller');
const jwt = require('jsonwebtoken')

const tokenService = require('../middleware/tokenService.js')

//pin end points
//logger
router.use(function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
});

//PINS CRUD ******************************
//POST save pin
router.post(`/:id/pins`,(req,res)=>{
    console.log(...req.body);
    fn.addPin({...req.body}).then(data=>{
        res.status(201).json(data);
    }).catch(err=>{
        res.status(500).json(err);
    });
})


//EDIT pin
router.put("/:id/pins/:id", (req, res) => {
    fn.updatePin(req.params.id, req.body)
    .then(newData => {
    if (newData) {
        res.status(200).json(newData);
    } else {
        res.status(404).json({ message: "No such pin exits!" });
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});

//GET pin by id
router.get("/:id/pins/:id" , (req, res) => {
    fn.getPinById(req.params.id)
    .then(data => {
    if (data) {
        res.status(200).json(data);
    } else {
        res.status(404).json({ message: "No Pins with that Id" });
    }
    })
    .catch(error => {
    console.log(error);
    res.status(500).json(error);
    });
});

//DELETE pin
router.put("/:id/pins/:id", (req, res) => {
    fn.updatePin(req.params.id)
    .then(badClass => {
        if (badClass) {
        res.status(200).json({ message: "Pin deleted, goodbye" });
        } else {
        res.status(404).json({ message: "No pin with that id" });
    }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

//GET all pins
router.get("/pins" , (req, res) => {
    fn.getPins()
    .then(data => {
        if (data.length) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "No Pins Found" });
        }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


//compare CRUD
//I need to create the Front end compare before i can make this...

module.exports = router;