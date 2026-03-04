"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "@/components/MenuDropdown";
import { siteConfig } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLogin = pathname === "/login";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 150);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { logo } = siteConfig;
  const compact = !isHome || scrolled;

  const headerClass = [
    "site-header",
    compact ? "site-header--compact" : "",
    scrolled ? "site-header--scrolled" : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      {!isLogin && (
        <Link href="/" className={`logo-site logo-site--big${compact ? " logo-site--hidden" : ""}`} aria-label={logo.alt}>
          <Image src="/FAI1.png" alt={logo.alt} width={340} height={120} priority style={{ height: "auto", width: "340px" }} />
        </Link>
      )}
      {isLogin && (
        <div className={`logo-site logo-site--big logo-site--noinvert${scrolled ? " logo-site--hidden" : ""}`}>
          <Image src="/FAI2.png" alt="FAI Logo" width={340} height={120} priority style={{ height: "auto", width: "340px" }} />
        </div>
      )}
      <Link href="/" className={`logo-site logo-site--small${!scrolled ? " logo-site--hidden" : ""}`} aria-label={logo.alt}>
        <Image src={logo.src} alt={logo.alt} width={logo.headerW} height={logo.headerH} priority style={{ height: "auto", width: "110px" }} />
      </Link>

      <header className={headerClass}>
        <div className="header-right">
          <Link href="/login" className="icon-btn" title="Kullanıcı Girişi" aria-label="Kullanıcı Girişi">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-3.9 3.6-7 8-7s8 3.1 8 7" />
            </svg>
          </Link>
          <MenuDropdown />
        </div>
      </header>
    </>
  );
}
