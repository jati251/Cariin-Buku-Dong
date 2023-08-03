import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import HomeView from "./views/HomeView";
import WishlistView from "./views/WishlistView";
import UserView from "./views/UserView";
import RegisterView from "./views/RegisterView";

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
        path: "/wishlist",
        element: <WishlistView />,
      },
    ],
  },
  {
    path: "/login",
    element: <UserView />,
    loader: () => {
      let token = localStorage.userId;
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterView />,
    loader: () => {
      let token = localStorage.userId;
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
]);

export default router;
