// Navbar.js

import { useState } from 'react';
import Logo from '../../assets/logo.png';
import { IoIosMenu, IoMdClose } from 'react-icons/io';

const NavLinks = [
  {
    id: 1,
    title: 'Home',
    link: '/#',
  },
  {
    id: 2,
    title: 'About',
    link: '/#about',
  },
  {
    id: 3,
    title: 'Menu',
    link: '/#menu',
  },
  {
    id: 4,
    title: 'Services',
    link: '/#services',
  },
];

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleLinkClick = () => {
    setMenu(false);
  };

  return (
    <div className='fixed w-full bg-white shadow-lg z-10'>
      <div className='container mx-auto py-3 px-4 md:px-0 flex items-center justify-between'>
        <div>
          <a href='/#'>
            <img src={Logo} alt='' className='w-16' />
          </a>
        </div>
        <div className='flex items-center justify-between gap-4'>
          {/* Displaying links for screens above 768px */}
          <ul className='hidden md:flex flex-grow items-center justify-center gap-4'>
            {NavLinks.map(({ id, title, link }) => (
              <li key={id}>
                <a
                  className='px-4 py-4 duration-300 hover:text-primary'
                  href={link}
                  onClick={handleLinkClick}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger menu icon for screens below 768px */}
          {!menu ? (
            <IoIosMenu
              onClick={() => setMenu(true)}
              className='text-4xl cursor-pointer md:hidden'
            />
          ) : (
            <IoMdClose
              onClick={() => setMenu(false)}
              className='text-4xl cursor-pointer md:hidden'
            />
          )}
        </div>
      </div>

      {/* Displaying links for screens below 768px */}
      {menu && (
        <ul className='flex flex-col md:hidden fixed top-16 w-full bg-white py-2 text-center'>
          {NavLinks.map(({ id, title, link }) => (
            <li key={id}>
              <a
                className='block px-4 py-2 duration-300 hover:text-primary'
                href={link}
                onClick={handleLinkClick}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
