import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage";
import AboutUs from "../pages/AboutPage";
import Profile from "../pages/Profile";
import Signin from "../pages/SignIn";
import Signup from "../pages/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Homepage
        },
        {
            path:"/aboutus",
            Component:AboutUs
        },
        {
            path:"/profile",
            Component:Profile
        },
        {
            path:"/signin",
            Component:Signin
        },
        {
            path:"/signup",
            Component:Signup
        },
        
        
    
    ]
  },
]);