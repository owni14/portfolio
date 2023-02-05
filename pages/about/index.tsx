import React from 'react';
import profile from '../../assets/images/me.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { aboutContent } from '../../data/aboutContent';

const content =
  '안녕하세요🙇‍♂️ 꾸준하고 성실하게 공부마혀 어제보다 더 나은 오늘을 만들기 위해 노력하는 프론트엔드 개발자 김민우입니다.';

const about = () => {
  return (
    <div className='animate-fade-in-up'>
      <h1 className='text-5xl font-appleSemiBold'>About Me</h1>
      <div className='border-2 w-40 ml-[142px] mb-12'></div>
      <div className='flex flex-row justify-between items-center font-appleRegular'>
        <Image src={profile} width={600} alt='Picture of me' />
        <div className='w-6/12 flex flex-col justify-evenly'>
          <div className='text-2xl mb-8'>
            <p>안녕하세요🙇‍♂️</p>
            <p>
              꾸준하고 성실하게 공부하며 어제보다 더 나은 오늘을 만들기 위해
              노력하는 프론트엔드 개발자 김민우입니다.
            </p>
          </div>
          {aboutContent.map((item) => (
            <div className='flex flex-row text-2xl h-[40px]' key={item.title}>
              <div className='w-[130px]'>{item.title}</div>
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
      <div className='font-regular'></div>
    </div>
  );
};

export default about;
