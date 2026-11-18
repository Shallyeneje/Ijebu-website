"use client";

import Image from "next/image";
import { useState } from "react";

// ==========================================
// GALLERY DATA
// ==========================================

type GalleryCategory =
  | "All"
  | "Culture & Heritage"
  | "Community"
  | "Events"
  | "Places";

type GalleryImage = {
  id: number;
  image: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  aspectRatio: string;
};

const galleryCategories: GalleryCategory[] = [
  "All",
  "Culture & Heritage",
  "Community",
  "Events",
  "Places",
];

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    image: "/images/gallery/gallery-25.jpg",
    title: "Community cultural gathering",
    category: "Events",
    aspectRatio: "4 / 5",
  },
  {
    id: 2,
    image: "/images/gallery/gallery-02.png",
    title: "Community celebration",
    category: "Events",
    aspectRatio: "4 / 3",
  },
  {
    id: 3,
    image: "/images/gallery/gallery-03.png",
    title: "Cultural festival",
    category: "Events",
    aspectRatio: "4 / 3",
  },
  {
    id: 4,
    image: "/images/gallery/gallery-04.png",
    title: "Traditional celebration",
    category: "Events",
    aspectRatio: "4 / 5",
  },
  {
    id: 5,
    image: "/images/gallery/gallery-05.png",
    title: "Community procession",
    category: "Community",
    aspectRatio: "4 / 3",
  },
  {
    id: 6,
    image: "/images/gallery/gallery-06.png",
    title: "Community members",
    category: "Culture & Heritage",
    aspectRatio: "4 / 3",
  },
  {
    id: 7,
    image: "/images/gallery/gallery-07.jpg",
    title: "Community development",
    category: "Culture & Heritage",
    aspectRatio: "4 / 3",
  },
  {
    id: 8,
    image: "/images/gallery/gallery-08.jpg",
    title: "Cultural celebration",
    category: "Community",
    aspectRatio: "4 / 5",
  },
  {
    id: 9,
    image: "/images/gallery/gallery-09.jpg",
    title: "Community gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 10,
    image: "/images/gallery/gallery-10.png",
    title: "Traditional dance",
    category: "Community",
    aspectRatio: "4 / 3",
  },
  {
    id: 11,
    image: "/images/gallery/gallery-11.png",
    title: "Community celebration",
    category: "Community",
    aspectRatio: "4 / 3",
  },
  {
    id: 12,
    image: "/images/gallery/gallery-12.jpg",
    title: "Community market",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 13,
    image: "/images/gallery/gallery-13.jpg",
    title: "Community institution",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 14,
    image: "/images/gallery/gallery-14.jpg",
    title: "Community facility",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 15,
    image: "/images/gallery/gallery-15.jpg",
    title: "Community stadium",
    category: "Places",
    aspectRatio: "4 / 5",
  },
  {
    id: 16,
    image: "/images/gathering.jpg",
    title: "Community festival",
    category: "Culture & Heritage",
    aspectRatio: "4 / 5",
  },
  {
    id: 17,
    image: "/images/gallery/gallery-17.jpg",
    title: "Traditional celebration",
    category: "Culture & Heritage",
    aspectRatio: "4 / 3",
  },
  {
    id: 18,
    image: "/images/gallery/gallery-18.jpg",
    title: "Community gathering",
    category: "Community",
    aspectRatio: "4 / 3",
  },
  {
    id: 19,
    image: "/images/gallery/gallery-19.jpg",
    title: "Cultural celebration",
    category: "Culture & Heritage",
    aspectRatio: "4 / 3",
  },
  {
    id: 20,
    image: "/images/gallery/gallery-20.jpg",
    title: "Community members",
    category: "Community",
    aspectRatio: "4 / 3",
  },
  {
    id: 21,
    image: "/images/gallery/gallery-21.jpg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 22,
    image: "/images/gallery/gallery-22.jpg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 23,
    image: "/images/gallery/gallery-23.jpg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 24,
    image: "/images/gallery/gallery-24.jpg",
    title: "Traditional gathering",
    category: "Events",
    aspectRatio: "4 / 3",
  },
  {
    id: 26,
    image: "/images/gallery/gallery-26.jpg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 27,
    image: "/images/gallery/gallery-27.jpg",
    title: "Traditional gathering",
    category: "Events",
    aspectRatio: "4 / 3",
  },
  {
    id: 28,
    image: "/images/gallery/gallery-28.jpg",
    title: "Traditional gathering",
    category: "Events",
    aspectRatio: "4 / 3",
  },
  {
    id: 29,
    image: "/images/gallery/gallery-29.jpg",
    title: "Traditional gathering",
    category: "Events",
    aspectRatio: "4 / 3",
  },
  {
    id: 30,
    image: "/images/gallery/gallery-30.jpg",
    title: "Traditional gathering",
    category: "Events",
    aspectRatio: "4 / 3",
  },
   {
    id: 31,
    image: "/images/gallery/gallery-31 (1).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 32,
    image: "/images/gallery/gallery-31 (2).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 33,
    image: "/images/gallery/gallery-31 (3).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 34,
    image: "/images/gallery/gallery-31 (4).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 35,
    image: "/images/gallery/gallery-31 (5).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 36,
    image: "/images/gallery/gallery-31 (6).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 37,
    image: "/images/gallery/gallery-31 (7).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 38,
    image: "/images/gallery/gallery-31 (8).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 39,
    image: "/images/gallery/gallery-31 (9).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 40,
    image: "/images/gallery/gallery-31 (10).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 41,
    image: "/images/gallery/gallery-31 (11).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  {
    id: 42,
    image: "/images/gallery/gallery-31 (13).jpeg",
    title: "Traditional gathering",
    category: "Places",
    aspectRatio: "4 / 3",
  },
  
  
];

