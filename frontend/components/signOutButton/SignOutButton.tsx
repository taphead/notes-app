"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
export default function SignOutButton() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center my-4">
    <Button
      onClick={async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        router.push("/");
      }}
      className="text-2xl w-[150px] h-[50px]"
    >
      Sign Out
    </Button></div>
  );
}
