import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllCrops from "../pages/allcrops"; 
import AddCrop from "../pages/addcrop";   
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyPosts from "../pages/myposts";
import MyInterests from "../pages/myinterests";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "crops", 
        element: <AllCrops />,
      },
      {
        path: "addcrop", 
        element: <AddCrop />,
      },
      {
        path: "myposts",
        element: <MyPosts />,
      },
      {
        path: "myinterests",
        element: <MyInterests />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ],
  },
]);