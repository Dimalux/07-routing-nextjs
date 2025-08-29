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
import Modal from "@/components/Modal/Modal";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";
import { fetchNoteById } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModal({ params }: Props) {
  const { id } = await params;
  
  try {
    const note = await fetchNoteById(id);
    
    return (
      <Modal>
        <NoteDetailsClient note={note} />
      </Modal>
    );
  } catch (error) {
    return (
      <Modal>
        <div className="p-4">
          <h2>Помилка</h2>
          <p>Не вдалося завантажити нотатку: {(error as Error).message}</p>
        </div>
      </Modal>
    );
  }
}