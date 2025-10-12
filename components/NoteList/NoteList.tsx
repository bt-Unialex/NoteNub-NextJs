import css from "./NoteList.module.css";
import NoteItem from "../NoteItem/NoteItem";
import { Note } from "@/types/notes";

type Props = {
  notes: Note[];
};

export default function NoteList({ notes }: Props) {
  return (
    <ul className={css.list}>
      {notes.map((note) => (
        <NoteItem key={note.id} item={note} />
      ))}
    </ul>
  );
}
