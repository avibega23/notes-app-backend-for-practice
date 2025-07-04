const mongoose = require('mongoose');
const zod = require('zod');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,

    }
}, {timestamps:true});

module.exports = mongoose.model("Note",noteSchema)