const express = require('express'),
     axios = require('axios'),
     router = express.Router(),
     { tasks, addtaskview, editview, del} = require('../controller/servControllers')
// dashboard
router.get('/', tasks)
// addTask page
router.get('/addtask', addtaskview)
// edit page
router.get('/edit/:id', editview)
// del
router.get('/del/:id', del)
module.exports = router;