const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name:{
        type : String,
        unique : true,
        required : [true,'Please add a name'],
        trim : true
    },
    HSN:{
        type : Number,
        unique : true,
        required : [true,'Please add a HSN'],
        trim : true
    },
    UQC : {
        type : String,
        enum :['kg','lb'],
        default : 'kg'
    },
    cap :{
        type : Number,
        required : [true,'Please add a cap'],
        trim : true
    }
})

module.exports = mongoose.model("Item",ItemSchema)