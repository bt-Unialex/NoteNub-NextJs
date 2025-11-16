import { getSingleNote } from "@/lib/api/clientApi";
import Modal from "../../Modal";
import NotePreview from "@/components/NotePreview/NotePreview";

type Props = {
  params: Promise<{ id: string }>;
};

const NoteById = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);

  return (
    <>
      <Modal>
        <NotePreview note={note} />
      </Modal>
    </>
  );
};

export default NoteById;
