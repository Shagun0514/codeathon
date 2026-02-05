const router = require("express").Router();
const controller = require("../controller/teacherController");
const auth = require("../middleware/auth");

router.post("/quiz", auth, controller.createQuiz);
router.put("/quiz/:quizId", auth, controller.updateQuiz);
router.delete("/quiz/:quizId", auth, controller.deleteQuiz);

module.exports = router;
