import { createBrowserRouter } from "react-router-dom";
import { App } from "@/components/App/App";
import { Suspense } from "react";
import { LazyShop } from '@/pages/shop/Shop.lazy'

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/shop',
                element: <Suspense fallback={'Loading...'}><LazyShop /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;