import React from "react";
import "./AdminLayout.css";
import { Outlet } from "react-router-dom";
import SideBarContainer from "./SideBarContainer";

const AdminLayout = () => {
  return (
    <div className="admin-layout-container">
      <SideBarContainer />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
