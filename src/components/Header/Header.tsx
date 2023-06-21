import React from "react";
import styles from "./Header.module.css";
import { HeaderProps } from "../../models/Header";

const Header = ({ title }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div>{title}</div>
    </div>
  );
};

export default Header;
