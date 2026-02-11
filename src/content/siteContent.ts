import { Lang } from "@/lib/i18n";

const content = {
  en: {
    headerName: "Natalia Azarevich",
    headerTagline: "Front-end / Full-stack Web Developer",
    navProjects: "Projects",
    navPricing: "Pricing",
    navContact: "Contact",

    heroTitle: "Front-end / Full-stack Web Developer",
    heroText:
      "I build modern websites and custom admin panels for businesses — from responsive UI and application forms to databases, email automation, SEO, and analytics.",
    ctaProjects: "View Projects",
    ctaContact: "Contact Me",

    aboutTitle: "About",
aboutSubtitle: "I build client-ready websites and systems — and I’m open to both freelance and junior roles.",
aboutText:
  "I’m a web developer with hands-on experience delivering real client projects end-to-end. I build responsive multi-page websites, advanced application forms, and custom admin panels with databases, email automation (SMTP), SEO and analytics (GA4/GTM).",
aboutBullets: [
  "Delivered 2 commercial websites in the US market (English + Russian audiences).",
  "Full cycle: requirements → UI → forms → admin panel/DB → hosting/domain → analytics.",
  "Tech: HTML/CSS/JS, React/Next.js, PHP, MySQL, SMTP, GA4, GTM.",
],
availabilityTitle: "Available for",
availability: [
  "Freelance projects (remote)",
  "Junior / entry-level web developer roles",
],

    highlightsTitle: "What I build",
    highlightsSubtitle: "Client-ready websites and systems that make work easier.",
    highlights: [
      { title: "Client-ready websites", text: "Multi-page, responsive, SEO-friendly." },
      { title: "Admin panels & databases", text: "Manage content and applications efficiently." },
      { title: "Forms & automation", text: "Conditional forms, email delivery, bulk mailing." },
      { title: "Analytics setup", text: "GA4 and GTM configuration." },
    ],

    featuredTitle: "Featured projects",
    featuredSubtitle: "Two real client projects delivered end-to-end.",
    featured: [
  {
    name: "EmilyZimina.com",
    url: "https://emilyzimina.com/",
    img: "/projects/emily-form.png",
    meta: "Client website + mini admin panel",
  },
  {
    name: "LiliModelNYC.com",
    url: "https://lilimodelnyc.com/",
    img: "/projects/lili-form.png",
    meta: "Website + custom admin system (CRM-like)",
  },

  { name: "Demo: Cleaning Landing (Skyline Clean)",
    url: "https://demo-cleaning-landing.vercel.app",
    img: "/projects/hero.png",
    meta: "Landing • EN/RU • pricing • FAQ • sticky nav",
  },

],

    certTitle: "Education & Certifications",
    certSubtitle: "Coursera — Certificates of completion:",
    certs: [
  {
    title: "HTML5 Certificate",
    url: "https://coursera.org/share/a387ca50dcdbdf85ddff99743a4004b9",
    img: "/certs/html5.png",
  },
  {
    title: "CSS3 Certificate",
    url: "https://coursera.org/share/2fe931e2e1cf8c0120e4bb2fab28b6bb",
    img: "/certs/css3.png",
  },
  {
    title: "JavaScript Certificate",
    url: "https://coursera.org/share/4ec3dd34a6d83598d6494eddd7c02a48",
    img: "/certs/javascript.png",
  },
],

pricingTitle: "Pricing",
pricingSubtitle: "Transparent estimates. Final quote depends on scope.",
pricingItems: [
  { title: "Website UI / Frontend", price: "$1,200+", note: "Up to 5 pages included • +$150 per extra page" },
  { title: "Multi-step forms & logic", price: "$800+", note: "Conditional flows, validation, user journey" },
  { title: "Backend + database (PHP/MySQL)", price: "$1,000+", note: "Server logic, storage, processing" },
  { title: "Admin panel (CRM-like)", price: "$1,200+", note: "Dashboard, filtering, management" },
  { title: "Excel import + SMTP bulk email", price: "$700+", note: "Import, mapping, campaigns" },
  { title: "SEO + analytics (GA4/GTM)", price: "$300+", note: "Setup + basic event tracking" },
],
pricingTotalsTitle: "Typical totals",
pricingTotals: [
  { title: "Landing page", price: "$400–600" },
  { title: "Business website", price: "$1,200–2,500" },
  { title: "Custom web system", price: "$4,000–8,000+" },
],
pricingNote: "I’ll confirm an exact quote after a short scope chat.",

    contactTitle: "Contact",
    contactSubtitle: "Email me and I’ll reply soon.",
    footerNote: "Bilingual portfolio (EN/RU).",
  },

  ru: {
    headerName: "Наталья Азаревич",
    headerTagline: "Front-end / Full-stack веб-разработчик",
    navProjects: "Проекты",
    navPricing: "Цены",
    navContact: "Контакты",

    heroTitle: "Front-end / Full-stack веб-разработчик",
    heroText:
      "Создаю современные сайты и административные панели под задачи бизнеса: адаптивный интерфейс, формы заявок, базы данных, автоматизация рассылок, SEO и аналитика.",
    ctaProjects: "Посмотреть проекты",
    ctaContact: "Связаться",

     aboutTitle: "Обо мне",
aboutSubtitle: "Делаю сайты и веб-системы под ключ — и открыта к фрилансу и junior-позициям.",
aboutText:
  "Я веб-разработчик с практическим опытом коммерческих проектов. Делаю адаптивные многостраничные сайты, сложные формы заявок и админ-панели с базой данных, автоматизацией писем (SMTP), SEO и аналитикой (GA4/GTM).",
aboutBullets: [
  "Сделала 2 коммерческих сайта для рынка США (аудитория EN и RU).",
  "Полный цикл: требования → интерфейс → формы → админка/БД → домен/хостинг → аналитика.",
  "Стек: HTML/CSS/JS, React/Next.js, PHP, MySQL, SMTP, GA4, GTM.",
],
availabilityTitle: "Открыта к",
availability: [
  "Фриланс-проектам (удалённо)",
  "Junior / начальным позициям веб-разработчика",
],

    highlightsTitle: "Что я делаю",
    highlightsSubtitle: "Сайты и системы, которые реально помогают бизнесу.",
    highlights: [
      { title: "Сайты “под ключ”", text: "Многостраничные, адаптивные, с базовым SEO." },
      { title: "Админки и базы данных", text: "Управление заявками и контентом." },
      { title: "Формы и автоматизация", text: "Логика вопросов, отправка писем, рассылки." },
      { title: "Аналитика", text: "Настройка GA4 и GTM." },
    ],

    featuredTitle: "Избранные проекты",
    featuredSubtitle: "Два реальных клиентских проекта “под ключ”.",
    featured: [
  {
    name: "EmilyZimina.com",
    url: "https://emilyzimina.com/",
    img: "/projects/emily-form.png",
    meta: "Клиентский сайт + мини-админка",
  },
  {
    name: "LiliModelNYC.com",
    url: "https://lilimodelnyc.com/",
    img: "/projects/lili-form.png",
    meta: "Сайт + админ-система (CRM-подобная)",
  },

  { name: "Демо: Лендинг клининга (Skyline Clean)",
    url: "https://demo-cleaning-landing.vercel.app",
    img: "/projects/hero.png",
    meta: "Лендинг • EN/RU • прайсинг • FAQ • sticky nav",
  },

],


    certTitle: "Образование и сертификаты",
    certSubtitle: "Coursera — сертификаты об успешном прохождении:",
    certs: [
  {
    title: "HTML5",
    url: "https://coursera.org/share/a387ca50dcdbdf85ddff99743a4004b9",
    img: "/certs/html5.png",
  },
  {
    title: "CSS3",
    url: "https://coursera.org/share/2fe931e2e1cf8c0120e4bb2fab28b6bb",
    img: "/certs/css3.png",
  },
  {
    title: "JavaScript",
    url: "https://coursera.org/share/4ec3dd34a6d83598d6494eddd7c02a48",
    img: "/certs/javascript.png",
  },
],

pricingTitle: "Цены",
pricingSubtitle: "Понятные оценки. Итог зависит от объёма работ.",
pricingItems: [
  { title: "Frontend / сайт", price: "от $1,200", note: "До 5 страниц включено • +$150 за доп. страницу" },
  { title: "Многошаговые формы и логика", price: "от $800", note: "Условия, ветвления, валидация" },
  { title: "Backend + база (PHP/MySQL)", price: "от $1,000", note: "Серверная логика, хранение, обработка" },
  { title: "Админ-панель (CRM-подобная)", price: "от $1,200", note: "Панель, фильтры, управление" },
  { title: "Импорт Excel + SMTP-рассылки", price: "от $700", note: "Импорт, сопоставление, кампании" },
  { title: "SEO + аналитика (GA4/GTM)", price: "от $300", note: "Настройка + базовые события" },
],
pricingTotalsTitle: "Примеры бюджетов",
pricingTotals: [
  { title: "Лендинг", price: "$400–600" },
  { title: "Бизнес-сайт", price: "$1,200–2,500" },
  { title: "Кастомная веб-система", price: "$4,000–8,000+" },
],
pricingNote: "Точную стоимость скажу после короткого обсуждения задач.",



    contactTitle: "Контакты",
    contactSubtitle: "Напишите мне на email — я отвечу.",
    footerNote: "Двуязычное портфолио (EN/RU).",
  },
} as const;

export function t(lang: Lang) {
  return content[lang];
}
