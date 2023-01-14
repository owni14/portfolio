import { Props } from '../../types';

const SkillsCard = (props: Props) => {
  return <div className='rounded-lg bg-white w-full p-7'>{props.children}</div>;
};

export default SkillsCard;
