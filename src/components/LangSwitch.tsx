"use client";

import { usePathname } from "next/navigation";

export default function LangSwitch({ lang }: { lang: "en" | "ru" }) {
  const pathname = usePathname() || `/${lang}`;
  const target = lang === "en" ? "ru" : "en";

  const rest = pathname.startsWith("/en") || pathname.startsWith("/ru")
    ? pathname.slice(3)
    : "";

  const nextPath = `/${target}${rest || ""}`;

  return (
    <a className="badge" href={nextPath}>
      {target.toUpperCase()}
    </a>
  );
}
