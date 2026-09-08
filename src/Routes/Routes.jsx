import React from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Apps from "../Components/Apps/Apps";
import AppDetails from "../Components/Apps/AppDetails";
import Installation from "../Components/Installation/Installation";
import MainApps from "../Components/MainApps/MainApps";

export let router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,

        element: <Home></Home>,
        loader: () => fetch("/appsData.json").then((res) => res.json()),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ),
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: () => fetch("/appsData.json").then((res) => res.json()),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ),
      },
    {
      path: '/mainApps',
      Component: MainApps,
       loader: () => fetch("/appsData.json").then((res) => res.json()),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ),

    },
      {
        path: "/installation",
        Component: Installation
      }
    ],
  },
]);
