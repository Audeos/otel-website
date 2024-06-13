import React, {useState} from "react";
import Data from "../../public/mock-rooms.json"
import {Translations} from "../utils/Translations.ts";
import GridRoom from "../components/grid-room";
import FilterSlider from "../components/filter-slider";

const SearchPage: React.FC = () => {
    const [personCount, setPersonCount] = useState(1);
    const [area, setArea] = useState(16);
    const [price, setPrice] = useState(20);
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
        <div className="w-full h-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-[500px] bg-gray-100 flex p-4 lg:p-8">
                <div className="bg-white p-4 lg:p-8 rounded shadow-md w-full max-w-2xl">
                    <h1 className="text-xl font-bold mb-6 text-center">Filtreleme Seçenekleri</h1>
                    <FilterSlider
                        label="Kişi Sayısı"
                        min={1}
                        max={8}
                        value={personCount}
                        onChange={setPersonCount}
                    />
                    <FilterSlider
                        label="Metrekare"
                        min={16}
                        max={170}
                        value={area}
                        onChange={setArea}
                        unit="m²"
                    />
                    <FilterSlider
                        label="Fiyat"
                        min={20}
                        max={300}
                        value={price}
                        onChange={setPrice}
                        unit="₺"
                    />

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
                                <span className="ml-2">{Translations[featureKey as keyof typeof Translations]}</span>
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
            <div className="h-full w-full py-6 gap-6 place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {Data.map(room =>
                    <GridRoom key={room.id} {...room} />
                )}
            </div>
        </div>

    )
}

export default SearchPage
