"use client";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export function AddQuizDialog() {
  const { register } = useForm({});

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus />
          <p>Add Quiz</p>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>New Quiz</DialogTitle>
        <Label htmlFor="title">Title</Label>
        <Input placeholder="Quiz Title" id="title" {...register("title")} />
        <Label htmlFor="description">Description</Label>
        <Input placeholder="Description" id="description" {...register("description")} />
        <Label htmlFor="youtubeLink">Youtube Link</Label>
        <Input placeholder="Youtube Link" id="youtubeLink" {...register("description")} />
        <DialogFooter>
          <DialogClose>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
