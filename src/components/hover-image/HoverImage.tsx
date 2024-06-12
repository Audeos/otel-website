import React from "react";

type HoverImageProps = {
    src: string,
    title: string,
    description: string,
}

const HoverImage: React.FC<HoverImageProps> = (props) => {
    const {src, description, title} = props

    return (
        <div className="flex relative group w-[800px] overflow-hidden transform">
            <img
                src={src}
                alt="History Background"
                className="w-full object-contain"
            />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                <h2 className="text-white text-3xl font-bold">{title}</h2>
            </div>
            <div className="absolute top-0 bottom-0 translate-x-[800px] transform group-hover:translate-x-[480px] bg-black bg-opacity-50 transition-transform duration-500 items-center justify-center group-hover:drag-content">
                <p className="text-white text-xl p-4 w-80">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default HoverImage
