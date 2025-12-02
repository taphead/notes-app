"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function NoteDeleteDialog({ note, open, onClose, onSaved, token }: any) {
    const noteId = note.id;
    const handleSave = async ()=> {
        const res = await fetch(`http://localhost:5000/api/notes/${noteId}`, {
            method: "DELETE",
            headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        })
        onClose()
        onSaved()
    }
  return (
  <Dialog open={open} onOpenChange={onClose}>
      
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure you want to delete this note?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            note.
          </DialogDescription>
        </DialogHeader>
        
        <DialogFooter className="flex justify-end space-x-2 pt-4"> 
          <Button onClick={onClose} variant="outline">No</Button>
          <Button onClick={handleSave}>Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
