import Link from 'next/link';
import { useContext, useRef } from 'react';
import ClickState from '../../store/clickState';

const HeaderBar = () => {
  const navLink = ['Projects', 'About', 'Skills', 'Career'];

  const [isClick, setIsClick] = useContext<any>(ClickState);

  return (
    <div className='flex flex-row flex-wrap content-center justify-between h-[120px] text-xl sticky top-0 bg-black z-10'>
      <div>
        <Link
          className='hover:opacity-50 hover:duration-500'
          href='/'
          onClick={() => setIsClick(false)}
        >
          Min's Portfolio
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row gap-10 list-none'>
          {navLink.map((link) => (
            <li className='float-left' key={link}>
              {link === 'Projects' ? (
                <Link
                  href='/'
                  as={`/#project-list`}
                  onClick={() => setIsClick(true)}
                >
                  {link}
                </Link>
              ) : (
                <Link
                  className='hover:opacity-50 hover:duration-500'
                  href={`/` + link.toLowerCase()}
                  onClick={() => setIsClick(false)}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderBar;
