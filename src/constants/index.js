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
  postgresql,
  git,
  otu,
  rhhs,
  wonderland,
  mackenziehealth,
  privcurity,
  staples,
  google,
  whmis,
  aws,
  python,
  cplusplus,
  typescript,
  netdashlanding,
  securebankdashboard,
  sunnifyimage,
  knifethrowimage,
  // pythonanalysis,
  // password_generator,
  // wordsearch,
  powershell,
  cisco,
  connectwise,
  virtualbox,
  kalilinux,
  wireshark,
  nmap,
  metasploit,
  johntheripper,
  hydra,
  aircrackng,
  photoshop,
  premiere,
  cinema4d,
  blender,
  connectwisecert,
  awsdbcert,
  financialflowimage,
  enterpriseapitester,
  github,
  mongodb,
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
    title: "Systems Infrastructure",
    icon: backend,
  },
  {
    title: "Cloud Automation",
    icon: mobile,
  },
  {
    title: "Workflows",
    icon: web,
  },
];

const education = [
  {
    title: "Honours Computer Science (H. BSc)",
    company_name: "Ontario Tech University, Oshawa, ON",
    icon: otu,
    iconBg: "#fff",
    date: "2022 - Present",
    points: [
      "Dean's Honours List - Fall 2024",
      // "Courses undertaken: Data Structures and Algorithms, OOP, REST API, Software Design, Python Data Analysis, Discrete Mathematics, Computer Architecture, Operating Systems, PostgreSQL.",
    ],
  },
  {
    title: "High School",
    company_name: "Richmond Hill High School, ON",
    icon: rhhs,
    iconBg: "#fff",
    date: "2018-2022",
    points: [
      "Ontario Scholar",
      "12th Grade: 96%",
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
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostGreSQL",
    icon: postgresql,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
    {
    name: "Tailwind CSS",
    icon: tailwind,
  }, 
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const itTools = [
  {
    name: "Powershell",
    icon: powershell,
  },
  {
    name: "Cisco",
    icon: cisco,
  },
  {
    name: "ConnectWise",
    icon: connectwise,
  },
  {
    name: "VirtualBox",
    icon: virtualbox,
  },
];

const cybersecurityTools = [
  {
    name: "Kali Linux",
    icon: kalilinux,
  },
  {
    name: "Wireshark",
    icon: wireshark,
  },
  {
    name: "Nmap",
    icon: nmap,
  },
  {
    name: "Metasploit",
    icon: metasploit,
  },
  {
    name: "John the Ripper",
    icon: johntheripper,
  },
  {
    name: "Hydra",
    icon: hydra,
  },
  {
    name: "Aircrack-ng",
    icon: aircrackng,
  },
];

const designTools = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere",
    icon: premiere,
  },
  {
    name: "Cinema 4D",
    icon: cinema4d,
  },
  {
    name: "Blender",
    icon: blender,
  },
];

const experiences = [
  {
    title: "IT Technician - Canada's Wonderland",
    company_name: "Canada's Wonderland",
    icon: wonderland,
    iconBg: "#fff",
    date: "Jun. 2023 - Present",
    points: [
      "Provisioned Windows PCs with MDT, and deployed scripting via PowerShell and ConnectWise.",
      "Managed AD accounts to propagate ACLs and unified access across in-house apps, Exchange, and SharePoint.",
      "Configured Cisco CUCM, Unity, and Finesse for stable call routing and voicemail services.",
      "Handled switch patching and VLAN/routing via PuTTY & SecureCRT, ensuring stable network performance.",
      "Deployed Oracle POS/KDS/Debit solutions (EMC, Simphony), tracking updates in Jira & Confluence.",
    ],
  },
  {
    title: "System Support Specialist - Mackenzie Health",
    company_name: "Mackenzie Health",
    icon: mackenziehealth,
    iconBg: "#fff",
    date: "Jan. 2023 - Aug. 2023",
    points: [
      "Overhauled 400+ Surface tablets to bedside iPads, deploying the in-house 'Get Well Soon' app with Intune to hospital systems.",
      "Developed and refined an admin portal for managing app services, user roles, and subscription expirations.",
      "Utilized Jamf Pro for MDM, securely deploying iPads/iPhones across clinical departments.",
      "Implemented Vocera VOIP on iPhones, enabling real-time communication among nurses and ER staff.",
      "Performed in-room checks, resolved device issues, and collaborated with vendors on bug logs and system updates.",
    ],
  },
  {
    title: "Tech Sales Associate - Staples Canada",
    company_name: "Staples Canada (Co-op)",
    icon: staples,
    iconBg: "#1294C8",
    date: "Sep. 2020 - Feb. 2021",
    points: [
      "Provided specialized support for Windows, Mac, and Linux, performing on-site installations, repairs, and optimizations.",
      "Streamlined inventory processes by handling SKUs and POs, maintaining a well-organized sales floor.",
      "Maintained accurate sales and inventory data in IBM AS/400, improving workflows and operational efficiency.",
      "Resolved complex technical inquiries, delivering tailored solutions that ensured high customer satisfaction.",
      "Facilitated e-commerce transactions, merging in-store and online channels.",
    ],
  },
];


const extracurricular = [
  {
    title: "MongoDB Python Developer Path",
    type: "Proof of Completion",
    icon: mongodb,
    iconBg: "#000000",
    date: "Feb 2025",
    points: ["PyMongo, NoSQL Schema Design, Data Aggregation, MongoDB Query Optimization"],
    credential: "https://learn.mongodb.com/c/tf2DSC7hTcyM3NBZjkLPoA",
  },
  {
    title: "Github Foundations",
    type: "Professional Certificate",
    icon: github,
    iconBg: "#000000",
    date: "Issued: Sep 2024 - Expires: Sep 2027",
    points: ["Version Control, Git, Actions, CI/CD, Repository Management, SAP Workflow"],
    credential: "https://www.credly.com/badges/b6f69785-2da8-447e-b02c-3350bf9af803",
  },
  {
    title: "Certified Enterprise Scripting Architect",
    type: "Automate | Connectwise University",
    icon: connectwise,
    iconBg: "#748C7B",
    date: "Jul 2024",
    points: ["RMM, MDM, Powershell, Scripting, Windows Server, Enterprise Architecture, Query Optimization"],
    credential: connectwisecert,
  },
  {
    title: "Google IT Automation With Python",
    type: "Professional Certificate",
    icon: google,
    iconBg: "#050C18",
    date: "Mar 2023",
    points: [
      "Configuration Management, Automation, Google Cloud Platform (GCP), Cloud Servers and VM's, Version Control Tools, Automation.",
    ],
    credential: "https://www.coursera.org/account/accomplishments/specialization/certificate/82SZFUWF4B3T",
  },
  {
    title: "WHMIS (Worker Health and Safety)",
    type: "Government Workforce Requirement",
    icon: whmis,
    iconBg: "#CCCFD8",
    date: "Sep 2020",
    points: ["Hazard Awareness, Legal Compliance, Personal Protection, Accident Prevention"],
  },
];

const projects = [
  {
    name: "Netdash (Networking Toolbox) 🌐",
    description:
      "Netdash is a production-grade networking toolkit with 15+ tools for subnetting, IP conflict detection, and configuration generation. It supports real-time RTT testing, WebSocket port scans, DNS-over-HTTPS queries, and vendor-specific config builders for Cisco, Aruba, Palo Alto, and Juniper. Built as a PWA with encryption, offline persistence, and full accessibility compliance.",
    tags: [
      {
        name: "Subnetting",
        color: "blue-text-gradient",
      },
      {
        name: "DNS-over-HTTPS",
        color: "green-text-gradient",
      },
      {
        name: "PWA",
        color: "pink-text-gradient",
      },
      {
        name: "WCAG2.2",
        color: "blue-text-gradient",
      },
    ],
    image: netdashlanding,
    source_code_link: "https://netdash-toolkit.vercel.app/",
    live_project_link: "https://netdash-toolkit.vercel.app/",
  },
  {
    name: "SecureBank 🏦",
    description:
      "SecureBank is a custom-built Capture The Flag (CTF) challenge simulating a realistic online banking platform with intentional security flaws for educational exploitation. Inspired by OWASP Juice Shop, this full-stack app integrates a modern Next.js 15 frontend, real SQLite database, and handcrafted vulnerabilities hidden within common banking workflows like login, transaction tracking, and feedback submission.",
    tags: [
      {
        name: "CTF",
        color: "blue-text-gradient",
      },
      {
        name: "Cybersecurity",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
      {
        name: "SQLite",
        color: "blue-text-gradient",
      },
    ],
    image: securebankdashboard,
    source_code_link: "https://github.com/sunnypatell/securebank-ctf",
    live_project_link: "https://github.com/sunnypatell/securebank-ctf",
  },
  {
    name: "FinancialFlow 💸",
    description:
      "Comprehensive personal finance management application built with Next.js and Typescript. It empowers users to take control of their financial health through intuitive tracking, insightful analytics, and personalized recommendations.",
    tags: [
      {
        name: "React-native",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
    ],
    image: financialflowimage,
    source_code_link: "https://github.com/sunnypatell/financialflow",
    live_project_link: "https://financial-flow.vercel.app/",
  },
  {
    name: "Sunnify (Spotify Downloader) ♫",
    description:
      "Sunnify is a Spotify downloader webapp/desktop application that allows you to download entire playlists locally onto your Mac/Linux/Windows PC. The web version of the app is hosted on AWS Lambda and Elastic Beanstalk, with FastAPI ASGI production.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "webscraping",
        color: "green-text-gradient",
      },
      {
        name: "AWS Lambda/Beanstalk",
        color: "pink-text-gradient",
      },
      {
        name: "Proxy/API",
        color: "blue-text-gradient",
      },
    ],
    image: sunnifyimage,
    source_code_link: "https://github.com/sunnypatell/sunnify-spotify-downloader",
    live_project_link: "https://sunnify-spotify-downloader.vercel.app/",
  },
  {
    name: "Enterprise API Tester 🌐",
    description:
      "Comprehensive API testing tool with support for all major HTTP methods, authentication, and CORS-friendly proxy. Features include request import/export, real-world samples, and local storage for data persistence. Built with Next.js, and TypeScript for optimal performance and developer experience.",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
      {
        name: "Authentication-Body",
        color: "blue-text-gradient",
      },
    ],
    image: enterpriseapitester,
    source_code_link: "https://github.com/sunnypatell/enterprise-api-request-tester",
    live_project_link: "https://enterprise-api-request-tester.vercel.app/",
  },
  {
    name: "KnifeThrow 🎯",
    description:
      "KnifeThrow is a Java Swing-based 2D mini-game, packed by maven with over 5000 lines of code. It includes a menu, game-over screens, sound effects, and custom sprites. Players unlock different knives with varied abilities in a dedicated knife shop. The game features improved collision systems, animations, and particle effects for an immersive experience.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "swing",
        color: "green-text-gradient",
      },
      {
        name: "maven",
        color: "pink-text-gradient",
      },
      {
        name: "arcadegame",
        color: "green-text-gradient",
      },
    ],
    image: knifethrowimage,
    source_code_link: "https://github.com/sunnypatell/KnifeThrow",
    live_project_link: "https://github.com/sunnypatell/KnifeThrow",
  },
  // {
  //   name: "COVID-19 GTA Cases Data Analysis 🧪",
  //   description:
  //     "A deep dive into ongoing COVID-19 outbreaks in the Greater Toronto Area (GTA), Ontario. Using data from a government-licensed dataset called Outbreaks by Public Health Unit (PHU) to explore trends and patterns in these outbreaks. This data analysis integrates the essential aspects of the data science workflow (Filesize: 3.5 MiB, 62699 lines of raw dataset)",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tensorflow",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "matplotlib",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "numpy",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: pythonanalysis,
  //   source_code_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  //   live_project_link: "https://drive.google.com/drive/folders/1cTbp-6-flypV-kj3-q606UwwWEralu11",
  // },
  // {
  //   name: "Secure Password Generator 🔐",
  //   description:
  //     "Secure Password Generator is a Java-based tool designed to generate and manage secure passwords, prioritizing simplicity, security, and user-friendliness. It employs industry-standard encryption algorithms to create strong, unique passwords resistant to common hacking attempts.",
  //   tags: [
  //     {
  //       name: "java",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sha-256",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "encryption/decryption",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "data-algorithms",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: password_generator,
  //   source_code_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  //   live_project_link: "https://github.com/sunnypatell/SecurePasswordGenerator",
  // },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Sunny for his outstanding technical proficiency and professional approach as a System Support specialist at Mackenzie Hospital. His deep knowledge of iPad systems and troubleshooting abilities were instrumental in ensuring seamless operations and user satisfaction. Sunny's proactive attitude and problem-solving skills made him a reliable asset to our team, and he consistently exceeded expectations in resolving complex issues. I have no hesitation in endorsing him for any tech-related position, as I am confident he will excel in any challenge he takes on.",
    name: "Feda Abukhadrah, BIT | SaaS | Health Tech | MDM | ABM | POS | ITIL®V4 | CompTIA A+",
    designation: "Senior Service Desk Specialist",
    company: "Px Solutions LTD.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Sunny Patel's expertise in the technological domain is truly remarkable. Proficient in programming languages like Java, Python, and C++, and highly skilled in Microsoft's suite of tools, Sunny's grasp of networking concepts is extensive. What sets him apart is his experience in handling over 1000 devices remotely and on-site, along with a successful track record in troubleshooting and deploying various software and hardware upgrades. His dedication to tackling complex challenges, grounded in a strong foundation in software design and a rich academic background in computer science, positions Sunny as a valuable asset to any tech-driven team.",
    name: "Sanjay Sharma, MBA, CISSP, CISA, PMP®",
    designation: "Senior Vice-President and Head of Cybersecurity Services",
    company: "Pathway Communications / ex-Toronto Hydro",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sunny's proficiency in data entry was impeccable, displaying meticulous attention to detail and accuracy. His commitment to maintaining organized and error-free records significantly improved our operational efficiency. In customer service, Sunny's phone etiquette was truly commendable. He communicated with a warm and professional demeanour, leaving customers with a positive impression and ensuring their needs were met. His ability to multitask and handle multiple customers simultaneously was impressive, showcasing his excellent time management and interpersonal skills. Sunny's dedication to his role and adeptness in data entry, customer service, and managing simultaneous customer interactions made him a valuable asset to our team at Lazer Runner.",
    name: "Michelle Ilizirov",
    designation: "Manager",
    company: "Lazer Runner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export {
  services,
  technologies,
  itTools,
  cybersecurityTools,
  designTools,
  experiences,
  extracurricular,
  projects,
  education,
  testimonials
};
