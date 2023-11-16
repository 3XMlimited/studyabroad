"use client";
import React, { useEffect, useState } from "react";
import HomePage from "@/components/HomePage";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const pathname = usePathname();
  // if (pathname === "/studyabroad") {
  //   return (
  //     <div className="bg-black flex-1 flex min-h-screen h-full w-full justify-center items-center">
  //       <iframe
  //         src="https://m-studyabroad-3xm.vercel.app/studyabroad"
  //         frameborder="0"
  //         style={{
  //           height: "100%",
  //           width: "100%",
  //           top: "0px",
  //           left: "0px",
  //           right: "0px",
  //           bottom: "0px",
  //           position: "absolute",
  //         }}
  //       ></iframe>
  //     </div>
  //   );
  // } else {
  return (
    <div className="bg-black flex-1 flex min-h-screen h-full w-full justify-center items-center">
      <HomePage topic={"m/studyabroad"} />

      {/* <h1 className="text-[200px] text-red-500">{pathname?.split("/")[1]}</h1>
      <h1 className="text-[200px] text-red-500">{searchParams}</h1> */}
    </div>
  );
  // }
}
