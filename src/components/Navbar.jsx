import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/team', label: 'Our Team' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-[#FAFAF8]/95 backdrop-blur-md shadow-sm border-b border-[#c8d5c0]/30'
        : 'bg-[#FAFAF8]/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#4a6e4e] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2d4a30] transition-colors duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <circle cx="6" cy="8" r="2.2"/>
              <circle cx="12" cy="5.5" r="2.2"/>
              <circle cx="18" cy="8" r="2.2"/>
              <circle cx="4" cy="13.5" r="1.8"/>
              <path d="M12 10.5c-3 0-5.5 2-5.5 5 0 2.5 1.5 4 3 4.5.8.3 1.7.5 2.5.5s1.7-.2 2.5-.5c1.5-.5 3-2 3-4.5 0-3-2.5-5-5.5-5z"/>
            </svg>
          </div>
          <div className="leading-none">
            <span className="font-serif text-lg font-medium text-[#1e1e1a] tracking-wide block">
              Mercy <span className="text-[#4a6e4e]">&amp;</span> Grace
            </span>
            <span className="text-[10px] tracking-[0.14em] uppercase text-[#7a9e7e] font-sans font-normal">
              Veterinary Limited
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `text-[13px] tracking-[0.07em] uppercase transition-colors duration-200 font-sans ${
                    isActive
                      ? 'text-[#4a6e4e] font-medium'
                      : 'text-[#3a3a36] hover:text-[#4a6e4e] font-normal'
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="bg-[#4a6e4e] text-white text-[13px] font-medium tracking-wide px-5 py-2.5 rounded-full hover:bg-[#2d4a30] transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Book a Visit
            </Link>
          </li>
        </ul>

        {/* Hamburger button — visible on mobile only */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#f3f3ef] transition-colors"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className="block h-[2px] bg-[#1e1e1a] rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block h-[2px] bg-[#1e1e1a] rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)' }}
            />
            <span
              className="block h-[2px] bg-[#1e1e1a] rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? '400px' : '0px', opacity: menuOpen ? 1 : 0 }}
      >
        <div className="bg-[#FAFAF8] border-t border-[#e8e6e0] px-6 pt-4 pb-6 flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block py-3 px-4 rounded-xl text-sm font-sans tracking-wide transition-colors ${
                  isActive
                    ? 'bg-[#f3f3ef] text-[#4a6e4e] font-medium'
                    : 'text-[#3a3a36] hover:bg-[#f3f3ef] hover:text-[#4a6e4e]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <div className="pt-2 mt-1 border-t border-[#e8e6e0]">
            <Link
              to="/contact"
              className="block text-center bg-[#4a6e4e] text-white py-3.5 rounded-full text-sm font-medium hover:bg-[#2d4a30] transition-colors"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
