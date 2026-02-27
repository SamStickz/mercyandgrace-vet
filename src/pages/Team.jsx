import ScrollReveal from '../components/ScrollReveal'
import { Link } from 'react-router-dom'

const TEAM = [
  {
    name: 'Dr. Grace Everett',
    role: 'Lead Veterinarian & Founder',
    initials: 'GE',
    bio: 'Dr. Grace is the heart and soul of Mercy & Grace Veterinary. With over 15 years of dedicated practice, she founded this clinic on the belief that every animal deserves compassionate, world-class care. Her expertise spans preventive medicine, diagnostics, and internal medicine.',
    specialties: ['Preventive Medicine', 'Internal Medicine', 'Nutrition Counseling'],
    badge: 'Lead Vet',
  },
  {
    name: 'Dr. Yakub',
    role: 'Veterinary Physician',
    initials: 'YA',
    bio: 'Dr. Yakub brings precision and warmth to every consultation. He is particularly passionate about helping anxious animals feel safe and at ease, and is a champion of our home visit program for pets who struggle with clinic environments.',
    specialties: ['Home Visits', 'Behavioral Health', 'Diagnostics'],
    badge: '',
  },
  {
    name: 'Dr. Oyekunle',
    role: 'Veterinary Physician',
    initials: 'OY',
    bio: 'Dr. Oyekunle is known for his gentle approach and sharp clinical mind. He has a special interest in senior pet care and vaccination programs, ensuring that every pet — young or old — receives the attentive care they deserve.',
    specialties: ['Senior Pet Care', 'Vaccination Programs', 'Wellness Exams'],
    badge: '',
  },
]

export default function Team() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 bg-[#f3f3ef]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              <span className="w-6 h-px bg-[#7a9e7e]" /> The People Behind The Care
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-[#1e1e1a] leading-tight mb-5">
              Meet Our <em className="not-italic text-[#4a6e4e]">Team</em>
            </h1>
            <p className="text-base font-light text-[#8a8880] max-w-lg leading-relaxed">
              Three dedicated veterinarians united by one purpose — to give every pet the very best care with compassion, skill, and genuine love.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Team Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          {TEAM.map(({ name, role, initials, bio, specialties, badge }, i) => (
            <ScrollReveal key={name} delay={i * 100}>
              <div className={`rounded-3xl overflow-hidden border border-[#d4d2cc]/30 grid md:grid-cols-5 ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Photo placeholder */}
                <div className={`md:col-span-2 bg-[#c8d5c0] min-h-[280px] md:min-h-[380px] flex items-center justify-center relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  {/* Replace with <img src={photo} className="w-full h-full object-cover" alt={name} /> */}
                  <div className="text-center opacity-40">
                    <div className="w-24 h-24 rounded-full bg-[#4a6e4e]/30 flex items-center justify-center mx-auto mb-3">
                      <span className="font-serif text-3xl font-light text-[#2d4a30]">{initials}</span>
                    </div>
                    <p className="text-xs text-[#4a6e4e] font-sans">Replace with photo</p>
                  </div>
                  {badge && (
                    <div className="absolute top-6 left-6 bg-[#4a6e4e] text-white text-[10px] font-medium tracking-[0.12em] uppercase px-3 py-1.5 rounded-full">
                      {badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`md:col-span-3 p-10 md:p-14 flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#7a9e7e] mb-3">{role}</p>
                  <h2 className="font-serif text-3xl md:text-4xl font-light text-[#1e1e1a] mb-5">{name}</h2>
                  <p className="text-[15px] font-light leading-relaxed text-[#8a8880] mb-8">{bio}</p>
                  <div>
                    <p className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#8a8880] mb-3">Specialties</p>
                    <div className="flex flex-wrap gap-2">
                      {specialties.map(s => (
                        <span key={s} className="bg-[#c8d5c0] text-[#4a6e4e] text-[12px] font-medium px-3.5 py-1.5 rounded-full">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Join CTA */}
      <section className="bg-[#ede9e0] py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl font-light text-[#1e1e1a] mb-4">
            Book a consultation with <em className="not-italic text-[#4a6e4e]">our team</em>
          </h2>
          <p className="text-sm font-light text-[#8a8880] mb-10 max-w-sm mx-auto">Available 9 AM – 6 PM, Monday to Sunday.</p>
          <Link to="/contact" className="bg-[#4a6e4e] text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-[#2d4a30] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#4a6e4e]/25 inline-block">
            Book an Appointment
          </Link>
        </ScrollReveal>
      </section>
    </>
  )
}
