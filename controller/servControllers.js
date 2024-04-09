const axios = require('axios');
// retrieve tasks
const tasks = (req, res) => {
 
    // request to api
    axios.get('http://localhost:4040/api')
        .then(response => {
            // response to client
            res.render('dashboard', {
                tasks: response.data
            });
        })
        .catch(err => {
            console.error('Error making request:', err)
        })
}

// addtask page
const addtaskview = (req, res) => {
    res.render('addTask', {
        successMessage: req.flash('successMessage'),
        errorMessage: req.flash('errorMessage')
    })
}

// edit page
const editview = (req, res)=>{
    axios.get(`http://localhost:4040/api/edit/${req.params.id}`)
        .then(response => {
            res.render('edit', {
                task: response.data
            });
        })
        .catch(err => {
            console.error('Error sending GET request:', err);
        })
}

// del
const del = (req, res)=>{
    axios.get(`http://localhost:4040/api/del/${req.params.id}`)
    .then(response=>{
        console.log(response.status);
        res.redirect('/')
    })
    .catch(err =>{
        console.error('Error sending requst', err);
    })
}

// statusMod
const statusMod = (req, res) => {
    // req to api
    axios.post('http://localhost:4040/api', req.body)
        .then(response => {
            // res to client
            res.status(200).send('ok');
        })
        .catch(error => {
            console.error('Error sending POST request:', error);
        });
}

// addTask
const addTask = (req, res) => {
    // req to api
    axios.post('http://localhost:4040/api/addtask', req.body)
        .then(response => {
            // res to client
            console.log(response.status);
            
        })
        .catch(error => {
            console.error('Error sending POST request:', error);
            req.flash('errorMessage', 'Error adding task'); // Set error flash message
            res.redirect('/addtask'); // Redirect to the addtask page
        });
        req.flash('successMessage', 'Task added successfully'); // Set flash message
        res.redirect('/addtask'); // Redirect to the addtask page
}

// edit
const edit = (req, res)=>{

    axios.put('http://localhost:4040/api/edit', req.body)
    .then(response => {
        console.log(response.status);
        res.status(200).send('ok');
    })
    .catch(err=>{
        console.error('Error sending PUT requst', err);
    })
}

module.exports = { tasks, addtaskview, editview, del, statusMod, addTask, edit}