"use client";
import { AddQuizDialog } from "@/components/dialogs/QuizDialog";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { IQuiz } from "@/interfaces/quiz";
import { useBoundStore } from "@/store/useBoundStore";
import { TQuizzesStore, useQuizzesStore } from "@/store/useQuizzesStore";
import Link from "next/link";

export default function Home() {
  const hasHydrated = useBoundStore((state) => state._hasHydrated);
  const quizzes: IQuiz[] = useQuizzesStore((state: TQuizzesStore) => state.quizzes);

  return (
    <main className="space-y-4 container py-16">
      <header className="flex justify-between w-full">
        <h1 className="text-3xl font-medium">Quizzes</h1>
        {hasHydrated ? <AddQuizDialog /> : <Skeleton className="w-[125px] h-[40px] rounded-full" />}
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {!hasHydrated
          ? (Array.from({ length: 3 }) as any).map((_: any, index: number) => (
              <Card key={index}>
                <div className="p-6 flex flex-col">
                  <Skeleton className="w-[100px] h-[24px] rounded-full" />
                  <Skeleton className="w-[200px] h-[20px] rounded-full mt-2 mb-4" />
                  <Skeleton className="w-[100px] h-[40px] rounded-full self-end" />
                </div>
              </Card>
            ))
          : quizzes?.map(({ title, description, id }) => (
              <Card key={id}>
                <CardHeader>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-end">
                  <Link href={`/quiz/${id}`}>
                    <Button>Show Questions</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
      </section>
    </main>
  );
}
