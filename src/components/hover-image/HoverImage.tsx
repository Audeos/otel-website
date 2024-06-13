import React, {useCallback} from "react";

type HoverImageProps = {
    src: string,
    title: string,
    description: string,
    isAlignedRight?: boolean,
}

const HoverImage: React.FC<HoverImageProps> = (props) => {
    const {src, description, title, isAlignedRight = true} = props

    const HoverAligned = useCallback(() => {
        const alignClass = isAlignedRight ? "translate-x-[1000px] group-hover:translate-x-[680px]" : "translate-x-[-320px] group-hover:translate-x-[0px]"
        return(
            <div className={"absolute top-0 bottom-0 flex transform bg-black bg-opacity-50 transition-transform duration-500 items-center justify-center group-hover:drag-content " + alignClass}>
                <p className="text-white font-thin text-lg p-4 w-80">
                    {description}
                </p>
            </div>
        )},
        [description, isAlignedRight]
    )
    return (
        <div className="flex relative group w-[1000px] overflow-hidden transform">
            <img
                src={src}
                alt="History Background"
                className="w-full object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                <h2 className="text-white text-3xl font-light">{title}</h2>
            </div>
            <HoverAligned/>
        </div>
    )
}

export default HoverImage
