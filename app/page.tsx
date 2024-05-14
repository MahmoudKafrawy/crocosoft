import { QuizDialog } from "@/components/dialogs/QuizDialog";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/data/questions";

export default function Home() {
  return (
    <main className="space-y-4 container py-16">
      <header className="flex justify-between w-full">
        <h1 className="text-3xl font-medium">Quizzes</h1>
        <QuizDialog />
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {quizzes.map(({ title, description, id }) => (
          <Card key={id}>
            <CardHeader className="flex-row justify-between items-center">
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  );
}
