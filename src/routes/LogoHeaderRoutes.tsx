import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import LogoLayout from "layout/LogoLayout";
import TowerDetails from "pages/TowerDetails";
import { Navigate } from "react-router-dom";

const NotFound = Loadable(lazy(() => import("pages/extra-pages/NotFound")));
const AuthLogin = Loadable(lazy(() => import("pages/authentication/Login")));

// ==============================|| AUTH ROUTING ||============================== //

const LogoHeaderRoutes = {
  path: "/",
  element: <LogoLayout />,
  children: [
    {
      path: "tower",
      children: [
        {
          path: ":id",
          element: <TowerDetails />,
        },
        {
          path: "",
          element: <Navigate to="/invalid" replace />,
        },
      ],
    },
    // { path: "login", element: <AuthLogin /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default LogoHeaderRoutes;
