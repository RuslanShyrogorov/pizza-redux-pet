import { Outlet } from "react-router-dom";
import Header from "../header/Header";

import s from "./Layout.module.scss";

function Layout() {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
