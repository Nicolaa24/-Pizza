import React from 'react';
import carbonaraImg from '../../../assets/images/pizza/barbecue.jpeg'

interface Props {
  imagePath: string;
  weight: number;
  title: string;
  ingredients: string;
  price: number;
}

const values = {
  imagePath: carbonaraImg,
  weight: 555,
  title: "Піца Карбонара",
  ingredients: "(подвійна парція грибів), Гриби, Бекон, Сир, Цибуля",
  price: 200
}

export const MenuItem:React.FC<Props> = ({imagePath, weight, title,ingredients,price}) => {
  return (
    <div className='w-96 shadow-xl rounded-2xl bg-white'>
      <div className='relative'>
        <img className='w-full h-[274px] object-cover object-center rounded-t-2xl'
          src={imagePath}
        />
        <span className='absolute bottom-1.5 right-3 bg-gray-900/50 text-white text-sm px-2 py-[1px] rounded-[32px]'>{weight} г</span>
      </div>

      <div className=' p-8'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='mb-8'>{ingredients}</p>
        <span className='text-xl font-semibold'> {price} грн</span>
      </div>

    </div>
  )
};
