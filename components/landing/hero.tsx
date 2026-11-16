
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const heroImages = [
  {
    src: "/images/hero-1.png",
    alt: "Ijebu descendants celebrating their heritage",
  },
  {
    src: "/images/hero-2.png",
    alt: "Ijebu cultural gathering",
  },
  {
    src: "/images/gathering.jpg",
    alt: "Ijebu cultural procession",
  },
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#163F33] py-10 md:pb-12 lg:py-10">
      <div className="mx-auto grid max-w-360 grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 md:min-h-117.5 md:grid-cols-2 md:gap-8 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-10 lg:py-4">

        {/* LEFT CONTENT */}
        <div className="order-2 flex flex-col items-start md:order-1">
          <h1 className="text-[38px] leading-[1.15] tracking-[-1.2px] sm:text-5xl lg:text-[52px]">
            <span className="block font-normal text-[#D1D1D1]">
              Our Heritage.
            </span>

            <span className="block font-medium text-[#E0E0E0]">
              Our People.
            </span>

            <span className="block font-semibold text-[#FFB910]">
              Our Future.
            </span>
          </h1>

          <p className="mt-4 max-w-117.5 text-[14px] leading-[1.6] text-white/90 sm:text-base">
            Bringing Ijebu descendants together across the United Kingdom and
            Ireland to preserve our rich cultural heritage, strengthen our
            community, and build a lasting legacy for generations to come.
          </p>

          <Link
            href="/membership"
            className="mt-5 inline-flex items-center gap-3 bg-[#FFB910] px-3 py-2 text-[14px] font-medium text-[#173D32] transition-all duration-300 hover:bg-white"
          >
            Become a member

            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size={13} />
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGE SLIDESHOW */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[1.05/1] w-full overflow-hidden border-[3px] border-[#087B5B] sm:aspect-[1.15/1] md:aspect-[0.95/1] lg:aspect-[1.05/1]">

            {heroImages.map((image, index) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 45vw"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  activeImage === index
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
                }`}
              />
            ))}

            {/* SLIDE INDICATORS */}
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
              {heroImages.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`View slide ${index + 1}`}
                  aria-pressed={activeImage === index}
                  onClick={() => setActiveImage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeImage === index
                      ? "w-6 bg-[#FFB910]"
                      : "w-2 bg-white/70 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
