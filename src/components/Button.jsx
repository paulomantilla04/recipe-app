import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className='bg-green-600 px-3 py-2 rounded-lg text-white font-primary text-sm font-semibold transition-all duration-300 hover:scale-90 hover:bg-green-800'>{text}</button>
  )
}

export default Button