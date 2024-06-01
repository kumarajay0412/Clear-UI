import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  skew?: boolean;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 5,
  skew = false,
  ...props
}: MarqueeProps) {
  const marqueeClass = `group flex overflow-hidden p-2 ${
    vertical ? "flex-col" : "flex-row"
  } ${skew ? "skew-x-[30deg]" : ""} ${className}`;
  const itemClass = `flex shrink-0 justify-around ${
    vertical ? "flex-col" : "flex-row"
  } ${reverse ? "reverse" : ""}`;

  const animationControls = useAnimation();

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      animationControls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      animationControls.start("animate");
    }
  };

  const marqueeVariants = {
    animate: {
      x: vertical ? 0 : ["0%", "-100%"],
      y: vertical ? ["0%", "-100%"] : 0,
      transition: {
        x: { duration: 20, repeat: Infinity, ease: "linear" },
        y: { duration: 20, repeat: Infinity, ease: "linear" },
      },
    },
  };

  useEffect(() => {
    animationControls.start("animate");
  }, [animationControls]);

  return (
    <div
      {...props}
      className={marqueeClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {Array.from({ length: repeat }, (_, i) => (
        <motion.div
          key={i}
          className={itemClass}
          animate={animationControls}
          variants={marqueeVariants}
        >
          {children}
        </motion.div>
      ))}
    </div>
  );
}
