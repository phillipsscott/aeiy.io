"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-frame pt-10 pb-2">
      <nav aria-label="Primary" className="site-nav flex items-center gap-6">
        {links.map(({ href, label }) => {
          const current =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={href}
              href={href}
              aria-current={current ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
