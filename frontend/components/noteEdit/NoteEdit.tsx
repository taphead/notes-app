"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function NoteEditDelete() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Image
        src="/images/notes/edit_button.svg"
        width={25}
        height={25}
        alt="edit note"
        className="cursor-pointer"
      />
    </>
  );
}
