import React from 'react';

export const Article = ({ img, number, title, text }) => {
  return (
    <article className='flex h-[162px] md:w-[343px] md:flex-grow'>
      <div className='w-[100px] flex-none'>
        <img src={img} alt={title} className='w-full h-auto' />
      </div>
      <div className='pl-6'>
        <p className='text-Grayish-blue text-3xl mb-[18px] font-bold'>{number}</p>
        <h2 className='font-bold mb-[18px] hover:text-Soft-orange cursor-pointer'>
          {title}
        </h2>
        <p className='text-Dark-grayish-blue'>{text}</p>
      </div>
    </article>
  );
};
