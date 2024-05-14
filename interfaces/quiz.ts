export interface IQuiz {
  created: string;
  description: string;
  id: number;
  modified: string;
  questions_answers: IQuestions[];
  score: null;
  title: string;
  url: string;
}

export interface IQuestions {
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
}
