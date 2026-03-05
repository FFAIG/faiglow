import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const { logo, instagram, footer } = siteConfig;
  const [col1, col2, col3] = footer.columns;

  return (
    /* Mobile: single column, stacked → Tablet/Desktop: 3-column grid */
    <footer className="relative w-full min-h-[360px] sm:min-h-[480px] lg:min-h-[620px] py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-16 bg-black flex items-center justify-center">

      {/* Logo – centered at top */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.footerW}
          height={logo.footerH}
          className="w-20 lg:w-auto"
          style={{ height: "auto" }}
        />
      </div>

      {/* 3-column grid: stacks on mobile, side by side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-28 max-w-wide w-full text-center mt-12 sm:mt-0">
        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white mb-4">
            {col1.heading}
          </h3>
          <p className="text-[13.5px] font-light leading-[1.75] text-[#aaa]">{col1.text}</p>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white mb-4">
            {col2.heading}
          </h3>
          <p className="text-[13.5px] font-light leading-[1.75] text-[#aaa]">{col2.text}</p>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-white mb-4">
            {col3.heading}
          </h3>
          <p className="text-[13.5px] font-light leading-[1.75] text-[#aaa]">
            {col3.links.map((link) => (
              <span key={link.href}>
                <Link
                  href={link.href}
                  className="text-[#aaa] no-underline hover:text-[#ddd] transition-colors"
                >
                  {link.label}
                </Link>
                <br />
              </span>
            ))}
            {col3.copyright}
          </p>
        </div>
      </div>

      {/* Instagram icon – centered at bottom */}
      <a
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2"
        aria-label={instagram.label}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="#ffffff" stroke="none" />
        </svg>
      </a>

    </footer>
  );
}
