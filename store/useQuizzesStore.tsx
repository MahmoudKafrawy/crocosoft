import { quizzes } from "@/data/questions";
import { IQuestions, IQuiz } from "@/interfaces/quiz";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TQuizzesStore = {
  quizzes: IQuiz[];
  addQuiz: (quiz: IQuiz) => void;
  getQuiz: (id: number) => IQuiz;
  addQuestion: (question: IQuestions, quizId: number) => void;
  updateQuestion: (question: IQuiz, quizId: number, questionId: number) => void;
};

export const useQuizzesStore = create<any>(
  persist(
    (set, get) => ({
      quizzes: quizzes,
      addQuiz: (quiz: IQuiz) =>
        set((state: TQuizzesStore) => ({
          quizzes: [...state.quizzes, { ...quiz, id: state.quizzes.length + 1 }],
        })),
      getQuiz: (id: number) => get().quizzes.filter((q: IQuiz) => q.id === id)[0],
      getAllQuizzes: () => get().quizzes,
      addQuestion: (question: IQuestions, quizId: number) =>
        set((state: TQuizzesStore) => {
          return {
            quizzes: state.quizzes.map((q: IQuiz) => {
              if (q.id === quizId) {
                return { ...q, questions_answers: [...(q.questions_answers || []), question] };
              }
              return q;
            }),
          };
        }),
      updateQuestion: (question: IQuiz, quizId: number, questionId: number) =>
        set((state: TQuizzesStore) => {
          return {
            quizzes: state.quizzes.map((q: IQuiz) => {
              if (q.id === quizId) {
                return {
                  ...q,
                  questions_answers: [
                    ...q.questions_answers.map((q: IQuestions) => (q.id === questionId ? question : q)),
                  ],
                };
              }
              return q;
            }),
          };
        }),
    }),
    {
      name: "quizzes-store",
    }
  )
);
