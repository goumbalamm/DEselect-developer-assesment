const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const StudentSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  age: {type: Number, required: true},
  nationality: {type: String, required: true},
});

StudentSchema.plugin(AutoIncrement, {inc_field: 'id'});
module.exports = mongoose.model("Student", StudentSchema);