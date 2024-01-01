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
    <div className='shadow-xl'>
      <div className='container md:py-3 sm:py-0 '>
        <div className='flex items-center justify-between '>
          <div className=''>
            <a href='/#'>
              <img src={Logo} alt='' className='w-16' />
            </a>
          </div>
          <div className='flex items-center justify-between gap-4'>
            <ul className='items-center hidden gap-4 md:flex'>
              {NavLinks.map(({ id, title, link }) => (
                <li key={id}>
                  <a
                    className='px-4 py-4 duration-300 hover:text-primary'
                    href={link}
                    onClick={handleLinkClick} // Close menu when link is clicked
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>

            {menu && (
              <ul className='items-center gap-4 flex nav-links md:hidden mx-auto'>
                {NavLinks.map(({ id, title, link }) => (
                  <li key={id}>
                    <a
                      className='px-4 py-4 duration-300 hover:text-primary'
                      href={link}
                      onClick={handleLinkClick} // Close menu when link is clicked
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            <button className='px-4 py-1 text-white duration-200 rounded-full bg-gradient-to-r from-primary to-secondary hover:scale-105 hidden md:flex'>
              Order
            </button>

            {menu ? (
              <IoMdClose
                onClick={() => setMenu(false)}
                className='text-4xl cursor-pointer md:hidden'
              />
            ) : (
              <IoIosMenu
                onClick={() => setMenu(true)}
                className='text-4xl cursor-pointer md:hidden'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
