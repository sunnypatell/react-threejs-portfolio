import {
  mobile,
  backend,
  web,
  fullstack,
  javascript,
  java,
  html,
  css,
  reactjs,
  ubuntu,
  tailwind,
  mysql,
  linux,
  git,
  samaritans,
  oist,
  nextinnovation,
  cognizant,
  internshala,
  linkedin,
  hackerrank,
  karate,
  portfolio,
  pglife,
  sortingvisualiser,
  aws,
  python,
  cplusplus,
  typescript,
  node_js,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extracurricular",
    title: "Certifications",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: fullstack,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const education = [
  {
    title: "Honours Computer Science (H. BSc)",
    company_name: "Ontario Tech University, Oshawa, ON",
    icon: oist,
    iconBg: "#fff",
    date: "2022 - Present",
    points: [
      "Courses undertaken: Data Structures and Algorithms, Object-Oriented Programming, REST API Development and Integration, Software Design UML, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, Database Systems, Software Engineering.",
    ],
  },
  {
    title: "High School",
    company_name: "Richmond Hill High School, ON",
    icon: samaritans,
    iconBg: "#fff",
    date: "2018-2022",
    points: [
      "Achievements: Valedictorian, Ontario Scholar",
      "Percentage: 96%",
      ,
    ],
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Typescript",
    icon: typescript,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "NodeJS",
    icon: node_js,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "IT Technician - L3",
    company_name: "Canada's Wonderland",
    icon: cognizant,
    iconBg: "#fff",
    date: "Jun 2023 - Present",
    points: [
      "Managed Tier 1-3/L3 device management and deployment for 1500+ devices park-wide.",
      "Extensively utilized PowerShell scripting for server drive mapping, storage management, and mass changes to remote workstations.",
      "Utilized Oracle EMC and Symphony for POS/KDS system deployment and management.",
      "Administered Cisco CUCM for VOIP line configuration and Cisco ASA/Palo Alto Firewall technologies for secure connections.",
      "Ran Ethernet cables/patching and ensured LAN functionality by closely monitoring with LinkRunner AT/IntelliTone.",
      "Implemented LAN/WAN framework with Cisco routers, switches, and catalysts, ensuring seamless park-wide network functionality.",
      "Managed RSAT and Domain integration in systems including AD(LDAP), GP, FTP, NAS/SAN, AP Clusters, Bitlocker.",
      "Perform remote control and management using Connectwise/VNC/PS.",
  ],
  },
  {
    title: "System Support Specialist - L2",
    company_name: "Mackenzie Health Hospital",
    icon: nextinnovation,
    iconBg: "#fff",
    date: "Jan 2023 - Aug 2023 (8 mos.)",
    points: [
      "Supported 300+ bedside iPads/tablets for premium services and managed device configuration through remote portal access.",
      "Contributed to software development and system maintenance using Java, Python, and SQL.",
      "Worked on system maintenance for Mackenzie Health's IT infrastructure, spanning Citrix, VMware, VDI, Hyper-V, ESXi technologies.",
      "Optimized entertainment app efficiency by 25%, providing IPTV service, VOIP, movie service, games, and meal ordering.",
      "Conducted CLI scripting for system services resolution and comprehensive audits for bedside application code pushes.",
      "Leveraged Cortex XDR for monitoring network traffic and detecting malicious malware reports.",
    ],
  },
  {
    title: "Junior Systems Administrator",
    company_name: "Privcurity Consulting Corporation",
    icon: internshala,
    iconBg: "#1294C8",
    date: "May 2021 - Sep 2021 (5 mos.)",
    points: [
      "Managed virtual machines on Azure AD domain and implemented malware prevention measures.",
      "Conducted routine software updates and cloud file management with SSH, utilizing Python and SQL for analysis.",
      "Configured firewalls and monitored web traffic security using Wireshark/tcpdump.",
      "Monitored 2FA protocols and collaborated in deploying DDOS attack prevention measures.",
      "Maintained Privacy Security Architecture (PSA) systems for compliant data handling and protection.",
    ],
  },
];

const extracurricular = [
  {
    title: "1.5K+ Connections on LinkedIn",
    type: "Achievements",
    icon: linkedin,
    iconBg: "#007BB5",
    date: "April 2023",
    points: ["Credential ID: mohitsinghrajput"],
    credential: "https://www.linkedin.com/in/mohitsinghrajput/",
  },
  {
    title: "Java (Basic), CSS, SQL (Basic)-HackerRank",
    type: "Certification",
    icon: hackerrank,
    iconBg: "#050C18",
    date: "2022-2023",
    points: [
      "Credential ID: aac000e38dc9",
      "Credential ID: a274bb1292eb",
      "Credential ID: b024370fa737",
    ],
    credential: "https://www.hackerrank.com/certificates/aac000e38dc9",
  },
  {
    title: "Web Development-Internshala",
    type: "Certification",
    icon: internshala,
    iconBg: "#1294C8",
    date: "Sept 2021",
    points: ["Credential ID: 281DB109-2DA8-A160-DCBC-C6C0F552B57C"],
    credential:
      "https://trainings.internshala.com/verify-certificate/?certificate_number=281DB109-2DA8-A160-DCBC-C6C0F552B57C",
  },
  {
    title: "Combat Sport-Karate",
    type: "Extracurricular(Hobby)/Combat Sport",
    icon: karate,
    iconBg: "#CCCFD8",
    date: "2006-2020",
    points: [
      "State level Gold medalist in Kumite.",
      "Renshi Cup National Championship Bronze medalist in Kumite.",
    ],
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Web Portfolio in React JS which uses 3D graphics and animations to bring the content to life. The website is divided into several main sections, including an about, Education, project, connect and contact section. Each section is designed to showcase 3D's unique style and creativity, with an emphasis on interactivity and user engagement.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/mohitrajput2002/my-portfolio",
    live_project_link: "https://mohit-singh-rajput.vercel.app/",
  },
  {
    name: "PG Life",
    description:
      "The PG-Life Web Application is a platform designed to facilitate the management and search for Paying Guest (PG) accommodations. It allows users to explore available PG options, view details, and connect with potential landlords or tenants.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: pglife,
    source_code_link: "https://github.com/mohitrajput2002/PG_Life",
    live_project_link: "https://github.com/mohitrajput2002/PG_Life",
  },
  {
    name: "Sorting Visualizer",
    description:
      "The Sorting Visualizer is a web application that provides a visual representation of various sorting algorithms. It allows users to observe and understand how different sorting algorithms work by animating the sorting process.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: sortingvisualiser,
    source_code_link:
      "https://github.com/mohitrajput2002/sorting-visualizer-project.github.io.git",
    live_project_link: "https://sorting-visuallizer.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  extracurricular,
  projects,
  education,
};
