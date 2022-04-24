import ProjectIdeas from 'assets/animations/learn-more/ProjectIdeas';
import ProjectPresenting from 'assets/animations/learn-more/ProjectPresenting';
import Tokenization from 'assets/animations/learn-more/Tokenization';
import ProjectLaunch from 'assets/animations/learn-more/ProjectLaunch';
import Deal from 'assets/animations/learn-more/Deal';
import Sphere from 'assets/animations/learn-more/Sphere';

import CarryOut from 'assets/animations/learn-more/CarryOut';
import Rocket from 'assets/animations/learn-more/Rocket';
export const cards = [
  {
    index: '01',
    title: 'Seed Project Idea',
    description:
      'When you have project idea which is in the seed level and preparing to grow as big as longest trees, Oak Hill Launchpad is ready listen about your project.',

    animationData: ProjectIdeas,
    centerAnimation: Sphere,
  },
  {
    index: '02',
    title: 'Project Presenting',
    description:
      'When we want to thoroughly vet projects on various aspects of business viability, we expect your best work and effort to make your project clearly understandable for our experienced team.',
    animationData: ProjectPresenting,
    centerAnimation: Deal,
  },
  // {
  //   title: '',
  //   description: '',
  //   animationData: Deal,
  // },
  {
    index: '03',
    title: 'Tokenization Dev.',
    description:
      'When you have project idea which is in the seed level and preparing to grow as big as longest trees, Oak Hill Launchpad is ready listen about your project',
    animationData: Tokenization,
    centerAnimation: CarryOut,
  },
  // {
  //   title: '',
  //   description: '',
  //   animationData: CarryOut,
  // },
  {
    index: '04',
    title: 'Project Launch',
    description:
      'When we want to thoroughly vet projects on various aspects of business viabilitiy, we expect your best work and effort to make your project clearly understandable for our experienced team.',
    animationData: ProjectLaunch,
    centerAnimation: Rocket,
  },
  // {
  //   title: '',
  //   description: '',
  //   animationData: Rocket,
  // },
];
