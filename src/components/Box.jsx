import React from 'react';
import img from '../assets/burger.webp';
import { Link } from 'lucide-react';
import { Link as LinkRouter} from 'react-router-dom';

const Box = ({title, image, to, category}) => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="bg-[#ffffff] rounded-lg shadow-2xl px-8 py-6">
        <img
          className="rounded-xl mx-auto mb-4 object-cover h-36 w-64"
          src={image}
          alt="Imagen"
        />
        <div className="flex flex-col items-center"> 
          <h2 className="text-lg font-bold text-center max-w-md font-primary">{title}</h2>
          <p className='text-xs font-primary'>Categoría: {category}</p>
          <LinkRouter to={to} className="bg-[#839580] hover:bg-[#697767] text-white font-bold py-2 rounded-full w-full mt-2 transition-all duration-300 hover:scale-95 inline-flex items-center justify-center text-sm">
            <Link className='mr-2' size={16}/> Ver más
          </LinkRouter>
        </div>
      </div>
    </div>
  );
};

export default Box;
