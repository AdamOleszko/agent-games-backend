const Joi = require('joi');
const mongoose = require('mongoose');

const Score = mongoose.model('Score', new mongoose.Schema({
    score: {
        type: Number,
        required: true,
    },
    userLogin: {
        type: String,
        required: true,
    },
    week: {
        type: Number,
        required: true,
    }
}));

function validateScore(score) {
    const schema = {
        score: Joi.number().required(),
        userLogin: Joi.string().required(),
        week: Joi.number().required(),
    };
    return Joi.validate(score, schema);

}

exports.Score = Score;
exports.validateScore = validateScore;