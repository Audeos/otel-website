import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./pages/RootLayout.tsx";
import HomePage from "./pages/HomePage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import CommunicationPage from "./pages/CommunicationPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

function App() {

    const router = createBrowserRouter([{
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: "/search/", element: <SearchPage/>},
            {path: "/about/", element: <AboutPage/>},
            {path: "/communication/", element: <CommunicationPage/>},
            {path: "/details/:type?/", element: <DetailsPage/>}
        ]
    }])

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
