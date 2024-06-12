import React, {useCallback, useEffect, useMemo} from "react";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

const DetailsPage: React.FC = () => {
    const {type} = useParams();

    useEffect(() => {

    }, [type]);

    return (
        <div className={"px-14 py-10"}>
            <div className={"flex justify-between text-white"}>
                <img className={"h-[600px] object-cover"} src={"../public/wallpapers/pic3.avif"} alt={"pic2"}/>
                <div className={"w-full px-10 py-6 bg-[#421700] text-[#E4D1C3]"}>
                    <p className={"text-2xl text-center font-light"}>Temel Paket</p>
                    <ul className={"list-disc space-y-2 font-thin text-xl mt-6"}>
                        <li>
                            <span className={"font-light"}>Oda Boyutu:</span> 34m² oda
                        </li>
                        <li>
                            <span className={"font-light"}>Kapasite:</span> 1-2 kişilik
                        </li>
                        <li>
                            <span className={"font-light"}>Evcil Hayvan Hizmeti:</span> Evet
                        </li>
                        <li>
                            <span className={"font-light"}>Yemek:</span> Kahvaltı ve akşam yemeği
                        </li>
                        <li>
                            <span className={"font-light"}>Havuz:</span> Evet
                        </li>
                    </ul>
                </div>
            </div>
            <p className={"p-10 text-xl font-thin bg-[#FDFFFB] flex flex-col gap-4"}>
                <span className={"text-2xl "}>Detaylı Açıklama:</span>
                Temel paketimiz, konforlu ve ekonomik bir tatil arayan misafirlerimiz için idealdir. 16 metrekarelik odalarımızda, bir veya iki kişi rahatça konaklayabilir. Evcil hayvan dostu odalarımızda, sevimli dostlarınızı da yanınızda getirebilirsiniz. Sabah kahvaltısı ve akşam yemeği, otelimizin restoranında sunulmaktadır. Ayrıca, gün boyu kullanabileceğiniz yüzme havuzumuz da hizmetinizdedir.
            </p>

            <div className={"flex justify-between"}>
                <div className={"w-full px-10 py-6 bg-[#001E4D] text-[#FAF4E9]"}>
                    <p className={"text-2xl text-center  font-light"}>Ayrıcalıklı Paket</p>
                    <ul className={"list-disc space-y-2 font-thin  text-xl mt-6"}>
                        <li>
                            <span className={"font-light"}>Oda Boyutu:</span> 70m² + 35m² süit
                        </li>
                        <li>
                            <span className={"font-light"}>Kapasite:</span> 1-4 kişilik
                        </li>
                        <li>
                            <span>Evcil Hayvan Hizmeti:</span> Evet
                        </li>
                        <li>
                            <span>Yemek:</span> Kahvaltı ve akşam yemeği
                        </li>
                        <li>
                            <span className={"font-light"}>Havuz:</span> Evet
                        </li>
                        <li>
                            <span className={"font-light"}>Çocuk Bakım Hizmeti:</span> Evet
                        </li>
                        <li>
                            <span className={"font-light"}>Sauna, Jakuzi, Hamam:</span> Evet
                        </li>
                    </ul>
                </div>
                <img className={"h-[600px] object-cover"} src={"../public/wallpapers/pic1.avif"} alt={"pic2"}/>
            </div>
            <p className={"p-10 text-xl font-thin bg-[#FDFFFB] flex flex-col gap-4"}>
                <span className={"text-2xl "}>Detaylı Açıklama:</span>
                Ayrıcalıklı paketimiz, aileler ve geniş gruplar için mükemmel bir seçenektir. 26 metrekarelik ana oda ve 14 metrekarelik süit ile geniş ve konforlu bir konaklama deneyimi sunar. Çocuk bakım hizmetimiz sayesinde, ebeveynler rahatça dinlenirken çocuklarınız güvende olacak. Sauna, jakuzi ve hamam gibi lüks hizmetlerle tatilinizi daha da keyifli hale getirebilirsiniz. </p>


            <div className={"flex justify-between"}>
                <img className={"h-[600px] object-cover"} src={"../public/wallpapers/pic2.avif"} alt={"pic3"}/>
                <div className={`w-full px-10 py-6 bg-[#F1FFF4]`}>
                    <p className={"text-2xl text-center font-light"}>Süper Paket</p>
                    <ul className={"list-disc space-y-2 font-thin text-xl mt-6"}>
                        <li>
                            <span className={"font-light"}>Oda Boyutu:</span> 110m² + 60m² süit
                        </li>
                        <li>
                            <span className={"font-light"}>Kapasite:</span> 1-8 kişilik
                        </li>
                        <li>
                            <span>Evcil Hayvan Hizmeti:</span> Evet
                        </li>
                        <li>
                            <span>Yemek:</span> Kahvaltı ve akşam yemeği
                        </li>
                        <li>
                            <span>Havuz:</span> Evet
                        </li>
                        <li>
                            <span>Çocuk Bakım Hizmeti:</span> Evet
                        </li>
                        <li>
                            <span>Sauna, Jakuzi, Hamam:</span> Evet
                        </li>
                        <li>
                            <span className={"font-light"}>Tekne Turu:</span> Evet
                        </li>
                        <li>
                            <span className={"font-light"}>Ücretsiz Kültür Etkinlikleri:</span> Evet
                        </li>
                        <li>
                            <span className={"font-light"}>Turist Rehberi Hizmeti:</span> Evet
                        </li>
                    </ul>
                </div>
            </div>
            <p className={"p-10 text-xl font-thin bg-[#FDFFFB] flex flex-col gap-4"}>
                <span className={"text-2xl "}>Detaylı Açıklama:</span>
                Süper paketimiz, en üst düzeyde lüks ve konfor arayan misafirlerimiz için tasarlandı. 40 metrekarelik geniş oda ve 30 metrekarelik süit, büyük aileler ve gruplar için idealdir. Tekne turları ile denizin keyfini çıkarabilir, ücretsiz kültür etkinlikleri ile bölgenin zengin kültürünü keşfedebilirsiniz. Kültür Bakanlığı tarafınca onaylı, alanında uzman Profesyonel Turist Rehberlerimizin hizmetiyle, tatiliniz unutulmaz bir tecrübeye dönüşecek. </p>

            <p className={"italic font-light text-2xl flex justify-center items-center gap-2 mt-6"}>Daha detaylı bilgi ve diğer sorularınız için
                <NavLink to={"/communication/"}>
                    <span className={"text-blue-900 text-right underline"}> bize ulaşın</span>
                </NavLink>
            </p>

        </div>
    )
}


export default DetailsPage
