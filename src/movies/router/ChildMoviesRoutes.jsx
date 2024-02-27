import { Outlet } from "react-router-dom";
import { OPfooterbar, OPnavbar } from "../../ui";

export const MoviesRoutes = () => {
  return (
    <>
      <OPnavbar></OPnavbar>
      <Outlet></Outlet>
      
    </>
  );
};
