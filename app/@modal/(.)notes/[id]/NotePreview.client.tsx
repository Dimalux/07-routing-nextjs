// app/@modal/(.)notes/[id]/NotePreview.client.tsx


"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

interface NotePreviewProps {
  noteId: string;
}

export default function NotePreview({ noteId }: NotePreviewProps) {
  const {
    data: note,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading note...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-container">
        <h3>Error loading note</h3>
        <p>{(error as Error).message}</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="not-found-container">
        <h3>Note not found</h3>
        <p>The requested note could not be found.</p>
      </div>
    );
  }

  return <NoteDetailsClient note={note} />;
}
