import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Flowbite } from "flowbite-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./routes/Hero.tsx";
import About from "./routes/About.tsx";
import ErrorPage from "./routes/ErrorPage.tsx";
import Blogs from "./routes/Blogs.tsx";
import Contact from "./routes/Contact.tsx";
import ReactRouterCreateBrowserRouter from "./routes/eachBlog/ReactRouterCreateBrowserRouter.tsx";

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
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // individual blogs here
      {
        path: "blogs/reactrouterscreatebrowserrouter",
        element: <ReactRouterCreateBrowserRouter />,
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
