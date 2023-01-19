const career = () => {
  return (
    <div className='text-3xl w-full animate-fade-in-up'>
      <div className='flex flex-row flex-1 my-12 items-center justify-between'>
        <h3 className='text-3xl w-1/6 font-bold'>Education</h3>
        <ul className='w-5/6 list-disc font-medium'>
          <li>
            울산 KH정보교육원 (디지털컨버전스)멀티 디바이스 융합(Java)과정
          </li>
        </ul>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center justify-between'>
        <h3 className='text-3xl w-1/6 font-bold'>Experience</h3>
        <ul className='w-5/6 list-disc font-medium'>
          <li>(주) YGBS (2022.11 ~ 현재)</li>
        </ul>
      </div>
    </div>
  );
};

export default career;
