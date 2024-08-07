import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./component/Navigation.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigation />,
      },
      {
        path: "/chats",
        element: <div>Chat page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
