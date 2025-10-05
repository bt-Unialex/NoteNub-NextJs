import NoteList from "@/components/NoteList/NoteList";
import { getNotes } from "@/lib/api";

export default async function Notes() {
  const response = await getNotes();

  return (
    <section>
      <h1>Notes List</h1>
      {response?.notes?.length > 0 && <NoteList notes={response.notes} />}
    </section>
  );
}
