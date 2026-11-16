import Image from "next/image";

export default function GatheringSection() {
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
              Ojude Oba: A Tradition of
            </span>
            Gathering and Celebration.
          </h2>
        </div>

        <p className="mt-3 max-w-150 text-sm sm:text-base leading-6 text-[#555]">
          Ojude Ọba is an important annual cultural celebration in Ijebu-Ode,
          bringing together people, families and age-grade associations known as
          Regberegbe..
        </p>

        <div className="relative mt-6 aspect-16/8 w-full overflow-hidden">
          <Image
            src="/images/gathering.jpg"
            alt="Ijebu descendants celebrating together at a cultural gathering"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
