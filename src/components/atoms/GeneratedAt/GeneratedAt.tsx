import React from "react";
import styles from "./styles.module.css";

type Props = {
  label: string;
};

export function GeneratedAt({ label }: Props) {
  return <p className={styles.generatedAt}>generatedAt: {label}</p>;
}
