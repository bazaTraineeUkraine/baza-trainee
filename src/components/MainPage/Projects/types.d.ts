import { TLandingLanguage } from '@/store/globalContext';
import { IProject } from '@/types';

export type TTeamMember = {
  _id: string;
  name: {
    en: string;
    pl: string;
    ua: string;
  };
  link: string;
};

// export type TTeamMemberRole = Omit<TTeamMember, 'link'>;
export type TTeamMemberRole = {
  _id: string;
  name: string;
};

export interface ICardContent {
  handleShowTeam: () => void;
  project: IProject;
  lang: TLandingLanguage;
}
