"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";

export default function NoteDialog({
  note,
  open,
  onClose,
  onSaved,
  token,
}: any) {
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  // When editing twice in succession, the title and content values appear empty
  // Bc component only initializes the title and content state once when the component first mounts. 
  // When you open the dialog again, the useState hooks don't re-initialize with the new note prop values.
  useEffect(() => {
    setTitle(note?.title || "");
    setContent(note?.content || "")
  }, [note])

  const handleSave = async () => {
    try {
      const res = await fetch(
        note
          ? `http://localhost:5000/api/notes/${note.id}`
          : "http://localhost:5000/api/notes",
        {
          method: note ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, content }),
        }
      );

      if (!res.ok) {
        const error = await res.text();
        console.error("Failed to create note:", error);
        alert("Failed to create note. Check console for details.");
        return;
      }

      setTitle("");
      setContent("");
      onClose();
      onSaved();
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Error creating note. Check console for details.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Note</DialogTitle>
        </DialogHeader>

        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogContent>
    </Dialog>
  );
}
