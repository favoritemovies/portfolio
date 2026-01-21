export default function Container({ children }: { children: React.ReactNode }) {
  return <div style={{ maxWidth: 1080, margin: "0 auto", padding: "26px 18px" }}>{children}</div>;
}
