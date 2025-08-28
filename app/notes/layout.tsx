// app/notes/layout.tsx


export default function NotesLayout({
  children,
  sidebar,
  modal,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '250px', background: '#f5f5f5' }}>
        {sidebar}
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
      {modal}
    </div>
  );
}