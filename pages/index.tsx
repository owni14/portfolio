import React, { useContext, useRef } from 'react';
import Card from '../components/Card';
import { GetStaticProps, InferGetServerSidePropsType } from 'next';
import { useState, useEffect } from 'react';
import { ProjectListProps } from '../types';
import ReceivedProjectList from '../projectList.json';
import ClickState from '../store/clickState';

const Home = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [projectList, setProjectList] = useState<ProjectListProps[]>([]);
  const element = useRef<any>();
  const isClick = useContext<any>(ClickState);
  const headerHeight = -120;

  /* project rendering될 때 실행되는 hook */
  useEffect(() => {
    setProjectList(props.ReceivedProjectList);
  }, [props]);

  /* query가 project-list로 들어왔을 때 실행되는 hook */
  useEffect(() => {
    const targetElement =
      element.current.getBoundingClientRect().top +
      window.scrollY +
      headerHeight;
    if (isClick[0]) {
      /* project list로 scroll하는 함수 */
      setTimeout(() => {
        window.scrollTo({
          top: targetElement,
          behavior: 'smooth',
        });
      }, 100);
    }
  }, [isClick]);

  return (
    <div className='animate-fade-in-up'>
      <div className='mb-36 mt-20 text-7xl font-regular'>
        <p className='mb-4'>Hello! I'm Minwoo Kim from South Korea.</p>
        <p className='mb-4'>I'm working as a Front-end developer</p>
        <p>You can check my project below</p>
      </div>
      <div>
        <div
          ref={element}
          className='grid grid-cols-2 gap-16 place-items-center'
        >
          {projectList.map((list) => {
            return (
              <Card
                key={list.id}
                id={list.id}
                image={list.image}
                title={list.title}
                deployLink={list.deployLink}
                summary={list.summary}
                meaning={list.meaning}
                technology={list.technology}
                date={list.date}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// SSG
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      ReceivedProjectList: ReceivedProjectList,
    },
  };
};

export default Home;
