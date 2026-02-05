const supabase = require("../config/supabase");

class QuizModel {
  static async createQuiz({ title, questions, createdBy }) {
    const { data, error } = await supabase
      .from("quizzes")
      .insert({
        title,
        questions,
        created_by: createdBy
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  static async getQuizById(quizId) {
    const { data, error } = await supabase
      .from("quizzes")
      .select("*")
      .eq("id", quizId)
      .single();

    if (error) throw error;
    return data;
  }

  static async deleteQuiz(quizId, teacherId) {
    const { error } = await supabase
      .from("quizzes")
      .delete()
      .eq("id", quizId)
      .eq("created_by", teacherId);

    if (error) throw error;
    return true;
  }
}

module.exports = QuizModel;
