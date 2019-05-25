const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const {Score} = require('../models/Score');

//createScore
router.post('/', async (req, res) => {
   const date1 = new Date('5/13/2019');
   const date2 = new Date(Date.now());
   const diffTime = Math.abs(date2.getTime() - date1.getTime());
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   const acctualweek = Math.ceil(diffDays/7)

   const check = await Score.find({userLogin:req.body.userLogin,week:acctualweek})
   if(check.length>0){
      const oldScore = check[0].score
      const newScore = req.body.score
      if(newScore>=oldScore){
         const score = await Score.findOneAndUpdate({userLogin:req.body.userLogin},{score:newScore})
         res.send(score)
      }
   } else {
      const score = new Score({
         score: req.body.score,
         userLogin: req.body.userLogin,
         week: acctualweek,
      })
      const result = await score.save();
      res.send(result);
   }
})

//getAllScores
router.get('/', async (req,res) => {
   const scores = await Score.find({})
   res.send(scores)
})

//getScoresByweek
router.get('/week/', async (req,res) => {
   const date1 = new Date('5/13/2019');
   const date2 = new Date(Date.now());
   const diffTime = Math.abs(date2.getTime() - date1.getTime());
   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
   const acctualweek = Math.ceil(diffDays/7)
   const scores = await Score.find({week:acctualweek})
   res.send(scores)
})

//getScoresByUser
router.get('/user/:user', async (req,res) => {
   const scores = await Score.find({userLogin:req.params.user})
   res.send(scores)
})

module.exports = router;