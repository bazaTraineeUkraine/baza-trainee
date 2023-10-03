import Link from 'next/link';

import { projectCycle } from '@/utils/developmentTimeCalculator';
import { formatDate } from '@/utils/formatDate';

import { ProjectComplexity } from './ProjectComplexity';
import { ProjectStatusBar } from './ProjectStatusBar';

import { dictionaries } from '@/locales/dictionaries';

import {
  ProjectComplexityIcon,
  ProjectDurationIcon,
  ProjectStartIcon,
} from '@/components/common/icons';

import { ICardContent } from '@/types';

const ProjectCardContent = ({
  handleShowTeam,
  project,
  lang = 'ua',
}: ICardContent) => {
  const { projectStart, projectTeam, duration, complexity } =
    dictionaries[lang].projects || {};

  const {
    title,
    deployUrl,
    creationDate,
    complexity: complexityValue,
  } = project;

  return (
    <div className="flex h-full flex-col justify-between">
      <ProjectStatusBar project={project} lang={lang} />

      <div className="flex h-[29rem] w-full flex-col">

        <div className="mb-auto text-[2.4rem] font-bold leading-[3rem] line-clamp-4 break-words">
          <h4>{title[lang]}</h4>
        </div>

        {deployUrl && (
          <div className="mb-[1.6rem] truncate">
            <Link
              href={deployUrl}
              target="_blank"
              aria-label={`Visit ${deployUrl}`}
            >
              {deployUrl}
            </Link>
          </div>
        )}

        <div className="flex h-[12.7rem] w-full flex-col gap-[0.8rem]">
          <div className="flex items-center gap-2">
            <ProjectStartIcon />
            <span>{projectStart}</span>
            <span className="ml-auto font-medium">
              {formatDate(creationDate, 'spelled', lang)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectDurationIcon />
            <span>{duration}</span>
            <span className="ml-auto font-medium">
              {projectCycle(project, lang)}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <ProjectComplexityIcon />
            <span>{complexity}</span>
            <div className="ml-auto">
              <ProjectComplexity count={complexityValue} />
            </div>
          </div>

          {project?.teamMembers?.length > 0 && (
            <button
              className="self-start border-b text-[2rem] font-medium"
              onClick={handleShowTeam}
            >
              {projectTeam}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCardContent };
