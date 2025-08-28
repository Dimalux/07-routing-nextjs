// app/notes/filter/layout.tsx


interface LayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}

export default function Layout({ children, sidebar }: LayoutProps) {
  return (
    <div style={{ display: 'flex', minHeight: 'calc(100vh - 200px)' }}>
      <aside style={{ width: '250px', flexShrink: 0 }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1 }}>
        {children}
      </main>
    </div>
  );
}