import React from "react";
import Header from "../components/header";
import {Outlet} from "react-router-dom";

const RootLayout: React.FC = () => {


return (
    <>
        <Header/>
        <Outlet/>
    {/*    todo: footer*/}
    </>
)
}

export default RootLayout
