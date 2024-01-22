import mongoose from "mongoose";
const { Schema, Schematypes, model } = mongoose;

const schema = new Schema({
    first_name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 20,
        trim: true
    },
    art_name: {
        type: String,
        default: 'Unknown',
        minLength: 2,
        maxLength: 20,
        trim: true
    },
    age: Number,
}, timestamp);

const Musician = model('Musician', schema);

export default Musician;