const axios = require('axios'),
     path = require('path'),
    { fileExists, modifyFile, writeFile, appendToFile, rdFile } = require('../utilities/utilities');


const userTask = (req, res) => {
    const filename = 'user.json';
    let read = {};
    //change current dir

    process.chdir(path.join(path.resolve(__dirname, '..'), 'DB'));
    // Check if the file exist
    if (fileExists(filename)) {
        // read file
        read = rdFile(filename);


    } else {
        console.log('No such file');
    }
    if (read.length > 0) {
        read = JSON.parse(read);
    }

    //change current dir
    process.chdir(path.join(__dirname));

    res.json(read);
}


const editTask = (req, res) => {
    let id = req.params.id;
    process.chdir(path.join(path.resolve(__dirname, '..'), 'DB'));
    let db = JSON.parse(rdFile('user.json'));
    // find item with matching id
    const list = db.find(item => item.id.toString() === id);

    if (list) {
        res.json(list);
    } else {
        res.status(404).send('List not found');
    }
}

const del = (req, res) => {
    let id = req.params.id;
    process.chdir(path.join(path.resolve(__dirname, '..'), 'DB'));
    let db = JSON.parse(rdFile('user.json'));
    let index = db.findIndex(item => item.id === parseInt(id));


    if (index !== -1) {
        // del value
        db.splice(index, 1);
        //decrement the id of items after the spliced index
        for (let i = index; i < db.length; i++) {
            db[i].id--; // Decrement id
        }
        // edit db 
        db = JSON.stringify(db)
        modifyFile('user.json', db);
        res.status(200).send('Element deleted successfully');
    }
    else {
        res.status(404).send('Element not found');
    }
}

const alterStatus = (req, res) => {

    //change current dir
    process.chdir(path.join(path.resolve(__dirname, '..'), 'DB'));
    let read = {};
    let filename = 'user.json'
    let status = req.body;
    // status id
    let stId = status.id;

    console.log(status)
    // read file
    read = rdFile(filename);
    let indexToMod = JSON.parse(read)[stId - 1]
    indexToMod.status = parseInt(status.status);
    read = JSON.parse(read);
    read[stId - 1] = indexToMod;
    console.log(JSON.stringify(read))
    // Modify file
    modifyFile(filename, JSON.stringify(read));

    res.status(200).send('ok');
}

const addTask = (req, res) => {
    // Extract data from the request body
    const { subject, priority, date } = req.body;

    let id;
    // Change current working directory to the 'DB' dir
    process.chdir(path.join(path.resolve(__dirname, '..'), 'DB'));

    const filename = 'user.json';
    // Check if the file exists


    if (fileExists(filename)) {
        let fileSize = JSON.parse(rdFile(filename)).length;
        // Create a new object with the extracted data and additional properties
        id = fileSize;
        const newTask = {
            id: id,
            subject: subject,
            priority: priority,
            date: date,
            status: 0,
        };

        // Append user task
        appendToFile(filename, newTask);
        res.status(200).send();
    } else {
        id = 0;
        const newTask = {
            id: id,
            subject: subject,
            priority: priority,
            date: date,
            status: 0,
        };
        // Create user file 
        writeFile(filename, JSON.stringify(newTask));
        res.status(200).send();
    }
}

const edit = (req, res) => {
    let id = parseInt(req.body.id);
    process.chdir(path.join(path.resolve(__dirname, '..'), 'DB'));
    let db = JSON.parse(rdFile('user.json'));
    let list = db.find(item => item.id === id);


    if (list) {
        // edit value
        list.id = id;
        list.subject = req.body.subject;
        list.priority = req.body.priority;
        list.date = req.body.date;
        // edit db
        db = JSON.stringify(db)
        modifyFile('user.json', db);
        res.status(200).send('ok');
    }
    else {
        res.status(404).send('Element not found');
    }
}


module.exports = { alterStatus, addTask, edit, userTask, editTask, del };