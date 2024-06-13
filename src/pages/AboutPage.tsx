import React from "react";
import HoverImage from "../components/hover-image/HoverImage.tsx";

const AboutPage: React.FC = () => {


    return (
        <div className={"flex flex-col gap-12 justify-center items-center"}>
            <HoverImage src={"/wallpapers/pic1.avif"}
                        title={"Tarihçemiz"}
                        description={"Sahte Otel, 1999 yılında kurulmuştur ve o zamandan beri misafirlerimize en iyi hizmeti sunmayı hedeflemektedir.\n"}
            />

            <HoverImage src={"/wallpapers/pic3.avif"}
                        title={"Misyonumuz"}
                        description={"Misyonumuz, misafirlerimize unutulmaz bir konaklama deneyimi sunmaktır. Konfor, kalite ve misafirperverlikten ödün vermeden, her bir misafirimizin otelimizde kendini evinde hissetmesini sağlamak için çalışıyoruz. Sürekli olarak yenilikçi çözümlerle hizmet kalitemizi artırmak ve sektörde öncü bir rol oynamak amacındayız."}
                        isAlignedRight={false}
            />

            <HoverImage src={"/wallpapers/pic6.avif"}
                        title={"Vizyonumuz"}
                        description={"Vizyonumuz, turizm sektöründe uluslararası standartlarda hizmet veren, güvenilir ve tercih edilen bir marka olmaktır. Sahte Otel olarak, sürdürülebilir turizmi destekleyerek çevreye duyarlı ve sosyal sorumluluk bilinciyle hareket ediyoruz. Misafirlerimize en iyi deneyimi sunmak için sürekli olarak kendimizi geliştiriyoruz."}
            />

            <HoverImage src={"/wallpapers/pic6.avif"}
                        title={"Değerlerimiz"}
                        description={"Misafirlerimizin memnuniyeti bizim için en önemli önceliktir. Onların ihtiyaçlarını en iyi şekilde karşılamak için çalışıyoruz. " +
                            "Hizmetlerimizde en yüksek kalite standartlarını benimseyerek misafirlerimize güvenilir ve konforlu bir konaklama sunuyoruz." +
                            "Sürekli olarak yeni ve yaratıcı çözümler üreterek hizmetlerimizi geliştirmek ve misafirlerimize en iyisini sunmak için çaba gösteriyoruz." +
                            "Çevreye olan sorumluluğumuzun bilinciyle hareket ediyor, sürdürülebilir turizm anlayışını benimsiyoruz." +
                            "Toplumsal Sorumluluk: Toplumumuza katkıda bulunmak ve sosyal sorumluluk projelerine destek vermek, işletme kültürümüzün önemli bir parçasıdır."}
                        isAlignedRight={false}
            />

        </div>
    )
}

export default AboutPage
