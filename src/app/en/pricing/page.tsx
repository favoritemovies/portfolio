import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";
import { t } from "@/content/siteContent";

export default function EnPricing() {
  const tr = t("en");

  return (
    <Container>
      <div style={{ padding: "28px 0 6px" }}>
        <h1 className="h1" style={{ fontSize: 40, marginBottom: 6 }}>{tr.pricingTitle}</h1>
        <p className="p">{tr.pricingSubtitle}</p>

        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/en">← Back to Home</Link>
        </div>
      </div>

      <hr className="hr" />

      <Section title="Breakdown" subtitle="How pricing is formed">
        <div className="grid grid-2">
          {tr.pricingItems.map((x: any) => (
            <div key={x.title} className="card">
              <div className="h3">{x.title}</div>
              <div style={{ fontSize: 26, fontWeight: 800, margin: "8px 0" }}>{x.price}</div>
              <p className="p">{x.note}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title={tr.pricingTotalsTitle} subtitle="Quick reference">
        <div className="grid grid-2">
          {tr.pricingTotals.map((x: any) => (
            <div key={x.title} className="card">
              <div className="h3">{x.title}</div>
              <div style={{ fontSize: 26, fontWeight: 800, marginTop: 8 }}>{x.price}</div>
            </div>
          ))}
        </div>
        <p className="small" style={{ marginTop: 10 }}>{tr.pricingNote}</p>
      </Section>
    </Container>
  );
}
