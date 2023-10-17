var express = require('express');
var router = express.Router();
var ctrlTodos = require('../controllers/todos');
var ctrlTasks = require('../controllers/tasks');
router.get('/todos', ctrlTodos.todosList);
router.post('/todos', ctrlTodos.todosCreate);
router.get('/todos/:todoid', ctrlTodos.todosReadOne);
router.put('/todos/:todoid', ctrlTodos.todosUpdateOne);
router.delete('/todos/:todoid', ctrlTodos.todosDeleteOne);

router.post('/todos/:todoid/tasks', ctrlTasks.tasksCreate);
router.get('/todos/:todoid/tasks/:taskid',ctrlTasks.tasksReadOne);
router.put('/todos/:todoid/tasks/:taskid',ctrlTasks.tasksUpdateOne);
router.delete('/todos/:todoid/tasks/:taskid',ctrlTasks.tasksDeleteOne);
module.exports = router;
