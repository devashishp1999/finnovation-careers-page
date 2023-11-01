// Modules
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useScreenSize from "./hooks/useScreenSize";

const AppBody = () => {
  const viewport = useScreenSize(); // 'mobile | desktop'
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.location.pathname.includes("careers")) navigate("./careers");
  }, []);

  return (
    <main className={viewport}>
      <Outlet />
    </main>
  );
};

export default AppBody;
