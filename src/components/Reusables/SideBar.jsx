import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Logo from "../Nav & Logo/Logo.jsx";
import AppNav from "../Nav & Logo/AppNav.jsx";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Worldwise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
