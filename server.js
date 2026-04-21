// loads the express module
const express = require('express')

// imports the router that was created in index.js
const indexRouter = require('./routes/index')
// creates main express application instance
const app = express()


app.use('/', indexRouter)
// creates a server instance that listens on port 3000
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port ', server.address().port)
})