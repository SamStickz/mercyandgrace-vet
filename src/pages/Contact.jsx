import { useState } from 'react'
import RevealOnScroll from '../components/RevealOnScroll'
import { Link } from 'react-router-dom'

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.927l6.244-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.214-3.714.974.99-3.614-.235-.372A9.818 9.818 0 1112 21.818z"/>
    </svg>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', petName: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Connect to your backend / email service here in production
    setSent(true)
  }

  return (
    <>
      {/* ── PAGE HEADER ── */}
      <div className="pt-32 pb-16 px-6 bg-[#f3f3ef]">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 text-[#7a9e7e] text-[11px] font-medium tracking-[0.18em] uppercase mb-4">
              <span className="w-6 h-px bg-[#7a9e7e]" /> Get In Touch
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-light text-[#1e1e1a] leading-tight mb-4">
              Book a <em className="not-italic text-[#4a6e4e]">Visit</em>
            </h1>
            <p className="text-[15px] font-normal text-[#3a3a36] max-w-lg leading-relaxed">
              Reach us by phone, WhatsApp, email, or fill in the form below. We will be in touch promptly to confirm your appointment.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* ── QUICK CONTACT STRIP ── */}
      <div className="bg-[#4a6e4e] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/2347060674787"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 shadow-md"
          >
            <WhatsAppIcon />
            Chat with Dr. Grace on WhatsApp
          </a>
          <span className="text-white/40 hidden sm:block">or</span>
          <a
            href="tel:+2347060674787"
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#c8d5c0] transition-colors"
          >
            📞 &nbsp;+234 706 067 4787
          </a>
          <span className="text-white/40 hidden sm:block">or</span>
          <a
            href="mailto:mercyandgracevet@gmail.com"
            className="flex items-center gap-2 text-white text-sm font-medium hover:text-[#c8d5c0] transition-colors"
          >
            ✉️ &nbsp;mercyandgracevet@gmail.com
          </a>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-16">

          {/* Left — contact info */}
          <div className="md:col-span-2">
            <RevealOnScroll>

              {/* WhatsApp card */}
              <div className="bg-[#f3f3ef] rounded-2xl p-6 mb-8 border border-[#c8d5c0]/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1e1e1a]">Chat with Dr. Grace</p>
                    <p className="text-xs text-[#8a8880]">Fastest way to reach us</p>
                  </div>
                </div>
                <p className="text-[13px] text-[#3a3a36] leading-relaxed mb-4">
                  Have a quick question about your pet? Message Dr. Grace directly on WhatsApp for a fast, personal response.
                </p>
                <a
                  href="https://wa.me/2347060674787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#1ebe5d] transition-colors"
                >
                  <WhatsAppIcon />
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Other contact details */}
              <div className="space-y-7">
                {[
                  {
                    icon: '📍',
                    label: 'Our Address',
                    value: '94, Igbogbo-Ebutte Road',
                    sub: "Come visit us — we'd love to meet you!",
                    href: null,
                  },
                  {
                    icon: '📞',
                    label: 'Phone',
                    value: '+234 706 067 4787',
                    sub: 'Call us Mon–Sun, 9 AM – 6 PM',
                    href: 'tel:+2347060674787',
                  },
                  {
                    icon: '✉️',
                    label: 'Email',
                    value: 'mercyandgracevet@gmail.com',
                    sub: 'We reply within a few hours',
                    href: 'mailto:mercyandgracevet@gmail.com',
                  },
                  {
                    icon: '🕐',
                    label: 'Opening Hours',
                    value: '9:00 AM – 6:00 PM',
                    sub: 'Open every day of the week',
                    href: null,
                  },
                ].map(({ icon, label, value, sub, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#c8d5c0] flex items-center justify-center text-xl flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="text-[15px] font-medium text-[#1e1e1a] hover:text-[#4a6e4e] transition-colors block">
                          {value}
                        </a>
                      ) : (
                        <p className="text-[15px] font-medium text-[#1e1e1a]">{value}</p>
                      )}
                      <p className="text-xs text-[#8a8880] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-10 h-48 rounded-2xl bg-[#c8d5c0]/50 border border-[#7a9e7e]/20 flex items-center justify-center">
                <div className="text-center opacity-60">
                  <p className="text-sm text-[#4a6e4e] font-medium">📍 94, Igbogbo-Ebutte Road</p>
                  <p className="text-xs text-[#4a6e4e] mt-1">Embed Google Maps here</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right — form */}
          <div className="md:col-span-3">
            <RevealOnScroll delay={100}>
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="w-16 h-16 rounded-full bg-[#c8d5c0] flex items-center justify-center text-[#4a6e4e] mb-6">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                    </svg>
                  </div>
                  <h3 className="font-serif text-3xl font-light text-[#1e1e1a] mb-3">Message sent!</h3>
                  <p className="text-[15px] font-normal text-[#3a3a36] max-w-xs leading-relaxed mb-6">
                    We have received your message and will contact you shortly to confirm your appointment.
                  </p>
                  <p className="text-sm text-[#8a8880] mb-6">Need a faster response?</p>
                  <a
                    href="https://wa.me/2347060674787"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 bg-[#25D366] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#1ebe5d] transition-colors mb-4"
                  >
                    <WhatsAppIcon />
                    Chat on WhatsApp Instead
                  </a>
                  <button
                    onClick={() => setSent(false)}
                    className="text-[#4a6e4e] text-sm font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-serif text-3xl font-light text-[#1e1e1a] mb-6">
                    Send us a <em className="not-italic text-[#4a6e4e]">message</em>
                  </h2>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-2">Your Name *</label>
                      <input
                        required name="name" value={form.name} onChange={handleChange}
                        placeholder="e.g. Amara Okafor"
                        className="w-full border border-[#d4d2cc]/60 rounded-xl px-4 py-3.5 text-sm text-[#1e1e1a] placeholder:text-[#8a8880]/50 focus:outline-none focus:border-[#7a9e7e] focus:ring-1 focus:ring-[#7a9e7e]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-2">Pet's Name</label>
                      <input
                        name="petName" value={form.petName} onChange={handleChange}
                        placeholder="e.g. Biscuit"
                        className="w-full border border-[#d4d2cc]/60 rounded-xl px-4 py-3.5 text-sm text-[#1e1e1a] placeholder:text-[#8a8880]/50 focus:outline-none focus:border-[#7a9e7e] focus:ring-1 focus:ring-[#7a9e7e]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-2">Phone Number *</label>
                      <input
                        required name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+234 ..."
                        className="w-full border border-[#d4d2cc]/60 rounded-xl px-4 py-3.5 text-sm text-[#1e1e1a] placeholder:text-[#8a8880]/50 focus:outline-none focus:border-[#7a9e7e] focus:ring-1 focus:ring-[#7a9e7e]/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-2">Email Address</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full border border-[#d4d2cc]/60 rounded-xl px-4 py-3.5 text-sm text-[#1e1e1a] placeholder:text-[#8a8880]/50 focus:outline-none focus:border-[#7a9e7e] focus:ring-1 focus:ring-[#7a9e7e]/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-2">Service Required</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-[#d4d2cc]/60 rounded-xl px-4 py-3.5 text-sm text-[#1e1e1a] focus:outline-none focus:border-[#7a9e7e] focus:ring-1 focus:ring-[#7a9e7e]/30 transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Wellness Exam</option>
                      <option>Home Visit</option>
                      <option>Pet Boarding</option>
                      <option>Grooming & Bathing</option>
                      <option>Vaccination</option>
                      <option>Diagnostics</option>
                      <option>Senior Pet Care</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8a8880] mb-2">Your Message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your pet and what you need..."
                      className="w-full border border-[#d4d2cc]/60 rounded-xl px-4 py-3.5 text-sm text-[#1e1e1a] placeholder:text-[#8a8880]/50 focus:outline-none focus:border-[#7a9e7e] focus:ring-1 focus:ring-[#7a9e7e]/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit"
                      className="flex-1 bg-[#4a6e4e] text-white py-4 rounded-full text-sm font-medium tracking-wide hover:bg-[#2d4a30] transition-all hover:-translate-y-0.5 shadow-xl shadow-[#4a6e4e]/25"
                    >
                      Send Message
                    </button>
                    <a
                      href="https://wa.me/2347060674787"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2.5 flex-1 bg-[#25D366] text-white py-4 rounded-full text-sm font-medium hover:bg-[#1ebe5d] transition-all hover:-translate-y-0.5 shadow-lg"
                    >
                      <WhatsAppIcon />
                      WhatsApp Instead
                    </a>
                  </div>

                  <p className="text-xs text-center text-[#8a8880] pt-1">
                    Prefer a quick chat? Message Dr. Grace directly on WhatsApp for the fastest response.
                  </p>
                </form>
              )}
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  )
}
