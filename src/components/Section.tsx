export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginTop: 28 }}>
      <div style={{ marginBottom: 12 }}>
        <h2 className="h2">{title}</h2>
        {subtitle ? <p className="p">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}
