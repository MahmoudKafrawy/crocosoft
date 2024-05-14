import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AddNewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Question</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="pb-6">Add New Question</DialogTitle>
        <Label htmlFor="question">Question</Label>
        <Input placeholder="Question" id="question" />
        <div className="flex justify-between items-center">
          <Label>Answers</Label>
          <Button variant={"ghost"} className="bg-gray-400">
            + Add Answer
          </Button>
        </div>
        <Input placeholder="Question" id="question" />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
