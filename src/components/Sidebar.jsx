import React from 'react'
import {RiCurrencyLine, RiFacebookLine, RiYoutubeLine, RiInstagramLine, RiTwitterLine} from "react-icons/ri"

export default function Sidebar() {
  return (
    <div className='w-80 h-ful text-gray-400'>
           <div className='bg-[#362C29]/50 rounded-xl p-4 mb-4 '>
            <h4 className='mb-6 text-white text-lg'> categories</h4>
             <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='indy'/>
                    <label htmlFor='indy'>Indy</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Adventure'/>
                    <label htmlFor='Adventure'>Adventure</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='MMO'/>
                    <label htmlFor='MMO'>MMO</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Casual Game'/>
                    <label htmlFor='Casual Game'>Casual Game</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Strategy'/>
                    <label htmlFor='Strategy'>Strategy</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Simulator'/>
                    <label htmlFor='Simulator'>Simulator</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Sport Games'/>
                    <label htmlFor='Sport Games'>Sport Games</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Action Game'/>
                    <label htmlFor='Action Game'>Action Game</label>
                </div>
            </div>
            <h4 className='my-6  text-white text-lg'> Platafomrs</h4>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Pc'/>
                    <label htmlFor='Pc'>Pc</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Playstation 5'/>
                    <label htmlFor='Playstation 5'>Playstation 5</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Xbox One Serie X'/>
                    <label htmlFor='Xbox One Serie X'>Xbox One Serie X</label>
                </div>
                <div className='flex items-center gap-2'>
                    <input type='checkbox' className='' id='Nintendo Switch'/>
                    <label htmlFor='Nintendo Switch'>Nintendo Swtich</label>
                </div>
            </div>
            <h4 className='my-6  text-white text-lg'> Price</h4>
            <form className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-4'> 
                    <div className='relative'>
                    <RiCurrencyLine className='absolute left-2 top-1/2 -translate-y-1/2'/>
                    <input type='number' className='bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full'/>
                </div>
              <span>-</span>
              <div className='relative'>
                    <RiCurrencyLine className='absolute left-2 top-1/2 -translate-y-1/2'/>
                    <input type='number' className='bg-[#181A20] py-2 pl-8 pr-4 rounded-xl outline-none w-full'/>
                </div>
                </div>
                <button className='bg-[#f83d3df8] text-black font-bold rounded-full w-full p-3 hover:-translate-y-1 transition-all duration-200' type='submit'>Aply Filters</button>
            </form>
           </div>
           <ul className="flex items-center justify-between">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-2xl"
            >
              <RiFacebookLine />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-2xl"
            >
              <RiYoutubeLine />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-2xl"
            >
              <RiInstagramLine />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              className="text-2xl"
            >
              <RiTwitterLine />
            </a>
          </li>
        </ul>
    </div>
  )
}
