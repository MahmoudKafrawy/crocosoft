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
import { quizzes } from "@/data/questions";

export default function Page({ params: { quizId } }: { params: { quizId: string } }) {
  const quiz = quizzes.filter((q) => q.id === Number(quizId))[0] || null;

  if (!quiz) {
    return <main className="container py-16">Quiz not found</main>;
  }
  return (
    <main className="container py-16">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Quizzes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Quiz {quizId}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <header className="flex justify-between w-full py-3">
        <h1 className="text-3xl font-medium">Quiz {quizId}</h1>
        <QuestionDialog />
      </header>
      {quiz.questions_answers.map(({ answers, text, id }) => (
        <Card key={id}>
          <CardHeader className="flex-row justify-between items-center">
            <CardTitle>
              {/* assume id can be displayed as question number */}
              {id} . {text}
            </CardTitle>
            <Button variant={"ghost"} asChild>
              <QuestionDialog question={{ id, text, answers }} />
            </Button>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            {answers.map(({ text, id }) => (
              <div key={id} className="bg-blue-100 border border-blue-700 px-2 py-1 rounded-md">
                {text}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </main>
  );
}
