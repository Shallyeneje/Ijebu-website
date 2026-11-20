
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const images = [
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
];

interface IntroAnimationProps {
  children: React.ReactNode;
}

export default function IntroAnimation({
  children,
}: IntroAnimationProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setIsComplete(true);
      return;
    }

    const first = setTimeout(() => {
      setActiveImage(1);
    }, 2500);

    const second = setTimeout(() => {
      setActiveImage(2);
    }, 5000);

    const finish = setTimeout(() => {
      setIsComplete(true);
    }, 7800);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearTimeout(finish);
    };
  }, [shouldReduceMotion]);

  return (
    <>
      {children}

      <AnimatePresence>
        {!isComplete && (
          <motion.div
            key="intro-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-9999 overflow-hidden bg-black"
            aria-hidden="true"
          >
            <AnimatePresence mode="sync">
              <motion.div
                key={images[activeImage]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeImage]}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="
                    object-cover
                    object-[center_20%]
                    sm:object-top
                  "
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
