const DetailedProject = () => {
  return (
    <div className='animate-fade-in-up'>
      <div className='mb-12 mt-8 text-5xl'>
        <p className='mb-4'>Project Name</p>
      </div>
      <hr className='mb-8' />
      <div>
        <div className='text-4xl mb-4'>📌 Summary</div>
        <p className='mb-8'>test summay</p>
      </div>
      <div>
        <div className='text-4xl mb-4'>💡 Meaning</div>
        <p className='mb-8'>test meaning</p>
      </div>
      <div className='flex flex-row items-start w-full justify-between'>
        <div className='w-6/12'>
          <div className=' text-4xl mb-4'>🔗 Deployment Link</div>
          <p>test link</p>
        </div>
        <div className='w-6/12'>
          <div className=' text-4xl mb-4'>🛠️ Technology Stacks</div>
          <div className='flex flex-row'>
            <p className='mr-2'>Front End :</p>
            <p>test</p>
          </div>
          <div className='flex flex-row'>
            <p className='mr-2'>Back End :</p>
            <p>test</p>
          </div>
          <div className='flex flex-row'>
            <p className='mr-2'>Deployment :</p>
            <p>test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
