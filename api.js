const express = require('express'),
    fs = require('fs'),
    ar = require('./routes/apiRoute'),
    arp = require('./routes/apiRouteP'),
    path = require('path'),
    cors = require('cors'),
    app = express(),
    port = 4040;


app.use(cors());


// ================
//     Routes
// ================

// send user tasks
app.use('/api', ar)


// Status Modify

app.use('/api', arp);

// add task
app.use('/api/addtask', arp);

// edit task
app.use('/api/edit/:id', ar);

// Edit
app.use('/api/edit', arp);

// del
app.use('/api/del/:id', ar);

app.listen(port, () => {
    console.log(`API server is running on port: ${port}`)
})