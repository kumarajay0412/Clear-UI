import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Marquee from "@/components/Card";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const reviews = [
  {
    name: "Jack",
    body: "I'm at a loss for words. This is amazing. I love it and I'm speechless. ",
    img: "https://avatar.vercel.sh/jack",
    star: 5,
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
    star: 4,
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
    star: 4,
  },
  {
    name: "Ajay",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/ajay",
    star: 4.5,
  },
  {
    name: "Satwik",
    body: "This product changed how we handle our finances. I was able to see the whole picture and make better decisions. I highly recommend this product.",
    img: "https://avatar.vercel.sh/satwik",
    star: 5,
  },
  {
    name: "Bhaskar",
    body: "This product changed how we handle our finances. I was able to see the whole picture and make better decisions. I highly recommend this product.",
    img: "https://avatar.vercel.sh/bhaskar",
    star: 3,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
  star,
}: {
  img: string;
  name: string;
  body: string;
  star: number;
}) => {
  return (
    <figure
      className={cn(
        "relative h-[240px] w-[250px] cursor-pointer overflow-hidden rounded-xl border p-4 flex flex-col justify-between",
        "border-gray-550 bg-gray-200 hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl transition-all"
      )}
    >
      <blockquote className="mt-2 text-sm text-black/80">“{body}”</blockquote>
      <div className="flex flex-col gap-2">
        <Rating style={{ maxWidth: 100 }} value={star} readOnly />
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-black">
              {name}
            </figcaption>
          </div>
        </div>
      </div>
    </figure>
  );
};

const MarqueeDemoVertical = () => {
  return (
    <div className="relative flex h-[800px] w-fit   flex-row items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-20 md:shadow-xl">
      <Marquee vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee vertical className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-white dark:from-background"></div>
    </div>
  );
};

const MarqueeDemoHorizontal = () => {
  return (
    <div className="relative flex w-[1000px]    flex-col items-center justify-center overflow-hidden rounded-lg border bg-background sm:px-20 md:shadow-xl">
      <Marquee className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-white">
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
        <MarqueeDemoVertical />
      </div>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-white">
        <MarqueeDemoHorizontal />
      </div>
    </div>
  );
}
