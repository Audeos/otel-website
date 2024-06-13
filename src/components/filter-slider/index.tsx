import React from 'react';

type SliderComponentProps = {
    label: string;
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
    unit?: string;
};

const FilterSlider: React.FC<SliderComponentProps> = (props) => {
    const {label,max,min,value,onChange,unit} = props;
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">{label}: {value}{unit}</label>
            <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full"
            />
        </div>
    );
};

export default FilterSlider;
