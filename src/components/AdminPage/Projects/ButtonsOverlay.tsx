import Link from 'next/link';
import { ReactElement } from 'react';

import { EditDeleteButton } from '@/components/atomic';
import { useProjectsSWR } from '@/hooks/SWR/useProjectsSWR';

export const ButtonsOverlay = ({ children }: { children: ReactElement }) => {
  const { handlerDeleteProject } = useProjectsSWR();

  const id = children.props.project._id;

  return (
    <div className="group relative w-full max-w-[37.8rem]">
      {children}

      <div className="absolute right-8 top-8 flex flex-col gap-3">
        <EditDeleteButton
          icon="delete"
          onClick={() => {
            handlerDeleteProject(id);
          }}
        />

        <Link href={`/admin/projects/edit/${id}`}>
          <EditDeleteButton icon="edit" />
        </Link>
      </div>

      {id}
    </div>
  );
};
