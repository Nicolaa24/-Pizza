import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-gray-900 pt-12 px-12 pb-8'>
      <div>

        <div className='mb-4'>
          <span className='uppercase font-bold text-xs text-zinc-500'>Контакти</span>
        </div>
        
        <div className='mb-8'>
          <ul>
            <li>
              <a href='tel: +380441234567' className='font-bold text-xs text-gray-400 hover:text-gray-300 hover:underline'>044 123 45 67</a>
            </li>
            <li>
              <a href='mailto:PizzaLviv@gmail.com' className='font-bold text-xs text-gray-400 hover:text-gray-300 hover:underline'>PizzaLviv@gmail.com</a>
            </li>
          </ul>
        </div>

        <hr className='relative left-[-48px] w-[calc(100%_+_96px)] border-zinc-500 mb-8'/>

        <div>
          <span className='text-xl text-white font-semibold'>Pizza 🍕</span>
        </div>

      </div>
    </div>
  )
}
