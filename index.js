const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./mongodb')
const buyerRouter = require('./routes/router')

const app = express()
const apiPort = 3001

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.post('/buyers', buyerRouter);
app.get('/buyers', buyerRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/buyers', function(req, res, next) {
  console.log("New Request...");
  next();
})


app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))