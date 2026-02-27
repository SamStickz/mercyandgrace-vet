import RevealOnScroll from '../components/RevealOnScroll'
import { Link } from 'react-router-dom'

const VALUES = [
  {
    icon: '❤️',
    title: 'Compassion First',
    desc: 'Every animal that walks through our doors — or welcomes us into their home — is treated with kindness, patience, and genuine care.',
  },
  {
    icon: '🔬',
    title: 'Medical Excellence',
    desc: 'We stay current with veterinary research and best practices to ensure your pet receives the most effective, evidence-based treatment available.',
  },
  {
    icon: '🤝',
    title: 'Honest Communication',
    desc: "We believe in transparent pricing and clear explanations. You'll always understand what's happening and why — no jargon, no surprises.",
  },
  {
    icon: '🏠',
    title: 'Care on Your Terms',
    desc: "Not every pet thrives in a clinic environment. Our home visit service ensures every animal gets the care they need, wherever they're most comfortable.",
  },
]

const MILESTONES = [
  { year: '2009', event: 'Mercy & Grace Veterinary opens its doors on Igbogbo-Ebutte Road.' },
  { year: '2012', event: 'Launched our home visit service — a first in the neighbourhood.' },
  { year: '2016', event: 'Expanded to include a full pet boarding and grooming facility.' },
  { year: '2020', event: 'Reached 2,000 registered patients and welcomed Dr. Yakub to the team.' },
  { year: '2023', event: 'Dr. Oyekunle joins as our third veterinarian, expanding our capacity.' },
  { year: 'Today', event: 'Over 3,000 happy patients and counting. Still growing, still caring.' },
]

