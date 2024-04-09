const express = require('express'),
     axios = require('axios'),
     router = express.Router(),
     {statusMod, addTask, edit} = require('../controller/servControllers');
// Status Modify
router.post('/', statusMod)
// add task
router.post('/dashboard', addTask)
// edit
router.post('/edit',  edit)

module.exports = router;