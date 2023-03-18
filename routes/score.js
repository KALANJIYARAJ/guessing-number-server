const { createScore, getScores } = require("../controllers/scoreController");
const router = require("express").Router();

router.post("/create/", createScore);
router.get("/get/", getScores);
module.exports = router;
