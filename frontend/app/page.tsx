import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center gap-2">
      <Link href="/login">Login</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}
