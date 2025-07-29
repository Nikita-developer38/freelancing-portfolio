"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// GridLineVertical Component
const GridLineVertical = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute",
        "top-[calc(var(--offset,150px)/2*-1)]",
        "h-[calc(100%+var(--offset,150px))]",
        "w-[var(--width,1px)]",
        "bg-[linear-gradient(to_bottom,var(--color,rgba(0,0,0,0.2)),var(--color,rgba(0,0,0,0.2))_50%,transparent_0,transparent)]",
        "[background-size:var(--width,1px)_var(--height,5px)]",
        "[mask:linear-gradient(to_top,var(--background,#fff)_var(--fade-stop,90%),transparent),_linear-gradient(to_bottom,var(--background,#fff)_var(--fade-stop,90%),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark,rgba(255,255,255,0.2)),var(--color-dark,rgba(255,255,255,0.2))_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

// GridLineHorizontal Component
const GridLineHorizontal = ({
  className,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute",
        "left-[calc(var(--offset,200px)/2*-1)]",
        "h-[var(--height,1px)]",
        "w-[calc(100%+var(--offset,200px))]",
        "bg-[linear-gradient(to_right,var(--color,rgba(0,0,0,0.2)),var(--color,rgba(0,0,0,0.2))_50%,transparent_0,transparent)]",
        "[background-size:var(--width,5px)_var(--height,1px)]",
        "[mask:linear-gradient(to_left,var(--background,#fff)_var(--fade-stop,90%),transparent),_linear-gradient(to_right,var(--background,#fff)_var(--fade-stop,90%),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark,rgba(255,255,255,0.2)),var(--color-dark,rgba(255,255,255,0.2))_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

// Main Component
export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[600px] overflow-hidden rounded-2xl bg-white",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="shrink-0 scale-75 sm:scale-90 lg:scale-100">
          <div
            className={cn(
              " top-0 right-0 grid  grid-cols-4 gap-8 transform-3d",
              "[transform:rotateX(55deg)_rotateY(0deg)_rotateZ(-45deg)]"
            )}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                key={colIndex + "marquee"}
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-start gap-4"
              >
                <GridLineVertical className="-left-4" />
                {subarray.map((image, imageIndex) => (
                  <div key={imageIndex + image}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className=" rounded-lg object-cover ring ring-gray-950/5 hover:shadow-2xl"
                      width={300}
                      height={300}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
