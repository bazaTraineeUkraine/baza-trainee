export type TSlide = {
  title: string;
  specialization?: string;
  text: string;
  image: string;
};

export type TSlideReview = {
  name: string;
  role: string;
  date: string;
  review: string;
  imageUrl: string;
};

type TAdminSlideTitle = {
  ua: string;
  pl: string;
  en: string;
};

export type TAdminSlide = {
  title: TAdminSlideTitle;
  subtitle: TAdminSlideTitle;
  imageUrl?: string;
  __v: number;
  _id: string;
  key: string;
  slideData: never;
};

export interface IAddEditSlideProps {
  title: string;
  isEdit: boolean;
}

export interface ISlideFormProps {
  data?: {
    title?: {
      ua?: string;
      en?: string;
      pl?: string;
    };
    subtitle?: {
      ua?: string;
      en?: string;
      pl?: string;
    };
    imageUrl?: string;
    _id?: string;
    _v?: number;
  };
  isEdit?: boolean;
}

export type TDictionary = {
  navbar: {
    projects: string;
    partners: string;
    participate: string;
    contacts: string;
  };
  monthsNames: {
    nouns: string[];
    spelled: string[];
  };
  noProjects: string;
  moreProjects: string;
  projects: {
    projectStart: string;
    projectCycle: string;
    duration: string;
    complexity: string;
    projectTeam: string;
    status: {
      teamFormation: string;
      underDevelopment: string;
      completed: string;
    };
  };
  invite: {
    supportBazaTrainee: string;
    teamsWaitForYou: string;
    bazaTraineeInvite: string;
    chooseRole: string;
    role: {
      participant: string;
      mentor: string;
      partner: string;
      customer: string;
    };
  };
  partners: {
    title: string;
  };
  stats: {
    completedProjects: string;
    involvedParticipants: string;
    employed: string;
  };
  reviews: {
    title: string;
  };
  modal: {
    title: string;
    description: string;
    sums: {
      otherSum: string;
    };
    button: string;
  };
  footer: {
    projects: string;
    partners: string;
    participate: string;
    privacyPolicy: string;
    rulesForUsingTheSite: string;
    statute: string;
    accountability: string;
    allRightsReserved: string;
  };
  notFound: {
    title: string;
    description: string;
    button: string;
  };
  toFund: string;
  currency: string;
  enterKeywordForSearch: string;
  yourHelpIsWorth: {
    title: string;
    firstPart: string;
    secondPart: string;
  };
  spinner: {
    loading: string;
    error: string;
  };
};
