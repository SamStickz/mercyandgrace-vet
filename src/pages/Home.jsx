import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

const STATS = [
  { num: '3k+', label: 'Happy Patients' },
  { num: '15y', label: 'Of Experience' },
  { num: '98%', label: 'Satisfaction' },
]

const MARQUEE_ITEMS = [
  'Wellness Exams', 'Home Visits', 'Pet Boarding', 'Grooming & Bathing',
  'Vaccinations', 'Diagnostics', 'Compassionate Care', 'Fear-Free Environment',
  'Wellness Exams', 'Home Visits', 'Pet Boarding', 'Grooming & Bathing',
  'Vaccinations', 'Diagnostics', 'Compassionate Care', 'Fear-Free Environment',
]

const SERVICES_PREVIEW = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    name: 'Wellness Exams',
    desc: 'Comprehensive check-ups to keep your pet healthy at every stage of life.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    name: 'Home Visits',
    desc: 'We come to you. Stress-free veterinary care delivered right at your doorstep.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      </svg>
    ),
    name: 'Pet Boarding',
    desc: "Safe, comfortable boarding where your pet is cared for like family while you're away.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    name: 'Grooming & Bathing',
    desc: 'Professional grooming services to keep your pet looking and feeling their best.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
      </svg>
    ),
    name: 'Vaccinations',
    desc: 'Core and lifestyle vaccines to protect your pet from preventable diseases.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    name: 'Senior Pet Care',
    desc: 'Specialized protocols focused on comfort and quality of life for aging pets.',
  },
]

const TEAM_PREVIEW = [
  {
    name: 'Dr. Grace Ebere',
    role: 'Lead Veterinarian & Founder',
    bio: 'With over 15 years of experience, Dr. Grace leads our team with compassion and clinical excellence. She founded Mercy & Grace on the belief that every pet deserves the very best.',
    initial: 'G',
    badge: 'Lead Vet',
  },
  {
    name: 'Dr. Yakub',
    role: 'Veterinarian',
    bio: 'Known for his calm, gentle approach, Dr. Yakub has a special gift for putting anxious pets at ease. He leads our home visit service and diagnostic consultations.',
    initial: 'Y',
    badge: null,
  },
  {
    name: 'Dr. Oyekunle',
    role: 'Veterinarian',
    bio: 'Passionate about preventive care and client education, Dr. Oyekunle believes informed pet owners are the best advocates for their animals.',
    initial: 'O',
    badge: null,
  },
]

