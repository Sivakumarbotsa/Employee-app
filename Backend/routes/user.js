const router =require('express').Router();
const Employee = require('../models/Employee');

router.post('/add-emp', async(req,res)=>{
    const empDetails= new Employee(req.body);
    try{
        await empDetails.save();
        res.status(200).send(empDetails);
        console.log(empDetails);
    }catch(err){
        res.status(401).send(err);
    }
})

module.exports= router;