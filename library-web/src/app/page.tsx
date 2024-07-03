import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles["main"]}>
      <div>hello world</div>
      <Link href="about">go about</Link>
    </div>
  );
}
