import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Flowbite } from "flowbite-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import ErrorPage from "./components/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Flowbite>
      <RouterProvider router={router} />
    </Flowbite>
  </React.StrictMode>
);
