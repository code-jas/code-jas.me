// types/profile.ts

export interface HomeSection {
   header: string;
   subheader: string;
   avatar: string;
   hoverMessages: string[];
}

export interface AboutContent {
   title: string;
   text: string[];
   image: string;
}

export interface AboutSection {
   header: string;
   subheader: string;
   content: AboutContent[];
}

export interface Role {
   title: string;
   startDate: string;
   endDate: string;
   descriptions: string[];
}

export interface TimelineEntry {
   company: string;
   url: string;
   roles: Role[];
}

export interface ExperienceSection {
   header: string;
   subheader: string;
   timeline: TimelineEntry[];
}

export interface TechStack {
   label: string;
   icon: string;
}

export interface Project {
   id: number;
   title: string;
   projectType: string[];
   description: string;
   informations: string[];
   techStacks: TechStack[];
   liveSiteLink: string;
   bgImage: string;
   coverImage: string;
   mockupImage?: string;
}

export interface ProjectSection {
   header: string;
   subheader: string;
   projects: Project[];
}

export interface TechnologiesSection {
   header: string;
   subheader: string;
   technologies: string[][];
}

export interface Social {
   url: string;
   icon: string;
   hoverColor: string;
   preview: boolean;
}

export interface ContactSection {
   header: string;
   description: string;
   email: string;
   emailButtonLabel: string;
   emailButtonClasses: string;
   socialMessage: string;
   social: Social[];
}

export interface Navbar {
   title: string;
   href: string;
   isActive: boolean;
}

export interface UserProfile {
   home: HomeSection;
   about: AboutSection;
   experience: ExperienceSection;
   projects: ProjectSection;
   tech: TechnologiesSection;
   contact: ContactSection;
}
