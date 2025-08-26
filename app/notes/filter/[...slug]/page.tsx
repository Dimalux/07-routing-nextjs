// app/notes/filter/[...slug]/page.tsx

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function DocsPage({ params }: Props) {
  // Розгортаємо Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  return (
    <div>
      <h1>Docs page</h1>
      {/* Використовуємо вже розгорнуті параметри */}
      <p>Current path: {slug?.join(" / ") || "home"}</p>
    </div>
  );
}
