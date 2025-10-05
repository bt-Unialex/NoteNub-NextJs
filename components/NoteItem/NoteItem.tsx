// components/NoteItem/NoteItem.tsx
import css from "./NoteItem.module.css";
import Link from "next/link";
import { Note } from "@/lib/api";

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li className={css.listItem}>
      <Link className={css.title} href={`/notes/${item.id}`}>
        {item.title}
      </Link>
    </li>
  );
};

export default NoteItem;
