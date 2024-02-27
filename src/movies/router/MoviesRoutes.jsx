import { Navigate } from "react-router-dom";
import { CharacterPage, DetailePage, MainPage, SearchPage } from "../pages";

export const ChildMoviesRoutes = [
  { path: "character", element: <CharacterPage /> },
  { path: "detail", element: <DetailePage /> },
  { path: "main", element: <MainPage/>},
  { path: "search", element: <SearchPage/>},
  { path: "/*", element: <Navigate to="/main" /> },
  { path: "/", element: <Navigate to="/main" /> },
];
