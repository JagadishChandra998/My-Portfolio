// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="relative px-6 py-24">
//       <div className="mx-auto max-w-6xl">

//         {/* Section heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-14"
//         >
//           <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
//             About Me
//           </p>

//           <h2 className="text-4xl font-bold md:text-5xl">
//             Building ideas into{" "}
//             <span className="text-cyan-400">web applications.</span>
//           </h2>
//         </motion.div>

//         {/* Content */}
//         <div className="grid gap-10 md:grid-cols-2">

//           {/* About text */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <p className="text-lg leading-8 text-gray-400">
//               I'm Jagadish Chandra Dhal, a Computer Science Engineering
//               student and aspiring Full-Stack Developer who enjoys building
//               practical web applications.
//             </p>

//             <p className="mt-5 text-lg leading-8 text-gray-400">
//               I primarily work with JavaScript, React, Node.js, Express and
//               MongoDB. I enjoy working on both frontend interfaces and
//               backend APIs, especially when a project involves data,
//               authentication and real-world problem solving.
//             </p>

//             <p className="mt-5 text-lg leading-8 text-gray-400">
//               My goal is to keep improving my development skills and build
//               reliable, user-friendly applications that solve meaningful
//               problems.
//             </p>
//           </motion.div>

//           {/* Info cards */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="grid gap-5 sm:grid-cols-2"
//           >

//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-400/40">
//               <p className="text-sm text-gray-500">
//                 Education
//               </p>

//               <h3 className="mt-3 text-lg font-semibold">
//                 B.Tech CSE
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-400">
//                 Computer Science Engineering
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-400/40">
//               <p className="text-sm text-gray-500">
//                 Focus
//               </p>

//               <h3 className="mt-3 text-lg font-semibold">
//                 Full Stack
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-400">
//                 React, Node.js, Express & MongoDB
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-400/40">
//               <p className="text-sm text-gray-500">
//                 Development
//               </p>

//               <h3 className="mt-3 text-lg font-semibold">
//                 MERN Stack
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-400">
//                 Modern JavaScript applications
//               </p>
//             </div>

//             <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-400/40">
//               <p className="text-sm text-gray-500">
//                 Interests
//               </p>

//               <h3 className="mt-3 text-lg font-semibold">
//                 Backend & Data
//               </h3>

//               <p className="mt-2 text-sm leading-6 text-gray-400">
//                 APIs, databases and application logic
//               </p>
//             </div>

//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";

const aboutCards = [
  {
    icon: Code2,
    title: "Frontend",
    value: "React.js",
    description: "Interactive and responsive user interfaces",
  },
  {
    icon: Server,
    title: "Backend",
    value: "Node.js",
    description: "REST APIs and server-side application logic",
  },
  {
    icon: Database,
    title: "Database",
    value: "MongoDB",
    description: "Data modeling and database management",
  },
  {
    icon: Sparkles,
    title: "Focus",
    value: "Full Stack",
    description: "Building complete web applications",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background glow */}

      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.25em] text-cyan-400">
            02 / ABOUT ME
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building ideas into{" "}
            <span className="text-cyan-400">
              real applications.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            I'm a Computer Science Engineering student and aspiring Full Stack
            Developer who enjoys building practical web applications and
            working with data-driven systems.
          </p>
        </motion.div>

        {/* Main content */}

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Left: Developer profile */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10"
          >
            {/* Top line */}

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {/* Terminal heading */}

            <div className="mb-8 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-xs text-gray-600">
                about.js
              </span>
            </div>

            {/* Code-style content */}

            <div className="font-mono text-sm leading-8 sm:text-base">

              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-gray-500">=</span>{" "}
                <span className="text-gray-400">{"{"}</span>
              </p>

              <p className="pl-5">
                <span className="text-blue-400">name</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">
                  "Jagadish Chandra Dhal"
                </span>
                <span className="text-gray-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-blue-400">education</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">
                  "B.Tech CSE"
                </span>
                <span className="text-gray-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-blue-400">role</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">
                  "Full Stack Developer"
                </span>
                <span className="text-gray-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-blue-400">stack</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-gray-400">[</span>
              </p>

              <p className="pl-10 text-green-400">
                "React",
              </p>

              <p className="pl-10 text-green-400">
                "Node.js",
              </p>

              <p className="pl-10 text-green-400">
                "MongoDB"
              </p>

              <p className="pl-5">
                <span className="text-gray-400">]</span>
                <span className="text-gray-500">,</span>
              </p>

              <p className="pl-5">
                <span className="text-blue-400">passion</span>
                <span className="text-gray-500">:</span>{" "}
                <span className="text-green-400">
                  "Building useful applications"
                </span>
              </p>

              <p>
                <span className="text-gray-400">{"}"}</span>
              </p>
            </div>

            {/* Description */}

            <div className="mt-8 border-t border-white/10 pt-7">

              <p className="text-base leading-8 text-gray-400">
                I primarily work with JavaScript, React, Node.js, Express and
                MongoDB. I enjoy working across both frontend and backend,
                especially when applications involve authentication, APIs,
                databases and real-world problem solving.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-400">
                My goal is to continuously improve my development skills and
                create reliable, maintainable and user-friendly applications.
              </p>
            </div>
          </motion.div>

          {/* Right: Cards */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

            {aboutCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]"
                >
                  {/* Icon */}

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 transition duration-300 group-hover:bg-cyan-400/10">
                    <Icon size={22} />
                  </div>

                  {/* Content */}

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-600">
                      {card.title}
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white transition group-hover:text-cyan-400">
                      {card.value}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-bold text-cyan-400">6+</p>
            <p className="mt-1 text-xs text-gray-500">Projects</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-bold text-cyan-400">MERN</p>
            <p className="mt-1 text-xs text-gray-500">Primary Stack</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-bold text-cyan-400">REST</p>
            <p className="mt-1 text-xs text-gray-500">API Development</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-center">
            <p className="text-2xl font-bold text-cyan-400">Data</p>
            <p className="mt-1 text-xs text-gray-500">Problem Solving</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
