const teacherService = require("../services/teacherService");

exports.createQuiz = async (req, res) => {
  const quiz = await teacherService.createQuiz(req.body, req.user.id);
  res.json(quiz);
};

exports.updateQuiz = async (req, res) => {
  const quiz = await teacherService.updateQuiz(
    req.params.quizId,
    req.body,
    req.user.id
  );
  res.json(quiz);
};

exports.deleteQuiz = async (req, res) => {
  await teacherService.deleteQuiz(req.params.quizId, req.user.id);
  res.json({ success: true });
};
