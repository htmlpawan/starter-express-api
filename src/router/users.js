const express = require('express');
const router  = express.Router();
const  note = require('./../models/users');

router.post('/add', async function(req, res){
    // req.json(req.body);  //check for data post request
    await note.deleteOne({
        email: req.body.email
    });
     var data = new note({
        id:req.body.id,
        name:req.body.name, 
        email: req.body.email,
        mobile: req.body.mobile,
        password:req.body.password
     });
    await data.save();
        res.json({message:"User registered successfully."});   
});
router.post('/listid', async function(req, res){
    var data = await note.find({id: req.body.id});
      res.json(data);   
});
router.get('/list/', async function(req, res){
    var data = await note.find();
      res.json(data);   
});
router.post('/delete', async function(req, res){
    await note.deleteOne({id: req.body.id});
    res.json({message:"User deleted successfully."});   
});

module.exports = router; 