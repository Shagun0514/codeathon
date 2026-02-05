const QuizModel = require("../Models/quizModel");
const QuizAttemptModel = require("../Models/quizAttemptModel");
exports.submitQuiz = async ({ userId, quizId, answers, idempotencyKey }) => {
  
  const existing = await QuizAttemptModel.findByIdempotencyKey(idempotencyKey);
  if (existing) return existing;
  const quiz = await QuizModel.getQuizById(quizId);
  let score = 0;
  quiz.questions.forEach((q, i) => {
    if (answers[i] === q.correctAnswer) score++;
  });
  return QuizAttemptModel.createAttempt({
    userId,
    quizId,
    answers,
    score,
    idempotencyKey
  });
};
