import mongoose, { SchemaTypes } from "mongoose";
const { Schema, Schematypes, model } = mongoose;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: "Musiscian"
    }
}, {timestamps: true});

const Album = model('Album', schema);

export default Album;