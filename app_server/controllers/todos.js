module.exports.homelist = function(req,res){
    res.render('todo-list',{title:'Home'});
};

module.exports.todoInfo = function(req,res){
    res.render('todo-info',{title:'To Do Info'});
};

module.exports.todoInfo2 = function(req,res){
    res.render('todo-info2',{title:'To Do Info'});
};

module.exports.todoInfo3 = function(req,res){
    res.render('todo-info3',{title:'To Do Info'});
};

module.exports.todoInfo4 = function(req,res){
    res.render('todo-info4',{title:'To Do Info'});
};

module.exports.addReview = function(req,res){
    res.render('add-task-form',{title:'Add Review'});
};
