import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/team", label: "Our Team" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Find Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md shadow-md border-b border-[#D0D7E2]/40"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-white border border-[#D0D7E2] overflow-hidden flex-shrink-0 flex items-center justify-center group-hover:border-[#C62828] transition-colors duration-300">
            <img
              src="/logo.jpeg"
              alt="MG World Logo"
              className="w-full h-full object-contain p-1"
            />
          </div>

          <div className="leading-none">
            <span className="font-serif text-lg font-semibold text-[#0B1F3A] tracking-wide block">
              Mercy <span className="text-[#C62828]">&amp;</span> Grace
            </span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#8A96A8] font-sans font-normal">
              Veterinary Limited
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.07em] uppercase font-sans px-4 py-2.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#C62828] font-semibold bg-[#C62828]/10"
                      : "text-[#0B1F3A] font-normal hover:text-[#C62828] hover:bg-[#C62828]/10"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="https://portal.mercyandgracevet.org/vetedge_portal"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0B1F3A] text-[#0B1F3A] text-[13px] font-medium tracking-wide px-5 py-2.5 rounded-full hover:bg-[#0B1F3A] hover:text-white transition-all duration-200"
            >
              Client Portal
            </a>
          </li>
          <li>
            <a
              href="https://portal.mercyandgracevet.org/vetedge_guest_booking"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C62828] text-white text-[13px] font-medium tracking-wide px-5 py-2.5 rounded-full hover:bg-[#8E0000] transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-[#C62828]/30"
            >
              Book an Appointment
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#F4F6F8] transition-colors"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className="block h-[2px] bg-[#0B1F3A] rounded-full transition-all duration-300 origin-center"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[2px] bg-[#0B1F3A] rounded-full transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "scaleX(1)",
              }}
            />
            <span
              className="block h-[2px] bg-[#0B1F3A] rounded-full transition-all duration-300 origin-center"
              style={{
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? "500px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="bg-white border-t border-[#D0D7E2] px-6 pt-4 pb-6 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-xl text-sm font-sans tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-[#C62828]/10 text-[#C62828] font-semibold"
                    : "text-[#0B1F3A] hover:bg-[#C62828]/10 hover:text-[#C62828]"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 mt-1 border-t border-[#D0D7E2] flex flex-col gap-2">
            <a
              href="https://portal.mercyandgracevet.org/vetedge_portal"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-[#0B1F3A] text-[#0B1F3A] py-3.5 rounded-full text-sm font-medium hover:bg-[#F4F6F8] transition-colors"
            >
              Client Portal
            </a>
            <a
              href="https://portal.mercyandgracevet.org/vetedge_guest_booking"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#C62828] text-white py-3.5 rounded-full text-sm font-medium hover:bg-[#8E0000] transition-colors"
            >
              Book an Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
