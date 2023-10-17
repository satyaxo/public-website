var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
    };
    module.exports.tasksCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.tasksReadOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.tasksUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
    module.exports.tasksDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status" : "success"});
    };
  