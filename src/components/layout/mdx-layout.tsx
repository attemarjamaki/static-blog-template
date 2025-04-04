export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-8">
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  );
}
