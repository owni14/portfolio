import Link from "next/link";
import { useContext } from "react";
import ClickState from "../../store/clickState";

const HeaderBar = () => {
  const navLink = ["Projects", "About", "Skills", "Career"];

  const [isClick, setIsClick] = useContext<any>(ClickState);

  return (
    <div className='flex flex-row flex-wrap content-center justify-between h-[120px] text-xl sticky top-0 bg-neutral-900 z-10 font-regular tablet:text-lg mobileL:flex-col mobileL:items-center mobileL:h-[90px] mobileL:pb-[15px] mobileL:pt-[15px]'>
      <div className='text-xl'>
        <Link
          className='hover:opacity-50 hover:duration-500 font-appleSemiBold'
          href='/'
          onClick={() => setIsClick(false)}
        >
          Min&#39;s Portfolio
        </Link>
      </div>
      <nav>
        <ul className='flex flex-row gap-10 list-none font-appleSemiBold tablet:gap-3'>
          {navLink.map((link) => (
            <li className='float-left' key={link}>
              {link === "Projects" ? (
                <Link
                  href='/'
                  as={`/#project-list`}
                  onClick={() => setIsClick(true)}
                  className='
                  hover:opacity-50
                  hover:duration-500
                  '
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
