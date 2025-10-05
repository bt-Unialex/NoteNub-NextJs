"use client";
import { Note } from "@/types/notes";
import css from "./NotePreview.module.css";
import { useRouter } from "next/navigation";

type Props = {
  note?: Note;
};
export default function NotePreview({ note }: Props) {
  const router = useRouter();

  const close = () => router.back();
  return (
    <>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note?.title}</h2>
          </div>
          <p className={css.content}>{note?.content}</p>
          <p className={css.date}>&quot;Added:&quot; {note?.createdAt}</p>
          <p className={css.tag}>&quot;Group:&quot; {note?.tag}</p>
          <button onClick={close} className={css.backBtn}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
