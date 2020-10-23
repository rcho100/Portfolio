import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Richard Cho | Full-Stack Sofware Engineer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Richard Cho',
  subtitle: 'Welcome to my portfolio site!',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full-stack software engineer with experience in React, Redux, JavaScript ES5/ES6-9, Ruby on Rails, SQL, CSS3, and HTML.',
  paragraphTwo:
    'After working a few years in the wholesale insurance industry, I returned to school to meet CPA License requirements when I fell in love with coding.',
  paragraphThree:
    "Along with my technical skills, I possess strong skills in teamwork and in client service, which I developed in my previous role in the wholesale insurance industry. I'm looking to work to continue to learn and grow as a software engineer.",
  resume: 'https://drive.google.com/file/d/1pg45ztwtgQOF5S8NVrUukSKGhuggWS-C/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movie-central.png',
    title: 'Movie Central',
    info:
      'Movie Central is a web app that allows users to browse through currently popular movies and top rated movies. Users can also create an account to add movies to their own watchlist.',
    info2:
      'Built with: React, React Router, Redux, Rails RESTful JSON API, PostgreSQL, Bcrypt, Session Cookies, React-Bootstrap, & Custom CSS',
    url: 'https://moviecentral.netlify.app',
    repo: 'https://github.com/rcho100/movie-central-frontend',
  },
  {
    id: nanoid(),
    img: 'community-library.png',
    title: 'Community Library',
    info:
      'Community Library is a web app that assists students in literature clubs to borrow and return classic literature books.',
    info2:
      'Built with: JavaScript, Rails RESTful JSON API, JWT Tokens, Bcrypt, PostgreSQL, & Custom CSS',
    url: 'https://rcho100.github.io/community-library-frontend',
    repo: 'https://github.com/rcho100/community-library-frontend',
  },
  {
    id: nanoid(),
    img: 'breathe-to-relax.png',
    title: 'Breathe to Relax',
    info:
      'Breathe to Relax is a web app designed to help people take deep breaths to help relax their mind and body.',
    info2: 'Built with: HTML, CSS, JavaScript',
    url: 'https://breathetorelax.netlify.app',
    repo: 'https://github.com/rcho100/Breathe-to-Relax',
  },
  {
    id: nanoid(),
    img: 'save-the-food.png',
    title: 'Save the Food',
    info:
      'Save-the-Food is a place where you can store your favorite recipes and also view recipes that other users have added in. You also have the option of rating and reviewing any of the recipes you see.',
    info2: 'Built with: Rails, PostgreSQL, Bcrypt, Omniauth-Google, Bootstrap',
    url: 'https://drive.google.com/file/d/19KANxQVXjKpxId7xywLkn9-4pJS9rh7G/view?usp=sharing',
    repo: 'https://github.com/rcho100/Save-the-Food',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'richardcho100@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/richardcho100',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rcho100',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
