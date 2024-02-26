import React from "react";
import { X } from "lucide-react";

const Modal = ({ open, onClose, title, subtitle }) => {

    
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center
        transitions-all duration-300 z-20
        ${open ? "visible backdrop-blur-[3px] bg-black/30" : "invisible"}
    `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
            bg-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50"
        >
          <X />
        </button>
        <div className="text-center w-56 font-primary">
          <div className="mx-auto my-4 w-48">
            <h3 className="text-lg font-bold text-gray-800">{title}</h3>
            <ul className="text-sm text-gray-500 text-left">
                {subtitle.map((item, index) =>
                    <li key={index}>-{item}</li>
                )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
