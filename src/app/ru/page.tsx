import Container from "@/components/Container";
import Section from "@/components/Section";
import { t } from "@/content/siteContent";
import Link from "next/link";

type FeaturedItem = {
  name: string;
  url: string;
  img?: string;
  meta?: string;
};

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
  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, alignItems: "start" }}>
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
      <img
        src="/me.jpg"
        alt="Natalia Azarevich"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio: "1 / 1" }}
      />
    </div>

    <div>
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
  <div className="grid">
    {(tr.featured as unknown as FeaturedItem[]).map((p) => (
      <div key={p.name} className="card">
        <div className="proj-mini">
          <div className="proj-mini__img" style={{ aspectRatio: "4 / 3" }}>
            <img
              src={p.img ?? "/projects/emily-form.png"}
              alt={`${p.name} preview`}
            />
          </div>

          <div>
            <div className="h3" style={{ marginBottom: 4 }}>{p.name}</div>
            {p.meta ? <p className="p" style={{ marginBottom: 10 }}>{p.meta}</p> : null}

            <div className="proj-mini__actions">
              <a className="btn" href={p.url} target="_blank" rel="noreferrer">Сайт</a>
              <Link className="btn btn-primary" href="/ru/projects">Кейсы</Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</Section>

      <Section title={tr.certTitle} subtitle={tr.certSubtitle}>
  <div className="grid grid-2">
    {tr.certs.map((c: any) => (
      <a key={c.url} className="card cert-card" href={c.url} target="_blank" rel="noreferrer">
        {c.img ? (
          <div className="cert-thumb">
            <img src={c.img} alt={`${c.title} сертификат`} />
          </div>
        ) : null}

        <div style={{ marginTop: c.img ? 10 : 0 }}>
          <div className="h3">{c.title}</div>
          <p className="p">Открыть сертификат</p>
        </div>
      </a>
    ))}
  </div>
</Section>


      <Section title={tr.pricingTitle} subtitle={tr.pricingSubtitle}>
  <div className="grid grid-2">
    {tr.pricingItems.map((x: any) => (
      <div key={x.title} className="card">
        <div className="h3">{x.title}</div>
        <div style={{ fontSize: 28, fontWeight: 800, margin: "8px 0" }}>{x.price}</div>
        <p className="p">{x.note}</p>
      </div>
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
