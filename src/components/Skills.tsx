// // src/components/Skills.tsx
// "use client";
// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//     FaGitAlt,
//     FaBootstrap
// } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-4xl" /> },
//   { name: "React", icon: <FaReact className="text-cyan-400 text-4xl" /> },
//     { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
//     { name: "Bootstrap", icon: <FaBootstrap className="text-[#563d7c] text-4xl" /> },
//   {name:"MongoDb",icon:<SiMongodb className="text-[#3FA037] text-4xl"/>},
//   { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
//         {skills.map(({ name, icon }) => (
//           <div
//             key={name}
//             className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
//           >
//             {icon}
//             <p className="mt-2 text-lg font-medium">{name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;

"use client";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiUpstash,
  SiTailwindcss,
  SiClickup,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiJirasoftware,
  SiPostman,
  SiGithub,
  SiOpenai,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { FaCube } from "react-icons/fa6";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  {
    title: "Frontend Technologies",
    items: [
      {
        name: "React JS",
        icon: <FaReact className="text-cyan-400 text-3xl" />,
      },
      {
        name: "Next JS",
        icon: <SiNextdotjs className="text-black text-3xl" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
      },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="text-purple-700 text-3xl" />,
      },
      {
        name: "Material UI",
        icon: <MdDesignServices className="text-blue-400 text-3xl" />,
      },
    ],
  },
  {
    title: "Backend Technologies",
    items: [
      {
        name: "Next.js API Routes",
        icon: <SiNextdotjs className="text-black text-3xl" />,
      },
      {
        name: "Express JS",
        icon: <SiExpress className="text-gray-700 text-3xl" />,
      },
      {
        name: "Node JS",
        icon: <FaNodeJs className="text-green-500 text-3xl" />,
      },
    ],
  },
  {
    title: "Databases & Message Brokers",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 text-3xl" />,
      },
      { name: "Redis", icon: <SiUpstash className="text-red-600 text-3xl" /> },
    ],
  },
  {
    title: "Version Control",
    items: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600 text-3xl" /> },
      { name: "GitHub", icon: <SiGithub className="text-black text-3xl" /> },
    ],
  },
  {
    title: "Project Management",
    items: [
      {
        name: "Jira",
        icon: <SiJirasoftware className="text-blue-600 text-3xl" />,
      },
      {
        name: "ClickUp",
        icon: <SiClickup className="text-pink-600 text-3xl" />,
      }, // Placeholder icon
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-3xl" />,
      },
      {
        name: "VS Code",
        icon: <BiLogoVisualStudio className="text-blue-500  text-3xl" />,
      },
      {
        name: "Cursor IDE",
        icon: <FaCube className="text-gray-500 text-3xl" />,
      }, // Placeholder icon
      { name: "OpenAI", icon: <SiOpenai className="text-black text-3xl" /> },
    ],
  },
];

const AllSkills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-black">
      <h2 className="text-4xl font-bold text-center mb-10">Technical Skills</h2>
      <div className="space-y-12 max-w-6xl mx-auto px-4">
        {skills.map((category) => (
          <div key={category.title}>
            <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.items.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-md transition"
                >
                  {icon}
                  <p className="mt-2 text-base dark:text-black font-medium text-center">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllSkills;
