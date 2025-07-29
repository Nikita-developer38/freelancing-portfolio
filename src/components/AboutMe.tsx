// "use client";
// import { useEffect } from "react";
// import { motion, stagger, useAnimate } from "motion/react";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const GenerateEffect = ({
//   words,
//   className,
//   filter = true,
//   duration = 3,
// }: {
//   words: string;
//   className?: string;
//   filter?: boolean;
//   duration?: number;
// }) => {
//   const [scope, animate] = useAnimate();
//     const wordsArray = words.split(" ");
//     useEffect(() => {
//     animate(
//       "span",
//       {
//         opacity: 1,
//         filter: filter ? "blur(0px)" : "none",
//       },
//       {
//         duration: duration ?? 1,
//         delay: stagger(0.2),
//       }
//     );
//   }, [animate, duration, filter]);

//   const renderWords = () => {
//     return (
//       <motion.div ref={scope}>
//         {wordsArray.map((word, idx) => {
//           return (
//             <motion.span
//               key={word + idx}
//               className="dark:text-white text-black opacity-0"
//               style={{
//                 filter: filter ? "blur(10px)" : "none",
//               }}
//             >
//               {word}{" "}
//             </motion.span>
//           );
//         })}
//       </motion.div>
//     );
//   };

//   return (
//     <div id="about" className={cn("font-bold", className)}>
//           <div className="mt-1 flex flex-row">
//               <div>
//               <div className="text-md py-2 font-medium leading-relaxed tracking-wide text-gray-700 dark:text-gray-300 max-w-xl min-h-xl">
//               I&apos;m a freelance full-stack developer specializing in the MERN stack, Next.js, and Tailwind CSS. I build fast, responsive, and scalable web applications — from pixel-perfect UI to powerful backend. Whether it&apos;s a landing page or a complete platform, I turn ideas into live, production-ready websites.              </div>

//           <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">  <Link href="/Resume/Software_Developer_Nikita_Murmure.pdf" target="_blank">Download my Resume</Link></button>

//               </div>
//               <div className=" dark:text-white text-black text-7xl  text-center  leading-snug tracking-wide">
//           {renderWords()}
//               </div>
//       </div>
//     </div>
//   );
// };

"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const GenerateEffect = ({
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
    <div id="about" className={cn("font-bold w-full", className)}>
      <div className="flex flex-col-reverse sm:flex-col md:flex-row gap-2 md:gap-4">
        <div className="md:w-1/2">
          <div className="text-sm sm:text-md leading-relaxed tracking-wide text-gray-700 dark:text-gray-300">
            I&apos;m a freelance full-stack developer specializing in the MERN
            stack, Next.js, and Tailwind CSS. I build fast, responsive, and
            scalable web applications — from pixel-perfect UI to powerful
            backend. Whether it&apos;s a landing page or a complete platform, I
            turn ideas into live, production-ready websites.
          </div>

          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center mt-2"
          >
            <Link
              href="/Resume/Software_Developer_Nikita_Murmure.pdf"
              target="_blank"
            >
              Download my Resume
            </Link>
          </button>
        </div>

        <div className="md:w-1/2">
          <div className="dark:text-white text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    </div>
  );
};
