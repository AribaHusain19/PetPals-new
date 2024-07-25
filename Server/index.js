//importing the modules
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const path= require('path');
const morgan= require('morgan');
require('dotenv').config();
const serverless = require('serverless-http');
//defining our routes to make our index.js aware aboute the category routes.
const categoryRoutes = require('./routes/category');
const petRoutes = require('./routes/pet');
const adoptionRoutes = require('./routes/adoption');
//const { BACKEND_URI } = require('./client/src/utils/constants');
//creating an instance of the application,it will be used to set up routes and middleware
const app=express();


const PORT = process.env.PORT || 4000;
const BACKEND_URI = process.env.BACKEND_URI || 'http://localhost:4000';
console.log('Backend URL:', BACKEND_URI);
// Middleware to parse JSON bodies
app.use(express.json());

app.use(morgan('tiny'));

// Middleware to enable CORS.CORS allows your application to handle requests from different origins, which is particularly useful for APIs that are accessed from a web client hosted on a different domain.
app.use(cors());


//app.use(express.static(path.join(__dirname, 'client/build')));

//routes
app.use('/api/category', categoryRoutes);
app.use('/api/pets',petRoutes);
app.use('/api/adoption',adoptionRoutes);

app.use('/public',express.static(path.join(__dirname,'public')));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
 
//To use mongodb with express, you'll need the mongoose package to connect to the MongoDB database.
const mongourl= process.env.MONGO_URI ||'mongodb+srv://ariba:ariba@cluster0.u8thuxs.mongodb.net/PetPalsDatabase?retryWrites=true&w=majority&appName=Cluster0';



    
//starting the server
app.listen(PORT,() =>{
    console.log(`App is listening on port ${PORT}`);
})


//Connects to the MongoDB database using Mongoose.
mongoose.connect(mongourl).then(()=>{
    console.log("connected to mongoDB")
}).catch((err) => {
    console.log("Error in connecting to mongoDB");
})

/*mongoose.connection.on('connected',()=>{
    console.log("connected to mongoDB");
})

mongoose.connection.on('error',(err) =>{
    console.log("Error in connecting to mongoDb",err);
})*/
module.exports=app;
module.exports.handler=serverless(app);
