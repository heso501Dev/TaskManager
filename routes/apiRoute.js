const express = require('express'),
    axios = require('axios'),
    fs = require('fs'),
    path = require('path'),
    router = express.Router(),
    {userTask, editTask, del} = require('../controller/apControllers');



// ===============
// Middlwares
// ===============
router.use(express.urlencoded({ extended: true }));
router.use(express.json());


// ===============
// Routes
// ===============

// send user tasks
router.get('/', userTask)
// edit task
router.get('/edit/:id', editTask)
// del
router.get('/del/:id', del)

module.exports = router;