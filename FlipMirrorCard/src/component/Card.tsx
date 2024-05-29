import React, { useState, useEffect } from "react";

type CardProps = {
  title: string;
  founded: string;
  about: string;
  index: number;
  flippedCards: string[];
  setFlippedCards: React.Dispatch<React.SetStateAction<string[]>>;
};

const Card: React.FC<CardProps> = ({
  title,
  founded,
  about,
  index,
  flippedCards,
  setFlippedCards,
}) => {
  const [isFlipping, setIsFlipping] = useState(false);

  const flipped = flippedCards.includes(title);

  useEffect(() => {
    if (!flipped) return;
    setIsFlipping(true);
    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [flipped]);

  const handleClick = () => {
    setIsFlipping(!isFlipping);
    if (!flipped) {
      setFlippedCards([...flippedCards, title]);
    } else {
      setFlippedCards(flippedCards.filter((card) => card !== title));
    }
  };

  const [translateX, translateY, rotate] = (() => {
    switch (index) {
      case 0:
        return ["1rem", "1rem", "4deg"];
      case 1:
        return ["0", "1rem", "2deg"];
      case 2:
        return ["-1rem", "1rem", "2deg"];
      case 3:
        return ["1rem", "-1rem", "1deg"];
      case 4:
        return ["1rem", "-1rem", "4deg"];
      case 5:
        return ["0", "-1rem", "2deg"];
      case 6:
        return ["-1rem", "1rem", "2deg"];
      default:
        return ["1rem", "1rem", "4deg"];
    }
  })();

  return (
    <div
      className="relative w-fit h-fit"
      style={{
        transform: `translateX(${translateX}) translateY(${translateY}) rotate(${rotate})`,
        zIndex: isFlipping ? 10 : 0,
        perspective: "10000px",
      }}
      onClick={handleClick}
    >
      <div
        className={`card hover:scale-[1.05]  shadow-2xl h-[334px]  w-[256px]  text-black  text-center backface-hidden tran  ${
          flipped ? "animate-flip  rotate180Y" : ""
        } relative cursor-pointer rounded-lg text-center transition-all`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="p-4 rounded-xl cursor-pointe  border-gray-550 bg-gray-200 border-[2px] absolute w-full h-full backface-hidden flex items-center justify-center shadow-xl">
          <h4 className="text-balance">{title}</h4>
        </div>
        <div
          className="p-4 rounded-xl cursor-pointe  border-gray-550 bg-gray-200 border-[2px] absolute w-full h-full backface-hidden flex flex-col items-center justify-center overflow-hidden gap-2 shadow-xl"
          style={{
            transform: "rotateY(180deg)",
          }}
        >
          <h4 className="text-balance text-sm text-slate-500">{title}</h4>
          <p className="text-lg font-semibold leading-tight ">
            Founded : {founded}
          </p>
          <p className="text-[12px] text-slate-500 text-center">{about}</p>

          {flipped && (
            <div className="absolute w-24 h-[600px] bg-white rotate-45	 top-[300%] animate-mirror " />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
