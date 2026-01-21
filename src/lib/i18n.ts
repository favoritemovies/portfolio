export type Lang = "en" | "ru";

export function normalizeLang(x: string): Lang {
  return x === "ru" ? "ru" : "en";
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "ru" : "en";
}
