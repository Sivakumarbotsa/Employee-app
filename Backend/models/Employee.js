const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    role: String,
    email: { type: String, unique: true, required: true },
    dept: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);