import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1a] text-[#d4d2cc]">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-[#4a6e4e] flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C9.5 2 7.5 4 7.5 6.5c0 1.5.7 2.8 1.8 3.7L12 22l2.7-11.8c1.1-.9 1.8-2.2 1.8-3.7C16.5 4 14.5 2 12 2zm-5 5c-1.4 0-2.5 1.1-2.5 2.5S5.6 12 7 12s2.5-1.1 2.5-2.5S8.4 7 7 7zm10 0c-1.4 0-2.5 1.1-2.5 2.5S15.6 12 17 12s2.5-1.1 2.5-2.5S18.4 7 17 7z"/>
                </svg>
              </div>
              <div>
                <p className="font-serif text-white text-xl font-medium leading-tight">Mercy <span className="text-[#7a9e7e]">&amp;</span> Grace</p>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#8a8880]">Veterinary Limited</p>
              </div>
            </div>
            <p className="text-sm text-[#8a8880] leading-relaxed max-w-xs font-light">
              Compassionate, professional veterinary care for every pet — from routine wellness to home visits. Your pet's health is our calling.
            </p>
            <div className="mt-6 space-y-2 text-sm text-[#8a8880]">
              <p>📍 94, Igbogbo-Ebutte Road</p>
              <p>📞 <a href="tel:+2347060674787" className="hover:text-[#c8d5c0] transition-colors">+234 706 067 4787</a></p>
              <p>✉️ <a href="mailto:mercyandgracevet@gmail.com" className="hover:text-[#c8d5c0] transition-colors">mercyandgracevet@gmail.com</a></p>
              <p>🕐 Open 9:00 AM – 6:00 PM Daily</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-white mb-6">Navigate</p>
            <ul className="space-y-3">
              {[['/', 'Home'], ['/services', 'Services'], ['/team', 'Our Team'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-[13px] text-[#8a8880] hover:text-[#c8d5c0] transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-white mb-6">Our Services</p>
            <ul className="space-y-3">
              {['Wellness Exams', 'Diagnostics', 'Home Visits', 'Pet Boarding', 'Grooming & Bathing', 'Vaccinations', 'Nutrition Counseling'].map(s => (
                <li key={s} className="text-[13px] text-[#8a8880]">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-[#8a8880]">
          <span>© {new Date().getFullYear()} Mercy & Grace Veterinary Limited. All rights reserved.</span>
          <span>Built with care ♡</span>
        </div>
      </div>
    </footer>
  )
}
