const Score = require("../models/scoreModel");

//createScore
module.exports.createScore = async (req, res) => {
  try {
    const { username, score } = req.body;
    const scoreVal = await Score.create({
      username: username,
      score: score,
    });

    if (scoreVal) return res.json({ msg: "score created successfully." });
    else return res.json({ msg: "Failed to score create to the database" });
  } catch (err) {
    console.log(err);
  }
};

//getTransaction
module.exports.getScores = async (req, res) => {
  try {
    const scoreVal = await Score.find().sort({
      score: -1,
    });
    res.json(scoreVal);
  } catch (err) {
    console.log(err);
  }
};
