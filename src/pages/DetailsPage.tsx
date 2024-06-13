import React, {useEffect, useRef} from "react";
import {useParams} from "react-router";
import PackageDetails from "../components/package-details/PackageDetails.tsx";

const DetailsPage: React.FC = () => {
    const {type} = useParams();
    const basicRef = useRef<HTMLDivElement>(null);
    const exclusiveRef = useRef<HTMLDivElement>(null);
    const superRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        switch (type) {
            case "0":
                basicRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
                break;
            case "1":
                exclusiveRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
                break;
            case "2":
                superRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
                break;
        }
    }, [type]);

    return (
        <div className="mx-4 lg:mx-14 flex flex-col border-x-2 border-[#050A28]">
            <PackageDetails
                title="Temel Paket"
                image="/wallpapers/pic3.avif"
                bgColor="bg-[#edf1f6]"
                textColor="text-[#050A28]"
                details={[
                    { label: "Oda Boyutu", value: "34m² oda" },
                    { label: "Kapasite", value: "1-2 kişilik" },
                    { label: "Evcil Hayvan Hizmeti", value: "Evet" },
                    { label: "Yemek", value: "Kahvaltı ve akşam yemeği" },
                    { label: "Havuz", value: "Evet" },
                ]}
                description="Temel paketimiz, konforlu ve ekonomik bir tatil arayan misafirlerimiz için idealdir. 16 metrekarelik odalarımızda, bir veya iki kişi rahatça konaklayabilir. Evcil hayvan dostu odalarımızda, sevimli dostlarınızı da yanınızda getirebilirsiniz. Sabah kahvaltısı ve akşam yemeği, otelimizin restoranında sunulmaktadır. Ayrıca, gün boyu kullanabileceğiniz yüzme havuzumuz da hizmetinizdedir."
            />
            <PackageDetails
                title="Ayrıcalıklı Paket"
                image="/wallpapers/pic1.avif"
                bgColor="bg-[#bad6eb]"
                textColor="text-[#FAF4E9]"
                details={[
                    { label: "Oda Boyutu", value: "70m² + 35m² süit" },
                    { label: "Kapasite", value: "1-4 kişilik" },
                    { label: "Evcil Hayvan Hizmeti", value: "Evet" },
                    { label: "Yemek", value: "Kahvaltı ve akşam yemeği" },
                    { label: "Havuz", value: "Evet" },
                    { label: "Çocuk Bakım Hizmeti", value: "Evet" },
                    { label: "Sauna, Jakuzi, Hamam", value: "Evet" },
                ]}
                description="Ayrıcalıklı paketimiz, aileler ve geniş gruplar için mükemmel bir seçenektir. 26 metrekarelik ana oda ve 14 metrekarelik süit ile geniş ve konforlu bir konaklama deneyimi sunar. Çocuk bakım hizmetimiz sayesinde, ebeveynler rahatça dinlenirken çocuklarınız güvende olacak. Sauna, jakuzi ve hamam gibi lüks hizmetlerle tatilinizi daha da keyifli hale getirebilirsiniz."
                reverse
            />
            <PackageDetails
                title="Süper Paket"
                image="/wallpapers/pic2.avif"
                bgColor="bg-[#7096d1]"
                textColor="text-[#FAF4E9]"
                details={[
                    { label: "Oda Boyutu", value: "110m² + 60m² süit" },
                    { label: "Kapasite", value: "1-8 kişilik" },
                    { label: "Evcil Hayvan Hizmeti", value: "Evet" },
                    { label: "Yemek", value: "Kahvaltı ve akşam yemeği" },
                    { label: "Havuz", value: "Evet" },
                    { label: "Çocuk Bakım Hizmeti", value: "Evet" },
                    { label: "Sauna, Jakuzi, Hamam", value: "Evet" },
                    { label: "Tekne Turu", value: "Evet" },
                    { label: "Ücretsiz Kültür Etkinlikleri", value: "Evet" },
                    { label: "Turist Rehberi Hizmeti", value: "Evet" },
                ]}
                description="Süper paketimiz, en üst düzeyde lüks ve konfor arayan misafirlerimiz için tasarlandı. 40 metrekarelik geniş oda ve 30 metrekarelik süit, büyük aileler ve gruplar için idealdir. Tekne turları ile denizin keyfini çıkarabilir, ücretsiz kültür etkinlikleri ile bölgenin zengin kültürünü keşfedebilirsiniz. Kültür Bakanlığı tarafınca onaylı, alanında uzman Profesyonel Turist Rehberlerimizin hizmetiyle, tatiliniz unutulmaz bir tecrübeye dönüşecek."
            />
        </div>
    )
}


export default DetailsPage
