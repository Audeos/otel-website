import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Slider: React.FC = () => {
    return (
        <Carousel
            showArrows={true}
            autoFocus={true}
            showStatus={false}
            interval={5000}
            swipeable={true}
            transitionTime={500}
            centerMode={true}
            showThumbs={false}
            thumbWidth={screen.width}
            centerSlidePercentage={100}
        >
            <div className={"w-[1920px] h-[600px]"}>
                <img className={"object-cover w-full h-full"} src={"wallpapers/pic6.avif"} alt={"slider_image-1"}/>
                <div className={"flex flex-col justify-center absolute bottom-0 h-64 px-12 w-full bg-gradient-to-t from-black to-transparent"}>
                    <p className={"text-left text-white text-3xl font-thin  stroke-black"}>İzmir, Urla</p>
                    <p className={"text-left text-white text-xl font-thin mt-4"}>Bu yazı Ege'nin sakin beldelerinden birinde geçirmeye ne dersiniz?</p>
                </div>
            </div>
            <div className={"w-[1920px] h-[600px]"}>
                <img className={"object-cover w-full h-full"} src={"wallpapers/pic1.avif"} alt={"slider_image-2"}/>
                <div className={"flex flex-col justify-center absolute bottom-0 h-64 px-12 w-full bg-gradient-to-t from-black to-transparent"}>
                    <p className={"text-left text-white text-3xl font-thin  stroke-black"}>Antalya, Kaş</p>
                    <p className={"text-left text-white text-xl font-thin mt-4"}>Tiyatro ve alışveriş merkezlerine yakın bu tatil yerinde deniz ve kültür bir arada.</p>
                </div>
            </div>
            <div className={"w-[1920px] h-[600px]"}>
                <img className={"object-cover w-full h-full"} src={"wallpapers/pic2.avif"} alt={"slider_image-3"}/>
                <div className={"flex flex-col justify-center absolute bottom-0 h-64 px-12 w-full bg-gradient-to-t from-black to-transparent"}>
                    <p className={"text-left text-white text-3xl font-thin  stroke-black"}>Rize, Kaçkar</p>
                    <p className={"text-left text-white text-xl font-thin mt-4"}>Karadeniz'in yaylalarında huzur dolu bir tatil sizi bekliyor.</p>
                </div>
            </div>

        </Carousel>
    )
}

export default Slider
