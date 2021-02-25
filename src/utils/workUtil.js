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
    desc: 'This full stack application allows users to view randomized art selected from The Metropolitan Museum of Art Collection in New York City. Users can save art to their own curated gallery and they can comment along with other art aficionados.',
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
    desc: 'This full stack migraine application allows users to record their migraines along with details of the migraine. Users can view their records over time to find common symptoms and remedies, in addition to their highest occurring statistics. They can also share their findings with healthcare professionals so they may find a suitable treatment moving forward.',
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
    desc: "A travel-inspired city search application. Users select a city and are returned travel information including a brief history, trending news headlines, travel-related videos, and a five day forecast. The content is useful for planning travels or learning about different cities around the globe. The app uses four third-party API's including the Wikipedia API, News API, YouTube API, and OpenWeatherMap API.",
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
    desc: 'This full stack note-taking application allows users to add and delete notes while keeping them organized in folders. The user can select a folder from the list or they may add a new folder to file their note in.',
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