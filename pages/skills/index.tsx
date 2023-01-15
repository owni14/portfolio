const skills = () => {
  return (
    <div className='text-4xl w-full animate-fade-in-up'>
      <div className='flex flex-row flex-1 my-12 items-center justify-between'>
        <h3 className='text-4xl w-2/6 text-center'>Front End</h3>
        <p className='w-4/6'>
          Javascript, React.js, Next.js, HTML,CSS, Typescript, Bootstrap,
          Tailwind Css, Styled-component, jQuery
        </p>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center'>
        <h3 className='text-4xl w-2/6 text-center'>Back End</h3>
        <p className='w-4/6'>
          Python, node.js, django, Firebase, Java spring, MySQL, Oracle, mongo
          DB
        </p>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center'>
        <h3 className='text-4xl w-2/6 text-center'>Mobile App</h3>
        <p className='w-4/6'>React Native</p>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center'>
        <h3 className='text-4xl w-2/6 text-center'>Version Control</h3>
        <p className='w-4/6'>git, GitHub</p>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center'>
        <h3 className='text-4xl w-2/6 text-center'>Communication</h3>
        <p className='w-4/6'>Slack, Figma</p>
      </div>
      <div className='flex flex-row flex-1 my-12 items-center'>
        <h3 className='text-4xl w-2/6 text-center'>Deployment</h3>
        <p className='w-4/6'>Vercel</p>
      </div>
    </div>
  );
};

export default skills;
