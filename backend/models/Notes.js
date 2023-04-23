const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user : {
        //isliye kiya taaki notes ko users k saath link kr ske
        type :mongoose.SchemaTypes.ObjectId,
        // type : mongoose.Schema.Types.ObjectId, //foreign key ki tarah h 
        ref : 'user'
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    tag : {
        type : String,
        default : 'General'
    },
    date : {
        type : Date,
        default : Date.now
    }
});

// mongoose.model(modelName, schema)
module.exports = mongoose.model('notes', NotesSchema);