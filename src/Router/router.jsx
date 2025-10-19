import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AuthLayout from "../Layout/AuthLayout";
import Newsdeatails from "../Pages/Newsdeatails";
import PrivateRouter from "./PrivateRouter";

const router =createBrowserRouter([

    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                path:"",
                Component:Home,
            },
            {
                path:"/category/:id",
                Component:CategoryNews,
                loader:()=>fetch('/news.json')
            }
        ]
    },
     {
        path:'/auth',
        Component:AuthLayout,
        children:[
            {
               path:'/auth/login',
               Component:Login
            },
            {
               path:'/auth/register',
               Component:Register
            }
        ]
    },
    {
        path:'/news-details/:id',
        element:<PrivateRouter><Newsdeatails></Newsdeatails></PrivateRouter>,
        loader:()=>fetch('/news.json')
    }
    
])

export default router;