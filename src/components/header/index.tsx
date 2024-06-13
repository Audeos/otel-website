import React, {PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";

const titles: Array<{ title: string, url: string }> = [
    {title: "Oda Bul", url: "/search/"},
    {title: "Paketler", url: "/details/"},
    {title: "Hakkımızda", url: "/about/"},
    {title: "İletişim", url: "/communication/"},
]

type NavigationItemProps = {
    url:string,
    title:string,
}

const Header: React.FC = () => {
    const NavigationItem: React.FC<PropsWithChildren<NavigationItemProps>> = (props) => {
        const {url, title} = props;
        return (
            <div className={"flex flex-col group w-auto text-center justify-center font-thin text-lg h-fit"}>
                <NavLink className={"w-full px-6"} to={url}>
                    {title}
                    <div className={"w-0 bg-gray-600 group-hover:w-full h-0.5 transform duration-500"}/>
                </NavLink>
            </div>
        )
    }

    return (
        <div className={"flex flex-col items-center w-full h-auto "}>
            <NavLink className={"w-fit h-fit"} to={"/"} end={true} >
                <img className={"w-40 h-auto"} src={"/logo.png"} alt={"logo"}/>
            </NavLink>
            <div className={"justify-center flex gap-8 py-6 w-full"}>
                {titles.map(({title, url}) => (<NavigationItem url={url} title={title}/>))}
            </div>

        </div>
    )
}

export default Header
