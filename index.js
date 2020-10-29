const express = require('express')

const PORT = process.env.PORT || 3300
const path = require('path') // included with Node but just need to pull it in

const server = express()

server.use(express.json())

// serving our static assets
// ./client/build
server.use(express.static(path.join(__dirname, 'client/build')))



// Endpoints area
server.get('/api', (req, res) => {
    res.json({ message: 'API is up'})
})

// fallback endpoint that sends index.html
server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log('Listening on' + PORT)
})