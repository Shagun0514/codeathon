const QuizModel = require("../Models/quizModel");
const QuizAttemptModel = require("../Models/quizAttemptModel");

exports.submitQuiz = async ({ userId, quizId, answers, idempotencyKey }) => {
  // 1. Idempotency check
  const existing = await QuizAttemptModel.findByIdempotencyKey(idempotencyKey);
  if (existing) return existing;

  // 2. Fetch quiz
  const quiz = await QuizModel.getQuizById(quizId);

  // 3. Scoring
  let score = 0;
  quiz.questions.forEach((q, i) => {
    if (answers[i] === q.correctAnswer) score++;
  });

  // 4. Atomic insert (DB enforces uniqueness)
  return QuizAttemptModel.createAttempt({
    userId,
    quizId,
    answers,
    score,
    idempotencyKey
  });
};
