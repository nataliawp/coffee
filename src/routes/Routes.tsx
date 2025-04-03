import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/home/Home"

const Routes = () => {
    const routes = createBrowserRouter([
        {path: "/", element: <Home />}
    ])
    return <RouterProvider router={routes} />
}

export default Routes