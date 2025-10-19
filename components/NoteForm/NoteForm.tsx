"use client";

import css from "./NoteForm.module.css";
import { createNote } from "@/lib/api";
import { Category, NewNoteData } from "@/types/notes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const router = useRouter();
  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      router.push("/notes/filter/all");
    },
  });
  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);

    console.log(values);
  };
  const handleCancel = () => router.push("/notes/filter/all");

  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.formGroup}>
        Title
        <input type="text" name="title" className={css.input} />
      </label>

      <label className={css.formGroup}>
        Content
        <textarea name="content" className={css.textarea}></textarea>
      </label>

      <label className={css.formGroup}>
        Category
        <select name="category" className={css.select}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </label>

      <div className={css.actions}>
        <button type="submit" className={css.submitButton}>
          Create
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className={css.cancelButton}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
