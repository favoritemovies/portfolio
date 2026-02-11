import Link from "next/link";
import Container from "./Container";
import LangSwitch from "./LangSwitch";
import { Lang } from "@/lib/i18n";
import { t } from "@/content/siteContent";

export default function Header({ lang }: { lang: Lang }) {
  const tr = t(lang);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(11,15,25,0.7)",
      }}
    >
      <Container>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <Link href={`/${lang}`} style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 700 }}>{tr.headerName}</span>
            <span className="small">{tr.headerTagline}</span>
          </Link>

          <nav className="nav" style={{ display: "flex", alignItems: "center", gap: 12 }}>

            <Link className="badge" href={`/${lang}/projects`}>{tr.navProjects}</Link>
            <Link className="badge" href={`/${lang}/pricing`}>{(tr as any).navPricing}</Link>
            <a className="badge" href={`/${lang}#contact`}>{tr.navContact}</a>
            <LangSwitch lang={lang} />
          </nav>
        </div>
      </Container>
    </header>
  );
}