const TESTIMONIALS = [
  {
    quote: 'Dr. Grace and her team are absolutely wonderful. My dog Chukwu was terrified of vets but they made him feel so calm and safe. I cannot recommend them enough.',
    name: 'Funmilayo Adeyemi',
    pet: 'Chukwu — German Shepherd',
    initial: 'F',
  },
  {
    quote: 'The home visit service is a lifesaver! They came to my house when my cat was unwell and handled everything so professionally. Truly exceptional care.',
    name: 'Emeka Okonkwo',
    pet: 'Bintu — Persian Cat',
    initial: 'E',
  },
  {
    quote: "We board our rabbit here whenever we travel. The staff treat every animal — big or small — with such tenderness. Mercy & Grace is simply the best.",
    name: 'Sade Afolabi',
    pet: 'Cotton — Holland Lop',
    initial: 'S',
  },
]

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.927l6.244-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.214-3.714.974.99-3.614-.235-.372A9.818 9.818 0 1112 21.818z"/>
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen grid md:grid-cols-2 pt-20 overflow-hidden">
        <div className="flex flex-col justify-center px-8 md:px-16 py-20 animate-[fadeUp_1s_0.3s_ease_both]">
          <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.16em] uppercase mb-7">
            <span className="w-8 h-px bg-[#7a9e7e]" />
            Compassionate Care Since 2009
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight mb-7 text-[#1e1e1a]">
            Your pet deserves<br />
            <em className="not-italic text-[#4a6e4e] font-light">mercy</em> &amp;{' '}
            <em className="not-italic text-[#4a6e4e] font-light">grace</em>
          </h1>
          <p className="text-base font-light leading-relaxed text-[#8a8880] max-w-md mb-10">
            Professional veterinary care with a personal touch. We treat every animal
            as if they were our own — at our clinic or at your home.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="bg-[#4a6e4e] text-white px-8 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#2d4a30] transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-[#4a6e4e]/25"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/2347060674787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#1ebe5d] transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-[#25D366]/25"
            >
              <WhatsAppIcon />
              Chat with Dr. Grace
            </a>
          </div>
          <div className="flex gap-10 mt-14 pt-10 border-t border-[#d4d2cc]/50">
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <div className="font-serif text-4xl font-light text-[#1e1e1a]">{num}</div>
                <div className="text-[12px] text-[#8a8880] tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[50vh] md:min-h-0 animate-[fadeIn_1.2s_0.2s_ease_both]">
          <div className="absolute inset-0 bg-[#c8d5c0] flex items-center justify-center">
            {/* Replace with: <img src="hero.jpg" className="w-full h-full object-cover" alt="Vet care" /> */}
            <div className="text-center opacity-25">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#2d4a30" strokeWidth="0.4">
                <circle cx="6" cy="8" r="2.2"/><circle cx="12" cy="5.5" r="2.2"/>
                <circle cx="18" cy="8" r="2.2"/><circle cx="4" cy="13.5" r="1.8"/>
                <path d="M12 10.5c-3 0-5.5 2-5.5 5 0 2.5 1.5 4 3 4.5.8.3 1.7.5 2.5.5s1.7-.2 2.5-.5c1.5-.5 3-2 3-4.5 0-3-2.5-5-5.5-5z"/>
              </svg>
              <p className="text-xs mt-2 font-sans text-[#4a6e4e]">Replace with clinic photo</p>
            </div>
          </div>
          <div className="absolute bottom-10 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3 animate-[fadeUp_1s_0.9s_ease_both]">
            <div className="w-11 h-11 rounded-xl bg-[#c8d5c0] flex items-center justify-center flex-shrink-0 text-xl">✅</div>
            <div>
              <p className="text-sm font-medium text-[#1e1e1a]">Certified Practice</p>
              <p className="text-xs text-[#8a8880] mt-0.5">Trusted by 3,000+ Families</p>
            </div>
          </div>
          <div className="absolute top-10 right-6 bg-[#4a6e4e] text-white px-5 py-3 rounded-2xl shadow-lg animate-[fadeUp_1s_0.7s_ease_both]">
            <div className="text-[10px] opacity-75 tracking-wider uppercase">Open Today</div>
            <div className="font-serif text-lg font-light">9am – 6pm</div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-[#2d4a30] py-4 overflow-hidden">
        <div className="flex gap-16 animate-[marquee_25s_linear_infinite] w-max">
          {MARQUEE_ITEMS.map((item, i) => (
            <span key={i} className="flex items-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase text-[#c8d5c0] whitespace-nowrap">
              <span className="w-1 h-1 rounded-full bg-[#7a9e7e] inline-block" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="bg-[#f3f3ef] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
                  <span className="w-6 h-px bg-[#7a9e7e]" /> What We Offer
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-[#1e1e1a]">
                  Care for every<br /><em className="not-italic text-[#4a6e4e]">kind of companion</em>
                </h2>
              </div>
              <Link
                to="/services"
                className="shrink-0 self-start md:self-auto bg-[#4a6e4e] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#2d4a30] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#4a6e4e]/20"
              >
                All Services →
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {SERVICES_PREVIEW.map(({ icon, name, desc }, i) => (
              <RevealOnScroll key={name} delay={i * 80}>
                <Link
                  to="/services"
                  className="group bg-white p-10 relative overflow-hidden hover:bg-[#F7FAF7] transition-colors duration-300 block h-full"
                >
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#7a9e7e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 rounded-2xl bg-[#c8d5c0] flex items-center justify-center mb-7 text-[#4a6e4e] group-hover:bg-[#7a9e7e] group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#1e1e1a] mb-3">{name}</h3>
                  <p className="text-sm font-light leading-relaxed text-[#8a8880] mb-4">{desc}</p>
                  <span className="text-[#4a6e4e] text-xs font-medium tracking-wide group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Learn more
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <RevealOnScroll>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#c8d5c0] flex items-center justify-center">
              {/* Replace with: <img src="clinic.jpg" className="w-full h-full object-cover" alt="Our clinic" /> */}
              <div className="opacity-25 text-center">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#4A6E4E" strokeWidth="0.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                <p className="text-xs mt-2 text-[#4a6e4e] font-sans">Replace with clinic photo</p>
              </div>
              <div className="absolute bottom-8 md:-right-8 right-0 bg-[#4a6e4e] text-white p-6 rounded-2xl">
                <span className="font-serif text-4xl font-light block">15</span>
                <span className="text-[11px] tracking-wider opacity-75 block mt-1">Years of Care</span>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-5">
              <span className="w-6 h-px bg-[#7a9e7e]" /> Why Choose Us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-[#1e1e1a] mb-6">
              Medicine with<br /><em className="not-italic text-[#4a6e4e]">heart &amp; purpose</em>
            </h2>
            <p className="text-base font-light leading-relaxed text-[#8a8880] mb-8">
              Mercy &amp; Grace Veterinary was founded on one simple belief — that every animal deserves compassionate,
              expert care. For 15 years, we have served pets and their families with dedication, precision,
              and genuine love for what we do.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Experienced, caring team of licensed veterinarians',
                'Home visit service for stress-free care',
                'Safe, loving pet boarding facility',
                'Full grooming and bathing services',
                'Transparent pricing, no surprises',
              ].map(f => (
                <div key={f} className="flex items-center gap-3 text-sm text-[#3a3a36]">
                  <div className="w-5 h-5 rounded-full bg-[#c8d5c0] flex items-center justify-center flex-shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" stroke="#4a6e4e" strokeWidth="3" viewBox="0 0 12 12" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6l3 3 5-5"/>
                    </svg>
                  </div>
                  {f}
                </div>
              ))}
            </div>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#4a6e4e] font-medium text-sm hover:gap-3 transition-all"
            >
              Learn More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section className="bg-[#f3f3ef] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
                  <span className="w-6 h-px bg-[#7a9e7e]" /> Our Doctors
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1e1e1a] leading-tight">
                  Meet the people who<br /><em className="not-italic text-[#4a6e4e]">love your pets</em>
                </h2>
              </div>
              <Link
                to="/team"
                className="shrink-0 self-start md:self-auto flex items-center gap-2 text-[#4a6e4e] font-medium text-sm hover:gap-3 transition-all"
              >
                Meet the full team
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-6">
            {TEAM_PREVIEW.map(({ name, role, bio, initial, badge }, i) => (
              <RevealOnScroll key={name} delay={i * 100}>
                <Link
                  to="/team"
                  className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-[#4a6e4e]/10 transition-all duration-300 hover:-translate-y-1 block"
                >
                  {/* Photo area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-[#c8d5c0] to-[#a3bc9b] flex items-center justify-center relative overflow-hidden">
                    {/* Replace with: <img src={`dr-photo.jpg`} className="w-full h-full object-cover" alt={name} /> */}
                    <div className="w-20 h-20 rounded-full bg-[#4a6e4e]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-serif text-4xl font-light text-[#2d4a30]">{initial}</span>
                    </div>
                    {badge && (
                      <span className="absolute top-4 right-4 bg-[#4a6e4e] text-white text-[10px] font-medium tracking-[0.1em] uppercase px-3 py-1.5 rounded-full">
                        {badge}
                      </span>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-7">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7a9e7e] mb-1">{role}</p>
                    <h3 className="font-serif text-2xl font-medium text-[#1e1e1a] mb-3">{name}</h3>
                    <p className="text-sm font-light text-[#8a8880] leading-relaxed mb-5">{bio}</p>
                    <span className="text-[#4a6e4e] text-sm font-medium inline-flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      View profile
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-5">
              <span className="w-6 h-px bg-[#7a9e7e]" /> Our Story
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1e1e1a] leading-tight mb-6">
              15 years of <em className="not-italic text-[#4a6e4e]">caring for<br />this community</em>
            </h2>
            <p className="text-[15px] font-normal text-[#3a3a36] leading-relaxed mb-5">
              Founded in 2009, Mercy &amp; Grace Veterinary has grown from a small local clinic into a trusted
              practice caring for over 3,000 pets. Our name reflects everything we stand for — mercy in how
              we treat every animal, grace in the standard we hold ourselves to.
            </p>
            <p className="text-[15px] font-normal text-[#3a3a36] leading-relaxed mb-8">
              Located at 94 Igbogbo-Ebutte Road, we are proud to be a pillar of this neighbourhood —
              walking alongside families on every step of their pet care journey.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#4a6e4e] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#2d4a30] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#4a6e4e]/25"
            >
              Our Full Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '15+', label: 'Years in Practice', icon: '🏥' },
                { num: '3,000+', label: 'Happy Patients', icon: '🐾' },
                { num: '3', label: 'Dedicated Vets', icon: '👨‍⚕️' },
                { num: '6', label: 'Services Offered', icon: '✅' },
              ].map(({ num, label, icon }) => (
                <div key={label} className="bg-[#f3f3ef] rounded-2xl p-6 border border-[#e8e6e0] hover:border-[#c8d5c0] transition-colors">
                  <div className="text-2xl mb-3">{icon}</div>
                  <div className="font-serif text-3xl font-light text-[#4a6e4e] mb-1">{num}</div>
                  <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#3a3a36]">{label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#2d4a30] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 text-[#c8d5c0] text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
                <span className="w-6 h-px bg-[#c8d5c0]" /> Client Stories <span className="w-6 h-px bg-[#c8d5c0]" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight">
                Trusted by <em className="not-italic text-[#c8d5c0]">thousands</em><br />of families
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, name, pet, initial }, i) => (
              <RevealOnScroll key={name} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-10 hover:bg-white/10 transition-colors duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 fill-[#B89A5E]" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif text-lg font-light italic leading-relaxed text-white/90 flex-1 mb-8">"{quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#7a9e7e] flex items-center justify-center font-serif text-xl text-white flex-shrink-0">
                      {initial}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{name}</p>
                      <p className="text-xs text-[#c8d5c0] mt-0.5">{pet}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#ede9e0] py-32 px-6 text-center">
        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-5">
            <span className="w-6 h-px bg-[#7a9e7e]" /> Ready to Begin? <span className="w-6 h-px bg-[#7a9e7e]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1e1e1a] mb-5 leading-tight">
            Give your pet the care<br /><em className="not-italic text-[#4a6e4e]">they truly deserve</em>
          </h2>
          <p className="text-base font-light text-[#8a8880] max-w-md mx-auto leading-relaxed mb-10">
            Book a visit at our clinic or reach Dr. Grace directly on WhatsApp. We are here every day, 9 AM – 6 PM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-[#4a6e4e] text-white px-9 py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#2d4a30] transition-all hover:-translate-y-1 shadow-xl shadow-[#4a6e4e]/25"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/2347060674787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] text-white px-9 py-4 rounded-full text-sm font-medium hover:bg-[#1ebe5d] transition-all hover:-translate-y-1 shadow-lg shadow-[#25D366]/25"
            >
              <WhatsAppIcon />
              Chat with Dr. Grace
            </a>
            <a
              href="tel:+2347060674787"
              className="border border-[#4a6e4e] text-[#4a6e4e] px-9 py-4 rounded-full text-sm font-medium hover:bg-[#4a6e4e] hover:text-white transition-all hover:-translate-y-1"
            >
              📞 &nbsp;Call Us
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
