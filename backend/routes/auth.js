const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/User') 
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var fetchuser = require('../middleware/fetchuser');
const Client = require('../models/Client');


const JWT_SECRET = "UpamanyuisKing";
router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter correct email').isEmail( ),
    body('password','Enter min 5 values').isLength({min:8})
],async (req,res) => {

    let success = false; 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors : errors.array()})
    }

    try{
    let user = await User.findOne({email:req.body.email}); 
    if(user){
        return res.status(404).json({success,error : "Email with this mail already exists"})
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({  
        name:req.body.name,
        email:req.body.email,
        password:secPass, 
        contact: req.body.contact,
        company: req.body.company,
        history: req.body.history,
        description: req.body.description,
        stage: req.body.stage,
        target: req.body.target,
        plan: req.body.plan
    })

    const data = {
        user:{
            id:user.id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
    success = true;
    res.json({success,authtoken: authtoken})
    }catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})

router.post('/createclient',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter correct email').isEmail( ),
    body('password','Enter min 5 values').isLength({min:8})
],async (req,res) => {

    let success = false; 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors : errors.array()})
    }

    
    try{
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(404).json({success,error : "Email with this mail already exists"})
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    console.log(req.body);
    user = await Client.create({ 
        name:req.body.name,
        email:req.body.email,
        password:secPass, 
        contact: req.body.contact,
        experience: req.body.experience,
        goal: req.body.goal,
        risk: req.body.risk,
        capital: req.body.capital,
        focus: req.body.focus,
        investement: req.body.investment
    })

    console.log(user);

    const data = {
        user:{
            id:user._id
        }
    }
    const authtoken = jwt.sign(data,JWT_SECRET); 
    success = true;
    res.json({success,authtoken: authtoken})
    }catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})

router.post('/loginuser',[
    body('email','Enter correct email').isEmail( ),
    body('password','Enter Password').exists()
],async (req,res) => {

    let success= false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors : errors.array()})
    }
    const {email,password} = req.body;

    try {
        let user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({success,error:"Enter correct credentials"})
        }
        
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Enter correct credentials"})
        }

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true;
        res.json({success,authtoken: authtoken, id: user._id})


    } catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})


router.post('/loginclient',[
    body('email','Enter correct email').isEmail( ),
    body('password','Enter Password').exists()
],async (req,res) => {

    let success= false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,errors : errors.array()})
    }
    const {email,password} = req.body;

    try {
        let user = await Client.findOne({email:email});
        if(!user){
            return res.status(400).json({success,error:"Enter correct credentials"})
        }
      
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).json({success,error:"Enter correct credentials"})
        }

        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET); 
        success = true;
        res.json({success,authtoken: authtoken, id: user._id})


    } catch(error){
        console.log(error.message);
        res.status(500).send("Some error occured")
    }
})

router.post('/getuser',fetchuser,async (req,res) => {
try {
    userId = req.user.id 
    
    const user = await User.findById(userId).select('-password')
    res.send(user);

}catch(error){
    console.log(error.message);
    res.status(500).send("Some error occured")
}})
module.exports = router ;