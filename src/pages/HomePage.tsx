import React from "react";
import Slider from "../components/slider";
import Card, {CardTypes} from "../components/card";

const HomePage: React.FC = () => {

    return (
        <div>
            <Slider/>
            <div className={"flex w-full h-[540px] px-40 relative justify-around items-center bg-blue-950"}>
                <p className={"text-3xl absolute left-auto right-auto top-6 z-20 text-white"}>Oda hizmetlerimiz</p>
                <Card title={"Temel"} features={["34m² oda", "1-2 kişilik", "Evcil hayvan hizmeti", "Kahvaltı ve akşam yemeği", "Havuz"]} price={"149.99₺"} type={CardTypes.BASIC}/>
                <Card title={"Ayrıcalıklı"} features={["70m² + 35m² süit", "1-4 kişilik", "Çocuk bakım hizmeti", "Sauna, Jakuzi, Hamam"]} price={"239.99₺"} type={CardTypes.EXCLUSIVE}/>
                <Card title={"Süper"} features={["110m² + 60m² süit", "1-8 kişilik", "Tekne turu", "Ücretsiz kültür etkinlikleri", "Turist Rehberi hizmeti"]} price={"289.99₺"} type={CardTypes.SUPER}/>
            </div>
        </div>
    )
}

export default HomePage
