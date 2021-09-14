const express = require('express')
const cors = require('cors')
const server = express()


server.use(cors())
server.use(express.json())

const TaskRouter = require('./routes/taskRoutes')


server.use('/task', TaskRouter)

const port = 3333
server.listen(port, () => {
    console.log(`listening on port ${port}`)
})

//aula 39