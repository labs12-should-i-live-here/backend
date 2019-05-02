const router = require("express").Router();
//pin end points
//logger
router.use(function logger (req, res, next) {
    console.log(`Time: ${new Date().toISOString()}, request method: ${req.method} to ${req.url} from ${req.get('Origin')}`);
    next();
});

//POST save pin
router.post(`/:id/pins`,(req,res)=>{
    try{
    
    } catch(error){
        res.status(500).json({error, message: "ERROR could not reach server" });
    }
})

//GET user pin (should have a list of pins that user saved) /:user_id/pins/:pin_id/

//EDIT notes
router.put('/:id/pins',(req,res)=>{
    try{

    }catch(error){
        res.status(500).json({ error, message: "ERROR could not reach server" });
    }
})

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

//POST /:user_id/compare/[]

//DELETE pin & Home Pin
