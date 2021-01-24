import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Matej | Portfolio', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Matej',
  subtitle: 'I am a Frontend Developer.',
  cta: 'Explore',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hi, my name is Matej Salic. I am a self-taught web developer.',
  paragraphTwo: 'I am currently working as a Network Technician, but I am looking to change my career path into something different, and that is Web Development. In my free time I build beautiful, responsive and usable websites using latest standards. I specialize in front-end development. I would like to work as a web developer in a team full of people who share the same passion as me.',
  paragraphThree: 'I am ready to start my journey with you :)',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-corona.png',
    title: 'Corona Tracker App',
    info: 'This simple app was made with React, Chart.js, Material UI and MathdroCovid-19 API. This was a great project to understand workflow and use of the hooks',
    info2: '',
    url: 'https://matej998.github.io/corona-tracker/',
    repo: 'https://github.com/matej998/corona-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-concinnity.png',
    title: 'Concinnity',
    info: 'This was a collaboration between my friend and myself. We had an idea to start a small startup business for making websites and this ended up being our official page. He was in charge of design, and I was here to make his vision a reality. I used HTML5/CSS3 and some jQuery to make pages look nicer, with animations and transitions being made with JS. We based our UI for mobile, because that is the number one source of traffic.',
    info2: '',
    url: 'https://matej998.github.io/con-cinnity/',
    repo: 'https://github.com/matej998/con-cinnity', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project-galapagos.png',
    title: 'Galapagos Pancakes',
    info: 'I made this page for small pancakes shop in Croatia. They only had a Facebook page so I decided to make them a website. I used Bootstrap for layout and responsiveness. This project was my first time using Google Maps API, so I spend some time learning and getting to know this technology.',
    info2: '',
    url: 'https://matej998.github.io/web_galapagos/',
    repo: 'https://github.com/matej998/web_galapagos', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'matej.salic98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matejsalic',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/matej998',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
