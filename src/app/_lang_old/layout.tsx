import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { normalizeLang } from "@/lib/i18n";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = normalizeLang(params.lang);

  return (
    <>
      <Header lang={lang} />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
