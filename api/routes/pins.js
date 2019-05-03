const router = require("express").Router();
const fn = require('./controller');

//pin end points
//logger
router.use(function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
});

//PINS CRUD ******************************
//POST save pin
router.post(`/:id/pins`,(req,res)=>{
    fn.addPin({...req.body}).then(data=>{
        res.status(201).json(data);
    }).catch(err=>{
        res.status(500).json(err);
    });
})

//GET user pin (should have a list of pins that user saved) /:user_id/pins/:pin_id/

//EDIT notes
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
//********************************************* 
//HOME PIN CRUD *******************************
//POST home pin
router.post('/:id/home', (res, req) =>{
    try{

    }catch(error){
        res.status(500).json({ error, message: "ERROR could not reach server" });
    }
})
//GET home pin
router.post('/:id/home',(res,req)=>{
    try{

    } catch(error){
        res.status(500).json({error, message: "ERROR could not reach server" });
    }
})

//EDIT home
router.put('/:id/home',(res, req)=>{
    try{

    }catch(error){
        res.status(500).json({ error, message: "ERROR could not reach server" });
    }
})
//DELETE home
router.delete('/:id/home',(res,req)=>{
    try{

    }catch(err){
        res.status(500).json({ err, message: "ERROR could not reach server" });
    }
})

//DELETE Home Pin

//POST /:user_id/compare/[]

module.exports = router;