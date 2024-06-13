import React, {useMemo} from "react";
import {TickIcon} from "../../utils/Icons.tsx";
import {Translations} from "../../utils/Translations.ts";

type GridRoomProps = {
    name: string,
    meters: number,
    capacity: number,
    price: number,
    childCare: boolean,
    breakfastDinner: boolean,
    pool: boolean,
    sauna: boolean,
    boatTour: boolean,
    culturalEvents: boolean,
    touristGuide: boolean,
    petFriendly: boolean,
}

const GridRoom: React.FC<GridRoomProps> = (props) => {

    const includedFeatures = useMemo(() => {
        const trueFeatures: string[] = [];
        for (const key in props) {
            if (typeof props[key as keyof GridRoomProps] === "boolean" && props[key as keyof GridRoomProps] === true) {
                trueFeatures.push(key);
            }
        }
        return trueFeatures;
    }, [props]);

    return (<div className={"rounded-lg overflow-hidden bg-white w-[280px] h-[280px] "}>
        <div className="relative flex justify-center items-end w-full h-[70%] bg-cover bg-[url(../../public/wallpapers/pic6.avif)]">
            <p className={" w-full text-xl font-thin py-2 text-white text-center bg-gradient-to-t from-black to-transparent"}>
                {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
                <span className={"text-sm text-gray-500 font-light rounded-bl-lg absolute p-2 right-0 top-0 bg-opacity-80 bg-white"}>1 gün {props.price}₺</span>
            </p>
        </div>
        <p className={"w-full h-full text-sm text-center"}>{includedFeatures.map(feature => <p className={"w-fit h-fit inline-flex"}><span><TickIcon/></span> {Translations[feature as keyof typeof Translations]}</p>
        )}</p>
    </div>)
}

export default GridRoom
