const express=require('express')
const router=express.Router();
const employeeModel= require('../model/employeeData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));
router.get('/', async (req, res)=>{
    try{
        const employees = await employeeModel.find();
        res.status(200).send(employees);
    }
    catch(error){
        res.status(404).send('employee not found');
    }
});
router.post('/addemployee', async (req, res)=>{
    try{
    const employee=req.body;
    const newemployee =new employeeModel(employee);
    const savedemployee = await newemployee.save();
    res.status(200).send('employee added successfull')
    }
    catch(error){
        res.status(404).send('error occured')
    }
});
router.put ('/edit/:id' ,async (req, res)=>{
    try{
        const id= req.params.id;
        const updatedemployee = await employeeModel.findByIdAndUpdate(id,req.body);
        res.status(200).send('employee updated successfully');
    }
    catch(error){
        res.status(404).send('error occured');
    }
});
router.delete('/delete/:id' ,async (req,res)=>
{
    try{
        const id= req.params.id;
        const deleteemployee= await employeeModel.findByIdAndDelete(id);
        res. status(200).send('employee deleted successfully')
    }
    catch(error){
        res.status(404).send('error occured in deletion');
    }
});
module.exports=router