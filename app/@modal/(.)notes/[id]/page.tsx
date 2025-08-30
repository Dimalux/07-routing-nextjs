// app/@modal/(.)notes/[id]/page.tsx

// import Modal from "@/components/Modal/Modal";
// import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
// import { fetchNoteById } from "@/lib/api";

// interface Props {
//   params: Promise<{ id: string }>;
// }

// export default async function NoteModal({ params }: Props) {
//   const { id } = await params;

//   try {
//     const note = await fetchNoteById(id);

//     return (
//       <Modal>
//         <NoteDetailsClient note={note} />
//       </Modal>
//     );
//   } catch (error) {
//     return (
//       <Modal>
//         <div>Error loading note: {(error as Error).message}</div>
//       </Modal>
//     );
//   }
// }



// app/@modal/(.)notes/[id]/page.tsx


// "use client";

// import { useRouter } from "next/navigation";
// import Modal from "@/components/Modal/Modal";
// import NotePreview from "./NotePreview.client";

// interface Props {
//   params: { id: string };
// }

// export default function NoteModal({ params }: Props) {
//   const router = useRouter();

//   const handleClose = () => {
//     router.back();
//   };

//   return (
//     <Modal>
//       <NotePreview noteId={params.id} />
//     </Modal>
//   );
// }





// app/@modal/(.)notes/[id]/page.tsx
"use client"; // ← Правильно: рядок на початку файлу

import { use } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from './NotePreview.client';

interface Props {
  params: Promise<{ id: string }>;
}

export default function NoteModal({ params }: Props) {
  const router = useRouter();
  const { id } = use(params);

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal>
      <NotePreview noteId={id} />
    </Modal>
  );
}