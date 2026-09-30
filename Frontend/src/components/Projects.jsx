

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {projects} from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-6 py-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.25em] text-cyan-400">
            04 / PROJECTS
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Things I've{" "}
            <span className="text-cyan-400">built.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-gray-400">
            A collection of applications and systems I've built while
            learning, experimenting, and solving real-world problems.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.04] ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Top gradient line */}
              <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Project visual */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden border-b border-white/10 bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-blue-500/[0.08]">

                {/* Decorative circles */}
                <div className="absolute h-40 w-40 rounded-full border border-cyan-400/10" />
                <div className="absolute h-56 w-56 rounded-full border border-blue-400/5" />

                {/* Project number */}
                <span className="relative font-mono text-7xl font-bold text-white/[0.05] transition duration-500 group-hover:text-cyan-400/10">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Category */}
                <span className="absolute left-5 top-5 rounded-full border border-cyan-400/20 bg-black/50 px-3 py-1 text-xs font-medium text-cyan-400 backdrop-blur-md">
                  {project.category}
                </span>

                {project.featured && (
                  <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 backdrop-blur-md">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400 transition group-hover:border-cyan-400/10"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex items-center gap-5 border-t border-white/10 pt-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-white"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-cyan-400"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-gray-600">
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
