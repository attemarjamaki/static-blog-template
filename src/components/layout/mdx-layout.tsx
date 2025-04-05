export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto">{children}</div>
    </main>
  );
}
