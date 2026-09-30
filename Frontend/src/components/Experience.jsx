import { motion } from "framer-motion";
import {experiences} from "../data/projects.js"
import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
    Code2,
    ExternalLink,
} from "lucide-react";



const Experience = () => {
    return (
        <section
            id="experience"
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
                        04 / EXPERIENCE
                    </p>

                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Where I've{" "}
                        <span className="text-cyan-400">
                            worked.
                        </span>
                    </h2>

                    <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
                        My practical experience and opportunities that have helped me
                        develop as a software developer.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative">

                    {/* Vertical line */}

                    <div className="absolute left-[11px] top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent md:block" />

                    <div className="space-y-10">

                        {experiences.map((experience, index) => (
                            <motion.div
                                key={experience.company}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.15,
                                }}
                                className="relative md:pl-12"
                            >

                                {/* Timeline dot */}

                                <div className="absolute left-0 top-8 hidden h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-[#050505] md:flex">
                                    <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />
                                </div>

                                {/* Experience card */}

                                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.04]">

                                    {/* Top glow */}

                                    <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                    <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

                                        {/* Left information */}

                                        <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-8">

                                            {/* Company icon */}

                                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                                                <BriefcaseBusiness size={25} />
                                            </div>

                                            <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                                                {experience.type}
                                            </p>

                                            <h3 className="mt-3 text-2xl font-bold text-white">
                                                {experience.role}
                                            </h3>

                                            <p className="mt-2 text-lg font-medium text-gray-400">
                                                {experience.company}
                                            </p>

                                            {/* Details */}

                                            <div className="mt-6 space-y-3">

                                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                                    <CalendarDays
                                                        size={16}
                                                        className="text-cyan-400"
                                                    />
                                                    {experience.duration}
                                                </div>

                                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                                    <MapPin
                                                        size={16}
                                                        className="text-cyan-400"
                                                    />
                                                    {experience.location}
                                                </div>

                                            </div>
                                            {experience.certificate && (
                                                <a
                                                    href={experience.certificate}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-4 py-2.5 text-sm font-medium text-cyan-400 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                                                >
                                                    View Certificate
                                                    <ExternalLink size={16} />
                                                </a>
                                            )}
                                        </div>

                                        {/* Right information */}

                                        <div className="p-7 lg:p-8">

                                            <div className="mb-5 flex items-center gap-2 font-mono text-xs text-gray-600">
                                                <Code2 size={15} />
                                                experience.md
                                            </div>

                                            <p className="text-base leading-8 text-gray-400">
                                                {experience.description}
                                            </p>

                                            {/* Responsibilities */}

                                            <div className="mt-7">

                                                <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                                                    Technologies
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {experience.technologies.map((technology) => (
                                                        <span
                                                            key={technology}
                                                            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400"
                                                        >
                                                            {technology}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Terminal line */}

                                            <div className="mt-8 border-t border-white/10 pt-5">
                                                <p className="font-mono text-xs text-gray-600">
                                                    <span className="text-green-400">$</span>{" "}
                                                    experience --status
                                                </p>

                                                <p className="mt-2 font-mono text-sm text-gray-400">
                                                    <span className="text-green-400">
                                                        ●
                                                    </span>{" "}
                                                    Completed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                        Learning through every project and opportunity.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
