import React from 'react';
import { GaugeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const GridItem = ({ image, title, difficulty, isDouble, to }) => {
    const boxStyle = 'bg-neutral-100 border-2 rounded-xl p-2 flex flex-col items-center justify-end transition-all duration-300 relative'; 
    const contentStyle = 'opacity-0 transition-all duration-300';
    const overlayStyle = 'rounded-xl absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-70 transition-all duration-300';

    return (
        <Link to={to} className={`${boxStyle} ${isDouble ? 'col-span-2' : ''} hover:scale-95`} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className={overlayStyle}></div>
            <h2 className={`z-10 text-md text-white font-bold font-primary ${contentStyle}`}>{title}</h2>
            <p className={`z-10 inline-flex gap-1 items-center text-xs font-semibold text-white font-primary ${contentStyle}`}>
                <GaugeIcon/>
                {difficulty}
            </p>
        </Link>
    );
}

const Grid = ({ data }) => {
    const categories = Object.keys(data);
    const recipesToShow = [];

    categories.forEach(category => {
        const recipesInCategory = data[category];
        const recipeKeys = Object.keys(recipesInCategory);
        for (let i = 0; i < Math.min(2, recipeKeys.length); i++) {
            const recipeKey = recipeKeys[i];
            const recipe = recipesInCategory[recipeKey];
            recipesToShow.push(recipe);
        }
    });

    return (
        <div className='flex flex-col md:grid md:grid-cols-3 auto-rows-[150px] gap-4 my-10'>
            {recipesToShow.map((recipe, i) =>
                <GridItem
                    to={recipe.link}
                    key={i}
                    image={recipe.image}
                    title={recipe.title}
                    difficulty={recipe.difficulty}
                    isDouble={i === 0 || i === 6 || i === 10} 
                />
            )}
        </div>
    );
}

export default Grid;
