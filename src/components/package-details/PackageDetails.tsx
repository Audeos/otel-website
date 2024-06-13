import React from 'react';

type PackageDetailsProps = {
    title: string;
    image: string;
    bgColor: string;
    textColor: string;
    details: { label: string; value: string }[];
    description: string;
    reverse?: boolean;
};

const PackageDetails: React.FC<PackageDetailsProps> = (props) => {
    const { title, image, bgColor, textColor, details, description, reverse = false } = props;
    return (
        <>
            <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-between`}>
                <img className="h-64 lg:h-[600px] object-cover w-full lg:w-auto" src={image} alt={title} />
                <div className={`w-full px-4 lg:px-10 py-6 ${bgColor} ${textColor}`}>
                    <p className="text-2xl text-center font-light">{title}</p>
                    <ul className="list-disc space-y-2 font-thin text-xl mt-6">
                        {details.map((detail, index) => (
                            <li key={index}>
                                <span className="font-light">{detail.label}:</span> {detail.value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <p className="p-4 lg:p-10 text-xl font-thin bg-[#FDFFFB] flex flex-col gap-4">
                <span className="text-2xl">Detaylı Açıklama:</span>
                {description}
            </p>
        </>
    );
};

export default PackageDetails;
