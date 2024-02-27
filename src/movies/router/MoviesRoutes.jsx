import { Navigate } from "react-router-dom";
import { CharacterPage, DetailePage, MainPage, SearchPage } from "../pages";

export const ChildMoviesRoutes = [
  { path: "character/:mal_id", element: <CharacterPage /> },
  { path: "detail/:mal_id", element: <DetailePage /> },
  { path: "main", element: <MainPage/>},
  { path: "search", element: <SearchPage/>},
  { path: "/*", element: <Navigate to="/main" /> },
  { path: "/", element: <Navigate to="/main" /> },
];
