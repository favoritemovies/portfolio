import Container from "@/components/Container";
import Section from "@/components/Section";
import { t } from "@/content/siteContent";
import Link from "next/link";

export default function RuHome() {
  const lang = "ru" as const;
  const tr = t(lang);

  return (
    <Container>
      <div style={{ padding: "34px 0 10px" }}>
        <span className="badge">RU</span>
        <h1 className="h1" style={{ marginTop: 12 }}>Наталья Азаревич</h1>
        <div className="h2" style={{ marginTop: 6 }}>{tr.heroTitle}</div>
        <p className="p" style={{ maxWidth: 820, marginTop: 10 }}>{tr.heroText}</p>

        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/ru/projects">{tr.ctaProjects}</Link>
          <a className="btn" href="/ru#contact">{tr.ctaContact}</a>
        </div>
      </div>

      <hr className="hr" />

      <Section title={tr.aboutTitle} subtitle={tr.aboutSubtitle}>
  <div className="card">
    <p className="p" style={{ marginBottom: 12 }}>{tr.aboutText}</p>
    <ul className="p" style={{ margin: 0, paddingLeft: 18 }}>
      {tr.aboutBullets.map((b: string) => (
        <li key={b} style={{ marginBottom: 8 }}>{b}</li>
      ))}
    </ul>

    <div style={{ marginTop: 14 }}>
      <div className="h3" style={{ marginBottom: 8 }}>{tr.availabilityTitle}</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tr.availability.map((a: string) => (
          <span key={a} className="badge">{a}</span>
        ))}
      </div>
    </div>
  </div>
</Section>


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
                <a className="btn" href={p.url} target="_blank" rel="noreferrer">Сайт</a>
                <Link className="btn btn-primary" href="/ru/projects">Кейсы</Link>
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
              <p className="p">Открыть сертификат</p>
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
