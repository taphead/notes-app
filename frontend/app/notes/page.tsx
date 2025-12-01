import { cookies } from "next/headers";

export default async function Notes() {

  const token = (await cookies()).get("token")?.value
  const res = await fetch(`http://localhost:5000/api/notes`, {
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!res.ok) {
    return <div>Failed to load notes</div>;
  }

  const notes = await res.json();
  console.log("NOTES: ", notes)

  return (
    <div>
      <ul>
        {notes.map((note: any) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
      NOTES
    </div>
  );
}

{
  /* <button
  onClick={async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
  }}
>
  Sign Out
</button>; */
}
