
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(sectionId);
      setMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/70 px-5 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl">

          {/* Logo */}

          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center font-mono text-xl font-bold"
          >
            <span className="text-white">JC</span>
            <span className="text-cyan-400 transition group-hover:text-cyan-300">
              .
            </span>
          </button>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative rounded-xl px-4 py-2 text-sm transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}

                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-400 transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/20 md:block"
          >
            Let's Talk
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {/* Mobile Navigation */}

        {mobileOpen && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/90 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
