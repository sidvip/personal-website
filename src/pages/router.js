import React from "react";
import LandingPage, { IntroBox } from "./landing-page";
import { createBrowserRouter } from "react-router-dom";
import CV from './cv';
import { Contacts } from "./contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "/",
                element: <IntroBox />
            },
            {
                path: "/cv",
                element: <CV />,
            },
            {
                path: "/contact",
                element: <Contacts />,
            },
        ],
        // errorElement: <div style={{ width: '100%', height: '100%', color: 'white' }}>Oops ! Something went wrong... :(</div>
    },
    // {
    //     path: "/cv",
    //     element:,
    //     // errorElement: <div style={{ width: '100%', height: '100%', color: 'white' }}>Oops ! Something went wrong... :(</div>
    // },
]);

export default router;