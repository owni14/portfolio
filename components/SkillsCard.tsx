import { Props } from '../types';

const SkillsCard = (props: Props) => {
  return (
    <div className='flex flex-col rounded-lg bg-white text-black hover:-translate-y-4 hover:duration-500 p-4'>
      {props.children}
    </div>
  );
};
export default SkillsCard;
