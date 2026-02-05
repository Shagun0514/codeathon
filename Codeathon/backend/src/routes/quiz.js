const router = require("express").Router();
const quizController = require("../controller/quizController");
const auth = require("../middleware/auth");

router.post("/submit/:quizId", auth, quizController.submitQuiz);

module.exports = router;
