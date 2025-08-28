// app/notes/[id]/NoteDetails.client.tsx


"use client";

import { useRouter } from "next/navigation";
import { Note } from "@/types/note";
import styles from "./NoteDetails.client.module.css";

interface NoteDetailsClientProps {
  note: Note;
}

export default function NoteDetailsClient({ note }: NoteDetailsClientProps) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const formattedDate = note.updatedAt
    ? `Updated at: ${new Date(note.updatedAt).toLocaleDateString()}`
    : `Created at: ${new Date(note.createdAt).toLocaleDateString()}`;

  return (
    <div className={styles.modalContent}>
      <button onClick={handleClose} className={styles.closeButton}>
        ×
      </button>
      
      <h2 className={styles.title}>{note.title}</h2>
      <p className={styles.content}>{note.content}</p>
      
      <div className={styles.meta}>
        <span className={styles.tag}>{note.tag}</span>
        <span className={styles.date}>{formattedDate}</span>
      </div>
    </div>
  );
}