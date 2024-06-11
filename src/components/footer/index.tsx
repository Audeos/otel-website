import React from "react";
import {NavLink} from "react-router-dom";
import {FacebookIcon, InstagramIcon, TwitterIcon} from "../../utils/Icons.tsx";

const Footer: React.FC = () => {

    return (
        <footer className={"flex h-32 bg-cyan-100"}>
            <NavLink className={"self-center w-fit h-fit ml-10"} to={"/"} end={true}>
                <img className={"w-40 h-auto"} src={"logo.png"} alt={"logo"}/>
            </NavLink>
            <div className={"w-fit self-center ml-24"}>
                <p className={"text-gray-700 italic"}>Tel: +90 537 309 02 20</p>
                <p className={"text-gray-700 italic"}>E-posta: talha.turk.ozkurt@gmail.com</p>
                <ul className={"flex self-center gap-4 mt-2"}>
                    <li>
                        <a href={"https://www.facebook.com"}>
                            <FacebookIcon/>
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.instagram.com"}>
                            <InstagramIcon/>
                        </a>
                    </li>
                    <li>
                        <a href={"https://www.x.com"}>
                            <TwitterIcon/>
                        </a>
                    </li>
                </ul>
            </div>
            <p className={"self-center text-xl ml-24"}>
                <NavLink to={"/about/"}>
                    Hakkımızda
                </NavLink>
            </p>
            <p className={"self-center text-xl ml-24"}>
                <NavLink to={"/communication/"}>
                    İletişim
                </NavLink>
            </p>
        </footer>
    )
}

export default Footer
