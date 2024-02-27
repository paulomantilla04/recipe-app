import React from "react";
import logo from '../assets/paulochef.svg'
import { BeefIcon, FishIcon, SaladIcon, CupSodaIcon, MartiniIcon, CakeSliceIcon, WineIcon  } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const iconStyle = "inline-flex hover:scale-90 transition-all duration-300";

  return (
    <header className="bg-[#E8E8E0] rounded-full py-3 px-5 flex justify-between items-center fixed w-full z-10 font-primary sm:text-xs lg:text-md shadow-md">
        <div className="flex justify-start items-center space-x-4 text-black">
            <Link to="/carnes" href="" className={iconStyle}>
                <span className="sm:mr-2 text-2xl"><BeefIcon/></span>
                <span className="hidden sm:block">Carnes</span>
            </Link>
            <Link to="/mariscos" href="" className={iconStyle}>
                <span className="sm:mr-2 text-2xl"><FishIcon/></span>
                <span className="hidden sm:block">Mariscos</span>
            </Link>
            <Link to="/vegetarianos" href="" className={iconStyle}>
                <span className="sm:mr-2 text-2xl"><SaladIcon/></span>
                <span className="hidden sm:block">Vegetariano</span>
            </Link>
        </div>
        <div className="flex justify-center items-center hover:scale-90 transition-all duration-300">
            <Link to="/" href=""><img src={logo} className="w-32" alt="" /></Link>
        </div>
        <div className="flex justify-end items-center space-x-4 ">
            <Link to="/bebidas" href="" className={iconStyle}>
                <span className="sm:mr-2 text-2xl"><CupSodaIcon/></span>
                <span className="hidden sm:block">Bebidas</span>
            </Link>
            <Link to="/cocteleria" href="" className={iconStyle}>
                <span className="sm:mr-2 text-2xl"><WineIcon/></span>
                <span className="hidden sm:block">Coctelería</span>
            </Link>
            <Link to="/postres" href="" className={iconStyle}>
                <span className="sm:mr-2 text-2xl"><CakeSliceIcon/></span>
                <span className="hidden sm:block">Postres</span>
            </Link>
        </div>
    </header>
  );
};

export default Navbar;
