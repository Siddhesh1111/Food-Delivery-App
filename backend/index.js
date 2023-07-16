const express = require('express')
const mongoDB = require('./db')
const createUser = require('./Routes/createUser')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());

app.use('/api', createUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  mongoDB();
})