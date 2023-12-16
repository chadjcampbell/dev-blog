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
import ReactRouterBasics from "./routes/eachBlog/ReactRouterBasics.tsx";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

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
        path: "blogs/reactrouterbasics",
        element: <ReactRouterBasics />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Flowbite>
        <RouterProvider router={router} />
      </Flowbite>
    </QueryClientProvider>
  </React.StrictMode>
);
