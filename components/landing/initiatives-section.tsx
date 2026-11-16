import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const initiatives = [
  {
    title: "Culture & Heritage",
    description:
      "Preserving Ijebu history, language, traditions and cultural identity through festivals, cultural gatherings, heritage education and intergenerational storytelling.",
    image: "/images/heritage1.jpg",
  },
  {
    title: "Community & Social Interaction",
    description:
      "Bringing members and families together through annual gatherings, family fun days, networking events, welcome programmes and activities that strengthen relationships.",
    image: "/images/initiative2.jpg",
  },
  {
    title: "History & Identity",
    description:
      "Building a community that cares through hardship assistance, bereavement support, emergency contributions and outreach to elderly and vulnerable members.",
    image: "/images/initiative3.png",
  },
];

export default function InitiativesSection() {
  return (
    <section className="bg-[#F5F3EA] px-5 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-300">
        <div className="border-y border-[#173B30]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black">
            A Featured Cultural Highlight
          </span>
        </div>
        <div className="mt-5 max-w-142.5">
          <h2 className="text-3xl font-medium sm:text-4xl">
            <span className="text-[#4A4A4A] block font-normal text-2xl sm:text-3xl">
              Turning Our Shared Purpose Into
            </span>
            Meaningful Action.
          </h2>
        </div>

        <p className="mt-3 max-w-150 text-sm sm:text-base leading-6 text-black">
          Our commitment to Ijebu heritage goes beyond celebrating where we come
          from. We are building a community where people support one another,
          opportunities are created, young people are empowered and our
          collective efforts make a lasting difference.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden bg-[#163F33] p-2"
            >
              <div className="relative aspect-[1.2/1] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="px-2 py-3 text-white">
                <h3 className="text-lg font-medium">{item.title}</h3>

                <p className="mt-2 text-sm leading-5 text-white/80">
                  {item.description}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
