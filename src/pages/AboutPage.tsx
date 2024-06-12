import React from "react";
import HoverImage from "../components/hover-image/HoverImage.tsx";

const AboutPage: React.FC = () => {


return (
<div>
    <HoverImage src={"/wallpapers/pic1.avif"}
                title={"Tarihçemiz"}
                description={"Sahte Otel, 1999 yılında kurulmuştur ve o zamandan beri misafirlerimize en iyi hizmeti sunmayı hedeflemektedir.\n"}
                />

    <HoverImage src={"/wallpapers/pic3.avif"}
                title={"Misyonumuz"}
                description={"Misyonumuz, misafirlerimize unutulmaz bir konaklama deneyimi sunmaktır. Konfor, kalite ve misafirperverlikten ödün vermeden, her bir misafirimizin otelimizde kendini evinde hissetmesini sağlamak için çalışıyoruz. Sürekli olarak yenilikçi çözümlerle hizmet kalitemizi artırmak ve sektörde öncü bir rol oynamak amacındayız."}
    />

    <HoverImage src={"/wallpapers/pic6.avif"}
                title={"Vizyonumuz"}
                description={"Vizyonumuz, turizm sektöründe uluslararası standartlarda hizmet veren, güvenilir ve tercih edilen bir marka olmaktır. Sahte Otel olarak, sürdürülebilir turizmi destekleyerek çevreye duyarlı ve sosyal sorumluluk bilinciyle hareket ediyoruz. Misafirlerimize en iyi deneyimi sunmak için sürekli olarak kendimizi geliştiriyoruz."}
    />

</div>
)
}

export default AboutPage
