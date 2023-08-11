import React from "react";
import { Outlet } from "react-router-dom";

const ContentContainer = () => {
  return (
    <div className="content">
      <Outlet />
    </div>
  );
};

export default ContentContainer;
