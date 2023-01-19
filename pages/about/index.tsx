import React from 'react';
import profile from '../../assets/images/me.jpg';
import Image from 'next/image';
import Link from 'next/link';

const aboutContent = [
  {
    title: 'Name : ',
    content: '김민우',
  },
  {
    title: 'Birth :',
    content: '99.05.14',
  },
  {
    title: 'Address : ',
    content: '서울특별시 관악구',
  },
  {
    title: 'Profession : ',
    content: 'Front End Developer',
  },
  {
    title: 'Blog : ',
    content: `Min's Blog`,
  },
  {
    title: 'Email : ',
    content: 'kmwoo514@gmail.com',
  },
  {
    title: 'Github : ',
    content: `Min's Github`,
  },
  {
    title: 'Interest : ',
    content: '개발, 축구, 음악감상',
  },
];

const about = () => {
  return (
    <div className='animate-fade-in-up'>
      <h1 className='text-5xl font-bold'>About Me</h1>
      <div className='border-2 w-40 ml-[142px] mb-12'></div>
      <div className='flex flex-row justify-between items-center mb-10 font-light'>
        <Image src={profile} width={600} alt='Picture of me' />
        <div className='w-6/12 flex flex-col justify-between text-5xl'>
          {aboutContent.map((item) => (
            <div className='flex flex-row justify-between items-center text-4xl h-[60px]'>
              <div>{item.title}</div>
              {item.content === `Min's Blog` ? (
                <Link
                  className='hover:text-gray-500 hover:duration-300'
                  href='https://owni14.github.io/'
                >
                  {item.content}
                </Link>
              ) : item.content === `Min's Github` ? (
                <Link
                  className='hover:text-gray-500 hover:duration-300'
                  href='https://github.com/owni14'
                >
                  {item.content}
                </Link>
              ) : (
                <div>{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className='font-regular'>My Content Area</div>
    </div>
  );
};

export default about;
