import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export const Logo = () => (
  <h1 className={styles.module}>
    <Link prefetch={false} href={`/`}>
      <a>Next.js x GitHub API</a>
    </Link>
  </h1>
);
