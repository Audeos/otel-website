import React, {useState} from "react";
import Data from "../../public/mock-rooms.json"
import GridRoom from "../components/grid-room";
import {Translations} from "../utils/Translations.ts";

const SearchPage: React.FC = () => {
    const [personCount, setPersonCount] = useState(1);
    const [area, setArea] = useState(16);
    const [features, setFeatures] = useState({
        childCare: false,
        breakfastDinner: false,
        pool: false,
        sauna: false,
        boatTour: false,
        culturalEvents: false,
        touristGuide: false,
        petFriendly: false,
    });

    const toggleFeature = (feature: keyof typeof features) => {
        setFeatures(prevState => ({...prevState, [feature]: !prevState[feature]}));
    };




    return (
        <div className={"w-full h-full flex"}>
            <div className="w-[500px] bg-gray-100 flex p-8">
                <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl">
                    <h1 className="text-xl font-bold mb-6 text-center">Filtreleme Seçenekleri</h1>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Kişi Sayısı: {personCount}</label>
                        <input
                            type="range"
                            min="1"
                            max="8"
                            value={personCount}
                            onChange={(e) => setPersonCount(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Metrekare: {area}m²</label>
                        <input
                            type="range"
                            min="16"
                            max="70"
                            value={area}
                            onChange={(e) => setArea(Number(e.target.value))}
                            className="w-full"
                        />
                    </div>
                    <div className="gap-4">
                        {Object.keys(features).map((featureKey) => (
                            <button
                                key={featureKey}
                                onClick={() => toggleFeature(featureKey as keyof typeof features)}
                                className="flex items-center py-2 px-4 rounded focus:outline-none"
                            >
                                <div className={`w-4 h-4 mr-2 rounded-full border-2 ${
                                    features[featureKey as keyof typeof features] ? 'bg-indigo-600 border-indigo-600' : 'bg-transparent border-gray-700'
                                }`}></div>
                                <span className="ml-2 overflow-clip">{Translations[featureKey as keyof typeof Translations]}</span>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <button className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-md shadow-sm">
                            Ara
                        </button>
                    </div>
                </div>
            </div>
            <div className={"h-full w-full py-6 gap-12 place-items-center grid grid-cols-3"}>
                {Data.map(room =>
                    <GridRoom {...room}/>
                )}
            </div>
        </div>

    )
}

export default SearchPage
