import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";

const router =createBrowserRouter([

    {
        path:'/',
        Component:HomeLayout
    },
     {
        path:'/auth',
        element: <h1>this is auth layout</h1>
    }
])

export default router;