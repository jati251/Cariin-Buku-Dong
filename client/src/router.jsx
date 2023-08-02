import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import HomeView from "./views/HomeView";
import DetailView from "./views/DetailView";
import WishlistView from "./views/WishlistView";
import UserView from "./views/UserView";

const router = createBrowserRouter([
  {
    element: <App />,
    // loader: () => {
    //   let token = localStorage.userId;
    //   if (!token) {
    //     return redirect("/login");
    //   }
    //   return null;
    // },
    children: [
      {
        path: "/",
        element: <HomeView />,
      },
      {
        path: "/detail/:id",
        element: <DetailView />,
      },
      {
        path: "/wishlist",
        element: <WishlistView />,
      },
    ],
  },
  {
    path: "/login",
    element: <UserView />,
    // loader: () => {
    //   let token = localStorage.userId;
    //   if (token) {
    //     return redirect("/menu");
    //   }
    //   return null;
    // },
  },
]);

export default router;
