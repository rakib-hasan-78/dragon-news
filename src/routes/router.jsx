import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/News/News";
import CategoryNews from "../components/shared/CategoryNews/CategoryNews";
import Authentication from "../components/authLayout/Authentication/Authentication";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        
        handle: {
            leftSideBar: true,
            rightSideBar: true,
            promotionBG: true, // Default: show the background
        },
        children: [
            {
                index: true,
                Component: Home,
                loader: () => {
                    return fetch("/data/news.json")
                        .then((response) => response.json());
                },
                // Explicitly declare for Home page
                handle: {
                    leftSideBar: true,
                    rightSideBar: true,
                    promotionBG: true,
                }
            },
            {
                path: "about",
                Component: About,
                // ❌ TURN OFF on About page
                handle: {
                    leftSideBar: false,
                    rightSideBar: false,
                    promotionBG: false, 
                },
            },
            {
                path: "news",
                Component: News,
                // ❌ TURN OFF on News page
                handle: {
                    leftSideBar: true,
                    rightSideBar: true,
                    promotionBG: false,
                }
            },
            {
                path: "category/:id",
                Component: CategoryNews,
                loader: async ({ params }) => {
                    const response = await fetch("/data/news.json");
                    const data = await response.json();
                    return data.find((news) => news.id === params.id);
                },
                // 🟢 TURN ON on Category pages
                handle: {
                    leftSideBar: false,
                    rightSideBar: true,
                    promotionBG: false,
                    scrollNews:false,
                    footerHandle: false,
                    navContent: false,
                },
            },
            {
                path:'/auth',
                element: <Authentication />,
                handle:{
                    leftSideBar: false,
                    rightSideBar:false,
                    scrollNews:false,
                    headerContent:false,
                    footerHandle:false,
                }
            }
        ],
    },
]);

export default router;
