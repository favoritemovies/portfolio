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

    </Container>
  );
}
