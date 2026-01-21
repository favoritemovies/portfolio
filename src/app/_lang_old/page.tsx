import Container from "@/components/Container";
import Section from "@/components/Section";
import { normalizeLang } from "@/lib/i18n";
import { t } from "@/content/siteContent";
import Link from "next/link";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  const tr = t(lang);

  return (
    <Container>
      <div style={{ padding: "34px 0 10px" }}>
        <span className="badge">{lang.toUpperCase()}</span>
        <h1 className="h1" style={{ marginTop: 12 }}>Natalia Azarevich</h1>
        <div className="h2" style={{ marginTop: 6 }}>{tr.heroTitle}</div>
        <p className="p" style={{ maxWidth: 820, marginTop: 10 }}>{tr.heroText}</p>

        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href={`/${lang}/projects`}>{tr.ctaProjects}</Link>
          <a className="btn" href={`/${lang}#contact`}>{tr.ctaContact}</a>
        </div>
      </div>

      <hr className="hr" />

      <Section title={tr.highlightsTitle} subtitle={tr.highlightsSubtitle}>
        <div className="grid grid-2">
          {tr.highlights.map((h) => (
            <div key={h.title} className="card">
              <div className="h3">{h.title}</div>
              <p className="p">{h.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={tr.featuredTitle} subtitle={tr.featuredSubtitle}>
        <div className="grid grid-2">
          {tr.featured.map((p) => (
            <div key={p.name} className="card">
              <div className="h3">{p.name}</div>
              <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn" href={p.url} target="_blank" rel="noreferrer">Live</a>
                <Link className="btn btn-primary" href={`/${lang}/projects`}>
                  {lang === "ru" ? "Кейсы" : "Case studies"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={tr.certTitle} subtitle={tr.certSubtitle}>
        <div className="grid">
          {tr.certs.map((c) => (
            <a key={c.url} className="card" href={c.url} target="_blank" rel="noreferrer">
              <div className="h3">{c.title}</div>
              <p className="p">{lang === "ru" ? "Открыть сертификат" : "View certificate"}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section title={tr.contactTitle} subtitle={tr.contactSubtitle}>
        <div id="contact" className="card">
          <p className="p">
            <a href="mailto:natalia.azarevich.dev@gmail.com" style={{ color: "var(--accent)" }}>
              natalia.azarevich.dev@gmail.com
            </a>
          </p>
        </div>
      </Section>
    </Container>
  );
}
