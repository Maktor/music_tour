const express = require('express')
const app = express()
const bandsController = require('./controllers/bands_controller')
const eventsController = require('./controllers/events_controller')
const stagesController = require('./controllers/stages_controller')

require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello. You should not be here.'
    })
})

app.use('/bands', bandsController)
app.use('/events', eventsController)
app.use('/stages', stagesController)

app.listen(process.env.PORT, () => {
    console.log(`Rockin' on port: ${process.env.PORT}`)
})