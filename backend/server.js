const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//conexão com o banco
mongoose.connect("mongodb+srv://admin:root@meancourse-u9bx1.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true})
    .then(() =>{
        console.log('Connected!');
    }).catch(() => {
        console.log('CONNECTED ERROR');
    });

//iniciando o server
const app = express();
app.use(express.json());

//habilitando o cors
app.use(cors());

//requisição de um diretório global
requireDir("./src/models");

//primeira rota
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3000);