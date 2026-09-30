import { GraduationCap, School} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "AI-Powered Smart Agriculture Assistant",
    category: "Full Stack",
    description:
      "A MERN-based agriculture assistant designed to provide farmers with contextual information, weather insights, crop guidance, and AI-powered assistance.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
    ],
    featured: true,
    github: "https://github.com/JagadishChandra998/AI-Powered-Smart-Agriculture-Assistant",
    live: "#",
  },

  {
    id: 2,
    title: "Smart Home Energy Monitoring",
    category: "Full Stack",
    description:
      "A smart energy monitoring and priority-based load scheduling system for managing appliances, monitoring energy usage, scheduling devices, and estimating electricity bills.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    featured: true,
    github: "https://github.com/JagadishChandra998/Smart-Home-Energy-Monitor",
    live: "#",
  },

  {
    id: 3,
    title: "Retail Sales & Inventory Analytics",
    category: "Full Stack",
    description:
      "A MERN-based store management system for products, categories, billing, inventory monitoring, user roles, sales tracking, and dashboard analytics.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    featured: true,
    github: "https://github.com/JagadishChandra998/store-inventory-billing-desk",
    live: "https://store-billing-desk.onrender.com",
  },

  {
    id: 4,
    title: "Student Scholarship Portal",
    category: "Full Stack",
    description:
      "A web application for managing student scholarship information with authentication and a React frontend connected to a Django REST backend.",
    technologies: [
      "React",
      "Django",
      "REST API",
      "SQL",
    ],
    featured: false,
    github: "https://github.com/JagadishChandra998/Student_Scholarship_Portal",
    live: "#",
  },

  {
    id: 5,
    title: "Text-to-Speech Converter",
    category: "Frontend",
    description:
      "A React-based text-to-speech application that converts written text into speech using the Web Speech API.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Web Speech API",
    ],
    featured: false,
    github: "https://github.com/JagadishChandra998/Text-To-Speech-Converter",
    live: "#",
  },

  {
    id: 6,
    title: "Currency Converter",
    category: "Frontend",
    description:
      "A JavaScript-based currency converter that retrieves currency information from an API and provides currency and country flag information.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "REST API",
    ],
    featured: false,
    github: "https://github.com/JagadishChandra998/Currency-Conversion-Tool",
    live: "#",
  },
];

export const experiences = [
    {
        role: "Vocational Trainee",
        company: "Integrated Test Range (ITR), DRDO",
        type: "Vocational Training",
        location: "Chandipur, Odisha",
        duration: "30 Days",
        date: "2026",
        description:
            "Successfully completed 30 days of vocational training on Smart Energy Monitoring in the Directorate of Central Data Processing at Integrated Test Range, DRDO.",
        technologies: [
            "Smart Energy Monitoring",
            "Data Processing",
            "Energy Monitoring",
            "Computer Science",
        ],
        certificate: "/certificates/DRDO.jpeg",

    },

    {
        role: "Web Developer Intern",
        company: "MyDailyWork",
        type: "Internship",
        location: "Remote",
        duration: "1 Month",
        date: "2026",
        description:
            "Worked on web development tasks and gained practical experience building and improving web applications.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
        ],
        certificate: "/certificates/MyDailyWork.jpg",

    },
];

export const education = [
  {
    level: "B.Tech",
    title: "Computer Science & Engineering",
    institution: "NALANDA INSTITUTE OF TECHNOLOGY, BHUBANESWAR",
    period: "Currently Pursuing",
    icon: GraduationCap,
    highlight: "Computer Science",
    details: "B.Tech in Computer Science & Engineering",
    tags: [
      "Database Engineering",
      "Web Development",
      "Data Structures",
      "Programming",
      "Software Development",
    ],
  },
  {
    level: "Class XII",
    title: "Science",
    institution: "NTST HIGHER SECONDARY SCHOOL, BALASORE",
    period: "2021 – 2023",
    icon: School,
    highlight: "67.3%",
    details: "Higher Secondary Education",
    tags: ["Science", "Higher Secondary"],
  },
  {
    level: "Class X",
    title: "Secondary Education",
    institution: "S.R HIGH SCHOOL, BALIAPAL",
    period: "2020 – 2021",
    icon: School,
    highlight: "83.5%",
    details: "Secondary Education",
    tags: ["Mathematics", "Science", "Secondary Education"],
  },
];