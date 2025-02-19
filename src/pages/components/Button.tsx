import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "submit" | "reset" | "button" | undefined
}

const Button:React.FC<ButtonProps> = ({children,onClick,type}) => {


  return (
    <button className='py-1.5 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer' onClick={onClick} type={type}>
        {children}
    </button>
  )
}

export default Button