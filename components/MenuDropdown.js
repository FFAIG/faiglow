"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function MenuDropdown() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="menu-wrapper" ref={wrapperRef}>
      <button
        className="icon-btn"
        title="Menü"
        aria-label="Menü"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className={`menu-dropdown${open ? " open" : ""}`}>
        <Link href="/">Dijital Etkileşimli Ayna</Link>
        <Link href="/dijital-yonetim">Dijital Yönetim Sistemi</Link>
      </div>
    </div>
  );
}
