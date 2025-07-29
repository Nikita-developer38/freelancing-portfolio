// "use client";
// import { IconArrowNarrowRight } from "@tabler/icons-react";
// import Image from "next/image";
// import { useState, useRef, useId, useEffect } from "react";

// // Types
// interface SlideData {
//   title: string;
//   button: string;
//   src: string;
//   href: string;
//   description?: string;
// }

// interface SlideProps {
//   slide: SlideData;
//   index: number;
//   current: number;
//   handleSlideClick: (index: number) => void;
// }

// interface CarouselControlProps {
//   type: "previous" | "next";
//   title: string;
//   handleClick: () => void;
//   disabled?: boolean;
// }

// // Constants
// const MOBILE_BREAKPOINT = 768; // px
// const TABLET_BREAKPOINT = 1024; // px

// // Components
// const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
//   const slideRef = useRef<HTMLLIElement>(null);
//   const xRef = useRef(0);
//   const yRef = useRef(0);
//   const frameRef = useRef<number>(0);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);

//   useEffect(() => {
//     const checkViewport = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < MOBILE_BREAKPOINT);
//       setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
//     };

//     checkViewport();
//     window.addEventListener("resize", checkViewport);
//     return () => window.removeEventListener("resize", checkViewport);
//   }, []);

//   useEffect(() => {
//     const animate = () => {
//       if (!slideRef.current) return;
//       const x = xRef.current;
//       const y = yRef.current;

//       slideRef.current.style.setProperty("--x", `${x}px`);
//       slideRef.current.style.setProperty("--y", `${y}px`);
//       frameRef.current = requestAnimationFrame(animate);
//     };

//     frameRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(frameRef.current);
//   }, []);

//   const handleMouseMove = (event: React.MouseEvent) => {
//     if (isMobile || isTablet) return;
//     const el = slideRef.current;
//     if (!el) return;

//     const r = el.getBoundingClientRect();
//     xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
//     yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
//   };

//   const handleMouseLeave = () => {
//     xRef.current = 0;
//     yRef.current = 0;
//   };

//   const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
//     event.currentTarget.style.opacity = "1";
//   };

//   const { src, button, title, href, description } = slide;

