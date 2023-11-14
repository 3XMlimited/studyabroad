import HomePage from "@/components/HomePage";
import { Inter } from "next/font/google";
import { FacebookPixelEvents } from "../components/pixel-events";
// import FACEBOOK_PIXEL_1 from "../components/pixel-1";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black flex-1 flex min-h-screen h-full w-full justify-center items-center">
      <HomePage />
      {/* <FACEBOOK_PIXEL_1 /> */}
    </div>
  );
}
