import mongoose, { Schema } from 'mongoose'

// User Schema
export interface IUser extends mongoose.Document {
    name: string;
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: Number,
        required: true
    }
};

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    somethingElse: Number,
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User