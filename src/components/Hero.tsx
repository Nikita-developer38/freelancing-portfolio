// "use client";
// import { cn } from "@/lib/utils";
// import { motion, AnimatePresence } from "motion/react";
// import React, { useRef, useState, useEffect } from "react";

// export const BackgroundBeamsWithCollision = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const parentRef = useRef<HTMLDivElement | null>(null);

//   const beams = [
//     { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
//     { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
//     { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
//     { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
//     { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
//     { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
//     { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
//   ];

//   return (
//     <div
//       ref={parentRef}
//       className={cn(
//         "h-96 md:h-[40rem] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-start overflow-hidden",
//         className
//       )}
//     >
//       {beams.map((beam) => (
//         <CollisionMechanism
//           key={beam.initialX + "beam-idx"}
//           beamOptions={beam}
//           containerRef={containerRef}
//           parentRef={parentRef}
//         />
//       ))}

//       {children}

//       <div
//   ref={containerRef}
//   className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none shadow-custom-beam"
// />
//     </div>
//   );
// };

// const CollisionMechanism = React.forwardRef<
//   HTMLDivElement,
//   {
//     containerRef: React.RefObject<HTMLDivElement | null>;
//     parentRef: React.RefObject<HTMLDivElement | null>;
//     beamOptions?: {
//       initialX?: number;
//       translateX?: number;
//       initialY?: number;
//       translateY?: number;
//       rotate?: number;
//       className?: string;
//       duration?: number;
//       delay?: number;
//       repeatDelay?: number;
//     };
//   }
// >(({ parentRef, containerRef, beamOptions = {} }) => {
//   const beamRef = useRef<HTMLDivElement | null>(null);
//   const [collision, setCollision] = useState<{
//     detected: boolean;
//     coordinates: { x: number; y: number } | null;
//   }>({
//     detected: false,
//     coordinates: null,
//   });

//   const [beamKey, setBeamKey] = useState(0);
//   const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

//   useEffect(() => {
//     const checkCollision = () => {
//       if (
//         beamRef.current &&
//         containerRef.current &&
//         parentRef.current &&
//         !cycleCollisionDetected
//       ) {
//         const beamRect = beamRef.current.getBoundingClientRect();
//         const containerRect = containerRef.current.getBoundingClientRect();
//         const parentRect = parentRef.current.getBoundingClientRect();

//         if (beamRect.bottom >= containerRect.top) {
//           const relativeX =
//             beamRect.left - parentRect.left + beamRect.width / 2;
//           const relativeY = beamRect.bottom - parentRect.top;

//           setCollision({
//             detected: true,
//             coordinates: {
//               x: relativeX,
//               y: relativeY,
//             },
//           });
//           setCycleCollisionDetected(true);
//         }
//       }
//     };

//     const animationInterval = setInterval(checkCollision, 50);
//     return () => clearInterval(animationInterval);
//   }, [cycleCollisionDetected, containerRef, parentRef]);

//   useEffect(() => {
//     if (collision.detected && collision.coordinates) {
//       setTimeout(() => {
//         setCollision({ detected: false, coordinates: null });
//         setCycleCollisionDetected(false);
//       }, 2000);

//       setTimeout(() => {
//         setBeamKey((prevKey) => prevKey + 1);
//       }, 2000);
//     }
//   }, [collision]);

//   return (
//     <>
//       <motion.div
//         key={beamKey}
//         ref={beamRef}
//         animate="animate"
//         initial={{
//           translateY: beamOptions.initialY || "-200px",
//           translateX: beamOptions.initialX || "0px",
//           rotate: beamOptions.rotate || 0,
//         }}
//         variants={{
//           animate: {
//             translateY: beamOptions.translateY || "1800px",
//             translateX: beamOptions.translateX || "0px",
//             rotate: beamOptions.rotate || 0,
//           },
//         }}
//         transition={{
//           duration: beamOptions.duration || 8,
//           repeat: Infinity,
//           repeatType: "loop",
//           ease: "linear",
//           delay: beamOptions.delay || 0,
//           repeatDelay: beamOptions.repeatDelay || 0,
//         }}
//         className={cn(
//           "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
//           beamOptions.className
//         )}
//       />
//       <AnimatePresence>
//         {collision.detected && collision.coordinates && (
//           <Explosion
//             key={`${collision.coordinates.x}-${collision.coordinates.y}`}
//             className=""
//             style={{
//               left: `${collision.coordinates.x}px`,
//               top: `${collision.coordinates.y}px`,
//               transform: "translate(-50%, -50%)",
//             }}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// });

// CollisionMechanism.displayName = "CollisionMechanism";

// const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
//   const spans = Array.from({ length: 20 }, (_, index) => ({
//     id: index,
//     initialX: 0,
//     initialY: 0,
//     directionX: Math.floor(Math.random() * 80 - 40),
//     directionY: Math.floor(Math.random() * -50 - 10),
//   }));

//   return (
//     <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
//       />
//       {spans.map((span) => (
//         <motion.span
//           key={span.id}
//           initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
//           animate={{
//             x: span.directionX,
//             y: span.directionY,
//             opacity: 0,
//           }}
//           transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
//           className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
//         />
//       ))}
//     </div>
//   );
// };

"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const parentRef = useRef<HTMLDivElement | null>(null);

  const beams = [
    { initialXPercent: 5, duration: 7, repeatDelay: 3, delay: 2 },
    { initialXPercent: 30, duration: 3, repeatDelay: 3, delay: 4 },
    { initialXPercent: 10, duration: 7, repeatDelay: 7, className: "h-6" },
    { initialXPercent: 25, duration: 5, repeatDelay: 14, delay: 4 },
    { initialXPercent: 55, duration: 11, repeatDelay: 2, className: "h-20" },
    { initialXPercent: 70, duration: 4, repeatDelay: 2, className: "h-12" },
    {
      initialXPercent: 85,
      duration: 6,
      repeatDelay: 4,
      delay: 2,
      className: "h-6",
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-start overflow-hidden",
        className
      )}
    >
      {beams.map((beam, index) => (
        <CollisionMechanism
          key={`beam-${index}`}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}

      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 dark:bg-neutral-900 w-full inset-x-0 pointer-events-none shadow-custom-beam"
      />
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement | null>;
    parentRef: React.RefObject<HTMLDivElement | null>;
    beamOptions?: {
      initialXPercent?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }) => {
  const beamRef = useRef<HTMLDivElement | null>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({ detected: false, coordinates: null });

  const [beamKey, setBeamKey] = useState(0);
  const [beamX, setBeamX] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    if (parentRef.current && beamOptions.initialXPercent != null) {
      const parentWidth = parentRef.current.offsetWidth;
      setBeamX((beamOptions.initialXPercent / 100) * parentWidth);
    }
  }, [parentRef.current, beamOptions.initialXPercent]);

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: { x: relativeX, y: relativeY },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);
    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
        setBeamKey((prevKey) => prevKey + 1);
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        initial={{
          translateY: beamOptions.initialY || -200,
          translateX: beamX,
          rotate: beamOptions.rotate || 0,
        }}
        animate={{
          translateY: beamOptions.translateY || 1800,
          translateX: beamX,
          rotate: beamOptions.rotate || 0,
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});
CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({ ...props }: React.HTMLProps<HTMLDivElement>) => {
  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"
      />
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{ x: span.directionX, y: span.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"
        />
      ))}
    </div>
  );
};
