import Container from "./Container";
import { Lang } from "@/lib/i18n";
import { t } from "@/content/siteContent";

export default function Footer({ lang }: { lang: Lang }) {
  const tr = t(lang);

  return (
    <footer style={{ marginTop: 34, borderTop: "1px solid var(--border)" }}>
      <Container>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center", justifyContent: "space-between" }}>
          <span className="small">© {new Date().getFullYear()} Natalia Azarevich</span>
          <span className="small">{tr.footerNote}</span>
        </div>
      </Container>
    </footer>
  );
}
