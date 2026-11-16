import Image from "next/image";

const highlights = [
  {
    title: "History & Identity",
    description:
      "Celebrate the Ijebu variety of Yoruba, its distinctive expressions, pronunciation, oral traditions and stories passed down through generations.",
    image: "/images/heritage1.jpg",
  },
  {
    title: "Language & Expression",
    description:
      "Celebrate the Ijebu variety of Yoruba, its distinctive expressions, pronunciation, oral traditions and stories passed down through generations.",
    image: "/images/heritage2.jpg",
  },
  {
    title: "Festivals & Traditions",
    description:
      "Explore cultural celebrations, traditional institutions, Agẹmọ traditions and the famous Ojude Ọba festival.",
    image: "/images/heritage3.jpg",
  },
];

export default function HeritageHighlights() {
  return (
    <section id="heritage" className="bg-[#F5F3EA] px-5 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-300">
        <div className="border-y border-[#173B30]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-black">
            Our roots, our identity, our legacy.
          </span>
        </div>
        <div className="mt-5 max-w-142.5">
          <h2 className="text-3xl font-medium sm:text-4xl">
            <span className="text-[#4A4A4A] block font-normal text-2xl sm:text-3xl">
              A heritage that lives.
            </span>
            Through Generations.
          </h2>
        </div>

        <p className="mt-3 max-w-150 text-sm sm:text-base leading-6 text-[#555]">
          Ijebu heritage is a story of history, identity, enterprise, tradition
          and community. Rooted in Ijebuland in present-day Ogun State, our
          culture carries generations of knowledge, customs and values that
          continue to shape who we are.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl overflow-hidden bg-[#163F33] p-2"
            >
              <div className="relative aspect-[1.15/1] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105 rounded-2xl"
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
