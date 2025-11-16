import css from "./SidebarNotes.module.css";
import Link from "next/link";
import { possibleCategories } from "@/lib/api/serverApi";

const NotesSidebar = () => {
  const categories = possibleCategories;

  return (
    <>
      <Link href="/notes/action/create" className={css.menuLink}>
        Create note
      </Link>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id} className={css.menuItem}>
            <Link
              href={`/notes/filter/${category.id}`}
              className={css.menuLink}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NotesSidebar;
