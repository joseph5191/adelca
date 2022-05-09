import React from "react";
import styles from "./Message.module.css";
import Link from "next/link";


export default function Message() {
  return (
    <div>
      <a className={styles["fc"]}>fin de la clase</a>
      <Link href={"/"}>
        
        <button type="button" className="btn btn-primary">
          chaoooooo
        </button>
      </Link>
    </div>
  );
}
