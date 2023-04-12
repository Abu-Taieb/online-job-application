import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Statistics from "./Component/Statistics/Statistics";
import Blog from "./Component/Blog/Blog";
import AppliedJobs from "./Component/AppliedJobs/AppliedJobs";
import ErrorPage from "./Component/ErrorPage";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Jobs from "./Component/Jobs/Jobs";
import SingleDetail from "./Component/SingleDetail/SingleDetail";


const router = createBrowserRouter([
    {
    path:"/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        loader: () => fetch('/Featured-Jobs.json'),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/Featured-Jobs.json'),
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "singleDetail",
        element: <SingleDetail></SingleDetail>,
        loader: () => fetch('/Featured-Jobs.json'),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
    }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
