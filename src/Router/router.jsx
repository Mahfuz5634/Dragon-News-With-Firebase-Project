import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import { Component } from "react";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
        element: <h1>this is auth layout</h1>
    }
])

export default router;