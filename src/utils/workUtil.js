import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
} from 'react-icons/io';
import { SiJquery, SiPostgresql, SiReact } from 'react-icons/si';

import MuseMe from '../images/museme.png'
import MyBrainTracker from '../images/my-brain-tracker.png'
import Noteful from '../images/noteful.png'
import Travodex from '../images/travodex.png'

export const work = [
  {
    title: 'MuseMe',
    preview: MuseMe,
    desc: "Let's explore art together",
    codeLink: 'https://github.com/brandiherrera/museum-app-full-stack-capstone-react',
    liveLink: 'https://museum-app-full-stack-capstone-react.brandiherrera.now.sh/',
    techStack: [
      <IoLogoHtml5 />,
      <IoLogoCss3 />,
      <IoLogoJavascript />,
      <SiReact />,
      <IoLogoNodejs />,
      <SiPostgresql />,
    ],
  },
  {
    title: 'My-Brain Tracker',
    preview: MyBrainTracker,
    desc: 'Understand your migraine triggers and symptoms',
    codeLink: 'https://github.com/brandiherrera/migraine-app-full-stack-capstone-react',
    liveLink: 'https://migraine-app-full-stack-capstone-react.brandiherrera.now.sh/',
    techStack: [
      <IoLogoHtml5 />,
      <IoLogoCss3 />,
      <IoLogoJavascript />,
      <SiReact />,
      <IoLogoNodejs />,
      <SiPostgresql />,
    ],
  },
  {
    title: 'Travodex',
    preview: Travodex,
    desc: 'Explore the world from your couch',
    codeLink: 'https://github.com/brandiherrera/travel-destination-search-api-capstone',
    liveLink: 'https://brandiherrera.github.io/travel-destination-search-api-capstone/',
    techStack: [
      <IoLogoHtml5 />,
      <IoLogoCss3 />,
      <SiJquery />,
      <IoLogoJavascript />,
    ],
  },
  {
    title: 'Noteful',
    preview: Noteful,
    desc: 'Organize your to-do list once and for all',
    codeLink: 'https://github.com/brandiherrera/noteful-app',
    liveLink: 'https://noteful-app.brandiherrera.now.sh/',
    techStack: [
      <IoLogoHtml5 />,
      <IoLogoCss3 />,
      <IoLogoJavascript />,
      <SiReact />,
      <IoLogoNodejs />,
      <SiPostgresql />,
    ],
  },
]