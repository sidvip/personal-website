import React from "react";
import LandingPage, { IntroBox } from "./landing-page";
import { createBrowserRouter } from "react-router-dom";
import CV from './cv';
import { Contacts } from "./contact";
import RobotGraspingPage from "./portfolio/robot-grasping";
import RoboticsProjects from "./portfolio/robotics-projects";
import HandsOnProjects from "./portfolio/hands-on";
import AchievementsFolio from "./portfolio/achievements-folio";

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
            {
                path: "/portfolio",
                children: [
                    {
                        path: "robot-grasping",
                        element: <RobotGraspingPage />
                    },
                    {
                        path: "robot-projects",
                        element: <RoboticsProjects />
                    },
                    {
                        path: "achievements-folio",
                        element: <AchievementsFolio />
                    },
                    {
                        path: "hands-on",
                        element: <HandsOnProjects />
                    },
                ]
            },
            {
                path: "*",
                element: <div className="section flex justify-center items-center is-medium">
                    <img src='https://www.mait.com/assets/admin/src/img/pages/404.gif' />
                </div>
            }
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