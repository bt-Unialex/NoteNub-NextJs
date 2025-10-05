import css from "./NoteList.module.css";
import { Note } from "@/lib/api";
import NoteItem from "../NoteItem/NoteItem";

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
