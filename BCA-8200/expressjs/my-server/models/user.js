import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        enum: ["Admin", "Teacher", "Students"]
    },
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
        default: "1234"
    },
},
    {
        timestamps: true
    },
)

const User = mongoose.model("User", userSchema);
export default User


// objectId _id