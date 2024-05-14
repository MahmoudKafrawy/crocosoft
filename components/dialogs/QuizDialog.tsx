"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuizzesStore, type TQuizzesStore } from "@/store/useQuizzesStore";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function AddQuizDialog() {
  const addQuiz = useQuizzesStore((state: TQuizzesStore) => state.addQuiz);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm({ shouldFocusError: true });
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus />
          <p>Add Quiz</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>New Quiz</DialogTitle>
        <Label htmlFor="title">Title</Label>
        <Input placeholder="Quiz Title" id="title" {...register("title", { required: true })} />
        <Label htmlFor="description">Description</Label>
        <Input placeholder="Description" id="description" {...register("description", { required: true })} />
        <Label htmlFor="youtubeLink">Youtube Link</Label>
        <Input placeholder="Youtube Link" id="youtubeLink" {...register("youtubeLink", { required: true })} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            onClick={handleSubmit((data) => {
              addQuiz(data);
              reset();
              setIsDialogOpen(false);
            })}
          >
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
