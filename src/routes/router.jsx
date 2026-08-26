import { createBrowserRouter } from "react-router";

import MainLayOut from "../layouts/MainLayOut/MainLayOut";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import News from "../pages/News/News";
import CategoryNews from "../components/shared/CategoryNews/CategoryNews";
import LoginAuthentication from "../components/authLayout/LoginAuthentication/LoginAuthentication";


const router = createBrowserRouter([
    // ========================================
    // MAIN APPLICATION
    // ========================================
    {
        path: "/",
        Component: MainLayOut,

        handle: {
            leftSideBar: true,
            rightSideBar: true,
            promotionBG: true,
            footerHandle: true,
        },

        children: [

            // --------------------
            // HOME
            // --------------------
            {
                index: true,
                Component: Home,

                loader: () => {
                    return fetch("/data/news.json")
                        .then(response => response.json());
                },

                handle: {
                    leftSideBar: true,
                    rightSideBar: true,
                    promotionBG: true,
                    footerHandle: true,
                }
            },

            // --------------------
            // ABOUT
            // --------------------
            {
                path: "about",
                Component: About,

                handle: {
                    leftSideBar: false,
                    rightSideBar: false,
                    promotionBG: false,
                    footerHandle: true,
                }
            },

            // --------------------
            // NEWS
            // --------------------
            {
                path: "news",
                Component: News,

                handle: {
                    leftSideBar: true,
                    rightSideBar: true,
                    promotionBG: false,
                    footerHandle: true,
                }
            },

            // --------------------
            // CATEGORY
            // --------------------
            {
                path: "category/:id",
                Component: CategoryNews,

                loader: async ({ params }) => {
                    const response = await fetch("/data/news.json");
                    const data = await response.json();

                    return data.find(
                        news => news.id === params.id
                    );
                },

                handle: {
                    leftSideBar: false,
                    rightSideBar: true,
                    promotionBG: false,
                    scrollNews: false,
                    footerHandle: false,
                    navContent: false,
                }
            }
        ]
    },


    // ========================================
    // AUTHENTICATION
    // ========================================
    {
        path: "/auth",
        Component: AuthLayout,

        handle: {
            leftSideBar: false,
            rightSideBar: false,
            promotionBG: false,
            scrollNews: false,
            headerContent: false,
            footerHandle: false,
            authBG: true,
        },

        children: [

            // /auth
            {
                index: true,
                Component: LoginAuthentication,
            },

            // /auth/login
            {
                path: "login",
                Component: LoginAuthentication,
            }
        ]
    }
]);


export default router;