
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsComplete(true);
      return;
    }

    const first = setTimeout(() => {
      setActiveImage(1);
    }, 2500);

    const second = setTimeout(() => {
      setActiveImage(2);
    }, 5000);

    const third = setTimeout(() => {
      setIsExiting(true);
    }, 7500);

    const finish = setTimeout(() => {
      setIsComplete(true);
    }, 7800);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
      clearTimeout(third);
      clearTimeout(finish);
    };
  }, []);

  return (
    <>
      {children}

      {!isComplete && (
        <div
          className={`fixed inset-0 z-9999 overflow-hidden bg-black transition-opacity duration-700 ease-in-out ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeImage === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
