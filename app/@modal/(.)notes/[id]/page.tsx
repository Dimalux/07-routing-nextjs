// app/@modal/(.)notes/[id]/page.tsx

import { QueryClient, dehydrate } from "@tanstack/react-query";
import { HydrationBoundary } from "@tanstack/react-query";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";
import { fetchNoteById } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModal({ params }: Props) {
  const { id } = await params;
  const queryClient = new QueryClient();

  // Префетчимо дані на сервері
  await queryClient.prefetchQuery({
    queryKey: ["note", id], // Правильний queryKey з id
    queryFn: () => fetchNoteById(id), // Правильна queryFn
  });

  return (
    <Modal>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotePreview noteId={id} />
      </HydrationBoundary>
    </Modal>
  );
}
