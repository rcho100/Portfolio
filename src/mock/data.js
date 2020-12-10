import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Richard Cho | Full Stack Sofware Engineer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio site',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Richard Cho',
  subtitle: 'Welcome to my portfolio site!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a full stack software engineer that specializes in React, Redux, JavaScript, Ruby, Ruby on Rails and PostgreSQL. I also have experience in HTML, CSS, Node.js and Express.js.',
  paragraphTwo:
    'After working a few years in the wholesale insurance industry, I attended Flatiron School’s software engineering program after I fell in love with building things with code.',
  paragraphThree:
    "Along with my technical skills, I have strong interpersonal skills working in a team and I have experience in facing clients. I'm looking to work with a great team to continue to learn and solve things together.",
  resume: 'https://drive.google.com/file/d/1ERqMp96UwbD-k1mH0Q10u9EOls4rx90X/view?usp=sharing',
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
      'Built with: React, React Router, Redux, Rails RESTful JSON API, PostgreSQL, React-Bootstrap, Responsive Custom CSS',
    url: 'https://moviecentral.netlify.app',
    repo: 'https://github.com/rcho100/movie-central-frontend',
  },
  {
    id: nanoid(),
    img: 'community-library.png',
    title: 'Community Library',
    info:
      'Community Library is a web app that assists students in literature clubs to borrow and return classic literature books.',
    info2: 'Built with: JavaScript, Rails RESTful JSON API, PostgreSQL, & Responsive Custom CSS',
    url: 'https://rcho100.github.io/community-library-frontend',
    repo: 'https://github.com/rcho100/community-library-frontend',
  },
  {
    id: nanoid(),
    img: 'save-the-food.png',
    title: 'Save the Food',
    info:
      'Save-the-Food is a place where you can store your favorite recipes and also view recipes that other users have added in. You also have the option of rating and reviewing any of the recipes you see.',
    info2: 'Built with: Rails, PostgreSQL, Bcrypt, Omniauth, Bootstrap',
    url: 'https://drive.google.com/file/d/19KANxQVXjKpxId7xywLkn9-4pJS9rh7G/view?usp=sharing',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
