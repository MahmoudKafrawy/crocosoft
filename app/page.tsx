import { AddQuizDialog } from "@/components/dialogs/QuizDialog";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/data/questions";
import Link from "next/link";

export default function Home() {
  return (
    <main className="space-y-4 container py-16">
      <header className="flex justify-between w-full">
        <h1 className="text-3xl font-medium">Quizzes</h1>
        <AddQuizDialog />
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizzes.map(({ title, description, id }) => (
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
