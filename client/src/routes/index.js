import { createBrowserRouter } from "react-router-dom";
import Home from "page/Home";
import PostDetail from "page/PostDetail";
import { MainLayout } from "components/Layout";
import NotFound from "components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
      },
    ],
  },
]);
