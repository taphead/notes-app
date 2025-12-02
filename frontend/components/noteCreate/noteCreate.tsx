"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import NoteDialog from "../noteDialog/NoteDialog"
import { Button } from "../ui/button"

export default function NoteCreate({token}: {token: string | undefined}) {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    return (
      <div className="flex justify-center items-center my-4">
        <Button className="w-[150px] h-[50px] text-2xl cursor-pointer" onClick={() => setOpen(true)}>Create Note</Button>
        <NoteDialog open={open} onClose={() => setOpen(false)} onSaved={() => router.refresh()} token={token}/>
      </div>)
}