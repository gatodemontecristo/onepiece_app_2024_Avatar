import { Outlet } from "react-router-dom";
import { OPfooterbar, OPnavbar } from "../../ui";
import { useState } from "react";

export const MoviesRoutes = () => {
  const [navColor, setnavColor] = useState("orange");
  return (
    <>
      <OPnavbar navColor={navColor}></OPnavbar>
      <Outlet  context={setnavColor}></Outlet>
      
    </>
  );
};
