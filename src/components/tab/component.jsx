import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Tab = ({ children, to }) => {
  return (
    <NavLink
      to = {to}
      className = {({ isActive }) => classNames(styles.root, {[styles.active]: isActive,})}
    >
      {children}
    </NavLink>
  );
}
