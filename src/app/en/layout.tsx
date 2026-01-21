import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header lang="en" />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer lang="en" />
    </>
  );
}
