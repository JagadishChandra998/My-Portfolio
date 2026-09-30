import { motion } from "framer-motion";
import { education } from "../data/projects";
import { CalendarDays,Award,} from "lucide-react";


const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

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
            05 / EDUCATION
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            My{" "}
            <span className="text-cyan-400">
              academic journey.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            My educational journey from secondary school to Computer Science
            Engineering.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline line */}
          <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent md:block" />

          <div className="space-y-8">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.level}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="relative md:pl-12"
                >

                  {/* Timeline dot */}
                  <div className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#050505] md:flex">
                    <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />
                  </div>

                  {/* Card */}
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04] sm:p-8">

                    {/* Top glow */}
                    <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">

                      {/* Main information */}
                      <div className="flex gap-5">

                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                          <Icon size={27} />
                        </div>

                        <div>
                          {/* Level */}
                          <p className="font-mono text-xs tracking-wider text-cyan-400">
                            {item.level}
                          </p>

                          {/* Degree / Stream */}
                          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                            {item.title}
                          </h3>

                          {/* Institution */}
                          <p className="mt-2 text-sm leading-6 text-gray-400 sm:text-base">
                            {item.institution}
                          </p>

                          {/* Details */}
                          <p className="mt-2 text-sm text-gray-600">
                            {item.details}
                          </p>
                        </div>
                      </div>

                      {/* Right information */}
                      <div className="flex flex-col items-start gap-3 lg:items-end">

                        {/* Period */}
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-400">
                          <CalendarDays
                            size={15}
                            className="text-cyan-400"
                          />
                          {item.period}
                        </div>

                        {/* Percentage / highlight */}
                        {index !== 0 && (
                          <div className="flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.04] px-4 py-2">
                            <Award
                              size={15}
                              className="text-cyan-400"
                            />

                            <span className="font-semibold text-cyan-400">
                              {item.highlight}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* B.Tech additional information */}
                    {index === 0 && (
                      <>
                        <div className="my-7 h-px bg-white/10" />

                        <div className="grid gap-4 sm:grid-cols-3">

                          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-xs uppercase tracking-wider text-gray-600">
                              Degree
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                              B.Tech
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                              Computer Science
                            </p>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                            <p className="text-xs uppercase tracking-wider text-gray-600">
                              Current Focus
                            </p>

                            <p className="mt-2 text-lg font-semibold text-white">
                              Full Stack
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                              MERN Development
                            </p>
                          </div>

                          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-5">
                            <p className="text-xs uppercase tracking-wider text-gray-500">
                              Academic Highlight
                            </p>

                            <p className="mt-2 text-lg font-semibold text-cyan-400">
                              Database Engineering
                            </p>

                            <p className="mt-1 text-sm text-gray-500">
                              Strong academic performance
                            </p>
                          </div>

                        </div>
                      </>
                    )}

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-gray-600">
            Learning → Building → Improving
            <span className="ml-1 animate-pulse text-cyan-400">
              ▋
            </span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
