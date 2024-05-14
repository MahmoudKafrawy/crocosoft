"use client";
import { QuestionDialog } from "@/components/dialogs/QuestionDialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IQuiz } from "@/interfaces/quiz";
import { useBoundStore } from "@/store/useBoundStore";
import { TQuizzesStore, useQuizzesStore } from "@/store/useQuizzesStore";
import Link from "next/link";

export default function Page({ params: { quizId } }: { params: { quizId: string } }) {
  const hasHydrated = useBoundStore((state) => state._hasHydrated);
  const quizzes: IQuiz[] = useQuizzesStore((state: TQuizzesStore) => state.quizzes);
  const quiz = quizzes.filter((q) => q.id === Number(quizId))[0];

  if (!hasHydrated) {
    return <main className="container py-16">Loading...</main>;
  }
  if (!quiz) {
    return (
      <main className="container py-16">
        <p className="pb-5">Quiz not found</p>
        <Link href={"/"} className="underline">
          Back to home
        </Link>
      </main>
    );
  }

  return (
    <div className="container py-16">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Quizzes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{quiz.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between w-full py-3">
        <h1 className="text-3xl font-medium">{quiz.title}</h1>
        <QuestionDialog quizId={Number(quizId)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {quiz.questions_answers?.map(({ text, answers }, index) => (
          <Card key={index}>
            <CardHeader className="flex-row justify-between items-center">
              <CardTitle>{text}</CardTitle>
              <Button variant={"ghost"} asChild>
                <QuestionDialog question={{ index, text, answers }} quizId={Number(quizId)} />
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {answers.map(({ text, is_true }, index) => (
                <div
                  key={index}
                  className={`border ${
                    is_true ? "bg-green-100 border-green-700" : "bg-blue-100  border-blue-700"
                  } px-2 py-1 rounded-md `}
                >
                  {text}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
