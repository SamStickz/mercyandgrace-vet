import RevealOnScroll from "../components/RevealOnScroll";

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.927l6.244-1.637A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.36-.214-3.714.974.99-3.614-.235-.372A9.818 9.818 0 1112 21.818z" />
    </svg>
  );
}

export default function Contact() {
  return (
    <>
      {/* PAGE HEADER */}
      <div className="pt-32 pb-16 px-6 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <div className="flex items-center gap-3 text-[#C62828] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-6 h-px bg-[#C62828]" /> Get In Touch
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-normal text-[#0B1F3A] leading-tight mb-4">
              Find <em className="not-italic text-[#C62828]">Us</em>
            </h1>
            <p className="text-[15px] font-normal text-[#0B1F3A] max-w-lg leading-relaxed">
              We are open every day, 9 AM to 6 PM. Reach us by phone, WhatsApp,
              or email — or just come in.
            </p>
          </RevealOnScroll>
        </div>
      </div>

      {/* QUICK CONTACT STRIP */}
      <div className="bg-[#C62828] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/2347060674787"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white text-[#0B1F3A] px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#F4F6F8] transition-all hover:-translate-y-0.5 shadow-md"
          >
            <WhatsAppIcon />
            Chat with Dr. Grace on WhatsApp
          </a>
          <span className="text-white/40 hidden sm:block">or</span>
          <a
            href="tel:+2347060674787"
            className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#D0D7E2] transition-colors"
          >
            📞 &nbsp;+234 706 067 4787
          </a>
          <span className="text-white/40 hidden sm:block">or</span>
          <a
            href="mailto:mercyandgracevet@gmail.com"
            className="flex items-center gap-2 text-white text-sm font-semibold hover:text-[#D0D7E2] transition-colors"
          >
            ✉️ &nbsp;mercyandgracevet@gmail.com
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left — contact details */}
          <RevealOnScroll>
            <div className="space-y-8">
              {/* WhatsApp card */}
              <div className="bg-[#F4F6F8] rounded-2xl p-6 border border-[#D0D7E2]/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <WhatsAppIcon />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0B1F3A]">
                      Chat with Dr. Grace
                    </p>
                    <p className="text-xs text-[#8A96A8]">
                      Fastest way to reach us
                    </p>
                  </div>
                </div>
                <p className="text-[13px] text-[#0B1F3A] leading-relaxed mb-4">
                  Have a quick question about your pet? Message Dr. Grace
                  directly on WhatsApp for a fast, personal response.
                </p>
                <a
                  href="https://wa.me/2347060674787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
                >
                  <WhatsAppIcon />
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Info items */}
              {[
                {
                  icon: "📍",
                  label: "Our Address",
                  value: "94, Igbogbo-Ebutte Road",
                  sub: "Come visit us — we'd love to meet you and your pet!",
                  href: null,
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "+234 706 067 4787",
                  sub: "Call us Mon–Sun, 9 AM – 6 PM",
                  href: "tel:+2347060674787",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "mercyandgracevet@gmail.com",
                  sub: "We reply within a few hours",
                  href: "mailto:mercyandgracevet@gmail.com",
                },
                {
                  icon: "🕐",
                  label: "Opening Hours",
                  value: "9:00 AM – 6:00 PM",
                  sub: "Open every day of the week",
                  href: null,
                },
              ].map(({ icon, label, value, sub, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#D0D7E2] flex items-center justify-center text-xl flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#8A96A8] mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-[15px] font-semibold text-[#0B1F3A] hover:text-[#C62828] transition-colors block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-semibold text-[#0B1F3A]">
                        {value}
                      </p>
                    )}
                    <p className="text-xs text-[#8A96A8] mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}

              {/* Book CTA */}
              <div className="pt-4 border-t border-[#D0D7E2]">
                <p className="text-sm text-[#8A96A8] mb-4">
                  Ready to schedule a visit?
                </p>
                <a
                  href="https://portal.mercyandgracevet.org/vetedge_guest_booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C62828] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#8E0000] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#C62828]/25"
                >
                  Book an Appointment →
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — Google Map */}
          <RevealOnScroll delay={150}>
            <div className="rounded-3xl overflow-hidden border border-[#D0D7E2] shadow-lg min-h-[500px]">
              <iframe
                title="Mercy & Grace Veterinary Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.052298196995!2d3.5054!3d6.6047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103be24f61e6d1c1%3A0x0!2s94%20Igbogbo-Ebutte%20Rd%2C%20Ikorodu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
