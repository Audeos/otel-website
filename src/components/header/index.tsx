import React, {PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

const titles: Array<{ title: string, url: string }> = [
    {title: "Oda Bul", url: "/search/"},
    {title: "Hakkımızda", url: "/about/"},
    {title: "İletişim", url: "/communication/"},
]

type NavigationItemProps = {
    children: React.ReactNode
}

const Header: React.FC = () => {
    const NavigationItem: React.FC<PropsWithChildren<NavigationItemProps>> = (props) => (
        <div className={"w-auto text-center justify-center px-2 h-fit bg-amber-800"}>
            {props.children}
        </div>
    )
    return (
        <div className={"flex flex-col items-center w-full h-auto bg-amber-300"}>
            <NavLink to={"/"} end={true} >
                <img className={"w-40 h-auto"} src={"logo.png"} alt={"logo"}/>
            </NavLink>
            <div className={"justify-center flex gap-8 w-full"}>
                {titles.map(({title, url}) => (<NavigationItem>
                    <NavLink to={url}>
                        {title}
                    </NavLink>
                </NavigationItem>))}
            </div>

        </div>
    )
}

export default Header
