import React from "react";
// import styles from ".././page.module.css";
import Link from "next/link";
import style from "./style.module.css";
export default function About() {
  return (
    <div className={style["main"]}>
      <div>about</div>
      <Link href={"/"}>go home</Link>
    </div>
  );
}
