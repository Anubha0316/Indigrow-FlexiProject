const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    experience : {
        type : Number,
        required : true
    },
    goal : {
        type : String,
        required : true
    },
    risk : {
        type : String,
        required : true
    },
    capital : {
        type : Number,
        required : true
    },
    focus : {
        type : String,
        required : true
    },
    investement : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }
});

// mongoose.model(modelName, schema)
const Client = mongoose.model('client', UserSchema);
// User.createIndexes();    //we created indexes on email so that duplicate emails aaye to vo handle kr paaye but ye kaam hum ab auth m hi kr lenge
module.exports = Client;