import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
      <div className="flex flex-col justify-center items-center gap-2 h-screen">
        <Link href="/login">
          <Button className="w-[150px] h-[50px] text-2xl">Login</Button>
        </Link>
        <Link href="/register">
          <Button className="w-[150px] h-[50px] text-2xl">Register</Button>
        </Link>
      </div>
  );
}
