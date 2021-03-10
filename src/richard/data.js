import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Richard Cho | Full Stack Sofware Engineer',
  lang: 'en',
  description: 'Welcome to my portfolio site',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: ' Richard Cho',
  subtitle: 'Welcome to my portfolio site!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full stack software engineer that specializes in React, Redux, JavaScript, Ruby, Ruby on Rails and PostgreSQL. I also have experience in HTML, CSS, Node.js and Express.js.',
  paragraphTwo:
    'With a background in wholesale insurance, I have experience in prioritizing competing tasks under pressure, communicating clearly with clients and collaborating with other team members.',
  paragraphThree:
    "If I'm not in front of the computer coding, I'm likely watching my favorite shows, playing the bass guitar or cooking some homemade comfort food. 👨‍🍳 ",
  resume: 'https://drive.google.com/file/d/1w0nG7u9OHBfqVofTNbGxyc-Fp0BhRLKZ/view?usp=sharing',
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
      'Built with: React, React Router, Redux, Redux-Thunk, Rails RESTful API, PostgreSQL, React-Bootstrap and CSS',
    url: 'https://youtu.be/roVx_cITA9U',
    repo: 'https://github.com/rcho100/movie-central-frontend',
  },
  {
    id: nanoid(),
    img: 'community-library.png',
    title: 'Community Library',
    info:
      'Community Library is a web app that assists students in literature clubs to borrow and return classic literature books.',
    info2: 'Built with: JavaScript, Rails RESTful API, PostgreSQL, CSS Flexbox & Grid',
    url: 'https://youtu.be/jVz0KxiH4EQ',
    repo: 'https://github.com/rcho100/community-library-frontend',
  },
  {
    id: nanoid(),
    img: 'office-quote-generator.png',
    title: 'The Office Quote Generator ',
    info:
      'A handy website that provides random quotes from the office. A must visit for a fan of The Office.',
    info2: 'Built with: React, React Hooks, CSS',
    url: 'https://rcho100.github.io/office-quote-generator/',
    repo: 'https://github.com/rcho100/office-quote-generator',
  },
  {
    id: nanoid(),
    img: 'breathe-to-relax.png',
    title: 'Breathe to Relax',
    info:
      'Breathe to Relax is a web app you can use to help you take deep breathes to relax by visually showing the duration of each breathe you should take.',
    info2: 'Built with: JavaScript, CSS and HTML',
    url: 'https://breathetorelax.netlify.app/',
    repo: 'https://github.com/rcho100/Breathe-to-Relax',
  },
  {
    id: nanoid(),
    img: 'save-the-food.png',
    title: 'Save the Food',
    info:
      'Save-the-Food is a place where you can store your favorite recipes and also view recipes that other users have added in. You also have the option of rating and reviewing any of the recipes you see.',
    info2: 'Built with: Full Stack Rails, PostgreSQL, Omniauth, Bootstrap',
    url: 'https://youtu.be/oKsad37Ow-Y',
    repo: 'https://github.com/rcho100/Save-the-Food',
  },
];

// CONTACT DATA
export const contactData = {
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
  isEnabled: false,
};
