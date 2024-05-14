import { quizzes } from "@/data/questions";
import { IQuiz } from "@/interfaces/quiz";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type QuizzesStore = {
  quizzes: IQuiz[];
  addQuiz: (quiz: IQuiz) => void;
};

export const useQuizzesStore = create<any>(
  persist(
    (set, get) => ({
      quizzes: quizzes,
      addQuiz: (quiz: IQuiz) =>
        set((state: QuizzesStore) => ({
          quizzes: [...state.quizzes, { ...quiz, id: state.quizzes.length + 1 }],
        })),
    }),
    {
      name: "quizzes-store",
    }
  )
);
