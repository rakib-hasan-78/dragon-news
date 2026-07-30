import { createBrowserRouter, defer } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/News/News";
import CategoryNews from "../components/shared/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index:true,
                Component:Home,
                loader:() => {
                    const allNews=fetch('/data/news.json')
                        .then(response=>response.json())
                        return defer({
                            news:allNews
                        })
                }
            },
            {
                path:'about',
                Component:About
            },
            {
                path:'news',
                Component:News
            },
            {
                path:'/category/:id',
                Component:CategoryNews
            }
        ]
    }
])



export default router;