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
  " Hi, I'm Nick, a web developer & designer. I blend the technical  skills of web development with the creative aspects of web design. I code in HTML, CSS, JavaScript, React, NextJS... to build functional and responsive websites, while also using design tools like Photoshop and Figma to create visually appealing and user-friendly  interfaces. My role allows me to ensure that websites not only work well but also look great and provide an excellent user experience."
// End of About Me