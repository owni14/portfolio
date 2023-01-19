import Link from 'next/link';
import { ProjectListProps } from '../types';

const DetailedProject = (props: ProjectListProps) => {
  return (
    <div className='animate-fade-in-up'>
      <div className='mb-12 mt-8 text-5xl'>
        <p className='mb-4'>{props.title}</p>
      </div>
      <hr className='mb-8' />
      <div>
        <div className='text-4xl mb-4'>📌 Summary</div>
        <p className='mb-8'>{props.summary}</p>
      </div>
      <div>
        <div className='text-4xl mb-4'>💡 Meaning</div>
        <p className='mb-8'>{props.meaning}</p>
      </div>
      <div className='flex flex-row items-start w-full justify-between'>
        <div className='w-6/12'>
          <div className=' text-4xl mb-4'>🔗 Deployment Link</div>
          <Link
            className='hover:text-gray-500 hover:duration-300'
            href={props.deployLink}
          >
            {props.deployLink}
          </Link>
        </div>
        <div className='w-6/12'>
          <div className=' text-4xl mb-4'>🛠️ Technology Stacks</div>
          <div className='flex flex-row'>
            <p className='mr-2'>Front End :</p>
            <p>{props.technology.frontEnd}</p>
          </div>
          <div className='flex flex-row'>
            <p className='mr-2'>Back End :</p>
            <p>{props.technology.backEnd}</p>
          </div>
          <div className='flex flex-row'>
            <p className='mr-2'>Deployment :</p>
            <p>{props.technology.deployment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
