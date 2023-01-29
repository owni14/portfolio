import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import DetailedProject from '../../components/projects/DetailedProject';
import ProjectList from '../../projectList.json';
import { ProjectListProps } from '../../types';

const Project = (props: ProjectListProps) => {
  return (
    <DetailedProject
      id={props.id}
      image={props.image}
      title={props.title}
      date={props.date}
      github={props.github}
      deployLink={props.deployLink}
      summary={props.summary}
      meaning={props.meaning}
      technology={props.technology}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ProjectList.map((list) => ({
      params: { projectId: list.id },
    })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const projectId = context.params?.projectId;
  const projectInfo = ProjectList.filter((list) => list.id === projectId);
  return {
    props: {
      id: projectInfo[0].id,
      image: projectInfo[0].image,
      title: projectInfo[0].title,
      date: projectInfo[0].date,
      github: projectInfo[0].github,
      deployLink: projectInfo[0].deployLink,
      summary: projectInfo[0].summary,
      meaning: projectInfo[0].meaning,
      technology: projectInfo[0].technology,
    },
  };
};

export default Project;
