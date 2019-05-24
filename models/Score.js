const Joi = require('joi');
const mongoose = require('mongoose');

const Score = mongoose.model('Score', new mongoose.Schema({
    score: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 255,
    },
    UserId: {
        type: String,
        required: true,
    },
    Week: {
        type: Number,
        required: true,
    }
}));

function validateScore(score) {
    const schema = {
        score: Joi.number().min(1).max(255).required(),
        UserId: Joi.string().required(),
        Week: Joi.number().required(),
    };
    return Joi.validate(score, schema);

}

exports.Score = Score;
exports.validateScore = validateScore;