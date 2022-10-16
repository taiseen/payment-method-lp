import { navLinks } from '../constants';
import styles from '../styles'
import images from '../assets'
import { useState } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>

        <nav className='w-full flex justify-between items-center py-6 navbar'>

          <img
            className='w-[124px] h-[32px]'
            alt="bankLogo"
            src={images.logo}
          />

          {/* Navigation Menu For Desktop 🟡🟡💻🟡🟡 */}
          <ul className='list-none text-white hidden sm:flex justify-end items-center flex-1'>
            {
              navLinks.map((link, index) =>
                <li
                  key={index}
                  className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${navLinks.length - 1 == index ? 'mr-0' : 'mr-10'}`}
                >
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              )
            }
          </ul>

          {/* Navigation Menu For Mobile 🟡🟡📱🟡🟡 */}
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img
              src={toggle ? images.close : images.menu}
              className='w-[28px] h-[28px] object-contain'
              alt="menuLogo"
              onClick={() => setToggle(pre => !pre)}
            />
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar