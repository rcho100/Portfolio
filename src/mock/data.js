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
    'I am a full-stack software developer with experience in React, Redux, JavaScript, Ruby on Rails, SQL, CSS, and HTML.',
  paragraphTwo:
    'Coming from an Economics background, I returned to school to meet CPA License requirements when I fell in love with coding, and I have continued evolving as a software developer ever since.',
  paragraphThree:
    "Along with my technical skills, I possess strong skills in teamwork and in client service, which I developed in my previous role in the wholesale insurance industry. I'm excited to continue to learn and grow and hopefully make the world a better place.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
  // https://www.linkedin.com/in/richard-cho-166b301b2
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Movie Central',
    info:
      'Movie Central is a web app that allows users to browse through currently popular movies and top rated movies. Users can also create an account to add movies to their own watchlist.',
    info2:
      'Uses React, React Router, Redux, Rails RESTful JSON API, PostgreSQL, Bcrypt, Session Cookies, React-Bootstrap, & Custom CSS',
    url: '',
    repo: 'https://github.com/rcho100/movie-central-frontend',
    // https://github.com/rcho100/movie-central-backend
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Community Library',
    info:
      'Community Library is a web app that assists students in literature clubs to borrow and return classic literature books.',
    info2:
      'Built with Vanilla JavaScript, Rails RESTful JSON API, JWT Tokens, Bcrypt, PostgreSQL, & Custom CSS',
    url: 'https://rcho100.github.io/community-library-frontend',
    repo: 'https://github.com/rcho100/community-library-frontend',
    // https://github.com/rcho100/community-library-api
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Save the Food',
    info:
      'Save-the-Food is a place where you can store your favorite recipes and also view recipes that other users have added in. You also have the option of rating and reviewing any of the recipes you see.',
    info2: 'Built with Rails, PostgreSQL, Bcrypt, Omniauth-Google, Bootstrap, & Custom CSS',
    url: '',
    repo: 'https://github.com/rcho100/Save-the-Food',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/richard-cho-166b301b2',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
