import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="ru" />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer lang="ru" />
    </>
  );
}
