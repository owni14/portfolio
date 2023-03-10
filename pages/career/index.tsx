const career = () => {
  return (
    <div className='text-3xl w-full animate-fade-in-up'>
      <div className='flex flex-row flex-1 my-12 items-center justify-between'>
        <h3 className='text-3xl w-1/6 font-appleSemiBold'>Education</h3>
        <ul className='w-5/6 list-disc font-appleMedium'>
          <li>
            울산 KH정보교육원 (디지털컨버전스)멀티 디바이스 융합(Java)과정
          </li>
        </ul>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center justify-between'>
        <h3 className='text-3xl w-1/6 font-appleSemiBold'>Experience</h3>
        <ul className='w-5/6 list-disc font-appleMedium'>
          <li>(주) YGBS (2022.11 ~ 2023.03)</li>
        </ul>
      </div>
    </div>
  );
};

export default career;
