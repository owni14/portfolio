import Link from 'next/link';
import { ProjectListProps } from '../types';

const DetailedProject = (props: ProjectListProps) => {
  console.log('props:: ', props);
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
      <div className='mb-8'>
        <div className='text-4xl mb-4'>💡 Meaning</div>
        <p>{props.meaning}</p>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4'>🔍 Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300'
          href={props.github}
        >
          {props.github}
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4'>🔗 Deployment Link</div>
        <Link
          className='hover:text-gray-500 hover:duration-300'
          href={props.deployLink}
        >
          {props.deployLink}
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4'>🛠️ Technology Stacks</div>
        <ul className='list-decimal list-inside'>
          <li className='flex flex-row'>
            <p className='mr-2'>Front End :</p>
            <p>{props.technology.frontEnd}</p>
          </li>
          <li className='flex flex-row'>
            <p className='mr-2'>Back End :</p>
            <p>{props.technology.backEnd}</p>
          </li>
          <li className='flex flex-row'>
            <p className='mr-2'>Database :</p>
            <p>{props.technology.database}</p>
          </li>
          <li className='flex flex-row'>
            <p className='mr-2'>Deployment :</p>
            <p>{props.technology.deployment}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailedProject;
