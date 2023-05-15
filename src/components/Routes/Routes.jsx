import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home";
import Error from "../Page/Error/Error";
import About from "../Page/About/About";
import Service from "../Page/Service/Service";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "service",
          element: <Service></Service>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>,
        },
        {
          path: "*",
          element: <Error></Error>,
        }

      ]
    },
  ]);

  export default router;