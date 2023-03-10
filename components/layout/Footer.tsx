import Link from "next/link";
import Github from "../../assets/images/github.svg";
import Blog from "../../assets/images/blogger.svg";
import Mail from "../../assets/images/minutemailer.svg";
import { useEffect, useState } from "react";

const Footer = () => {
  const [date, setDate] = useState<number>(new Date().getFullYear());

  return (
    <div className='h-[60px] w-full absolute bottom-0 font-appleSemiBold'>
      <div className='flex items-center justify-between text-center'>
        <p className='inline'>© {date}. Minwoo Kim. All rights reserved.</p>
        <div>
          <Link href='https://github.com/owni14'>
            <Github
              className='inline ml-5 hover:fill-[#868e96] hover:duration-500'
              width='30'
              height='30'
              fill='white'
            />
          </Link>
          <Link href='https://owni14.github.io/'>
            <Blog
              className='inline ml-5 hover:fill-[#868e96] hover:duration-500'
              width='30'
              height='30'
              fill='white'
            />
          </Link>
          <Link href='mailto:kmwoo514@gmail.com'>
            <Mail
              className='inline ml-5 hover:fill-[#868e96] hover:duration-500'
              width='30'
              height='30'
              fill='white'
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
