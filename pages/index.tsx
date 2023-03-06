import React, { useContext, useRef } from "react";
import ProjectCard from "../components/ProjectCard";
import { GetStaticProps, InferGetServerSidePropsType } from "next";
import { useState, useEffect } from "react";
import { IProjectList } from "../types";
import ReceivedProjectList from "../projectList.json";
import ClickState from "../store/clickState";

const Home = (props: InferGetServerSidePropsType<typeof getStaticProps>) => {
  const [projectList, setProjectList] = useState<IProjectList[]>([]);
  const element = useRef<any>();
  const isClick = useContext<any>(ClickState);
  const headerHeight = -120;

  // project rendering될 때 실행되는 hook
  useEffect(() => {
    setProjectList(props.ReceivedProjectList);
  }, [props]);

  // query가 project-list로 들어왔을 때 실행되는 hook
  useEffect(() => {
    const targetElement =
      element.current.getBoundingClientRect().top +
      window.scrollY +
      headerHeight;
    if (isClick[0]) {
      // project list로 scroll하는 함수
      setTimeout(() => {
        window.scrollTo({
          top: targetElement,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [isClick]);

  return (
    <div className='animate-fade-in-up'>
      <div className='mb-36 mt-20 text-7xl laptopL:text-6xl font-appleBold'>
        <p className='mb-4 '>Hello! I&#39;m Minwoo Kim from South Korea.</p>
        <p className='mb-4 '>I&#39;m working as a Front-end developer</p>

        <p>You can check my project below</p>
      </div>
      <div>
        <div
          ref={element}
          className='grid grid-cols-2 gap-16 place-items-center'
        >
          {projectList.map((v, i) => {
            return (
              <ProjectCard
                key={i}
                id={v.id}
                title={v.title}
                component={v.component}
                date={v.date}
                sortDate={v.sortDate}
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
      // 최신순으로 정렬
      ReceivedProjectList: ReceivedProjectList.sort(
        (a: IProjectList, b: IProjectList) => b.sortDate - a.sortDate
      ),
    },
  };
};

export default Home;