//   return (
//     <div className="[perspective:1200px] [transform-style:preserve-3d] overflow-hidden px-2">
//       <li
//         ref={slideRef}
//         className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-full h-full mx-auto"
//         onClick={() => handleSlideClick(index)}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{
//           transform:
//             current !== index && !isMobile
//               ? "scale(0.95) rotateX(5deg)"
//               : "scale(1) rotateX(0deg)",
//           transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//           transformOrigin: "bottom",
//         }}
//       >
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1D1F2F] to-[#2A2C40] rounded-xl overflow-hidden transition-all duration-150 ease-out shadow-lg"
//           style={{
//             transform:
//               current === index && !isMobile && !isTablet
//                 ? "translate3d(calc(var(--x) / 20), calc(var(--y) / 20), 0)"
//                 : "none",
//             boxShadow:
//               current === index
//                 ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
//                 : "0 10px 15px -5px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <Image
//             className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
//             style={{
//               opacity: current === index ? 1 : 0.7,
//               filter: current === index ? "none" : "brightness(0.8)",
//             }}
//             width={800}
//             height={600}
//             alt={title}
//             src={src}
//             onLoad={imageLoaded}
//             loading={index === current ? "eager" : "lazy"}
//             decoding="async"
//             priority={index === current}
//             sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
//           />
//           <div
//             className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-1000 ${
//               current === index ? "opacity-100" : "opacity-70"
//             }`}
//           />
//         </div>

//         <article
//           className={`relative p-6 md:p-8 transition-all duration-700 ease-in-out ${
//             current === index
//               ? "opacity-100 visible translate-y-0"
//               : "opacity-0 invisible translate-y-4"
//           }`}
//         >
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">
//             {title}
//           </h2>
//           {description && (
//             <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 max-w-md mx-auto drop-shadow-sm">
//               {description}
//             </p>
//           )}
//           <div className="flex justify-center">
//             <a
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-4 px-6 py-3 w-fit mx-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//             >
//               {button}
//               <IconArrowNarrowRight size={20} />
//             </a>
//           </div>
//         </article>
//       </li>
//     </div>
//   );
// };

// const CarouselControl = ({
//   type,
//   title,
//   handleClick,
//   disabled = false,
// }: CarouselControlProps) => {
//   return (
//     <button
//       className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-white/20 transition-all duration-200 ${
//         type === "previous" ? "rotate-180" : ""
//       } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
//       title={title}
//       onClick={handleClick}
//       aria-label={title}
//       disabled={disabled}
//     >
//       <IconArrowNarrowRight className="text-white" size={24} />
//     </button>
//   );
// };

// // Main Carousel Component
// export function Carousel({ slides }: { slides: SlideData[] }) {
//   const [current, setCurrent] = useState(1);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const id = useId();
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   useEffect(() => {
//     const checkViewport = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < MOBILE_BREAKPOINT);
//       setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
//     };

//     checkViewport();
//     window.addEventListener("resize", checkViewport);
//     return () => window.removeEventListener("resize", checkViewport);
//   }, []);

//   const handlePreviousClick = () => {
//     const previous = current - 1;
//     setCurrent(previous < 0 ? slides.length - 1 : previous);
//   };

//   const handleNextClick = () => {
//     const next = current + 1;
//     setCurrent(next === slides.length ? 0 : next);
//   };

//   const handleSlideClick = (index: number) => {
//     if (current !== index) {
//       setCurrent(index);
//     }
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const threshold = 50;
//     const difference = touchStartX.current - touchEndX.current;

//     if (difference > threshold) {
//       // Swipe left
//       handleNextClick();
//     } else if (difference < -threshold) {
//       // Swipe right
//       handlePreviousClick();
//     }
//   };

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
//           Our <span className="text-purple-600">Projects</span>
//         </h2>

//         <div className="relative w-full">
//           <div
//             className="relative w-full overflow-hidden"
//             aria-labelledby={`carousel-heading-${id}`}
//             onTouchStart={handleTouchStart}
//             onTouchEnd={handleTouchEnd}
//           >
//             <ul
//               className="flex transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]"
//               style={{
//                 transform:
//                   isMobile || isTablet
//                     ? `translateX(calc(-${current * 100}% - ${current * 2}rem))`
//                     : `translateX(calc(-${current * (100 / slides.length)}% - ${
//                         current * 4
//                       }rem))`,
//                 width:
//                   isMobile || isTablet
//                     ? `calc(${slides.length * 100}% + ${slides.length * 2}rem)`
//                     : `calc(${
//                         slides.length * (100 / Math.min(slides.length, 3))
//                       }% + ${slides.length * 4}rem)`,
//                 gap: isMobile || isTablet ? "2rem" : "4rem",
//               }}
//             >
//               {slides.map((slide, index) => (
//                 <Slide
//                   key={index}
//                   slide={slide}
//                   index={index}
//                   current={current}
//                   handleSlideClick={handleSlideClick}
//                 />
//               ))}
//             </ul>
//           </div>

//           <div className="flex justify-center items-center mt-12 gap-4">
//             <CarouselControl
//               type="previous"
//               title="Go to previous slide"
//               handleClick={handlePreviousClick}
//             />
//             <div className="flex gap-2 mx-4">
//               {slides.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrent(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     current === index
//                       ? "bg-purple-600 w-6 scale-125"
//                       : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//             <CarouselControl
//               type="next"
//               title="Go to next slide"
//               handleClick={handleNextClick}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { useState, useRef, useId, useEffect } from "react";

// Types
interface SlideData {
  title: string;
  button: string;
  src: string;
  href: string;
  description?: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
  isMobile: boolean;
  slideWidth: string;
}

interface CarouselControlProps {
  type: "previous" | "next";
  title: string;
  handleClick: () => void;
  disabled?: boolean;
}

// Constants
const MOBILE_BREAKPOINT = 768; // px
const TABLET_BREAKPOINT = 1024; // px

// Components
const Slide = ({
  slide,
  index,
  current,
  handleSlideClick,
  isMobile,
  slideWidth,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (isMobile || isTablet) return;
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, button, title, href, description } = slide;

  return (
    <li
      ref={slideRef}
      className="flex flex-shrink-0 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out h-full"
      onClick={() => handleSlideClick(index)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: slideWidth,
        transform:
          current !== index && !isMobile
            ? "scale(0.95) rotateX(5deg)"
            : "scale(1) rotateX(0deg)",
        transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        transformOrigin: "bottom",
        marginRight: isMobile ? "1rem" : "2rem",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1D1F2F] to-[#2A2C40] rounded-xl overflow-hidden transition-all duration-150 ease-out shadow-lg"
        style={{
          transform:
            current === index && !isMobile && !isTablet
              ? "translate3d(calc(var(--x) / 20), calc(var(--y) / 20), 0)"
              : "none",
          boxShadow:
            current === index
              ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              : "0 10px 15px -5px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Image
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-600 ease-in-out"
          style={{
            opacity: current === index ? 1 : 0.7,
            filter: current === index ? "none" : "brightness(0.8)",
          }}
          width={800}
          height={600}
          alt={title}
          src={src}
          onLoad={imageLoaded}
          loading={index === current ? "eager" : "lazy"}
          decoding="async"
          priority={index === current}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-all duration-1000 ${
            current === index ? "opacity-100" : "opacity-70"
          }`}
        />
      </div>

      <article
        className={`relative p-6 md:p-8 transition-all duration-700 ease-in-out ${
          current === index
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-4"
        }`}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 drop-shadow-md">
          {title}
        </h2>
        {description && (
          <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6 max-w-md mx-auto drop-shadow-sm">
            {description}
          </p>
        )}
        <div className="flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 w-fit mx-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            {button}
            <IconArrowNarrowRight size={20} />
          </a>
        </div>
      </article>
    </li>
  );
};

const CarouselControl = ({
  type,
  title,
  handleClick,
  disabled = false,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 hover:bg-white/20 transition-all duration-200 ${
        type === "previous" ? "rotate-180" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:scale-110"}`}
      title={title}
      onClick={handleClick}
      aria-label={title}
      disabled={disabled}
    >
      <IconArrowNarrowRight className="text-white" size={24} />
    </button>
  );
};

// Main Carousel Component
export function Carousel({ slides }: { slides: SlideData[] }) {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const id = useId();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setIsTablet(width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const threshold = 50;
    const difference = touchStartX.current - touchEndX.current;

    if (difference > threshold) {
      // Swipe left
      handleNextClick();
    } else if (difference < -threshold) {
      // Swipe right
      handlePreviousClick();
    }
  };

  // Calculate slide width based on viewport
  const getSlideWidth = () => {
    if (!containerRef.current) return "100%";
    const containerWidth = containerRef.current.offsetWidth;

    if (isMobile) {
      return `${containerWidth - 32}px`; // Account for padding
    }
    if (isTablet) {
      return `${containerWidth / 2 - 32}px`; // 2 slides visible
    }
    return `${containerWidth / Math.min(slides.length, 2) - 32}px`; // 3 slides max
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Our <span className="text-purple-600">Projects</span>
        </h2>

        <div className="relative w-full" ref={containerRef}>
          <div
            className="relative w-full overflow-hidden"
            aria-labelledby={`carousel-heading-${id}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <ul
              ref={sliderRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] h-full"
              style={{
                transform: `translateX(calc(-${current} * (${getSlideWidth()} + ${
                  isMobile ? "1rem" : "2rem"
                })))`,
              }}
            >
              {slides.map((slide, index) => (
                <Slide
                  key={index}
                  slide={slide}
                  index={index}
                  current={current}
                  handleSlideClick={handleSlideClick}
                  isMobile={isMobile}
                  slideWidth={getSlideWidth()}
                />
              ))}
            </ul>
          </div>

          <div className="flex justify-center items-center mt-12 gap-4">
            <CarouselControl
              type="previous"
              title="Go to previous slide"
              handleClick={handlePreviousClick}
            />
            <div className="flex gap-2 mx-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-purple-600 w-6 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselControl
              type="next"
              title="Go to next slide"
              handleClick={handleNextClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
