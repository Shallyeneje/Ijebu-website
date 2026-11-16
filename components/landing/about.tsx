
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#F4EBDD] px-5 py-12 sm:px-8 md:px-10 md:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-300 grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">

        {/* LEFT COLUMN */}
        <div className="flex flex-col">

          {/* Section label */}
          <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-[#343434]">
            Who we are
          </span>

          {/* Main heading */}
          <h2 className="mt-3 text-[30px] font-normal leading-[1.08] tracking-[-0.8px] text-[#353535] sm:text-[34px] lg:text-[38px]">
            <span className="text-[#5D5D5D]"> One Heritage.</span>
            <span className="text-[#323232] block">  One People.</span>
            <span className="text-black block">  One Community.</span>
            
          </h2>

          {/* Heritage image */}
          <div className="relative rounded-2xl mt-5 aspect-[1.2/1] w-full overflow-hidden">
            <Image
              src="/images/aboutImage.png"
              alt="A historic Ijebu heritage landmark"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col pt-0 md:pt-10">

          <h3 className="max-w-120 text-[18px] font-medium leading-[1.35] text-[#292929] sm:text-2xl">
            Rooted in Ijebuland. Connected Across Generations.
          </h3>

          <div className="mt-3 space-y-3 text-[14px] leading-[1.55] text-[#373737] sm:text-[16px] sm:leading-[1.6]">

            <p>
              Ijebu Descendants UK & Ireland is a community built around a
              shared heritage, identity and sense of belonging. We bring
              together people of Ijebu descent across the United Kingdom and
              Ireland, creating a place where our roots remain strong, our
              relationships grow and our culture continues to thrive.
            </p>

            <p>
              Our purpose goes beyond bringing people together. We are
              committed to preserving and promoting Ijebu history, language,
              traditions and cultural identity, ensuring that younger
              generations understand where they come from and remain
              connected to the heritage that shapes who we are.
            </p>

            <p>
              We believe that a strong community is one that looks after its
              people. Through member welfare, family support, youth
              development, educational opportunities and professional
              networking, we aim to create an environment where individuals
              and families can connect, learn, contribute and succeed.
            </p>

            <p>
              We also recognise our responsibility to the wider Ijebu
              community and our homeland. By encouraging partnerships,
              supporting meaningful community initiatives and creating
              opportunities for collective contribution, we hope to
              strengthen the relationship between Ijebu descendants in the
              diaspora and the communities of Ijebuland.
            </p>

            <p>
              United by our roots, strengthened by our people, and working
              together to build a lasting legacy for generations to come.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
