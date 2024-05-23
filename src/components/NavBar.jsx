import React from 'react';
import burgerMenu from '../assets/images/icon-menu.svg';

export const NavBar = () => {
  return (
    <>
      <ul className='hidden sm:flex text-[18px] sm:w-[428px] sm:justify-around sm:text-[16px] sm:items-center'>
        <li>
          <a href="#" className='hover:text-Soft-orange'>Home</a>
        </li>
        <li>
          <a href="#" className='hover:text-Soft-orange'>Popular</a>
        </li>
        <li>
          <a href="#" className='hover:text-Soft-orange'>Trending</a>
        </li>
        <li>
          <a href="#" className='hover:text-Soft-orange'>Categories</a>
        </li>
      </ul>
      <img className='w-10 h-10 cursor-pointer sm:hidden' src={burgerMenu} alt="Menu hamburguesa" />
    </>
  );
};
