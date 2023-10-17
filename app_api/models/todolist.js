var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    date: Date,
    taskname: String
});

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tagline: String,
    tasks: [taskSchema]
});

mongoose.model('Task', todoSchema);
