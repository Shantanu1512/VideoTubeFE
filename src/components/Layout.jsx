import React from "react";
import Sidepanel from "./Header/Sidepanel";
import SearchBar from "./Header/SearchBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className="sm:flex flex-none">
        <div>
          <Sidepanel />
        </div>
        <div className="sm:flex-1">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
