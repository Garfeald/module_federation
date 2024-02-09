import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // ...shopRoutes,
            // ...adminRoutes
        ]
    },
]);