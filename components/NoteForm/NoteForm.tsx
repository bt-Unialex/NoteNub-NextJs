"use client";

import { useNoteDraftStore } from "@/lib/stores/noteStore";
import css from "./NoteForm.module.css";
import { createNote } from "@/lib/api/clientApi";
import { Category, NewNoteData } from "@/types/notes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type Props = {
  categories: Category[];
};

const NoteForm = ({ categories }: Props) => {
  const { draft, setDraft, clearDraft } = useNoteDraftStore();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    // 4. Коли користувач змінює будь-яке поле форми — оновлюємо стан
    setDraft({
      ...draft,
      [event.target.name]: event.target.value,
    });
  };
  const router = useRouter();
  const handleCancel = () => router.push("/notes/filter/all");
  const { mutate } = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.push("/notes/filter/all");
    },
  });
  const handleSubmit = (formData: FormData) => {
    const values = Object.fromEntries(formData) as NewNoteData;
    mutate(values);

    console.log(values);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <label className={css.formGroup}>
        Title
        <input
          type="text"
          name="title"
          className={css.input}
          defaultValue={draft?.title}
          onChange={handleChange}
        />
      </label>

      <label className={css.formGroup}>
        Content
        <textarea
          name="content"
          className={css.textarea}
          defaultValue={draft?.content}
          onChange={handleChange}
        ></textarea>
      </label>

      <label className={css.formGroup}>
        Category
        <select
          name="tag"
          className={css.select}
          defaultValue={draft?.tag}
          onChange={handleChange}
        >
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
