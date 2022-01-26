const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')

main().catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb+srv://yj:yj@boilerplate.m5rlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true // <-- no longer necessary
  });
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})