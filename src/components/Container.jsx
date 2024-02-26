import React from 'react'

const Container = ({children}) => {
  return (
    <div className='parent h-screen flex flex-col items-center justify-center'>{children}</div>
  )
}

export default Container