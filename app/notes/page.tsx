


import NotesClient from "./filter/[...slug]/Notes.client";
import { fetchNotes } from "@/lib/api";

export default async function NotesPage() {
  // Отримуємо дані для першої сторінки всіх нотаток
  const notesData = await fetchNotes(1, 12, "", "");

  return (
    <NotesClient 
      initialPage={1} 
      initialSearchQuery="" 
      currentTag=""
    />
  );
}