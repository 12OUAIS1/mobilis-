const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    name: {
        type: String,
        unique: true,
    },
    lastname: {
        type: String,
        unique: true,
        required: true,
    },
    number: {
        type: Number,
        unique: true,
        required: true,
    },
    numberu: {
        type: String,
        unique: true,
        required: true,
    },
    offre: [{
        type: mongoose.Types.ObjectId,
        ref: "List",
    }],
    carte: [{
        type: mongoose.Types.ObjectId,
        ref: "Carte",
    }],
});

module.exports = mongoose.model("User", userSchema);

