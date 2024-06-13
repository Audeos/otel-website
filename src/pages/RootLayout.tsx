import React from "react";
import Header from "../components/header";
import {Outlet} from "react-router-dom";
import Footer from "../components/footer";

const RootLayout: React.FC = () => {


    return (
        <div className={"flex flex-col"}>
            <Header/>
            <main className={"flex-grow w-screen bg-repeat bg-60% bg-[url(/background2.png)]"}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default RootLayout
