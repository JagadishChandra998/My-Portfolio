import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    Download,
    MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const roles = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Backend Developer",
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        const typingSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, text.length + 1));

                if (text === currentRole) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setText(currentRole.substring(0, text.length - 1));

                if (text === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#050505] px-6 pt-28"
        >
            {/* ================= BACKGROUND ================= */}

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Cyan glow */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.25, 0.15],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-[10%] top-[15%] h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
            />

            {/* Blue glow */}
            <motion.div
                animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.12, 0.2, 0.12],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute bottom-[10%] right-[5%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]"
            />

            {/* ================= CONTENT ================= */}

            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-112px)] w-full max-w-6xl items-center gap-16 pb-20 lg:grid-cols-2">

                {/* ================= LEFT ================= */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Available status */}

                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-gray-300 backdrop-blur-md">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        </span>

                        Available for opportunities
                    </div>

                    {/* Small intro */}

                    <p className="mb-4 font-mono text-sm tracking-widest text-cyan-400">
                        &lt;hello_world /&gt;
                    </p>

                    {/* Main heading */}

                    <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Jagadish Chandra
                        </span>
                        <span className="text-cyan-400">.</span>
                    </h2>

                    {/* Typing text */}

                    <div className="mt-6 flex min-h-[42px] items-center text-xl font-semibold sm:text-2xl">
                        <span className="text-gray-400">I'm a&nbsp;</span>

                        <span className="text-cyan-400">
                            {text}
                            <span className="ml-1 inline-block animate-pulse text-white">
                                |
                            </span>
                        </span>
                    </div>

                    {/* Description */}

                    <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
                        I build modern, scalable and user-focused web applications using
                        React, Node.js, Express and MongoDB. I enjoy turning ideas into
                        clean and functional digital experiences.
                    </p>

                    {/* Location */}

                    <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                        <MapPin size={16} className="text-cyan-400" />
                        Bhubaneswar, India
                    </div>

                    {/* Buttons */}

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black shadow-lg shadow-cyan-500/10 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-cyan-400/20"
                        >
                            View Projects

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
                        >
                            <Download
                                size={18}
                                className="transition-transform group-hover:-translate-y-0.5"
                            />

                            Resume
                        </a>
                    </div>

                    {/* Social links */}

                    <div className="mt-8 flex items-center gap-3">
                        <a
                            href="https://github.com/JagadishChandra998"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/jagadish-chandra-dhal-1a4601322/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-400"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </motion.div>

                {/* ================= RIGHT ================= */}

                <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    className="relative flex items-center justify-center"
                >
                    {/* Outer glow */}

                    <div className="absolute h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

                    {/* Terminal */}

                    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/90 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl">

                        {/* Terminal header */}

                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                            <div className="flex gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                            </div>

                            <span className="font-mono text-xs text-gray-600">
                                jagadish@portfolio
                            </span>

                            <div className="w-10" />
                        </div>

                        {/* Code */}

                        <div className="p-6 font-mono text-sm leading-8 sm:p-8 sm:text-base">
                            <p>
                                <span className="text-purple-400">const</span>{" "}
                                <span className="text-cyan-300">developer</span>{" "}
                                <span className="text-gray-500">=</span>{" "}
                                <span className="text-gray-400">{"{"}</span>
                            </p>

                            <p className="pl-5">
                                <span className="text-blue-400">name</span>
                                <span className="text-gray-500">:</span>{" "}
                                <span className="text-green-400">"Jagadish"</span>
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
                                "Express",
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
                                    "Building useful things"
                                </span>
                            </p>

                            <p>
                                <span className="text-gray-400">{"}"}</span>
                            </p>

                            <div className="mt-4 border-t border-white/5 pt-4">
                                <span className="text-green-400">$</span>{" "}
                                <span className="text-gray-400">
                                    npm run build-future
                                </span>
                                <span className="ml-1 animate-pulse text-cyan-400">
                                    ▋
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Floating React badge */}

                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -left-5 top-12 rounded-xl border border-cyan-400/20 bg-[#0a0a0a]/90 px-4 py-2.5 text-sm font-medium text-cyan-300 shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
                    >
                        React.js
                    </motion.div>

                    {/* Floating Node badge */}

                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -right-5 bottom-16 rounded-xl border border-blue-400/20 bg-[#0a0a0a]/90 px-4 py-2.5 text-sm font-medium text-blue-300 shadow-lg shadow-blue-500/10 backdrop-blur-xl"
                    >
                        Node.js
                    </motion.div>

                    {/* Floating MongoDB badge */}

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="absolute -bottom-5 left-16 rounded-xl border border-white/10 bg-[#0a0a0a]/90 px-4 py-2.5 text-sm font-medium text-gray-300 shadow-lg backdrop-blur-xl"
                    >
                        MongoDB
                    </motion.div>
                </motion.div>
            </div>

            {/* ================= SCROLL INDICATOR ================= */}

            <motion.a
                href="#about"
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-gray-500 transition hover:text-cyan-400 md:block"
            >
                <ArrowDown size={20} />
            </motion.a>
        </section>
    );
};

export default Hero;
