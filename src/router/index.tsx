import { createBrowserRouter } from "react-router-dom";

import { LayoutPublic } from "../layout/layout-public";

import { Home } from "../pages/home";
import { Contact } from "../pages/contact";
import { ErrorPage } from "../pages/error-page";
import { About } from "../pages/about";
import { Services } from "../pages/services";
import { Blog } from "../pages/blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  }
]);
