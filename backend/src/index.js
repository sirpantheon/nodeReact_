const express = require('express')
const server = express()
server.use(express.json())

const TaskRouter = require('./routes/taskRoutes')


server.use('/task', TaskRouter)

const port = 3000
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//aula 30