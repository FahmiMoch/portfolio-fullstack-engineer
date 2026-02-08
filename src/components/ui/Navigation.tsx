import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setIsScrolled(currentScroll > 20);

      // hide navbar when scrolling down
      if (currentScroll > lastScroll && currentScroll > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScroll = currentScroll;

      // detect active section
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;

          if (currentScroll >= top && currentScroll < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  const links = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <nav
      className={`
        fixed w-full z-50
        transition-all duration-500
        ${showNav ? 'top-0' : '-top-24'}
        ${
          isScrolled
            ? 'bg-[#0057E7]/80 backdrop-blur-xl border-b border-white/20 shadow-lg'
            : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="
              text-2xl font-bold text-[#FFF4DB]
              tracking-wide
              hover:scale-105
              transition
            "
          >
            Mochamad Fahmi Fadillah
            <span className="text-white">.</span>
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`
                  relative capitalize font-medium
                  transition
                  ${
                    active === link
                      ? 'text-white'
                      : 'text-[#FFF4DB]/80 hover:text-white'
                  }
                `}
              >
                {link}

                {active === link && (
                  <span
                    className="
                      absolute left-0 -bottom-2
                      w-full h-[2px]
                      bg-white
                      rounded-full
                    "
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white text-xl"
          >
            {isMobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div
          className="
            md:hidden
            bg-[#0057E7]/95
            backdrop-blur-xl
            border-t border-white/20
          "
        >
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="
                  capitalize text-left
                  text-lg
                  text-[#FFF4DB]
                  hover:text-white
                  transition
                "
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
