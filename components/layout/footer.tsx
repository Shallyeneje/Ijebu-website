import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Our Heritage", href: "/#heritage" },
      { label: "Gallery", href: "/gallery" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Become a Member", href:"https://chat.whatsapp.com/Lqvu67mq9QA21cQZ6MUczj", target: "_blank", rel: "noopener noreferrer" },
      { label: "Events & Activities", href: "/events" },
      { label: "Community Engagement", href: "/community" },
      // { label: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#163F33] px-5 pt-8 text-white sm:px-8 md:px-12 md:pt-12">
      <div className="mx-auto max-w-350">
        {/* TOP FOOTER */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Ijebu Descendant"
                width={75}
                height={65}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <h2 className="mt-5 text-xl font-medium sm:text-2xl">
              United by Heritage. Stronger Through Unity.
            </h2>

            <p className="mt-3 max-w-107.5 text-[14px] leading-[1.8] text-white">
              Bringing Ijebu descendants together across the United Kingdom and
              Ireland to preserve our heritage, empower our people and build a
              lasting legacy for future generations.
            </p>
          </div>

          <Link
            href="https://chat.whatsapp.com/Lqvu67mq9QA21cQZ6MUczj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 bg-[#FFB900] px-3 py-2 text-[12px] font-medium text-[#163F33] transition-colors hover:bg-white"
          >
            Join our community
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white">
              <ArrowUpRight size={11} />
            </span>
          </Link>
        </div>

        {/* FOOTER LINKS */}
        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/30 py-7">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-[14px] font-semibold text-white">
                {group.title}
              </h3>

              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] text-white/65 transition-colors hover:text-[#FFB900]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER IMAGE */}
        <div className="relative aspect-16/7] rounded-2xl w-full overflow-hidden sm:aspect-16/6">
          <Image
            src="/images/footer.png"
            alt="Ijebu cultural gathering"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col gap-3 py-5 text-[9px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ijebu Descendant. All rights reserved.</p>

          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="hover:text-[#FFB900]">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-[#FFB900]">
              Terms & Conditions
            </Link>

            <Link href="/cookies" className="hover:text-[#FFB900]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
