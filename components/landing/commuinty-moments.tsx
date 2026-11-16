
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  MapPin,
} from "lucide-react";

const moments = [
  {
    period: "January – March",
    category: "Community & Connection",
    image: "/images/gallery/gallery-18.jpg",
    activities: [
      "New Year gathering",
      "Membership drive",
      "Business networking",
    ],
  },
  {
    period: "April – June",
    category: "Growth & Empowerment",
    image: "/images/gallery/gallery-07.jpg",
    activities: [
      "Youth empowerment",
      "Education programmes",
      "Welfare outreach",
    ],
  },
  {
    period: "July – September",
    category: "Culture & Heritage",
    image: "/images/gallery/gallery-03.png",
    activities: [
      "Cultural celebration",
      "Ijebu heritage programme",
    ],
  },
  {
    period: "October – December",
    category: "Community Impact",
    image: "/images/gallery/gallery-13.jpg",
    activities: [
      "Charity outreach",
      "Family celebration",
      "Annual review",
    ],
  },
];

export default function CommunityMoments() {
  return (
    <section className="bg-[#F5F3EA] px-5 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-300">

        {/* SECTION INTRO */}
        <div className="border-y border-[#173B30]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black">
            Our roots, our identity, our legacy.
          </span>
        </div>

        <div className="mt-5 max-w-142.5">
          <h2 className="text-3xl font-medium sm:text-4xl">
            <span className="block text-2xl font-normal text-[#4A4A4A] sm:text-3xl">
              Moments That Bring Our
            </span>
            Community Together.
          </h2>
        </div>

        <p className="mt-3 max-w-150 text-sm leading-6 text-black sm:text-base">
          Our gatherings are at the heart of our community. From celebrating
          our rich Ijebu heritage to creating meaningful friendships, sharing
          opportunities and supporting one another, every gathering brings us
          closer.
        </p>

        {/* SEE ALL EVENTS */}
        <div className="mx-2 mt-6 flex justify-start">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#222222] transition-colors hover:text-[#C18B00]"
          >
            See all events
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFB900]">
              <ArrowUpRight size={14} className="text-[#163F33]" />
            </span>
          </Link>
        </div>

        {/* QUARTERLY MOMENTS */}
        <div className="mt-4 overflow-x-auto pb-3 scrollbar-hide">
          <div className="grid min-w-190 grid-cols-4 gap-3">
            {moments.map((moment) => (
              <article
                key={moment.period}
                className="bg-[#FAFAFA] p-3 rounded-2xl"
              >
                <Link href="/gallery" className="group block">
                  <div className="rounded-2xl relative aspect-[1.6/1] w-full overflow-hidden bg-[#D9D9D9]">
                    <Image
                      src={moment.image}
                      alt={moment.category}
                      fill
                      sizes="(max-width: 768px) 190px, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-2xl"
                    />
                  </div>
                </Link>

                {/* DATE AND CATEGORY */}
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-[14px] font-medium text-[#202020]">
                    {moment.period}
                  </h3>

                  <span className="bg-[#FFF3D8] px-2 py-1 text-[12px] font-normal text-[#79591D]">
                    {moment.category}
                  </span>
                </div>

                {/* ACTIVITIES */}
                <ul className="mt-2 list-disc space-y-1 pl-3 text-[12px] leading-[1.4] text-[#333333]">
                  {moment.activities.map((activity) => (
                    <li key={activity}>{activity}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* UPCOMING EVENTS FEATURE */}
        <div className="mt-12 md:mt-16">

          {/* FEATURE HEADER */}
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#222222]">
              Upcoming Events
            </span>

            <Link
              href="/events"
              className="text-[11px] text-[#666666] transition-colors hover:text-[#C18B00]"
            >
              Event listings
            </Link>
          </div>

          {/* FEATURE IMAGE */}
          <Link href="/events" className="group block">
            <div className="relative aspect-16/8.5 w-full overflow-hidden bg-[#D9D9D9] sm:aspect-16/8 md:aspect-16/7.5 rounded-2xl">
              <Image
                src="/images/gathering.jpg"
                alt="Ijebu cultural procession and community celebration"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* EVENT DETAILS */}
          <div className="mt-4">
            <h3 className="text-[16px] font-medium text-[#222222] sm:text-base">
              Our Next Community Gathering
            </h3>

            <p className="mt-2 text-[12px] leading-5 text-[#555555] sm:text-sm">
              Event announcements and registration details will appear here
              when confirmed.
            </p>

            {/* DATE AND VENUE */}
            <div className="mt-3 gap-2 text-[12px] text-[#444444]  sm:gap-6">

              <div className="flex items-center gap-2">
                <CalendarDays size={12} strokeWidth={1.7} />
                <span>Date: To be announced</span>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <MapPin size={12} strokeWidth={1.7} />
                <span>Venue: To be announced</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
