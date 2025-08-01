// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';


// Education Section Logo's
import jnvLogo from './assets/education_logo/jnv_logo.png';
import lpsLogo from './assets/education_logo/lps_logo.png';
import cuLogo from './assets/education_logo/cu_logo.png';

// Project Section Logo's
import githubProfile from './assets/work_logo/GitHub-profile-search.png';
import imgGenerator from './assets/work_logo/Img-generator.png';
import peopleCounter from './assets/work_logo/People counter.png';
// import taskremLogo from './assets/work_logo/task_rem.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JS', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo }
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo }
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JS', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: cuLogo,
      school: "Chitkara University, HP",
      date: "Aug 2024- ongoing",
      desc: "Pursuing a core CSE program with a strong foundation in computer science fundamentals, including data structures, algorithms, operating systems, computer networks, and database management systems. Focused on problem-solving, programming, and system-level understanding through practical labs and academic projects.",
      degree: "Bachelor of Engineering in Computer Science and Engineering - BE CSE",
    },
    {
      id: 1,
      img: lpsLogo,
      school: "Lawrence Public school Shahpur (Kangra)",
      date: "Apr 2023 - March 2024",
      desc: "I completed my class 12 education from Lawrence Public school Shahpur (Kangra), under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: jnvLogo,
      school: "Jawahar Navodaya Vidyalaya",
      date: "Apr 2021 - March 2022",
      desc: "I completed my class 10 education from Jawahar Navodaya Vidyalaya, Chamba, under the CBSE board, where I studied Science with Information Technology (IT).",
      degree: "CBSE(X), Science with IT",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "AI Image Generator",
      description:
        "An AI-powered image generator web application that allows users to create unique images from text prompts using advanced AI models.",
      image: imgGenerator,
      tags: ["React JS", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/mannat-07/AI-image-generator.git",
      webapp: "",
    },
    {
      id: 1,
      title: "GitHub Profile Search",
      description:
        "Unleash your inner code ninja with this sleek, GitHub profile tracker! Search any GitHub username to reveal their full profile dossier — from public repos to followers and more. If your target vanishes in the shadows, we’ll fetch lookalike suspects so you never lose the trail.",
      image: githubProfile,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/mannat-07/GitHub-profile-search.git",
      webapp: "https://mannat-github-profile-search.netlify.app/",
    },
    {
      id: 2,
      title: "People Counter",
      description:
        "Track how many people enter and exit an area using just a camera and a few lines of Python. This project uses OpenCV's HOG detector + virtual lines to count people in video.",
      image: peopleCounter,
      tags: ["Python", "OpenCV", "Imutils"],
      github: "https://github.com/mannat-07/People-counter.git",
      webapp: "",
    },
    {
      id: 3,
      title: "Cloak of Invisibility",
      description:
        "This project creates a magical invisibility cloak effect using Python and OpenCV — inspired by Harry Potter! When you wear a cloak of a specific color (like yellow), the program detects that color and replaces it with the background, making you appear invisible on screen.",
      // image: movierecLogo,
      tags: ["Python", "OpenCV", "NumPy"],
      github: "https://github.com/mannat-07/Cloak-of-invisibility---Harry-Potter.git",
      webapp: "",
    },

  ];  