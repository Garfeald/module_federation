import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { Suspense } from "react";
import {LazyAbout} from "@/pages/admin/About.lazy";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;