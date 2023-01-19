import SkillsCard from '../../components/common/SkillsCard';

// Import Front End Logos
import IconJavascript from '../../assets/images/javascript.svg';
import IconStyledComponents from '../../assets/images/styledComponents.svg';
import IconBootstrap from '../../assets/images/bootstrap.svg';
import IconJquery from '../../assets/images/jquery.svg';
import IconNext from '../../assets/images/nextjs.svg';
import IconReact from '../../assets/images/reactjs.svg';
import IconHtml from '../../assets/images/html.svg';
import IconCss from '../../assets/images/css.svg';
import IconTs from '../../assets/images/typescript.svg';

// Import Back End Logos
import IconPython from '../../assets/images/python.svg';
import IconNode from '../../assets/images/nodejs.svg';
import IconDjango from '../../assets/images/django.svg';
import IconFirebase from '../../assets/images/firebase.svg';
import IconJava from '../../assets/images/java.svg';
import IconSpring from '../../assets/images/spring.svg';
import IconMysql from '../../assets/images/mysql.svg';
import IconOracle from '../../assets/images/oracle.svg';
import IconMongodb from '../../assets/images/mongodb.svg';

// Mobile App Logos
import IconReactNative from '../../assets/images/reactNative.svg';

// Version Control Logos
import IconGit from '../../assets/images/git.svg';
import IconGithub from '../../assets/images/github.svg';

// Commuication Logos
import IconSlack from '../../assets/images/slack.svg';
import IconFigma from '../../assets/images/figma.svg';

// Deployment Logos
import IconVercel from '../../assets/images/vercel.svg';

const skills = () => {
  return (
    <div className='text-3xl w-full animate-fade-in-up py-5 flex flex-row justify-between font-bold'>
      <SkillsCard>
        <div className='border-b-4 border-black'>Front End</div>
        <div className='grid grid-cols-2 gap-2 place-items-center mt-3'>
          <IconHtml width='130' height='130' />
          <IconCss width='130' height='130' />
          <IconJavascript width='130' height='130' />
          <IconStyledComponents width='130' height='130' />
          <IconBootstrap width='130' height='130' />
          <IconJquery width='130' height='130' />
          <IconReact width='130' height='130' />
          <IconNext width='130' height='130' />
          <IconTs width='130' height='130' />
        </div>
      </SkillsCard>
      <SkillsCard>
        <div className='border-b-4 border-black'>Back End</div>
        <div className='grid grid-cols-2 gap-2 place-items-center mt-3'>
          <IconPython width='130' height='130' />
          <IconNode width='130' height='130' />
          <IconDjango width='130' height='130' />
          <IconFirebase width='130' height='130' />
          <IconJava width='130' height='130' />
          <IconSpring width='130' height='130' />
          <IconMysql width='130' height='130' />
          <IconOracle width='130' height='130' />
          <IconMongodb width='130' height='130' />
        </div>
      </SkillsCard>
      <div className='grid grid-cols-1 gap-5'>
        <SkillsCard>
          <div className='border-b-4 border-black'>Mobile App</div>
          <div className='grid grid-cols-1 place-items-center mt-10'>
            <IconReactNative width='130' height='130' />
          </div>
        </SkillsCard>
        <SkillsCard>
          <div className='border-b-4 border-black'>Version Control</div>
          <div className='grid grid-cols-1 gap-2 place-items-center mt-10'>
            <IconGit width='130' height='130' />
            <IconGithub width='130' height='130' />
          </div>
        </SkillsCard>
      </div>
      <div className='grid grid-cols-1 gap-5'>
        <SkillsCard>
          <div className='border-b-4 border-black'>Communication</div>
          <div className='grid grid-cols-1 gap-2 place-items-center mt-10'>
            <IconSlack width='130' height='130' />
            <IconFigma width='130' height='130' />
          </div>
        </SkillsCard>
        <SkillsCard>
          <div className='border-b-4 border-black'>Deployment</div>
          <div className='grid grid-cols-1 gap-2 place-items-center mt-10'>
            <IconVercel width='130' height='130' />
          </div>
        </SkillsCard>
      </div>
    </div>
  );
};

export default skills;
