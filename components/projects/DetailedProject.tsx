import Link from 'next/link';
import { ProjectListProps } from '../../types';

const DetailedProject = (props: ProjectListProps) => {
  return (
    <div className='animate-fade-in-up'>
      <div className='mb-12 mt-8 text-5xl'>
        <p className='mb-4 font-appleSemiBold'>{props.title}</p>
      </div>
      <hr className='mb-8' />
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>📌 Summary</div>
        <div className='whitespace-normal font-appleMedium'>
          {props.summary.split('\n').map((line) => (
            <p className='mt-4' key={line}>
              {line}
              <br />
            </p>
          ))}
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>💡 Meaning</div>
        <div className='whitespace-normal font-appleMedium'>
          {props.meaning.split('\n').map((line) => (
            <p className='mt-4' key={line}>
              {line}
            </p>
          ))}
        </div>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>🔍 Github</div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium'
          href={props.github}
        >
          {props.github}
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>
          🔗 Deployment Link
        </div>
        <Link
          className='hover:text-gray-500 hover:duration-300 font-appleMedium'
          href={props.deployLink}
        >
          {props.deployLink}
        </Link>
      </div>
      <div className='mb-8'>
        <div className='text-4xl mb-4 font-appleSemiBold'>
          🛠️ Technology Stacks
        </div>
        <li className='font-appleMedium'>
          Front End : {props.technology.frontEnd}
        </li>
        <li className='font-appleMedium'>
          Back End : {props.technology.backEnd}
        </li>
        <li className='font-appleMedium'>
          Database : {props.technology.database}
        </li>
        <li className='font-appleMedium'>
          Deployment : {props.technology.deployment}
        </li>
      </div>
    </div>
  );
};

export default DetailedProject;
