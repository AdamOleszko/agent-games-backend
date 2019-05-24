const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {
   Score,
   validateScore
} = require('../models/Score');


//createScore
router.post('/', async (req, res) => {
   const { error } = validateScore(req.body);
   if (error) return res.status (400).send(error.details[0].message);

   const score = new Score({
      score: req.body.score,
      UserId: req.body.UserId,
      Week: req.body.Week,
   })

   const result = await score.save();
   res.send(result);
})

module.exports = router;