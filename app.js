const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

require("dotenv/config");


// app.use(express.urlencoded({extended: false}));
const path = require('path');
const api = process.env.API_URL;

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Routes
const usersRouter = require('./routers/users');
const barsRouter = require('./routers/bars');
const ordersRouter = require('./routers/orders');

app.use(`${api}/users`, usersRouter);
app.use(`${api}/bars`, barsRouter);
app.use(`${api}/orders`, ordersRouter);

//Database Connection
mongoose.connect(process.env.CONNECTION_STRING,
  {
    dbName: 'buzz_data'
  }).then(()=>{
  console.log('Database Connection Success!')

}).catch(()=>{
  console.log("Error Connecting to Database!");
});

//app
app.listen(3000, ()=>{
    console.log(api);
    console.log('server running on 3000');
})
