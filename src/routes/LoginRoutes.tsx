import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MinimalLayout from "layout/MinimalLayout";
import TowerDetails from "pages/TowerDetails";
import { Navigate } from "react-router-dom";

// render - login
const AuthLogin = Loadable(lazy(() => import("pages/authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("pages/authentication/Register"))
);
const NotFound = Loadable(lazy(() => import("pages/extra-pages/NotFound")));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
    // {
    //   path: "tower",
    //   children: [
    //     {
    //       path: ":id",
    //       element: <TowerDetails />,
    //     },
    //     {
    //       path: "",
    //       element: <Navigate to="/invalid" replace />,
    //     },
    //   ],
    // },
  ],
};

export default LoginRoutes;
