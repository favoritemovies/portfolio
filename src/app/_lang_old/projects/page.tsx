import Container from "@/components/Container";
import Section from "@/components/Section";
import { normalizeLang } from "@/lib/i18n";
import Link from "next/link";

export default function Projects({ params }: { params: { lang: string } }) {
  const lang = normalizeLang(params.lang);
  const isRu = lang === "ru";

  return (
    <Container>
      <div style={{ padding: "28px 0 6px" }}>
        <h1 className="h1" style={{ fontSize: 40, marginBottom: 6 }}>
          {isRu ? "Проекты" : "Projects"}
        </h1>
        <p className="p">
          {isRu
            ? "Два клиентских проекта, реализованных “под ключ”."
            : "Two client projects delivered end-to-end."}
        </p>
        <div style={{ marginTop: 14 }}>
          <Link className="btn" href={`/${lang}`}>{isRu ? "← На главную" : "← Back to Home"}</Link>
        </div>
      </div>

      <hr className="hr" />

      <Section title="EmilyZimina.com" subtitle={isRu ? "Сайт + мини-админка" : "Website + mini admin panel"}>
        <div className="card">
          <p className="p">
            {isRu
              ? "Сайт на 5 страниц + формы с отправкой на почту, кликабельные контакты, мини-админка, GA4, настройка домена/хостинга."
              : "5-page website + forms with email delivery, clickable contacts, mini admin panel, GA4, hosting/domain setup."}
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="btn btn-primary" href="https://emilyzimina.com/" target="_blank" rel="noreferrer">Live</a>
          </div>
        </div>
      </Section>

      <Section title="LiliModelNYC.com" subtitle={isRu ? "Сайт + админ-система (мини CRM)" : "Website + custom admin system (CRM-like)"}>
        <div className="card">
          <p className="p">
            {isRu
              ? "12 страниц, анимации/видео-фоны, сложная форма с логикой, админка + база заявок, фильтры, импорт Excel, массовые SMTP-рассылки, SEO, GA4 + GTM."
              : "12 pages, animations/video backgrounds, advanced conditional form, admin panel + database, filters, Excel import, bulk SMTP emailing, SEO, GA4 + GTM."}
          </p>
          <div style={{ marginTop: 12 }}>
            <a className="btn btn-primary" href="https://lilimodelnyc.com/" target="_blank" rel="noreferrer">Live</a>
          </div>
        </div>
      </Section>
    </Container>
  );
}
