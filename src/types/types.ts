export interface TechStack {
   label: string;
   icon: string;
}

export interface Project {
   title: string;
   description: string;
   projectType: string[];
   informations: string[];
   techStacks: TechStack[];
   liveSiteLink: string;
   bgImage: string;
   coverImage: string;
   mockupImage?: string;
}
