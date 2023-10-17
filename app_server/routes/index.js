require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlTodos = require('../controllers/todos.js')
var ctrlOthers = require('../controllers/others.js')

router.get('/', ctrlTodos.homelist);
router.get('/todo',ctrlTodos.todoInfo);
router.get('/todo2',ctrlTodos.todoInfo2);
router.get('/todo3',ctrlTodos.todoInfo3);
router.get('/todo4',ctrlTodos.todoInfo4);
router.get('/todo/task/new',ctrlTodos.addReview);

router.get('/about',ctrlOthers.about);

module.exports = router;

