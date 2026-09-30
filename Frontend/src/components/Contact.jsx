import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

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
            06 / CONTACT
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let's{" "}
            <span className="text-cyan-400">
              connect.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Have a project, opportunity, or just want to talk about
            technology? Feel free to reach out.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >

            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              className="group flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                <Mail size={21} />
              </div>

              <div className="flex-1">
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Email
                </p>

                <p className="mt-1 text-sm text-gray-300 group-hover:text-cyan-400">
                 jagadishchandra998@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="text-gray-600 transition group-hover:text-cyan-400"
              />
            </a>

            {/* Location */}
            <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                <MapPin size={21} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Location
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Odisha, India
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-5">

              <a
                href="https://github.com/JagadishChandra998"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
              >
                <FaGithub size={22} />

                <span className="text-sm">
                  GitHub
                </span>

                <ArrowUpRight
                  size={15}
                  className="ml-auto text-gray-600 transition group-hover:text-cyan-400"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/jagadish-chandra-dhal-1a4601322/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] p-5 text-gray-400 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
              >
                <FaLinkedin size={22} />

                <span className="text-sm">
                  LinkedIn
                </span>

                <ArrowUpRight
                  size={15}
                  className="ml-auto text-gray-600 transition group-hover:text-cyan-400"
                />
              </a>

            </div>

          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl sm:p-9"
          >

            {/* Top glow */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

            {/* Terminal header */}
            <div className="mb-8 flex items-center justify-between">

              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
              </div>

              <span className="font-mono text-xs text-gray-600">
                message.sh
              </span>

            </div>

            <form className="space-y-5">

              {/* Name */}
              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-cyan-400/50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-cyan-400/50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-gray-500">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-cyan-400/50"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-black transition hover:bg-cyan-300"
              >
                Send Message

                <Send
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </button>

            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-white/10 pt-8 text-center"
        >
          <p className="font-mono text-xs text-gray-600">
            Designed & built with React, Tailwind CSS and Framer Motion.
          </p>

          <p className="mt-3 text-xs text-gray-700">
            © {new Date().getFullYear()} Jagadish Chandra Dhal
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
