import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  php,
  jakarta,
  smartphone,
  blog,
  adoptme,
  crud,
  medicalfile,
  movie,
  mysql,
  microsoft,
  fcc,
  udemy,
  two,
  iii,
  kob,
  simp,
  wire,
  rust,
  solidity
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web3 Engineer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Jakarta EE",
    icon: jakarta,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Wirecard",
    icon: wire,
    iconBg: "#E6DEDD",
    date: "2014 - 2018",
    points: [
      "Encircle is a health insurance program financed and run jointly by the federal and state governments for low income people of all ages who do not have the money or insurance to pay for health care.",
      "The goal of the program is to provide medical and other health care services to eligible individuals so that they are able to remain as self-sufficient as possible.",
      "Designed a notification utility that can be used for drafting, scheduling, or executing any kind of notification along with Webhooks for a client's custom implementation.",
    ],
  },
  {
    title: "Blockchain Full Stack Developer",
    company_name: "Simpplr ",
    icon: simp,
    iconBg: "#383E56",
    date: "2018 - 2021",
    points: [
      "Engaged with clients wanting to enter the blockchain space, especially in the Ethereum ecosystem.",
      "Prototyped several optimizations including scheduling and specialized smart contracts.",
      "Implemented Solidity smart contract module upgrades and optimizations; firebase authenticated endpoints; dependency injections; microservices, including caching and retrieving asset prices on the Spring API; and comprehensive unit tests with mocks.",
      "Maintained and developed upon the entire Solidity stack. Managed several smart contract developers to coordinate feature implementation, code reviews, and protocol improvements."
    ],
  },
  {
    title: "Blockchain Full Stack Developer(Rust +)",
    company_name: "IIInigence",
    icon: iii,
    iconBg: "#383E56",
    date: "2022 - 2023",
    points: [
      "Designed and created the IDO program for Solana blockchain. ",
      "Helped to integrate Solana Web3 and Rust program. It included spl-token mint, spl-token staking and basic Solana wallet.",
      "Deployed and tested smart contracts in the private blockchain.",
      "Helped implement algebraic decentralized finance Liquidity Pool math using approximation methods within the protocol contracts."
    ],
  },
  {
    title: "Blockchain Full Stack Developer",
    company_name: "KobGames Studio",
    icon: kob,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "As a Rust/Anchor smart contract developer, I built the Solana P2E game program for this game studio.",
      "And as a full stack developer I built the Front-end and web3 binding for Solana network.",
      "Architected feature-rich gaming, rewards, and a pack NFT project for a major sports league.",
      "Wrote the integration layer between the React app and the blockchain and created an authentic gaming experience for customers.",
      "Architected feature-rich gaming, rewards, and a pack NFT project for a major sports league."
    ],
  },
  {
    title: "Smart Contract Developer",
    company_name: "Twosteppe Digital",
    icon: two,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Implemented and designed smart contracts for the DeFi protocol.",
      "Implemented large gas optimizations in underlying DAO governance, stablecoin yield generation, liquidity arbitrage functionalities, and integration of new LP pools for the regular coin peg maintenance, such as curve finance and Liquidity Protocol.",
      "Developed a full-features backend for testing the functionality of smart contracts.",
      "Helped to integrate Ethereum and ER20 tokens into an exchange that is currently being built. It included address generation, token listing, and basic wallet operation related to ether and tokens using Web3.js.",
      "Researched the use of permissioned blocks and IPFS.",
      "Developed smart contracts, and gave a review on Solidity smart contracts."
    ],
  },
];

const certifications = [
  {
    certification: "The Complete React Redux Node Express MySql Developer",
    name: "Udemy",
    date: "Mar 2023",
    image: udemy,
  },
  {
    certification: "Front End Development Libraries ",
    name: "FreeCodeCamp",
    date: "Nov 2022",
    image: fcc,
  },
  {
    certification: "Responsive Web Design ",
    name: "FreeCodeCamp",
    date: "May 2022",
    image: fcc,
  },
  {
    certification: "JavaScript Algorithms and Data Structures ",
    name: "FreeCodeCamp",
    date: "Jun 2022",
    image: fcc,
  },
  {
    certification: "Azure Fundamentals",
    name: "Microsoft",
    date: "Jan 2023",
    image: microsoft,
  },
  {
    certification: "Azure AI Fundamentals",
    name: "Microsoft",
    date: "Feb 2023",
    image: microsoft,
  },
];

const projects = [
  {
    name: "Smartphone Store",
    description:
      "This application allows users to browse, search, and purchase mobile phones and accessories. Additionally, it provides admin pages to manage products, categories, and user orders.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs ",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: smartphone,
    source_code_link: "https://github.com/Bahri-Adem/Mobile-Store-MERN-APP",
  },
  {
    name: "Medical File",
    description:
      "The project is to develop a web application that centralizes patients' medical data for all healthcare providers (medical clinics, laboratories, pharmacies).",
    tags: [
      {
        name: "JEE",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: medicalfile,
    source_code_link:
      "https://github.com/Bahri-Adem/Application-Web-Des-Patients",
  },
  {
    name: "IT Blog",
    description:
      "A user-friendly blog platform for creating, reading, and editing posts. Intuitive design, categorized content, and user interactions through comments and likes.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Bahri-Adem/IT-Blog-Php",
  },
  {
    name: "Adopt Me",
    description:
      "A compassionate platform connecting pet lovers with their furry soulmates. Simplifying pet adoption, users can explore a wide range of adorable animals seeking forever homes.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "React Query",
        color: "pink-text-gradient",
      },
    ],
    image: adoptme,
    source_code_link: "https://github.com/Bahri-Adem/AdoptMe-React-Application",
  },
  {
    name: "Students Managment",
    description:
      "Securely manage student profiles with authentication. Admins can view, create, update, and delete data, including name, email, age, and picture. Simplify student record management for educational institutions with ease.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Express ",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link:
      "https://github.com/Bahri-Adem/MERN-CRUD-APP-With-Login-and-Registration",
  },
  {
    name: "Movie Trailer",
    description:
      "This platform, akin to Netflix, provides users with an immersive experience through a vast collection of movie trailers. With an intuitive interface, users can effortlessly explore a diverse range of films and receive tailored recommendations based on their viewing preferences.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux ",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/Bahri-Adem/React-Redux-Movie-Trailer",
  },
];

export { services, technologies, experiences, certifications, projects };
