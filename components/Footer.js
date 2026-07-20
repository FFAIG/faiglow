import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/content";

export default function Footer() {
  const { logo, instagram, footer } = siteConfig;
  const [col1, col2, col3] = footer.columns;

  return (
    <footer className="site-footer">

      <div className="footer-logo-wrap">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.footerW}
          height={logo.footerH}
          style={{ height: "auto" }}
        />
      </div>

      <div className="footer-grid">
        <div>
          <h3 className="footer-heading">{col1.heading}</h3>
          <p className="footer-text">{col1.text}</p>
        </div>
        <div>
          <h3 className="footer-heading">{col2.heading}</h3>
          <p className="footer-text">{col2.text}</p>
        </div>
        <div>
          <h3 className="footer-heading">{col3.heading}</h3>
          <p className="footer-text">
            {col3.links.map((link) => (
              <span key={link.href}>
                <Link href={link.href} className="footer-link">{link.label}</Link>
                <br />
              </span>
            ))}
            {col3.copyright}
          </p>
        </div>
      </div>

      <a
        href={instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="footer-ig"
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
