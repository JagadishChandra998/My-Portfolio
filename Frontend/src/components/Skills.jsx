
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiMysql,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: FaBootstrap },
    ],
  },

  {
    title: "Backend",
    description: "Building APIs and server-side application logic.",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: null },
      { name: "JWT", icon: null },
      { name: "Authentication", icon: null },
    ],
  },

  {
    title: "Database",
    description: "Working with structured and document-based data.",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: SiMongoose },
      { name: "SQL", icon: SiMysql },
      { name: "Database Design", icon: null },
    ],
  },

  {
    title: "Tools",
    description: "Tools I use for development and testing.",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: null },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.25em] text-cyan-400">
            03 / SKILLS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My{" "}
            <span className="text-cyan-400">
              tech stack.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Technologies and tools I use to design, build and maintain
            full-stack web applications.
          </p>
        </motion.div>

        {/* Skills */}

        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
            >

              {/* Top glow line */}

              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Category heading */}

              <div className="flex items-start justify-between">

                <div>
                  <p className="font-mono text-xs text-gray-600">
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                    {category.description}
                  </p>
                </div>

                <div className="font-mono text-3xl text-white/[0.04]">
                  {"</>"}
                </div>
              </div>

              {/* Skills */}

              <div className="mt-7 grid grid-cols-2 gap-3">

                {category.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/5"
                    >
                      {Icon ? (
                        <Icon
                          size={20}
                          className="text-gray-500 transition duration-300 group-hover/skill:text-cyan-400"
                        />
                      ) : (
                        <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-700 font-mono text-[9px] text-gray-600 transition group-hover/skill:border-cyan-400/40 group-hover/skill:text-cyan-400">
                          &lt;/&gt;
                        </span>
                      )}

                      <span className="text-sm text-gray-400 transition group-hover/skill:text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tech statement */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center"
        >
          <p className="font-mono text-sm text-gray-500">
            <span className="text-cyan-400">$</span>{" "}
            Always learning. Always building.
            <span className="ml-1 animate-pulse text-cyan-400">
              ▋
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
