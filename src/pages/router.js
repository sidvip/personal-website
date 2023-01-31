import LandingPage, { IntroBox } from "./landing-page";
import { createBrowserRouter } from "react-router-dom";
import CV from './cv';
import { Contacts } from "./contact";

const router = createBrowserRouter([
    {
        path: "/v2",
        element: <LandingPage />,
        children: [
            {
                path: "/v2",
                element: <IntroBox />
            },
            {
                path: "/v2/cv",
                element: <CV />,
            },
            {
                path: "/v2/contact",
                element: <Contacts />,
            },
        ],
        // errorElement: <div style={{ width: '100%', height: '100%', color: 'white' }}>Oops ! Something went wrong... :(</div>
    },
    // {
    //     path: "/v2/cv",
    //     element:,
    //     // errorElement: <div style={{ width: '100%', height: '100%', color: 'white' }}>Oops ! Something went wrong... :(</div>
    // },
]);

export default router;