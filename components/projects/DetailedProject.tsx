import Link from 'next/link';
import { ProjectListProps } from '../../types';

const DetailedProject = (props: ProjectListProps) => {
  return (
    <div className='animate-fade-in-up'>
      <div className='mb-12 mt-8 text-5xl'>
        <p className='mb-4 font-bold'>{props.title}</p>
      </div>
      <hr className='mb-8' />
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-bold'>📌 Summary</div>
        <div className='whitespace-normal font-regular'>
          {props.summary.split('\n').map((line) => (
            <p className='mt-4'>
              {line}
              <br />
            </p>
          ))}
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-bold'>💡 Meaning</div>
        <pre className='whitespace-normal font-regular'>
          {props.meaning.split('\n').map((line) => (
            <p className='mt-4'>{line}</p>
          ))}
        </pre>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-bold'>🔍 Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-regular'
          href={props.github}
        >
          {props.github}
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-bold'>🔗 Deployment Link</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-regular'
          href={props.deployLink}
        >
          {props.deployLink}
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-bold'>🛠️ Technology Stacks</div>
        <li className='font-regular'>
          Front End : {props.technology.frontEnd}
        </li>
        <li className='font-regular'>Back End : {props.technology.backEnd}</li>
        <li className='font-regular'>Database : {props.technology.database}</li>
        <li className='font-regular'>
          Deployment : {props.technology.deployment}
        </li>
      </div>
    </div>
  );
};

export default DetailedProject;
