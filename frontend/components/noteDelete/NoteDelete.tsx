"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NoteDeleteDialog from "../noteDeleteDialog/NoteDeleteDialog";

export default function NoteEditDelete({ note, token }: any) {
    const router = useRouter()
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        src="/images/notes/delete_button.svg"
        width={25}
        height={25}
        alt="delete note"
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      />
      <NoteDeleteDialog
        open={open}
        note={note}
        token={token}
        onClose={() => setOpen(false)}
        onSaved={()=> router.refresh()}
      />
    </>
  );
}
