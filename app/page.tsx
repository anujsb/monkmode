import { Hero } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-black-100">
      <Hero />
    </main>
  );
}