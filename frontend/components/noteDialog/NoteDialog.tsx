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
import { useState } from "react";

export default function NoteDialog({ open, onClose, onSaved, token }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) {
        const error = await res.text();
        console.error("Failed to create note:", error);
        alert("Failed to create note. Check console for details.");
        return;
      }

      const data = await res.json();
      console.log("Note created:", data);

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
