import React from "react";

const DoctorDiscovery: React.FC = () => {
  return (
    <div>
      <div className="bg-surface font-body-md text-on-surface antialiased">
        <header className="bg-surface border-b border-outline-variant/10 shadow-sm sticky top-0 z-50">
          <div className="flex justify-between items-center w-full px-4 max-w-[1200px] mx-auto h-[72px]">
            <div className="flex items-center gap-6">
              <span className="font-display-lg text-display-lg font-bold text-primary">
                MedLink
              </span>
              <nav className="hidden md:flex items-center gap-4">
                <a
                  className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                  href="#"
                >
                  Services
                </a>
                <a
                  className="font-label-md text-label-md text-secondary font-bold border-b-2 border-secondary pb-1"
                  href="#"
                >
                  Doctors
                </a>
                <a
                  className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                  href="#"
                >
                  About
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-1 font-label-md text-label-md text-secondary hover:bg-surface-container-low rounded-lg transition-all active:scale-95">
                Sign In
              </button>
              <button className="px-4 py-1 font-label-md text-label-md bg-secondary text-white rounded-lg shadow-sm hover:opacity-90 transition-all active:scale-95">
                Emergency
              </button>
            </div>
          </div>
        </header>
        <main className="max-w-[1200px] mx-auto px-4 py-6 space-y-6">
          <section className="relative rounded-xl overflow-hidden bg-primary-container h-64 flex flex-col justify-center px-8">
            <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
            <div className="relative z-10 space-y-4">
              <h1 className="font-headline-lg text-headline-lg text-white">
                Find your specialist
              </h1>
              <div className="bg-white p-2 rounded-xl shadow-lg flex items-center gap-1 max-w-2xl group transition-all focus-within:ring-2 focus-within:ring-secondary/20">
                <div className="flex items-center px-3 text-outline">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="flex-grow border-none focus:ring-0 font-body-md text-on-surface py-4 outline-none"
                  placeholder="Search by specialty, doctor name, or hospital"
                  type="text"
                />
                <button className="bg-secondary text-white px-6 py-4 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                  Search
                </button>
              </div>
            </div>
          </section>

          <div className="flex justify-between items-center py-1">
            <p className="font-body-sm text-on-surface-variant">
              Showing <span className="font-bold text-on-surface">128</span> top
              rated specialists
            </p>
            <div className="flex items-center gap-3">
              <div className="bg-surface-container rounded-lg p-2 flex gap-2">
                <button
                  className="p-1 rounded bg-white shadow-sm text-secondary flex items-center justify-center"
                  id="listView"
                >
                  <span className="material-symbols-outlined">list</span>
                </button>
                <button
                  className="p-1 rounded text-on-surface-variant hover:bg-white/50 flex items-center justify-center transition-all"
                  id="mapView"
                >
                  <span className="material-symbols-outlined">map</span>
                </button>
              </div>
              <select className="bg-surface border-outline-variant rounded-lg font-label-md text-on-surface px-4 py-1 focus:ring-secondary focus:border-secondary">
                <option>Recommended</option>
                <option>Rating: High to Low</option>
                <option>Fee: Low to High</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <aside className="md:col-span-3 space-y-4 sticky top-24">
              <div className="glass-card rounded-xl p-4 space-y-6 custom-shadow">
                <div>
                  <h3 className="font-label-md text-on-surface mb-3">
                    Specialty
                  </h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-1 cursor-pointer group">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                        Cardiology
                      </span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer group">
                      <input
                        defaultChecked
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                        Pediatrics
                      </span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer group">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                        Dermatology
                      </span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer group">
                      <input
                        className="rounded border-outline-variant text-secondary focus:ring-secondary"
                        type="checkbox"
                      />
                      <span className="font-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">
                        Neurology
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-label-md text-on-surface mb-3">Rating</h3>
                  <div className="space-y-1">
                    <label className="flex items-center gap-1 cursor-pointer group">
                      <input
                        className="border-outline-variant text-secondary focus:ring-secondary"
                        name="rating"
                        type="radio"
                      />
                      <span className="flex items-center gap-1 font-body-sm text-on-surface-variant group-hover:text-on-surface">
                        4.5+{" "}
                        <span className="material-symbols-outlined text-sm text-yellow-500">
                          star
                        </span>
                      </span>
                    </label>
                    <label className="flex items-center gap-1 cursor-pointer group">
                      <input
                        defaultChecked
                        className="border-outline-variant text-secondary focus:ring-secondary"
                        name="rating"
                        type="radio"
                      />
                      <span className="flex items-center gap-1 font-body-sm text-on-surface-variant group-hover:text-on-surface">
                        4.0+{" "}
                        <span className="material-symbols-outlined text-sm text-yellow-500">
                          star
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div>
                  <h3 className="font-label-md text-on-surface mb-3">
                    Consultation Fee
                  </h3>
                  <input
                    className="w-full accent-secondary"
                    max="500"
                    min="0"
                    step="50"
                    type="range"
                  />
                  <div className="flex justify-between font-body-sm text-on-surface-variant mt-1">
                    <span>$0</span>
                    <span>$500+</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-label-md text-on-surface mb-3">
                    Availability
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <button className="px-3 py-1 border border-secondary bg-secondary/5 text-secondary rounded-full font-label-md text-xs">
                      Today
                    </button>
                    <button className="px-3 py-1 border border-outline-variant text-on-surface-variant rounded-full font-label-md text-xs hover:border-secondary transition-colors">
                      This Week
                    </button>
                    <button className="px-3 py-1 border border-outline-variant text-on-surface-variant rounded-full font-label-md text-xs hover:border-secondary transition-colors">
                      Weekend
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            <div className="md:col-span-9 space-y-4" id="mainContent">
              <article className="bg-white rounded-xl border border-outline-variant/10 custom-shadow p-4 flex flex-col sm:flex-row gap-4 hover:border-secondary/20 transition-all group">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="A professional headshot of a middle-aged female cardiologist wearing a white lab coat and a stethoscope. She is smiling warmly in a bright, modern medical clinic office with soft window lighting. The style is clean, corporate, and minimalist, emphasizing trust and medical expertise with a palette of whites and soft blues."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkRQ1oaC1bdtL7znqmZFm1a9tkE1p3AjiO-6-s5aMnD1tA_aygMhfMTl2LY7OcZ8xWx3pL085ZKrLQmPeKL9K9sr_oEAyJXu_VMZGF0iOZV6tZ_c_Ve-0lbi9MgUza0U2oqA3LZVpmyJvUz5Ve5u7xLDl7oUwUdgtUfHAsKruafP8Ye7B7VbEt0O8cp1X113qGV5Ek6YGJUOyOv2BgH7PaO2nGGo-s2xK10fvWEkx5XCxIqWcQVYoU_TKMzgLQokQ3rVXz-qF2ZKLT"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="font-headline-md text-on-surface group-hover:text-secondary transition-colors">
                          Dr. Sarah Jenkins
                        </h2>
                        <p className="font-body-sm text-on-surface-variant">
                          Senior Cardiologist • 15 Years Exp.
                        </p>
                      </div>
                      <div className="bg-tertiary-fixed/30 text-on-tertiary-fixed-variant px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          star
                        </span>
                        <span className="font-label-md text-xs">
                          4.9 (120 Reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>
                        Central Medical Plaza
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
                        <span className="material-symbols-outlined text-sm">
                          payments
                        </span>
                        $120 - $180
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant/5">
                    <div className="flex flex-col">
                      <span className="font-label-md text-xs text-outline">
                        NEXT AVAILABLE
                      </span>
                      <span className="font-body-md font-bold text-on-surface">
                        Today, 04:30 PM
                      </span>
                    </div>
                    <button className="bg-secondary text-white px-6 py-3 rounded-lg font-label-md hover:shadow-lg transition-all active:scale-95">
                      View Profile
                    </button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-xl border border-outline-variant/10 custom-shadow p-4 flex flex-col sm:flex-row gap-4 hover:border-secondary/20 transition-all group">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="A portrait of a male pediatrician in his late 30s with a friendly expression, wearing a navy blue scrub top. He is positioned in a modern, brightly lit pediatric exam room with colorful, minimalist wall art in the background. The lighting is soft and cheerful, maintaining a sterile but approachable corporate medical aesthetic."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSp3lSPgmLzyUMxuuU774tLVhXlGbVFD-i54lZJyxp9OWoMWci0xOJ44O-SV9iWP08l_W6ZAwzFOsnHHTY96qcW656gpX7ZXDsLKt8LFSd0tBFTKsnEIi1ktrLCJdebdBib92LXdXeaBmBRP3sfOG5SZ_pygfZCXcjJjMbhsdVK3rKaYmdIeIeoJLA2Lhrp3kwLgszWjKjO4FO7GhFKYUSZMAoBt0Q5L1Lk8cWKqdJOsBCxXWgIZ6ud-5q79RjW4kixX_u9Xo8r_Ni"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="font-headline-md text-on-surface group-hover:text-secondary transition-colors">
                          Dr. Michael Chen
                        </h2>
                        <p className="font-body-sm text-on-surface-variant">
                          Pediatrics Specialist • 8 Years Exp.
                        </p>
                      </div>
                      <div className="bg-tertiary-fixed/30 text-on-tertiary-fixed-variant px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          star
                        </span>
                        <span className="font-label-md text-xs">
                          4.8 (85 Reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>
                        Northside Children's Clinic
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
                        <span className="material-symbols-outlined text-sm">
                          payments
                        </span>
                        $90 - $140
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant/5">
                    <div className="flex flex-col">
                      <span className="font-label-md text-xs text-outline">
                        NEXT AVAILABLE
                      </span>
                      <span className="font-body-md font-bold text-on-surface">
                        Tomorrow, 09:00 AM
                      </span>
                    </div>
                    <button className="bg-secondary text-white px-6 py-3 rounded-lg font-label-md hover:shadow-lg transition-all active:scale-95">
                      View Profile
                    </button>
                  </div>
                </div>
              </article>

              <article className="bg-white rounded-xl border border-outline-variant/10 custom-shadow p-4 flex flex-col sm:flex-row gap-4 hover:border-secondary/20 transition-all group">
                <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    data-alt="A close-up professional photograph of a female dermatologist with clear, glowing skin, wearing a sleek grey medical uniform. The background is a high-end, minimalist skin clinic with glass surfaces and soft ambient lighting. The atmosphere is sophisticated and medical-grade, utilizing a neutral color palette with clean corporate vibes."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuArkExB7H_LkRhlLz5srVTvkhoJcwoauolJWLlPQX21XKEio1IHpjm4cGhdRT61wzdnNQ0kRzdFCrnzicCOlkhoNzGtsu62WbtPdGkufRJA-L4_gt74Q5h7laBzXWo2KaXdAAlKNr5dnOeOYmYqYsMQusFlapt_Wcpy_mLsU6jrm1mz7G8HqOt9bCqtDzmMv74JUAa5s2FjznM-utpB81FgT7JPk0mAiaZmZXKHrkTfiJDxxPJeEwdCvNJZKkbtvRPfs117IPpB48Ui"
                  />
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="font-headline-md text-on-surface group-hover:text-secondary transition-colors">
                          Dr. Elena Rodriguez
                        </h2>
                        <p className="font-body-sm text-on-surface-variant">
                          Dermatology • 12 Years Exp.
                        </p>
                      </div>
                      <div className="bg-tertiary-fixed/30 text-on-tertiary-fixed-variant px-3 py-1 rounded-full flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">
                          star
                        </span>
                        <span className="font-label-md text-xs">
                          5.0 (210 Reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
                        <span className="material-symbols-outlined text-sm">
                          location_on
                        </span>
                        Skin &amp; Wellness Center
                      </div>
                      <div className="flex items-center gap-1 text-on-surface-variant font-body-sm">
                        <span className="material-symbols-outlined text-sm">
                          payments
                        </span>
                        $150 - $250
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant/5">
                    <div className="flex flex-col">
                      <span className="font-label-md text-xs text-outline">
                        NEXT AVAILABLE
                      </span>
                      <span className="font-body-md font-bold text-on-surface">
                        Wed, May 24
                      </span>
                    </div>
                    <button className="bg-secondary text-white px-6 py-3 rounded-lg font-label-md hover:shadow-lg transition-all active:scale-95">
                      View Profile
                    </button>
                  </div>
                </div>
              </article>

              <div
                className="hidden h-[600px] w-full rounded-xl overflow-hidden border border-outline-variant/10 relative"
                id="mapContainer"
              >
                <img
                  className="w-full h-full object-cover opacity-80"
                  data-location="New York"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRM3RLbOQG-4hb9TKQ0SI2YN05ATfiG6C4gAc1kVKMROxyapHcFni39Ltxf40iHf9e-AwcpgheIKnGydzF7t0TfHq7dpla15vZFCwhnxnEo1GtcWaxgyETgzSZltvHfcZleal8-xQGY9erUKlARKj5D95imiweTwjGOPd_GPJnAxPVnfnS_UK25fvg0bq5Luj3-Qc8dOUJijV_91ArOox4hkL_nyTqveQxrBu3q0dAmt-ITX3qpxHGcKgTzZ43g2Tnp6MDQJoX6nb2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent flex flex-col items-center justify-center p-xl text-center">
                  <span className="material-symbols-outlined text-[48px] text-secondary mb-4">
                    map
                  </span>
                  <h3 className="font-headline-md text-on-surface">
                    Interactive Map View
                  </h3>
                  <p className="font-body-md text-on-surface-variant max-w-md">
                    Find specialists near your current location or browse by
                    medical district.
                  </p>
                  <button className="mt-4 bg-secondary text-white px-6 py-4 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                    Enable Location Services
                  </button>
                </div>
              </div>

              <nav className="flex items-center justify-center gap-1 pt-lg pb-xl">
                <button
                  className="p-1 text-on-surface-variant hover:text-secondary disabled:opacity-30"
                  disabled
                >
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                </button>
                <button className="w-10 h-10 rounded-lg bg-secondary text-white font-label-md">
                  1
                </button>
                <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md">
                  2
                </button>
                <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md">
                  3
                </button>
                <span className="px-1 text-outline">...</span>
                <button className="w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container font-label-md">
                  12
                </button>
                <button className="p-1 text-on-surface-variant hover:text-secondary">
                  <span className="material-symbols-outlined">
                    chevron_right
                  </span>
                </button>
              </nav>
            </div>
          </div>
        </main>

        <footer className="bg-surface-container-highest border-t border-outline-variant/10 w-full py-8">
          <div className="w-full px-4 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-1">
              <span className="font-headline-md text-headline-md font-bold text-primary">
                MedLink
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                © 2024 MedLink Healthcare Systems. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                HIPAA Compliance
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Contact Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DoctorDiscovery;
