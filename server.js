const express = require('express'),
    fs = require('fs'),
    path = require('path'),
    sr = require('./routes/serverRoute'),
    srp = require('./routes/serverRouteP')
    cors = require('cors'),
    ejs = require('ejs'),
    flash = require('req-flash'),
    session = require('express-session'),
    app = express(),
    port = 4000;


// ===============
// Middlwares
// ===============
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: '123'
}));
app.use(flash());
app.use(express.json());
app.use(cors());

// ==============
// Config setting
// ==============
// automatically locate and render templates based on their names
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// ==============
// Routes
// ==============

// user task
app.use('/', sr);

// Status Modify

app.use('/', srp);


// addtask page
app.use('/addtask', sr)


// Adding Task
app.use('/dashboard', srp);

// edit
app.use('/edit/:id', sr)

// edit
app.use('/edit', srp)

//del
app.use('/del/:id', sr)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})