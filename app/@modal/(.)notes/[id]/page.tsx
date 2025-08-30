// app/@modal/(.)notes/[id]/page.tsx

"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "./NotePreview.client";

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
