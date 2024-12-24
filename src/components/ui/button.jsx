import React from 'react'
 
const Button = ({onClick,text,active}) => {
  return (
    <div onClick={onClick} className={`p-2 flex justify-center items-center gap-x-2 cursor-pointer rounded-md border-[2px] border-solid hover:bg-slate-800 hover:text-blue-400 hover:border-blue-400 transition-all ${active ? 'bg-slate-800 border-blue-400 text-blue-400' : 'bg-transparent text-white'}`}>
      <span>{text}</span>
    </div>
  )
}

export default Button