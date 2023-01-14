import SkillsCard from '../../components/common/SkillsCard';

const skills = () => {
  return (
    <div>
      <div className='text-4xl '>
        <h1 className='pb-3 border-b-4 border-white'>Front End</h1>
      </div>
      <div className='text-4xl pb-3 border-b-4 border-white'>Back End</div>
      <div className='text-4xl pb-3 border-b-4 border-white'>Mobile App</div>
      <div className='text-4xl pb-3 border-b-4 border-white'>
        Version Control
      </div>
      <div className='text-4xl pb-3 border-b-4 border-white'>Communication</div>
      <div className='text-4xl pb-3 border-b-4 border-white'>Deployment</div>
    </div>
  );
};

export default skills;
