import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { User } from "./User";
import styles from "./styles.module.css";

function HeaderBase() {
  return (
    <div className={styles.module}>
      <Logo />
      <Nav />
      <User />
    </div>
  );
}

export const Header = React.memo(HeaderBase);
