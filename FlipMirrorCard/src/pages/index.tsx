import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import Card from "@/component/Card";
export default function Home() {
  const [flippedCards, setFlippedCards] = useState<string[]>([]);

  const cards = [
    {
      title: "Amazon ",
      founded: "1994",
      about:
        "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence. It is one of the Big Five companies in the U.S. information technology industry, along with Google, Apple, Microsoft, and Facebook.",
    },
    {
      title: "Google",
      founded: "1998",
      about:
        "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware. ",
    },
    {
      title: "Microsoft",
      founded: "1975",
      about:
        "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers.",
    },
    {
      title: "Apple",
      founded: "1976",
      about:
        "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Five companies in the U.S. information technology industry, along with Amazon, Google, and Facebook.",
    },
    {
      title: "Facebook",
      founded: "2004",
      about:
        "Facebook is a for-profit corporation and online social networking service based in Menlo Park, California, United States. The Facebook website was launched on February 4, 2004, by <NAME>, along with fellow Harvard College students and roommates, <NAME>, <NAME>, <NAME>, and <NAME>.",
    },
    {
      title: "Twitter",
      founded: "2006",
      about:
        'Twitter, Inc. is an American microblogging and social networking service on which users post and interact with messages known as "tweets". It was created in March 2006 ',
    },
  ];

  return (
    <div className="h-screen w-screen  bg-gray-100  z-[1] flex flex-col justify-center items-start  md:items-center overflow-scroll">
      <div className=" w-fit h-fit grid grid-cols-1  md:grid-cols-3 gap-1 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            founded={card.founded}
            about={card.about}
            index={index}
            flippedCards={flippedCards}
            setFlippedCards={setFlippedCards}
          />
        ))}
      </div>
      <a
        className="text-blue-600  text-lg font-bold  md:text-2xl  md:font-extrabold cursor-pointer mt-4"
        href="https://github.com/kumarajay0412/UI-Components/tree/main/FlipMirrorCard"
        target="_blank"
      >
        Source Code{" "}
      </a>
    </div>
  );
}
