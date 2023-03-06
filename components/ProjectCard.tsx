import React from "react";
import Link from "next/link";
import { IProjectList } from "../types";
import CarpoolServiceImage from "../assets/images/carpoolService.svg";
import PortfolioImage from "../assets/images/portfolio.svg";

const Card = ({ id, title, component, date, sortDate }: IProjectList) => {
  return (
    <div className='max-h-[35rem]'>
      <Link
        className='group'
        href={`/project/${component}`}
        as={`/project/${id}`}
      >
        <div className='max-h-[450px] overflow-hidden '>
          {id === "carpool-service" ? (
            <CarpoolServiceImage className='group-hover:scale-105 group-hover:duration-500' />
          ) : (
            <PortfolioImage className='group-hover:scale-105 group-hover:duration-500' />
          )}
        </div>
        <div>
          <h1 className='my-4 text-2xl font-bold group-hover:text-gray-400 group-hover:duration-500 font-appleSemiBold'>
            {title}
          </h1>
          <p className='text-xl text-gray-400 font-appleRegular'>{date}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
