// Counted from the start of the Data Analyst role (July 2024) so the figure never goes stale.
const CAREER_START = new Date(2024, 6, 1);
export const yearsExperience = Math.max(
  1,
  Math.floor((Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
);

export const roles = ['Data Analyst', 'Full‑Stack Developer', 'Problem Solver'];

export const links = {
  github: 'https://github.com/acharyaganga',
  linkedin: 'https://www.linkedin.com/in/acharyagan/',
  bluesky: 'https://bsky.app/profile/gangaacharya.com',
  email: 'mailto:ach.ganga@outlook.com',
  source: 'https://github.com/acharyaganga/personal-website',
};

export const experience = [
  {
    period: 'Jul 2024 \u2013 Present',
    current: true,
    title: 'Data Analyst',
    org: 'Pennsylvania Department of Human Services, OMHSAS \u00b7 contractor via Computer Aid, Inc. (CAI)',
    points: [
      'Analyze and evaluate State Hospital system data that executive leadership uses for program planning, monitoring and resource allocation.',
      'Deliver scheduled and ad hoc reports, dashboards and datasets, including federal block grant and Governor\u2019s Budget reporting.',
      'Develop and track program performance measures, and recommend changes from the trends.',
      'Support EHR implementation and incident-management reporting, with documented specifications and data integrity checks.',
    ],
  },
  {
    period: '2022 – 2024',
    title: 'B.S. Computer Science',
    org: 'Millersville University',
  },
  {
    period: '2015 – 2021',
    title: 'Production Supervisor',
    org: 'BioFire Diagnostics',
    detail: 'Led a production team; quality investigations and process improvement.',
  },
];

export const skillGroups = [
  {
    id: 'data',
    label: 'Data & Reporting',
    skills: ['SQL', 'Python', 'R', 'Tableau', 'Qlik', 'Crystal Reports', 'PostgreSQL'],
  },
  {
    id: 'web',
    label: 'Web Development',
    skills: ['JavaScript (ES6+)', 'React', 'Node.js', 'Express.js', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'tools',
    label: 'Languages & Tools',
    skills: ['Java', 'C/C++', 'Git & GitHub', 'AWS Lightsail', 'Figma', 'WordPress'],
  },
];

export const projectsData = [
  {
    id: 'searchengine',
    title: 'Search Engine',
    description:
      'A Java search engine using PostgreSQL, integrating Porter stemmer and stopword filtering. Implements advanced search algorithms, PageRank, and indexing techniques for document retrieval. Features inverted indices for quick, precise searches across vast datasets and link graph analysis for result prioritization.',
    tags: ['Java', 'PostgreSQL', 'Gradle', 'Tomcat', 'Search Algorithms', 'PageRank'],
    label: 'private repo',
  },
  {
    id: 'umleditor',
    title: 'UML Editor',
    description:
      'A Python-based UML Editor using MVC architecture for efficient CLI and GUI diagram management. Features a custom parser and CI/CD pipeline, ensuring application reliability with robust exception handling and 100% pytest coverage. Includes an accessible, user-friendly GUI, refined through user feedback.',
    tags: ['Python', 'Tkinter', 'Pygame', 'pytest', 'MVC', 'CI/CD'],
    label: 'team project',
  },
  {
    id: 'blogsite',
    title: 'Simple Blog Site',
    description:
      'A simple and intuitive blogging platform built with the MEAN Stack (MongoDB, Express, Angular, Node.js) using MVC architecture. Users can create, manage, and engage with blog posts through comments and reactions.',
    tags: ['JavaScript', 'Angular', 'Node.js', 'Express', 'MongoDB', 'Full-Stack'],
    link: 'https://github.com/acharyaganga/MEAN-Project',
  },
  {
    id: 'portfolio',
    title: 'This Portfolio Website',
    description:
      'A responsive and interactive single-page application built to showcase my skills and projects. Developed with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Portfolio'],
    link: 'https://github.com/acharyaganga/personal-website',
  },
];
