import React from "react";

const titles: Array<string> = [
    "Oda Bul",
    "Hakkımızda",
    "İletişim"
]

const Header: React.FC = () => {

    return (
        <div className={"flex flex-col items-center w-full h-auto bg-amber-300"}>
            <img className={"w-40 h-auto"} src={"logo.png"} alt={"logo"} />
            <div className={"justify-center flex gap-8 w-full"}>
                {titles.map((title) => (<div className={"w-auto text-center justify-center px-2 h-fit bg-amber-800"}>
                    {title}
                </div>))}
            </div>

        </div>
    )
}

export default Header
