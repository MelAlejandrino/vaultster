import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home, Vault, Vaultster, ErrorPage, Dashboard, About } from "./pages";


function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "Dashboard",
      element: <Dashboard />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Vault />,
        },
        {
          path: "Vault",
          element: <Vault />,
        },
        {
          path:"Vault/:id",
          element: <Vaultster />,
        },
        {
          path: "About",
          element: <About />, 
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default AppRoutes;
