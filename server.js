// loads the express module
const express = require('express')
const path = require('path')

// imports the router that was created in index.js
const indexRouter = require('./routes/index')
// creates main express application instance
const app = express()

// assign the location of the static files
const staticFilePath = path.join(__dirname, 'client', 'dist')
// tell express to treat the file location as the static files
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles)


app.use('/', indexRouter)
// creates a server instance that listens on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})