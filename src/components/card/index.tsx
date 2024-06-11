import React from "react";

type CardProps = {
    title: string,
    features: string[],
    price:string,
}
const Card: React.FC<CardProps>= (props) => {


return (
    <button type={"button"} className={"flex flex-col h-[70%] group w-80 rounded-lg bg-white p-6"}>
        <p className={"text-2xl"}>{props.title}</p>
        <ul className={"list-disc h-full text-left px-6 text-lg mt-2 gap-2"}>
            {props.features.map(feature => (
                <li>
                    <p>
                        {feature}
                    </p>
                </li>
            ))}
        </ul>
        <p className={"self-center mb-2 text-lg font-medium text-blue-900"}>
            {props.price}'dan başlayan fiyatlarla
        </p>
        <div className="w-full text-blue-700 group-hover:text-white border border-blue-700 group-hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Daha fazlasını öğren</div>
    </button>
)
}

export default Card
