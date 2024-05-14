import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { questions } from "@/data/questions";
import { AddNewDialog } from "@/dialogs/AddNewDialog";

export default function Home() {
  return (
    <main className="space-y-4 container py-16">
      <header className="flex justify-between w-full">
        <h1 className="text-3xl font-medium">Quiz App</h1>
        <AddNewDialog />
      </header>
      {questions.questions_answers.map(({ answers, text, id }) => (
        <Card key={id}>
          <CardHeader>
            <CardTitle>
              {/* assume id can be displayed as question number */}
              {id}.{text}
            </CardTitle>
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
