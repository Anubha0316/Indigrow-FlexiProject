// File which contains code for connecting to database
const mongoose = require('mongoose');

const mongoURI= 'mongodb://127.0.0.1:27017/flexi'
mongoose.set('strictQuery', true);
const connectToMongo = async() =>{
    await mongoose.connect(mongoURI,()=>{
     console.log("Connected to Database Successfully");
    })
}

module.exports = connectToMongo; //now this function will be exported which has the code of connecting to database which in our case is mongodb