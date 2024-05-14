export interface IQuiz {
  created: string;
  description: string;
  id: number;
  modified: string;
  questions_answers: Array<{
    answer_id: null;
    answers: Array<{
      id: number;
      is_true: boolean;
      text: string;
    }>;
    feedback_false: string;
    feedback_true: string;
    id: number;
    text: string;
  }>;
  score: null;
  title: string;
  url: string;
}

export interface IQuizStore {
  quizzes: IQuiz[];
  clear: () => void;
}
