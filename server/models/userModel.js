import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    age: {
        type: Number,
        require: true,
    }
});

const User = model("user", userSchema);

export default User;