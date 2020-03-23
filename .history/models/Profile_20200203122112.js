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
        
    }
    date: {
        type: Date,
        default:Date.now
    },
})

module.exports = User = mongoose.model("users",UserSchema)