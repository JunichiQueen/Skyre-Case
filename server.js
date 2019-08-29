const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const suspect = require('./routes/suspect');

const db = require("./config/keys").mongoURI;

mongoose
  .connect('mongodb://mongo:27017/case', { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/suspect', suspect);


const port = process.env.PORT || 8085;

app.listen(port, () => console.log(`server running on port ${port}`));
