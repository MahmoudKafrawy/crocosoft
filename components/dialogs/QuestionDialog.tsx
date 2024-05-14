"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TQuizzesStore, useQuizzesStore } from "@/store/useQuizzesStore";
import { Pencil, Plus, Square, SquareCheckBig, Trash2 } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export function QuestionDialog({ question, quizId }: { question?: any; quizId?: number }) {
  const isEditingMode = Boolean(question);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { control, register, reset, handleSubmit } = useForm({ defaultValues: question || {} });
  const { fields, append, remove, update } = useFieldArray({ control, name: "answers" });

  const addQuestion = useQuizzesStore((state: TQuizzesStore) => state.addQuestion);
  const updateQuestion = useQuizzesStore((state: TQuizzesStore) => state.updateQuestion);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {isEditingMode ? (
          <Button className="flex items-center gap-2" variant={"ghost"}>
            <Pencil />
            <p>Edit</p>
          </Button>
        ) : (
          <Button className="flex items-center gap-2">
            <Plus />
            <p>Add</p>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="pb-2">{isEditingMode ? `Edit Question ${question.text}` : "Add Question"}</DialogTitle>
        <Label htmlFor="question">Question</Label>
        <Input placeholder="Question" id="question" {...register("text")} />
        <div className="py-2">
          <div className="flex justify-between items-center w-full pb-2">
            <Label>Answers</Label>
            <Button variant={"ghost"} className="bg-gray-50" onClick={() => append({ is_true: false, text: "" })}>
              + Add Answer
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            {fields.map((field: any, index) => (
              <div key={field.id} className="flex gap-2">
                <Input placeholder="Question" {...register(`answers[${index}].text`)} />
                <Button variant={"ghost"} onClick={() => update(index, { ...field, is_true: !field.is_true })}>
                  {field.is_true ? <SquareCheckBig color="#00cc4e" /> : <Square color="#000000" />}
                </Button>
                <Button onClick={() => remove(index)} variant={"ghost"}>
                  <Trash2 color="#ff0000" />
                </Button>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            onClick={handleSubmit((data) => {
              if (isEditingMode) {
                updateQuestion(data, quizId, question.id);
              }
              if (!isEditingMode) {
                addQuestion(data, quizId);
              }
              reset();
              setIsDialogOpen(false);
            })}
          >
            {isEditingMode ? "Edit" : "Add"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
