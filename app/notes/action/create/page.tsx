import css from "./CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";
import { getCategories } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create note",
  description: "The page for creating notes.",
  openGraph: {
    title: "Create note",
    description: "The page for creating notes.",
    url: "/notes/action/create",
    images: [{ url: "/notehub-og-meta.jpg" }],
  },
};

const CreateNote = async () => {
  const categories = await getCategories();

  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm categories={categories} />
      </div>
    </main>
  );
};

export default CreateNote;
