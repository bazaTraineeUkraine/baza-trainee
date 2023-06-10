'use client';
import Image from 'next/image';
import { useState } from 'react';
import ProjectCardContent from './ProjectCardContent';
import ProjectCardTeam from './ProjectCardTeam';
import styles from './styles.module.scss';
const ProjectCard = ({
  project,
}: {
  project: {
    imageUrl: string;
    stack: string[];
    teamMembers: object[];
    status: string;
    description: string;
    link: string;
    createdAt: string;
    complexity: number;
  };
}) => {
  const [showTeamHandler, setShowTeamHandler] = useState(false);
  const onClick = () => {
    setShowTeamHandler(!showTeamHandler);
  };
  return (
    <>
      <li>
        <div
          className={
            styles['projects-section__projects-item__project-card-image']
          }
        >
          <Image
            src={project.imageUrl}
            alt="Project Image"
            width={378}
            height={464}
          />
          <div
            className={
              styles['projects-section__projects-item__project-card-content']
            }
          >
            <ProjectCardContent
              onClick={onClick}
              project={project}
              showTeamHandler={showTeamHandler}
            />
            {showTeamHandler && (
              <ProjectCardTeam onClick={onClick} project={project} />
            )}
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectCard;
