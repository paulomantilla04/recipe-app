import React from 'react'
import { useState } from 'react';
import { HourglassIcon, Gauge, X } from 'lucide-react'
import Button from '../components/Button';
import Modal from '../components/Modal';
import Step from '../components/Step';

const Recipe = ({info}) => {

    const [openIngredients, setIngredients] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center py-20'>

        <div className="flex flex-row max-[640px]:flex-col items-center">
            <div className='w-[400px] h-[350px] m-3 max-[640px]:w-[300px] max-[640px]:h-[250px]'>
                <img src={info.image} className='w-full h-full object-cover rounded-xl' alt="" />
            </div>
            <div className="flex flex-col items-center px-2 justify-center">
                <h1 className='font-primary font-semibold text-4xl m-3 text-center'>{info.title}</h1>
                <div className="flex gap-6 font-primary font-semibold">
                <p className='inline-flex '>
                    <span className='mr-2'><HourglassIcon/></span>
                    <span>{info.time} mins</span>
                </p>
                <p className='inline-flex'>
                    <span className='mr-2'><Gauge/></span>
                    <span>{info.difficulty}</span>
                </p>
                </div>
                <div className="inline-flex gap-5 m-3">
                    <Button text="Ingredientes" onClick={()=>setIngredients(true)}/>
                </div>
                <hr className='border-t-1 border-[#BAC2B9] w-full'/>
                <Modal open={openIngredients} onClose={()=>setIngredients(false)} title="Ingredientes" subtitle={info.ingredients}></Modal>
            </div>
        </div>
            <h1 className='font-primary font-semibold text-4xl py-3 text-center'>Pasos</h1>
            <Step recipes={info.steps}/>
    </div>
  )
}

export default Recipe