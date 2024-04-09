const express = require('express'),
    axios = require('axios'),
    fs = require('fs'),
    path = require('path'),
    router = express.Router(),
    {alterStatus, addTask, edit} = require('../controller/apControllers');


// ===============
// Middlwares
// ===============
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

// ===============
// Routes
// ===============
// Status Modify
router.post('/', alterStatus)

// add task
router.post('/addtask', addTask)

// edit
router.put('/edit', edit)

module.exports = router;