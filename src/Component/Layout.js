import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";
import { Provider } from "react-redux";
import { Store } from "../Store/Store";

const Layout = () => {
  return (
    <>
      <Provider store={Store}>
        <NavbarPanel />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default Layout;
