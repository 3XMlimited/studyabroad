"use client";
import React, { useEffect, useState } from "react";
import HomePage from "@/components/HomePage";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = ({ query }) => ({
  props: query,
});

export default function Home({ country }) {
  const pathname = usePathname();
  country = decodeURIComponent(country);
  // console.log("country", country);

  return (
    <div className="bg-black flex-1 flex min-h-screen h-full w-full justify-center items-center">
      <HomePage topic={pathname?.split("/")[1]} country={country} />
    </div>
  );
}
