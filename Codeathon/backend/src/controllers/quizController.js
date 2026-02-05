console.log("quizController loaded");

const quizService = require("../services/quizService");

exports.submitQuiz = async (req, res) => {
  try {
    const result = await quizService.submitQuiz({
      userId: req.user.id,
      quizId: req.params.quizId,
      answers: req.body.answers,
      idempotencyKey: req.headers["idempotency-key"]
    });
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
