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
        <li>Front End : {props.technology.frontEnd}</li>
        <li>Back End : {props.technology.backEnd}</li>
        <li>Database : {props.technology.database}</li>
        <li>Deployment : {props.technology.deployment}</li>
      </div>
    </div>
  );
};

export default DetailedProject;
