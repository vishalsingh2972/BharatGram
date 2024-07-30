// '/login' and '/signup' will be open/public routes, rest all routes will be protected routes i.e user will only be able to access these routes after logging in

import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Error from "./pages/error";
import Signup from "./pages/signup";
import Home from "./pages/home";
import CreatePost from "./pages/post";
import Profile from "./pages/profile";
import MyPhotos from "./pages/myphotos";
import ProtectedRoutes from "./components/ProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        errorElement: <Error/>
      },
      {
        path: "/post",
        element: <CreatePost/>,
        errorElement: <Error/>
      },
      {
        path: "/profile",
        element: <Profile/>,
        errorElement: <Error/>
      },
      {
        path: "/myphotos",
        element: <MyPhotos/>,
        errorElement: <Error/>
      }  
    ]
  },
  {
    path: "/login",
    element: <Login/>,
    errorElement: <Error/>
  },
  {
    path: "/signup",
    element: <Signup/>,
    errorElement: <Error/>
  }
])

export default router;