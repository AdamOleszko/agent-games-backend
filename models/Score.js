const mongoose = require('mongoose');
const Score = mongoose.model('Score', new mongoose.Schema({
    score: {
        type: Number
    },
    userLogin: {
        type: String
    },
    week: {
        type: Number
    }
}));

exports.Score = Score;