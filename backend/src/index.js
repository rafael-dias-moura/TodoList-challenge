require('dotenv').config();
const connection = require("./db");
const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
const router = require('./routes/TasksRoutes');
var bodyParser = require('body-parser');

const app = express();
connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "*");
    app.use(cors());
    
    next();
});

app.use(router);
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));