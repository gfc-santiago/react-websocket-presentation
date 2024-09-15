import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundError } from "./public/errors/note-found-error";
import { ServerError } from "./public/errors/server-error";
import PrivateLayout from "./private";
import DashboardLayout from "./private/dashboard";
import Viewer from "./private/viewer";
import HomePage from "./private/dashboard/home";
import SongsPage from "./private/dashboard/songs";
import ResponsePage from "./private/dashboard/responses";
import SocketProvider from "../hooks/socket-provider";

const AppRoutes: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PrivateLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [
            { path: "/dashboard", element: <HomePage /> },
            { path: "/dashboard/songs", element: <SongsPage /> },
            { path: "/dashboard/responses", element: <ResponsePage /> },
          ],
        },
        {
          path: "/viewer",
          element: (
            <SocketProvider>
              <Viewer />
            </SocketProvider>
          ),
        },
      ],
    },
    { path: "/500", element: <ServerError /> },
    { path: "*", element: <NotFoundError title="Page Not Found" /> },
  ]);
  return <RouterProvider router={routes} />;
};

export default AppRoutes;
