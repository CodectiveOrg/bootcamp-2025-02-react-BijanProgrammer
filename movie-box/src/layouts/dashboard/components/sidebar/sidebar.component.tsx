import { ReactElement } from "react";

import { NavLink } from "react-router";

import clsx from "clsx";

import SignOutButtonComponent from "../sign-out-button/sign-out-button.component.tsx";

import styles from "./sidebar.module.css";

export type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Profile", href: "/dashboard" },
  { title: "Selection", href: "/dashboard/selection" },
];

export default function SidebarComponent(): ReactElement {
  return (
    <div className={styles.sidebar}>
      <ul>
        {navItems.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.href}
              className={({ isActive }) => clsx(isActive && styles.active)}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <SignOutButtonComponent />
    </div>
  );
}
