import React from "react";
import Slider from "../components/slider";
import Card from "../components/card";

const HomePage: React.FC = () => {

    return (
        <div>
            <Slider/>
            <div className={"flex w-full h-[540px] px-40 relative justify-around items-center bg-blue-950"}>
                <p className={"text-3xl absolute left-auto right-auto top-6 z-20 text-white"}>Oda hizmetlerimiz</p>
                <Card title={"Temel"} features={["16m² oda", "1-2 kişilik", "Evcil hayvan hizmeti", "Kahvaltı ve akşam yemeği", "Havuz"]} price={"149.99₺"}/>
                <Card title={"Ayrıcalıklı"} features={["26m² + 14m² süit","1-4 kişilik","Çocuk bakım hizmeti","Sauna, Jakuzi, Hamam"]} price={"239.99₺"}/>
                <Card title={"Süper"} features={["40m² + 30m² süit","1-8 kişilik","Tekne turu","Ücretsiz kültür etkinlikleri","Turist Rehberi hizmeti"]} price={"289.99₺"}/>
            </div>
        </div>
    )
}

export default HomePage
