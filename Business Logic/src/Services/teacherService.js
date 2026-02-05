const QuizModel = require("../Models/quizModel");

exports.createQuiz = async (quizData, teacherId) => {
  return QuizModel.createQuiz({
    title: quizData.title,
    questions: quizData.questions,
    createdBy: teacherId
  });
};

exports.deleteQuiz = async (quizId, teacherId) => {
  return QuizModel.deleteQuiz(quizId, teacherId);
};
