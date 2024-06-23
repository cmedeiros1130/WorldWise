import SideBar from "../components/Reusables/SideBar";
import styles from "./AppLayout.module.css";
import Map from "../components/Form & Map/Map";
import User from "../components/Form & Map/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
