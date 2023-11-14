import HomePage from "@/components/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black flex-1 flex min-h-screen h-full w-full justify-center items-center">
      <HomePage />
    </div>
  );
}
