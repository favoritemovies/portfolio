import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";

export default function EnProjects() {
  return (
    <Container>
      <div style={{ padding: "28px 0 6px" }}>
        <h1 className="h1" style={{ fontSize: 40, marginBottom: 6 }}>Projects</h1>
        <p className="p">Two client projects delivered end-to-end.</p>
        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/en">← Back to Home</Link>
        </div>
      </div>

      <hr className="hr" />

      <Section title="EmilyZimina.com" subtitle="Website + mini admin panel">
  <div className="card">
    <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
      <img
        src="/projects/emily-form.png"
        alt="EmilyZimina.com — Request Availability Form"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>

    <p className="p" style={{ marginTop: 12 }}>
  Delivered a client website end-to-end: responsive multi-page layout, custom request form with email delivery,
  clickable contact actions, and a lightweight admin interface for updating content.
  Handled hosting and domain setup, analytics (GA4), and production launch.
</p>

<div className="p" style={{ marginTop: 10 }}>
  <strong>Tech stack:</strong> HTML, CSS, JavaScript, PHP, SMTP, GA4
</div>

    <div style={{ marginTop: 12 }}>
      <a className="btn btn-primary" href="https://emilyzimina.com/" target="_blank" rel="noreferrer">
        Live
      </a>
    </div>
  </div>
</Section>


     <Section title="LiliModelNYC.com" subtitle="Website + custom admin system (CRM-like)">
  <div className="card">
    <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
      <img
        src="/projects/lili-form.png"
        alt="Lili Model Kids NYC — Application Form"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>

    <p className="p" style={{ marginTop: 12 }}>
  Built a large-scale client website with advanced application flow and custom backend system.
  Implemented conditional multi-step forms, PHP/MySQL processing, admin panel for managing applications,
  filtering by programs, Excel data import, and bulk SMTP email campaigns.
  Configured SEO, GA4, and GTM for tracking user behavior.
</p>
<div className="p" style={{ marginTop: 10 }}>
  <strong>Tech stack:</strong> HTML, CSS, JavaScript, PHP, MySQL, SMTP, GA4, GTM
</div>
<div className="p" style={{ marginTop: 6 }}>
  <strong>Challenge:</strong> Handling complex multi-step applications with different programs and data flows.
  <strong> Solution:</strong> Implemented conditional logic, backend validation, and structured admin workflows.
</div>


    <div style={{ marginTop: 12 }}>
      <a className="btn btn-primary" href="https://lilimodelnyc.com/" target="_blank" rel="noreferrer">
        Live
      </a>
    </div>
  </div>
</Section>

<Section title="Demo: Skyline Clean Co." subtitle="One-page landing (EN/RU) • conversion-focused layout">
  <div className="card">
    <div className="proj-mini__img" style={{ aspectRatio: "16 / 9", marginBottom: 12 }}>
    <img
    src="/projects/hero.png"
    alt="Skyline Clean landing preview" />
  </div>
    <p className="p">
      Bright landing page for a NYC cleaning service with sticky navigation, section anchors,
      bilingual toggle, pricing, FAQ, and contact forms (demo behavior).
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      <strong>Tech stack:</strong> HTML, CSS, JavaScript, client-side i18n, responsive layout, Vercel deploy.
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      <strong>Challenge & solution:</strong> Sticky header was hiding section titles —
      fixed with anchor offset (scroll-margin) + active section highlight.
    </p>

    <div style={{ marginTop: 12 }}>
      <a className="btn btn-primary" href="https://demo-cleaning-landing.vercel.app" target="_blank" rel="noreferrer">
        Live
      </a>
    </div>
  </div>
</Section>


<Section
  title="Demo: Mila Nails"
  subtitle="One-page landing (EN/RU) • beauty service demo"
>
  <div className="card">
    <div
      className="proj-mini__img"
      style={{ aspectRatio: "16 / 9", marginBottom: 12 }}
    >
      <img
        src="/projects/mila-hero.png"
        alt="Mila Nails landing preview"
      />
    </div>

    <p className="p">
      Elegant one-page landing for a nail technician with a soft, modern visual style.
      Includes bilingual EN/RU switch, service descriptions, pricing, client reviews,
      FAQ, and a portfolio gallery.
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      Portfolio section supports category filtering and image lightbox.
      New works can be added simply by uploading images to a folder — no admin panel required.
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      <strong>Tech stack:</strong> HTML, CSS, JavaScript, client-side i18n,
      responsive layout, gallery filters, lightbox, Vercel deploy.
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      <strong>Challenge & solution:</strong> Needed a portfolio without CMS —
      implemented automatic gallery rendering from static images with JS filtering.
    </p>

    <div style={{ marginTop: 12 }}>
      <a
        className="btn btn-primary"
        href="https://mila-nails-demo.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        Live
      </a>
    </div>
  </div>
</Section>


    </Container>
  );
}
