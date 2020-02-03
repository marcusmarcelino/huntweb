const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./routes');
const requireDir = require('require-dir');

//Iniciando O App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Banco de dados
mongoose.connect('mongodb+srv://huntweb:huntweb@cluster0-26cix.mongodb.net/hunt?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
requireDir('./models');

//app.use(routes);

//Rotas
app.use("/api", require("./routes"));

app.listen (3333);