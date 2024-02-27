import React from 'react';
import { GaugeIcon } from 'lucide-react';

const GridItem = ({ image, title, difficulty, isDouble }) => {
    const boxStyle = 'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-end transition-all duration-300 relative'; 
    const contentStyle = 'opacity-0 transition-opacity duration-300';
    const overlayStyle = 'rounded-xl absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-all duration-300';

    return (
        <button className={`${boxStyle} ${isDouble ? 'col-span-2' : ''} hover:scale-95`} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className={overlayStyle}></div>
            <h2 className={`z-10 text-md text-white font-bold font-primary ${contentStyle}`}>{title}</h2>
            <p className={`z-10 inline-flex gap-1 items-center text-xs font-semibold text-white font-primary ${contentStyle}`}>
                <GaugeIcon/>
                {difficulty}
            </p>
        </button>
    );
}

const Grid = ({ data }) => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-3 auto-rows-[250px] gap-4 my-10'>
            {Object.keys(data).map((key, i) =>
                <GridItem key={i} image={data[key].image} title={data[key].title} difficulty={data[key].difficulty} isDouble={i === 3} />
            )}
        </div>
    );
}

export default Grid;
