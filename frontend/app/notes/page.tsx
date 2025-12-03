import { cookies } from "next/headers";
import SignOutButton from "@/components/signOutButton/SignOutButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NoteCreate from "@/components/noteCreate/NoteCreate";
import NoteEdit from "@/components/noteEdit/NoteEdit";
import NoteDelete from "@/components/noteDelete/NoteDelete";

export default async function Notes() {

  const token: string | undefined = (await cookies()).get("token")?.value;
  const res = await fetch(`http://localhost:5000/api/notes`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    return (
      <>
        <div>Failed to load notes</div>
        <SignOutButton />
      </>
    );
  }

  const notes = await res.json();

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl my-4">Notes:</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {notes.map((note: any) => (
          <Card key={note.id} className="w-[250px] text-center">
            <CardHeader>
              <CardTitle className="truncate wrap-break-word">{note.title}</CardTitle>
            </CardHeader>
            <CardContent className="px-1">
              <p className="wrap-break-word">{note.content}</p>
            </CardContent>
            <CardFooter className="flex justify-center items-center gap-2">
            <NoteEdit note={note} token={token} />
            <NoteDelete note={note} token={token}/>
            </CardFooter>
          </Card>
        ))}
      </div>
    <NoteCreate token={token}/>
    <SignOutButton />
    </div>
  );
}
