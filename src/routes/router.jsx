import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/News/News";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index:true,
                Component:Home
            },
            {
                path:'about',
                Component:About
            },
            {
                path:'news',
                Component:News
            }
        ]
    }
])

export default router;