const STATS = [
  { num: '15+', label: 'Years in Practice' },
  { num: '3,000+', label: 'Happy Patients' },
  { num: '3', label: 'Dedicated Vets' },
  { num: '9–6', label: 'Open Daily' },
]

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="pt-32 pb-20 px-6 bg-[#f3f3ef]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#7a9e7e] block" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#7a9e7e]">Our Story</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-[#1e1e1a] leading-tight mb-6">
              About <em className="italic text-[#4a6e4e]">Mercy &amp; Grace</em>
            </h1>
            <p className="text-[15px] font-normal text-[#3a3a36] leading-relaxed mb-5">
              We began with a single purpose — to build a veterinary practice where animals are treated as family
              and their owners are treated as partners in care. Fifteen years later, that purpose has never wavered.
            </p>
            <p className="text-[15px] font-normal text-[#3a3a36] leading-relaxed">
              Located at 94 Igbogbo-Ebutte Road, we have become a trusted part of the community. From first-time
              pet owners to seasoned animal lovers, we have walked alongside thousands of families on their
              pet care journey.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ num, label }) => (
                <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8e6e0]">
                  <div className="font-serif text-4xl font-light text-[#4a6e4e] mb-2">{num}</div>
                  <div className="text-xs font-semibold tracking-[0.1em] text-[#3a3a36] uppercase">{label}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── VALUES ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#7a9e7e] block" />
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#7a9e7e]">What Guides Us</span>
                <span className="w-6 h-px bg-[#7a9e7e] block" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1e1e1a]">
                Our <em className="italic text-[#4a6e4e]">core values</em>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 80}>
                <div className="bg-[#f3f3ef] rounded-2xl p-8 h-full hover:bg-[#edf2ed] transition-colors duration-300 border border-transparent hover:border-[#c8d5c0]">
                  <div className="text-3xl mb-5">{icon}</div>
                  <h3 className="font-serif text-xl font-medium text-[#1e1e1a] mb-3">{title}</h3>
                  <p className="text-[14px] font-normal text-[#3a3a36] leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-24 px-6 bg-[#2d4a30]">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#c8d5c0] block" />
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#c8d5c0]">Our Journey</span>
                <span className="w-6 h-px bg-[#c8d5c0] block" />
              </div>
              <h2 className="font-serif text-4xl font-light text-white">
                15 years of <em className="italic text-[#c8d5c0]">milestones</em>
              </h2>
            </div>
          </RevealOnScroll>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[68px] top-2 bottom-2 w-px bg-[#7a9e7e]/40" />

            <div className="space-y-10">
              {MILESTONES.map(({ year, event }, i) => (
                <RevealOnScroll key={year} delay={i * 80}>
                  <div className="flex items-start gap-6">
                    {/* Year */}
                    <div className="w-16 flex-shrink-0 text-right pt-0.5">
                      <span className="font-serif text-base font-light text-[#c8d5c0]">{year}</span>
                    </div>
                    {/* Dot */}
                    <div className="flex-shrink-0 mt-1.5 relative z-10">
                      <div className="w-4 h-4 rounded-full border-2 border-[#7a9e7e] bg-[#2d4a30]" />
                    </div>
                    {/* Text */}
                    <p className="text-[15px] font-normal text-white/90 leading-relaxed pt-0.5">{event}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATION & HOURS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <RevealOnScroll>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#7a9e7e] block" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#7a9e7e]">Find Us</span>
            </div>
            <h2 className="font-serif text-3xl font-light text-[#1e1e1a] mb-8">
              Come <em className="italic text-[#4a6e4e]">visit us</em>
            </h2>
            <div className="space-y-5">
              {[
                { icon: '📍', label: 'Address', val: '94, Igbogbo-Ebutte Road' },
                { icon: '📞', label: 'Phone', val: '+234 706 067 4787', href: 'tel:+2347060674787' },
                { icon: '✉️', label: 'Email', val: 'mercyandgracevet@gmail.com', href: 'mailto:mercyandgracevet@gmail.com' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-[11px] tracking-[0.12em] uppercase text-[#7a9e7e] font-semibold mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-[15px] font-normal text-[#1e1e1a] hover:text-[#4a6e4e] transition-colors">{item.val}</a>
                    ) : (
                      <span className="text-[15px] font-normal text-[#1e1e1a]">{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-[#7a9e7e] block" />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#7a9e7e]">Opening Hours</span>
            </div>
            <h2 className="font-serif text-3xl font-light text-[#1e1e1a] mb-8">
              We are here <em className="italic text-[#4a6e4e]">for you</em>
            </h2>
            <div className="space-y-0">
              {[
                ['Monday',    '9:00 AM – 6:00 PM', true],
                ['Tuesday',   '9:00 AM – 6:00 PM', true],
                ['Wednesday', '9:00 AM – 6:00 PM', true],
                ['Thursday',  '9:00 AM – 6:00 PM', true],
                ['Friday',    '9:00 AM – 6:00 PM', true],
                ['Saturday',  '9:00 AM – 6:00 PM', true],
                ['Sunday',    'Closed',             false],
              ].map(([day, hours, open]) => (
                <div key={day} className="flex justify-between items-center py-3.5 border-b border-[#e8e6e0] last:border-none">
                  <span className="text-[14px] font-medium text-[#1e1e1a]">{day}</span>
                  <span className={`text-[14px] font-normal ${open ? 'text-[#4a6e4e]' : 'text-[#8a8880]'}`}>{hours}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 bg-[#ede9e0] text-center">
        <RevealOnScroll>
          <h2 className="font-serif text-4xl font-light text-[#1e1e1a] mb-4">
            Be part of our <em className="italic text-[#4a6e4e]">story</em>
          </h2>
          <p className="text-[15px] font-normal text-[#3a3a36] mb-10 max-w-sm mx-auto leading-relaxed">
            Join thousands of families who trust us with their most beloved companions.
          </p>
          <Link
            to="/contact"
            className="bg-[#4a6e4e] text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-[#2d4a30] transition-all hover:-translate-y-0.5 shadow-xl inline-block"
          >
            Visit Us Today
          </Link>
        </RevealOnScroll>
      </section>
    </>
  )
}
