import { Outlet } from "react-router-dom";
import { OPnavbar } from "../../ui";

export const MoviesRoutes = () => {
  return (
    <>
      <OPnavbar></OPnavbar>
      <Outlet></Outlet>
    </>
  );
};
