const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref:'users'
    },
    img: {
        type: String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    text: {
        type: String,
        required:true  
    },
    imgs: {
      type:[String]  
    },
    date: {
        type: Date,
        default:Date.now
    },
})

module.exports = User = mongoose.model("users",UserSchema)