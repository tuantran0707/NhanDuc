"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Trang Chủ" },
  { href: "/cau-thu", label: "Cầu Thủ" },
  { href: "/thanh-tich", label: "Thành Tích" },
  { href: "/ket-qua", label: "Kết Quả Thi Đấu" },
  { href: "/ve-chung-toi", label: "Về Chúng Tôi" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand text-white shadow">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3 font-bold text-lg">
          <span className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-cream ring-2 ring-brand-gold overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Nhân Đức FC"
              width={160}
              height={160}
              priority
              className="w-full h-full object-contain scale-[0.92]"
            />
          </span>
          <span className="text-brand-gold tracking-wide">Nhân Đức FC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition hover:bg-white/10 ${
                  active ? "bg-white/15 text-brand-gold" : ""
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Mở menu"
          className="md:hidden p-2 rounded hover:bg-white/10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="container-page py-2 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 ${
                  pathname === l.href ? "text-brand-gold" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
