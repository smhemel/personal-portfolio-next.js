// Hero
import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon';
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon';

/* eslint-disable react/jsx-key */
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
];

// About Me
import AwardFillIcon from 'remixicon-react/AwardFillIcon';
import GroupLineIcon from 'remixicon-react/GroupLineIcon';
import GithubFillIcon from 'remixicon-react/GithubFillIcon';
import DownloadLineIcon from 'remixicon-react/DownloadLineIcon';
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon';
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon';

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />
export const aboutData = [
  {
    title: 'Github Repos',
    amount: 348,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Successful Projects',
    amount: 227,
    icon: <Projector2LineIcon />,
  },
  {
    title: 'Satisfied clients',
    amount: 176,
    icon: <GroupLineIcon />,
  },
  {
    title: 'Awards and Recognition',
    amount: 107,
    icon: <AwardFillIcon />,
  },
];

export const aboutText =
  " Hi, I'm Hemel, a web developer & designer. I blend the technical  skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites, while also using design tools like Photoshop and Figma to create visually appealing and user-friendly  interfaces. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience."
// End of About Me

// Experience
export const experienceData = [
  {
    year: 1,
    title: 'Foundation and Basics',
    education:
      'High School Diploma: Focus on computer science, mathematics, and art/design courses.',
    experience: [
      'Basic HTML/CSS: Learn through online tutorials and courses.',
      'Personal Projects: Create simple personal websites or blogs.',
    ],
  },
  {
    year: 2,
    title: 'Advanced Learning and Early Experience',
    education:
      'Associate’s Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.',
    experience: [
      'Freelance Work: Take on small freelance projects to build a portfolio.',
      'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
    ],
  },
  {
    year: 3,
    title: 'Specialized Education and Real-World Application',
    education:
      'Online Courses and Bootcamps: Focus on specialized areas like front-end frameworks (React, Angular) and back-end technologies (Node.js).',
    experience: [
      'Internships: Secure internships with tech companies or design agencies.',
      'Contribute to Open Source: Collaborate on open-source projects.',
    ],
  },
  {
    year: 4,
    title: 'Building Expertise and Expanding Skills',
    education: 'Certifications: Obtain certifications in advanced web technologies.',
    experience: [
      'Full-Time Position: Work as a junior web developer or designer.',
      'Portfolio Development: Continuously update your portfolio with professional and personal projects.',
    ],
  },
  {
    year: 5,
    title: 'Mastery and Leadership',
    education: 'Workshops and Conferences: Attend industry events to stay updated.',
    experience: [
      'Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.',
      'Freelance and Consulting: Consider starting a freelance business or consulting practice.',
    ],
  },
]