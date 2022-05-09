import React from 'react'
import styles from "./TestStyle.module.css"
export default function testStyle() {
  return (
    <div>
      aqui los estilos
      <p className={styles["rd"]}>color rojos</p>
    </div>
  );
}
