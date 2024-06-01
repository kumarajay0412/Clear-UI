import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Marquee from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

const audioAdjectives = [
  "Distorted",
  "Noisy",
  "Unclear",
  "Tinny",
  "Garbled",
  "Echoing",
  "Static-filled",
  "Crackly",
  "Hollow",
  "Muffled",
  "Flat",
];

const MarqueeSingleLineHorizontal = () => {
  return (
    <div className="relative flex w-[1000px]    flex-col items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-20 md:shadow-xl">
      <Marquee vertical pauseOnHover className="[--duration:20s]">
        {audioAdjectives.map((data) => (
          <div key={data} className="text-black">
            {data}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-white m-[100px]">
        <div className=" text-xl py-[50px]">
          Infinite horizontal single scroll
        </div>

        <MarqueeSingleLineHorizontal />
      </div>
    </div>
  );
}
