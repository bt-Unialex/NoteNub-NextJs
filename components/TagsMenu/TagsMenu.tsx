"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import css from "./TagsMenu.module.css";
import { Category } from "@/types/notes";
import { getCategories } from "@/lib/api/clientApi";

const TagsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className={css.menuContainer}>
      <button onClick={toggle} className={css.menuButton}>
        Notes
      </button>
      {isOpen && (
        <ul className={css.menuList}>
          <li className={css.menuItem}>
            <Link
              href={`/notes/filter/all`}
              onClick={toggle}
              className={css.menuLink}
            >
              All notes
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className={css.menuItem}>
              <Link
                href={`/notes/filter/${category.id}`}
                onClick={toggle}
                className={css.menuLink}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TagsMenu;
