import React from "react";
import style from "./Button.module.scss";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

function Button({ children, type, onClick }: Props) {
  return (
    <button onClick={onClick} type={type || "button"} className={style.button}>
      {children}
    </button>
  );
}

export default Button;
