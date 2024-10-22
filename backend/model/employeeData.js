const mongoose= require('mongoose');
const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    salary: { type: Number, required: true },
    department: { type: String, required: true },
    location: { type: String, required: true }

})
const Employee = mongoose.model('employee',employeeSchema);
module.exports =Employee;