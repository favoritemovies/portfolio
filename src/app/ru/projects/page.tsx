import Container from "@/components/Container";
import Section from "@/components/Section";
import Link from "next/link";

export default function RuProjects() {
  return (
    <Container>
      <div style={{ padding: "28px 0 6px" }}>
        <h1 className="h1" style={{ fontSize: 40, marginBottom: 6 }}>Проекты</h1>
        <p className="p">Два клиентских проекта, реализованных “под ключ”.</p>
        <div style={{ marginTop: 14 }}>
          <Link className="btn" href="/ru">← На главную</Link>
        </div>
      </div>

      <hr className="hr" />

      <Section title="EmilyZimina.com" subtitle="Сайт + мини-админский сайт">
        <div className="card">
  <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
    <img
      src="/projects/emily-form.png"
      alt="EmilyZimina.com — форма запроса доступности"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  </div>

  <p className="p" style={{ marginTop: 12 }}>
  Реализовала клиентский сайт «под ключ»: адаптивная многостраничная верстка,
  форма запроса с отправкой на почту, кликабельные контакты и лёгкая админ-панель
  для редактирования контента. Настроены домен, хостинг и аналитика (GA4).
</p>
<div className="p" style={{ marginTop: 10 }}>
  <strong>Стек:</strong> HTML, CSS, JavaScript, PHP, SMTP, GA4
</div>

  <div style={{ marginTop: 12 }}>
    <a className="btn btn-primary" href="https://emilyzimina.com/" target="_blank" rel="noreferrer">
      Сайт
    </a>
  </div>
</div>
      </Section>

      <Section title="LiliModelNYC.com" subtitle="Сайт + админ-система (мини CRM)">
        <div className="card">
  <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--border)" }}>
    <img
      src="/projects/lili-form.png"
      alt="Lili Model Kids NYC — форма заявки"
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  </div>

  <p className="p" style={{ marginTop: 12 }}>
  Разработала масштабный клиентский сайт со сложной системой заявок и серверной логикой.
  Реализованы многошаговые формы с условиями, обработка на PHP/MySQL,
  админ-панель для управления заявками, фильтрация по программам,
  импорт данных из Excel и массовые SMTP-рассылки.
  Настроены SEO, GA4 и GTM.
</p>

<div className="p" style={{ marginTop: 10 }}>
  <strong>Стек:</strong> HTML, CSS, JavaScript, PHP, MySQL, SMTP, GA4, GTM
</div>

<div className="p" style={{ marginTop: 6 }}>
  <strong>Задача:</strong> сложная логика многошаговых заявок и разные сценарии данных.
  <strong> Решение:</strong> условия в форме, серверная валидация и структурированная админ-панель.
</div>

  <div style={{ marginTop: 12 }}>
    <a className="btn btn-primary" href="https://lilimodelnyc.com/" target="_blank" rel="noreferrer">
      Сайт
         </a>
  </div>
</div>
      </Section>

      <Section title="Демо: Skyline Clean Co." subtitle="Одностраничный лендинг (EN/RU) • конверсионная структура">
  <div className="card">
    <div className="proj-mini__img" style={{ aspectRatio: "16 / 9", marginBottom: 12 }}>
    <img src="/projects/hero.png" alt="Превью лендинга Skyline Clean" />
  </div>
    <p className="p">
      Яркий лендинг для клининг-сервиса в NYC: липкая шапка, якорные переходы по секциям,
      переключение EN/RU, прайсинг, FAQ и контакты (демо-форма).
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      <strong>Стек:</strong> HTML, CSS, JavaScript, i18n на клиенте, адаптивная верстка, деплой на Vercel.
    </p>

    <p className="p" style={{ marginTop: 10 }}>
      <strong>Задача и решение:</strong> заголовки секций прятались под липкой шапкой —
      исправлено через scroll-margin + подсветку активной секции.
    </p>

    <div style={{ marginTop: 12 }}>
      <a className="btn btn-primary" href="https://demo-cleaning-landing.vercel.app" target="_blank" rel="noreferrer">
        Открыть сайт
      </a>
    </div>
  </div>
</Section>

    </Container>
  );
}
