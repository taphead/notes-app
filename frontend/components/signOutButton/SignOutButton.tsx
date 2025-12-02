"use client";
import { useRouter } from "next/navigation";
export default function SignOutButton() {
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
      }}
    >
      Sign Out
    </button>
  );
}
