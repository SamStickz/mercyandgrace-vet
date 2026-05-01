import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    name: "Wellness Exams",
    summary: "Full physical examinations keeping your pet in peak condition.",
    details: [
      "Complete nose-to-tail physical examination",
      "Weight & body condition scoring",
      "Parasite screening and prevention advice",
      "Nutritional counseling and diet planning",
      "Behavioral health assessment",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Hospital/Clinic cross */}
        <path d="M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path d="M9 13h6M12 10v6" />
      </svg>
    ),
    name: "Clinics",
    summary:
      "Dedicated clinic days for focused care — walk-ins and appointments welcome.",
    details: [
      "Scheduled and walk-in clinic sessions",
      "General illness and injury consultations",
      "Wound care and dressing changes",
      "Prescription and medication dispensing",
      "Specialist referral coordination",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Shopping bag / store icon */}
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    name: "Petmart",
    summary:
      "A fully stocked in-house pet store for all your pet's everyday needs.",
    details: [
      "Premium pet food and specialty diets",
      "Accessories, toys, and enrichment items",
      "Prescription medications and supplements",
      "Grooming products and hygiene supplies",
      "Expert product guidance from our team",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Chat / consultancy icon */}
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
    name: "Consultancy",
    summary:
      "Expert veterinary advice and second opinions for complex health concerns.",
    details: [
      "In-depth one-on-one veterinary consultations",
      "Second opinions on diagnoses and treatment plans",
      "Chronic condition management strategies",
      "Pre- and post-surgery counseling",
      "Telehealth and remote consultations available",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Scalpel / surgery icon */}
        <path d="M20 7l-8.5 8.5c-.83.83-2.18.83-3 0l-.5-.5c-.83-.83-.83-2.17 0-3L16.5 4" />
        <path d="M15 6l3 3" />
        <path d="M6 20l-2-2 2-2" />
        <path d="M4 18h4" />
      </svg>
    ),
    name: "Surgery",
    summary:
      "Safe, skilled surgical procedures performed in our fully equipped theatre.",
    details: [
      "Routine procedures: spay, neuter, and castration",
      "Soft tissue and orthopaedic surgeries",
      "Pre-operative blood work and health screening",
      "Full anaesthesia monitoring and pain management",
      "Post-operative recovery and follow-up care",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    name: "Home Visits",
    summary:
      "Veterinary care delivered at your front door — perfect for anxious pets.",
    details: [
      "Full consultations in the comfort of your home",
      "Ideal for pets with anxiety or mobility issues",
      "Vaccinations and minor treatments on-site",
      "Post-procedure follow-up visits",
      "Flexible scheduling around your routine",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
    name: "Pet Boarding",
    summary: "Safe, loving care for your pet while you travel or need a break.",
    details: [
      "Supervised, secure and clean boarding facility",
      "Regular feeding per your pet's routine",
      "Exercise and playtime sessions daily",
      "Medication administration if needed",
      "Updates and photos on request",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    name: "Grooming & Bathing",
    summary:
      "Professional grooming to keep your pet clean, healthy, and happy.",
    details: [
      "Full bath, dry and brush-out",
      "Nail trimming and ear cleaning",
      "Coat styling and trimming",
      "De-shedding treatments",
      "Flea and tick rinse available",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    name: "Vaccinations",
    summary:
      "Protect your pet from preventable diseases with our vaccination programs.",
    details: [
      "Core vaccine packages for dogs and cats",
      "Lifestyle and travel vaccines",
      "Vaccination history records and reminders",
      "Puppy & kitten vaccination schedules",
      "Rabies, Parvo, Distemper and more",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Laboratory / flask icon */}
        <path d="M9 3h6M9 3v6l-4 9a1 1 0 00.9 1.45h12.2A1 1 0 0019 18l-4-9V3" />
        <path d="M8 15h8" />
        <circle cx="10" cy="18" r="0.5" fill="currentColor" />
        <circle cx="14" cy="17" r="0.5" fill="currentColor" />
      </svg>
    ),
    name: "Laboratory",
    summary:
      "On-site laboratory services for fast, reliable diagnostic results.",
    details: [
      "Complete blood count and biochemistry panels",
      "Urinalysis and cytology",
      "Culture and sensitivity testing",
      "Hormonal and thyroid assays",
      "Rapid in-house results — same visit turnaround",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        {/* Ultrasound / wave icon */}
        <path d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9" />
        <path d="M6.34 6.34A7.96 7.96 0 004 12" />
        <rect x="9" y="9" width="6" height="9" rx="3" />
        <path d="M12 18v3M9 21h6" />
      </svg>
    ),
    name: "Ultrasonography",
    summary:
      "Advanced ultrasound imaging for non-invasive, detailed internal assessment.",
    details: [
      "Abdominal and cardiac ultrasound scans",
      "Pregnancy detection and foetal monitoring",
      "Organ and soft tissue evaluation",
      "Guided sample collection (aspirates, biopsies)",
      "Expert image interpretation and reporting",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    name: "Diagnostics",
    summary: "Fast, accurate answers when your pet needs them most.",
    details: [
      "Blood and urine laboratory analysis",
      "Digital radiology and imaging",
      "Fecal and skin parasite testing",
      "Rapid in-house test results",
      "Referral to specialist labs when needed",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    name: "Senior Pet Care",
    summary: "Specialized protocols for aging pets focused on quality of life.",
    details: [
      "Bi-annual wellness exams for seniors",
      "Pain management and arthritis care",
      "Cognitive health monitoring",
      "Nutritional support for aging bodies",
      "Compassionate end-of-life guidance",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M3 12l9-9 9 9" />
        <path d="M9 21V12h6v9" />
        <path d="M3 21h18" />
        <path d="M15 6h2v3" />
      </svg>
    ),
    name: "Farm Visits",
    summary:
      "On-site veterinary services for livestock and farm animals — right where they are.",
    details: [
      "Large animal health checks and consultations",
      "Vaccination and deworming programs",
      "Reproductive health and fertility assessments",
      "Emergency response for farm animals",
      "Herd health management and record keeping",
    ],
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-7 h-7"
      >
        <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
    name: "Nutrition Counseling",
    summary:
      "Tailored diet plans to keep your pet in optimal shape at every age.",
    details: [
      "Personalized diet assessment",
      "Weight management programs",
      "Prescription diets for health conditions",
      "Supplement and feeding schedule advice",
      "Puppy, adult, and senior nutritional plans",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <div className="pt-32 pb-20 px-6 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 text-[#C62828] text-[11px] font-semibold tracking-[0.18em] uppercase mb-4">
              <span className="w-6 h-px bg-[#C62828]" /> What We Offer
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-normal text-[#0B1F3A] leading-tight mb-5">
              Our <em className="not-italic text-[#C62828]">Services</em>
            </h1>
            <p className="text-base font-light text-[#8A96A8] max-w-xl leading-relaxed">
              From routine wellness to advanced diagnostics, surgery, and
              overnight boarding — we provide comprehensive care for every stage
              of your pet's life.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map(({ icon, name, summary, details }, i) => (
            <ScrollReveal key={name} delay={i * 60}>
              <div className="group border border-[#D0D7E2]/40 rounded-2xl p-8 hover:border-[#C62828]/40 hover:shadow-xl hover:shadow-[#C62828]/10 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#D0D7E2] flex items-center justify-center text-[#C62828] flex-shrink-0 group-hover:bg-[#C62828] group-hover:text-white transition-colors duration-300">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-[#0B1F3A] mb-2">
                      {name}
                    </h3>
                    <p className="text-sm font-light text-[#8A96A8] leading-relaxed mb-5">
                      {summary}
                    </p>
                    <ul className="space-y-2">
                      {details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-2.5 text-[13px] text-[#0B1F3A]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C62828] flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#8E0000] py-20 px-6 text-center">
        <ScrollReveal>
          <h2 className="font-serif text-4xl font-light text-white mb-4">
            Ready to book a{" "}
            <em className="not-italic text-[#D0D7E2]">service?</em>
          </h2>
          <p className="text-[#D0D7E2] text-sm font-light mb-10 max-w-md mx-auto">
            Open 9 AM – 6 PM daily. Home visits available on request.
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#C62828] px-10 py-4 rounded-full text-sm font-semibold hover:bg-[#D0D7E2] transition-colors"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
