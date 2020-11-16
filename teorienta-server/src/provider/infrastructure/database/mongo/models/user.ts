import mongoose, { Schema } from 'mongoose'

// User Schema
export interface IUser extends mongoose.Document {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf:{
        type: String
    },
    cnpj:{
        type: String
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
    email: { type: String, required: true },
    username: { type: String, required: true },
    cnpj: { type: String},
    cpf: { type: String},
    password: { type: String, required: true },
    userType: { type: String, required: true },
    somethingElse: Number,
});

const User = mongoose.model<any>('User', UserSchema);

export default User