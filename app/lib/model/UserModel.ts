import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a username"],
    },
    email: {
        type: String,
        required: [true, "Please provide a email"],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, "Please provide a phone number"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    verifyToken: String,
    verifyTokenExpiry: Date,
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
    if(this.isModified('password')){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
    next();
})
    
const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;  