import React from "react";
import styles from "./styles.module.css";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button: React.FC<Props> = ({ className = "", ...props }) => (
  <button {...props} className={`${className} ${styles.button}`} />
);
