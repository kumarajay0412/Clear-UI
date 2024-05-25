import { cn } from "@/lib/utils";

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
  const marqueeClass = cn(
    "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
    {
      "flex-row": !vertical,
      "flex-col": vertical,
      "skew-x-[30deg]": skew,
    },
    className
  );

  const itemClass = cn("flex shrink-0 justify-around [gap:var(--gap)]", {
    "animate-marquee flex-row": !vertical,
    "animate-marquee-vertical flex-col": vertical,
    "group-hover:[animation-play-state:paused]": pauseOnHover,
    "[animation-direction:reverse]": reverse,
  });

  return (
    <div {...props} className={marqueeClass}>
      {Array.from({ length: repeat }, (_, i) => (
        <div key={i} className={itemClass}>
          {children}
        </div>
      ))}
    </div>
  );
}
