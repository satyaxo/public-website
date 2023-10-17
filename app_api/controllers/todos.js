var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    module.exports.todosCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.todosList = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    var mongoose = require('mongoose');
    var Loc = mongoose.model('Task');
    module.exports.todosReadOne = async function (req, res) {
    try {
    const todo = await
    Loc.findById(req.params.todoid).exec();
    sendJsonResponse(res, 200, todo);
    console.log(todo)
    } catch (err) {
    // Handle the error
    sendJsonResponse(res, 500, { error: 'An error occurred' });
    }
    };
  
    module.exports.todosUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.todosDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
  