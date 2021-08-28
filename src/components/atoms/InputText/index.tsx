import React from "react";
import styles from "./styles.module.css";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputText: React.FC<Props> = ({
  className = "",
  type = "text",
  ...props
}) => (
  <input {...props} type={type} className={`${className} ${styles.input}`} />
);
