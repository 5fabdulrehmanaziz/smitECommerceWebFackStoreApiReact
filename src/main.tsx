import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/home";
import Product from "./pages/product";
import { useParams } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
