const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require('./model/User');
const config = require('./config/key');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
main().catch(err => console.log(err))

async function main() {
  await mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, // <-- no longer necessary
    useUnifiedTopology: true // <-- no longer necessary
  });
}


app.get('/', (req, res) => {
  res.send('Hello World!..zz')
})

app.post('/register', (req, res) => {
  //
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err});
    return res.status(200).json({
      success: true
    })
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})