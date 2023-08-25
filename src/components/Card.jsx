import React from 'react'

export default function Card(props) {

    const{img,title,categoria,price} = props;
    
  return (
    <div className='bg-[#362C29]/50 p-6 rounded-2xl flex flex-col gap-2'>
      <img src={img} className='w-52 h-52 object-cover rounded-2xl' alt="" />
      <h1 className='text-xl text-white '>{title}</h1>
      <span className='text-gray-400'>{categoria}</span>
      <div className='flex items-center gap-4'>
        <h5 className='text-3xl  text-[#f83d3df8]'>${price}</h5>
        <button className='bg-[#f83d3df8] text-white font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200'>Buy</button>    
      </div>
    </div>
  )
}
