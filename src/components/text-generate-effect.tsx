"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 3,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");
    useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ?? 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);
  

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-1">
        <div className=" dark:text-white text-black text-7xl leading-snug tracking-wide">
          {renderWords()}
              </div>
              <div className="text-md font-medium leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 max-w-xl min-h-xl">
              I build fast, user-friendly web apps with clean UI and efficient backend systems. Focused on solving real problems through code.
              </div>
              <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          <Link href="#about">About Me</Link>
          </button>
      </div>
    </div>
  );
};
