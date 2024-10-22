const mongoose= require('mongoose');
const userSchema= new mongoose.Schema({
    username:String,
    password:String,
    phone:Number

})
const UserData = mongoose.model('employeeuser',userSchema);
module.exports =UserData;