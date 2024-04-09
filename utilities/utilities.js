// utilities.js

const fs = require('fs');

let tasks = '';
// Check if user file exists
const fileExists = (filename) => {
    return fs.existsSync(filename)
}
// Modify file
const modifyFile = (filename, ModifiedData) => {
    return fs.writeFile(filename, `${ModifiedData}`, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file: ', err);
            return
        }
        console.log('Alter operation completed.');
    })
}
// Create file
const writeFile = (filename, newData) => {
    return fs.writeFile(filename, `[${newData}]`, 'utf8', (err) => {
        if (err) {
            console.error('Error writing to file: ', err);
            return
        }
        console.log('Write operation completed.');
    })
}
// append file
const appendToFile = (filename, newData) => {
    try {
        // Read the existing data from the file
        let fileData = fs.readFileSync(filename, 'utf8');

        // convert json to object
        let jsonData = JSON.parse(fileData);

        // append new data to existing array
        jsonData.push(newData);

        fs.writeFileSync(filename, JSON.stringify(jsonData), 'utf8');
        console.log('Data appended successfully!');
    }
    catch (err) {
        console.error('Error appending data: ', err);
    }
}
// Read file

const rdFile = (filename) => {
    try {
        return fs.readFileSync(filename, 'utf8');

    } catch (err) {
        console.error("Error Reading from file: ", err);
    }
}


module.exports = { fileExists, modifyFile, writeFile, appendToFile, rdFile };
