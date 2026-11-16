
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const people = [
  {
    name: "Otunba Giwa Oreagba",
    role: "Omooba Okunrin Akile Ijebu",
    image: "/images/leader1.jpg",
  },
  {
    name: "Iyalode Ebudola Funmilayo Orekoya",
    role: "Planning Committee Ijebu Summer day",
    image: "/images/leader2.jpg",
  },
  {
    name: "Mr Ayodeji Oluyemi",
    role: "Financial Secretary",
    image: "/images/leader3.png",
  },
  {
    name: "Add Name 4",
    role: "Add Role",
    image: "/images/leader4.jpg",
  },
  {
    name: "Add Name 5",
    role: "Add Role",
    image: "/images/leader5.jpg",
  },
  {
    name: "Add Name 6",
    role: "Add Role",
    image: "/images/leader6.jpg",
  },
  {
    name: "Add Name 7",
    role: "Add Role",
    image: "/images/leader7.jpg",
  },
  {
    name: "Add Name 8",
    role: "Add Role",
    image: "/images/leader8.png",
  },
  {
    name: "Add Name 9",
    role: "Add Role",
    image: "/images/leader9.png",
  },
  {
    name: "Add Name 10",
    role: "Add Role",
    image: "/images/leader10.png",
    portfolio: undefined,
  },
];

export default function LeadersSection() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) return;

    let animationFrame: number | null = null;
    let direction = -1;
    let position = 0;
    let maxDistance = 0;
    let previousTime = 0;
    let hasStarted = false;
    let isVisible = false;

    // Animation speed in pixels per second
    const speed = 30;

    const updateDistance = () => {
      maxDistance = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth
      );

      position = Math.min(position, maxDistance);

      track.style.transform = `translate3d(${-position}px, 0, 0)`;
    };

    const animate = (time: number) => {
      if (!isVisible) return;

      if (!previousTime) previousTime = time;

      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      if (maxDistance > 0) {
        position += direction * speed * delta;

        // Reached the left end
        if (position <= 0) {
          position = 0;
          direction = 1;
        }

        // Reached the right end
        if (position >= maxDistance) {
          position = maxDistance;
          direction = -1;
        }

        track.style.transform = `translate3d(${-position}px, 0, 0)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;

        if (isVisible) {
          updateDistance();

          // Begin at the right end so the first movement is leftward
          if (!hasStarted) {
            position = maxDistance;
            direction = -1;
            hasStarted = true;

            track.style.transform = `translate3d(${-position}px, 0, 0)`;
          }

          if (animationFrame === null) {
            previousTime = 0;
            animationFrame = requestAnimationFrame(animate);
          }
        } else if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
          previousTime = 0;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(viewport);

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(viewport);

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section className="bg-white px-5 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-300">

        {/* SECTION HEADER */}
        <div className="border-y border-[#173B30] py-2">
          <span className="text-[12px] font-medium uppercase tracking-wide text-black">
            The people behind our community
          </span>
        </div>

        <h2 className="mt-5 text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl">
          Meet the People. United by Purpose.
        </h2>

        {/* AUTOMATIC PEOPLE ANIMATION */}
        <div
          ref={viewportRef}
          className="mt-6 w-full overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex w-full gap-4 will-change-transform"
          >
            {people.map((person) => {
              const card = (
                <article className="h-full overflow-hidden bg-[#163F33] p-2">
                  <div className="relative aspect-[0.88/1] overflow-hidden bg-[#E9E9E9]">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <div className="px-1 pt-3 text-white">
                    <p className="text-[14px] font-normal text-white/60">
                      {person.role}
                    </p>

                    <h3 className="mt-1 text-lg font-medium">
                      {person.name}
                    </h3>
                  </div>
                </article>
              );

              const cardWidth =
                "block min-w-0 shrink-0 basis-full sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)]";

              return person.portfolio ? (
                <a
                  key={person.name}
                  href={person.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardWidth}
                >
                  {card}
                </a>
              ) : (
                <div key={person.name} className={cardWidth}>
                  {card}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