// ==========================================
// REUSABLE GALLERY TAB
// ==========================================

function GalleryTab({
  label,
  active,
  onClick,
}: {
  label: GalleryCategory;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 px-4 py-2 text-[11px] font-medium transition-colors sm:text-[12px] ${
        active
          ? "bg-[#FFB900] text-[#173B30]"
          : "bg-transparent text-[#555555] hover:bg-[#FFF3D8] hover:text-[#173B30]"
      }`}
    >
      {label}
    </button>
  );
}

// ==========================================
// GALLERY IMAGE CARD
// ==========================================

function GalleryCard({ item }: { item: GalleryImage }) {
  return (
    <article className="mb-2.5 rounded-2xl break-inside-avoid overflow-hidden bg-[#EAE7DF] sm:mb-3">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: item.aspectRatio }}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
          className="rounded-xl object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </article>
  );
}

// ==========================================
// MAIN GALLERY PAGE
// ==========================================

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-white px-4 py-12 sm:px-8 sm:py-16 md:py-20">
      <div className="mx-auto max-w-300">
        {/* SECTION INTRO */}
        <div className="border-y border-[#173B30]">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black">
            Explore our historical roots
          </span>
        </div>

        {/* PAGE HEADING */}
        <div className="mt-5 max-w-175">
          <h1 className="text-3xl font-medium tracking-tight text-[#202020] sm:text-4xl">
            The Places That Tell Our Story.
          </h1>

          <p className="mt-3 max-w-160 text-[14px] leading-6 text-[#555555] sm:text-base">
            Every landmark holds a story. Every historic place carries memories
            of the people, traditions and events that shaped our identity.
            Explore the heritage sites of Ijebuland and discover the history
            that connects generations of Ijebu descendants.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="mt-6 overflow-x-auto scrollbar-hide">
          <div
            className="flex w-max items-center gap-2"
            role="group"
            aria-label="Filter gallery by category"
          >
            {galleryCategories.map((category) => (
              <GalleryTab
                key={category}
                label={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="mt-6 columns-2 gap-2.5 sm:mt-8 sm:columns-3 sm:gap-3 lg:gap-4">
          {filteredImages.map((item) => (
            <GalleryCard key={item.image} item={item} />
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredImages.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-sm text-[#777777]">
              No photos available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
