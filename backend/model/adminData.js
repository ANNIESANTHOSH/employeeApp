const mongoose= require('mongoose');
const adminSchema= new mongoose.Schema({
    username:String,
    password:String,
    phone:Number

})
const AdminData = mongoose.model('user',adminSchema);
module.exports =AdminData;

//admin    123
//employee 123