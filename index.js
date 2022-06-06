require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const expressValidator = require ('express-validator');
const app = express();


// Importing Routes
const signoffRoutes = require('./routes/signoffRoutes');
const { PORT } = process.env
const { WELCOME_MESSAGE, DATABASE_URL } = process.env

// setting the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

// Setting directory for static files
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE SECTION

// we are telling node to focus on information in the input fields
app.use(express.urlencoded({extended:false}));

// telling body parser to use json format
app.use (express.json());

// using my imported routes
app.use('/',signoffRoutes);


// This message appears in case someone searches for a route that doesnt exist on our server
app.get('*', (req, res) => {
    res.status(404).send('Hello,This is an invalid URL')
  })

  // / spin up the server 
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost:27017/student-attendance',
{
  useNewUrlParser:true,
  useUnifiedTopology:true,
},
).then(() => {
    // successful connection
    app.listen(PORT, ()=> {
        let message = `${WELCOME_MESSAGE} http://localhost:${PORT}`
        console.log(message)
    })
}).catch(error => {
    console.error("Failed to start the server due to : ",error)
})




// module.exports = app