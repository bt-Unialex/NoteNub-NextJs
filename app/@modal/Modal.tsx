"use client";
import { useEffect } from "react";
import css from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

export default Modal;
