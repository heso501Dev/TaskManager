# TaskOrganizer


This project is a task manager built with Node.js, allowing users to add, edit, and delete tasks. Tasks are managed through the file system, enabling local storage using a JSON file database.

## Features

- **Add tasks:** Users can add tasks to the task manager.
- **Edit tasks:** Users can edit existing tasks.
- **Delete tasks:** Users can delete tasks from the task manager.
- **View creation date:** Each task displays the date and time it was created.

## Compatibility

The project is primarily tested and optimized for Chrome browser. While it should work with other browsers, the user interface may not display correctly due to differences in browser rendering engines.

## Technologies Used

- **Node.js**
- **Express.js**
- **HTML**
- **CSS**

*Note: The project includes a file `server.js` which serves as the file server. The client requests it, and the server connects with the API to create/adjust the database. The API interacts with a JSON file database to manage tasks.*

