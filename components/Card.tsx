import React from 'react';
import Link from 'next/link';
import { ProjectListProps } from '../types';
import Image from '../assets/images/carpoolService.svg';

const Card = (props: ProjectListProps) => {
  return (
    <div className='max-h-[35rem]'>
      <Link className='group' href={`/project/${props.id}`}>
        <div className='max-h-[450px] overflow-hidden '>
          <img
            className='group-hover:scale-105 group-hover:duration-500'
            src={props.image}
            alt='project_img'
          />
        </div>
        <div>
          <h1 className='my-4 text-2xl font-bold group-hover:text-gray-400 group-hover:duration-500 font-bold'>
            {props.title}
          </h1>
          <p className='text-xl text-gray-400 font-regular'>{props.date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
