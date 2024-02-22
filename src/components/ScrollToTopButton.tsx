"use client";

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTopButton = () => {
  const [windowY, setWindowY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setWindowY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="overflow-y-hidden">
      <AnimatePresence>
        {windowY > 400 && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.2}} exit={{opacity: 0}}>
            <FaArrowCircleUp
              className="fixed bottom-10 right-10 z-2 p-0.5 bg-white fill-button-color-3 hover:fill-button-color-2 cursor-pointer text-5xl rounded-full"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setWindowY(0);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTopButton;
// const ScrollToTopButton = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       window.scrollY > 400 ? setIsVisible(true) : setIsVisible(false);
//     };
//     window.addEventListener("scroll", toggleVisibility);

//     return () => {
//       window.removeEventListener("scroll", toggleVisibility);
//     };
//   }, []);

//   const scrollToTop = () => {
//     const c = document.documentElement.scrollTop || document.body.scrollTop;

//     if (c > 0) {
//       window.requestAnimationFrame(scrollToTop);
//       window.scrollTo(0, Math.max(c - c / 10, c * 0.9));
//     }
//   };

//   const handleTouchEnd = (event: React.TouchEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//     scrollToTop();
//   };

//   return (
//     <button
//       className={`fixed bottom-10 right-20 z-1000 rounded-full p-2 outline-none transition-opacity duration-200 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//       onClick={scrollToTop}
//       onTouchEnd={handleTouchEnd}
//     >
//       <FaArrowCircleUp size={50} />
//     </button>
//   );
// };

// export default ScrollToTopButton;
