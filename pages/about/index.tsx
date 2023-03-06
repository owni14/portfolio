import React from "react";
import profile from "../../assets/images/me.jpg";
import Image from "next/image";
import Link from "next/link";
import { AboutMeContent } from "../../data/AboutMeContent";

const content =
  "안녕하세요🙇‍♂️ 꾸준하고 성실하게 공부하며 어제보다 더 나은 오늘을 만들기 위해 노력하는 프론트엔드 개발자 김민우입니다.";

const about = () => {
  return (
    <div className='animate-fade-in-up'>
      <h1 className='text-5xl font-appleSemiBold laptopM:text-center laptopM:underline laptopM:mb-12 tablet:text-4xl mobileL:text-3xl mobileS:text-2xl'>
        About Me
      </h1>
      <div className='border-2 w-40 ml-[142px] mb-12 laptopM:hidden'></div>
      <div className='flex flex-row justify-between items-center font-appleRegular laptopM:flex-col laptopM:gap-10'>
        <Image
          className='w-[600px] tablet:w-[400px] mobileL:w-[300px] mobileS:w-[200px]'
          src={profile}
          alt='Picture of me'
        />
        <div className='w-6/12 laptopM:w-[600px] tablet:w-[400px] mobileL:w-[300px] mobileS:w-[200px]'>
          <div className='text-2xl mb-8 tablet:text-xl mobileL:text-base mobileS:text-sm'>
            <p>안녕하세요🙇‍♂️</p>
            <p>
              꾸준하고 성실하게 공부하며 어제보다 더 나은 오늘을 만들기 위해
              노력하는 프론트엔드 개발자 김민우입니다.
            </p>
          </div>
          {AboutMeContent.map((item) => (
            <div
              className='flex flex-row text-2xl h-[40px] tablet:text-xl mobileL:text-base mobileS:text-xs'
              key={item.title}
            >
              <div className='w-[130px] mobileL:w-[100px] mobileS:w-[65px]'>
                {item.title}
              </div>
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
