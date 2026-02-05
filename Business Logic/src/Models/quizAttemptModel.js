const supabase = require("../config/supabase");

class QuizAttemptModel {
  static async findByIdempotencyKey(idempotencyKey) {
    const { data } = await supabase
      .from("quiz_attempts")
      .select("*")
      .eq("idempotency_key", idempotencyKey)
      .single();

    return data;
  }

  static async createAttempt({
    userId,
    quizId,
    answers,
    score,
    idempotencyKey
  }) {
    const { data, error } = await supabase
      .from("quiz_attempts")
      .insert({
        user_id: userId,
        quiz_id: quizId,
        answers,
        score,
        idempotency_key: idempotencyKey
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  }
}

module.exports = QuizAttemptModel;
