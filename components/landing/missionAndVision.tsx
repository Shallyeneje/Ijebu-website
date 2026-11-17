import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-[#163F33] px-5 py-12 text-white sm:px-8 md:py-16">
      <div className="mx-auto max-w-300">
        {/* SECTION INTRO */}
        <div className="border-y border-[#FFB910]">
          <span className="text-[10px] uppercase tracking-[0.2em] text-white">
            Our roots, our identity, our legacy.
          </span>
        </div>

        <div className="mt-5 max-w-142.5">
          <h2 className="text-3xl font-medium sm:text-4xl">
            <span className="text-[#BFBFBF] block">A Shared Vision.</span>A
            Collective Mission.
          </h2>

          <p className="mt-4 text-[16px] leading-6 text-white">
            Our heritage connects us. Our purpose moves us forward. Together, we
            are building a stronger, more united Ijebu community across
            generations and borders
          </p>

          <Link
            href="https://chat.whatsapp.com/Lqvu67mq9QA21cQZ6MUczj"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-[#FFB900] px-2 py-1 text-[14px] font-medium text-[#163F33] transition-colors hover:bg-white"
          >
            Join Our Community
            <span className="flex size-4.5 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size={10} aria-hidden="true" />
            </span>
          </Link>
        </div>

        {/* MISSION */}
        <div className="mt-12 grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[1.35/1] overflow-hidden rounded-2xl">
            <Image
              src="/images/mission11.png"
              alt="Ijebu descendants celebrating their culture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col md:px-4 max-w-lg">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-px flex-1 bg-[#B28B28]" />
              <span className="text-xl uppercase tracking-[0.15em] white">
                Our Mission
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-[#B28B28]" />
            </div>

            <h3 className="mt-4 text-xl font-normal">
              Bringing Our Community Together, Moving Our Community Forward.
            </h3>

            <p className="mt-4 text-[14px] leading-[1.8] text-white/75">
              Our mission is to united ijebu descendant in the united kingdom
              and Ireland, preserve and promote our cultural heritage and
              identity, support the welfare of our member, empower our youth and
              families, encourage education and business networking and
              contribute meaningfully to community development in the diaspora
              and ijebuland
            </p>
          </div>
        </div>

        {/* VISION */}
        <div className="mt-12 grid items-center gap-6 md:grid-cols-2 md:gap-12">
          <div className="order-2 flex flex-col md:order-1 md:px-4 max-w-lg">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" className="h-px flex-1 bg-[#B28B28]" />
              <span className="text-lg uppercase tracking-[0.15em] text-white">
                Our Vision
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-[#B28B28]" />
            </div>

            <h3 className="mt-4 text-xl font-normal">
              A United, Respected and Progressive Community of Ijebu
              Descendants.
            </h3>

            <p className="mt-4 text-[14px] leading-[1.8] text-white">
              To be united, respected and progressive community of ijebu
              descendant in the united kingdom and Ireland, dedicated to
              preserving our rich cultural heritage, empowering out people
              strengthening our bonds of unity and building a lasting legacy of
              prosperity and development for present and future generations.
            </p>
          </div>

          <div className="relative order-1 aspect-[1.35/1] overflow-hidden md:order-2 rounded-2xl">
            <Image
              src="/images/mission2.png"
              alt="Ijebu traditional leaders at a cultural gathering"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
