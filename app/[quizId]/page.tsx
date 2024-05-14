import { QuestionDialog } from "@/components/dialogs/QuestionDialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quizzes } from "@/data/questions";

export function Page() {
  return (
    <>
      <QuestionDialog />
      {quizzes[0].questions_answers.map(({ answers, text, id }) => (
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
    </>
  );
}
