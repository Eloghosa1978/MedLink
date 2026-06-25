import '../Design.css';

const AboutPage = () => {
  return (
    <div>
      {/* Material Icons Stylesheet */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div className="bg-background text-on-background selection:bg-secondary-container min-h-screen w-full relative">
        
        {/* ==================== 1. TOP APPLICATION BAR ==================== */}
        <header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50">
          <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-base">
            <div className="flex items-center gap-base">
              <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                medical_services
              </span>
              <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
                MedLink
              </h1>
            </div>
            <div className="h-10 w-10 rounded-full border border-outline-variant overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Professional portrait of a medical practitioner"
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
              />
            </div>
          </div>
        </header>

        <main className="pt-[64px] pb-[80px] md:pb-xxl">
          
          {/* ==================== 2. HERO SECTION: MISSION ==================== */}
          <section className="relative px-margin-mobile md:px-margin-desktop pt-xl pb-xxl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-container/10 rounded-full blur-3xl -ml-40 -mb-40"></div>
            </div>
            
            <div className="relative z-10 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
              <div className="space-y-md">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-container/10 text-primary font-label-md text-label-md tracking-wider uppercase">
                  Our Mission
                </div>
                <h2 className="font-display-lg text-display-lg text-on-surface leading-tight">
                  Solving rural healthcare gaps with compassion and clarity.
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-[600px]">
                  At MedLink, we believe that your zip code shouldn't determine your health outcomes. We're building the digital bridge to connect underserved communities with world-class medical expertise.
                </p>
              </div>
              <div className="w-full">
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
                  <img
                    className="w-full h-full object-cover"
                    alt="Rural countryside clinic during golden hour"
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 3. VISION SECTION: ACCESS ==================== */}
          <section className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low">
            <div className="max-w-[1280px] mx-auto space-y-lg">
              <div className="flex items-center gap-base">
                <span className="material-symbols-outlined text-secondary text-headline-md">visibility</span>
                <h3 className="font-title-lg text-title-lg text-on-surface">Our Vision</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                {/* Bento Card 1 */}
                <div className="glass-card p-md md:p-lg bg-surface-container-lowest/60 border border-outline-variant rounded-xl space-y-sm shadow-sm transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <span className="material-symbols-outlined text-headline-md">balance</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg">Equity in Access</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    We leverage telehealth and distributed diagnostics to ensure that high-quality care is available to everyone, regardless of distance.
                  </p>
                </div>

                {/* Bento Card 2 */}
                <div className="glass-card p-md md:p-lg bg-surface-container-lowest/60 border border-outline-variant rounded-xl space-y-sm shadow-sm transition-all hover:shadow-md">
                  <div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined text-headline-md">favorite</span>
                  </div>
                  <h4 className="font-title-lg text-title-lg">Human-Centric Tech</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Technology should disappear into the background. We build tools that prioritize the patient-doctor relationship, not data entry.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 4. EXPERTS SECTION ==================== */}
          <section className="px-margin-mobile md:px-margin-desktop py-xxl space-y-xl">
            <div className="max-w-[1280px] mx-auto">
              <div className="text-center space-y-base mb-xl">
                <h3 className="font-headline-md text-headline-md text-on-surface">Meet Our Experts</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">The compassionate minds driving change.</p>
              </div>
              
              <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 overflow-x-auto md:overflow-x-visible pb-md gap-md snap-x -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
                {/* Team Member 1 */}
                <div className="flex-none w-72 md:w-auto snap-center bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 relative">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dr. Sarah Smith, General Practitioner"
                      src="https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=400&auto=format&fit=crop"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-md">
                      <p className="text-white font-title-lg text-title-lg">Dr. Sarah Smith</p>
                      <p className="text-white/80 font-label-md text-label-md">General Practitioner</p>
                    </div>
                  </div>
                  <div className="p-md">
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                      "Rural healthcare isn't a challenge to be solved; it's a promise to be kept. We are here to listen."
                    </p>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="flex-none w-72 md:w-auto snap-center bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-64 relative">
                    <img
                      className="w-full h-full object-cover"
                      alt="Marcus Chen, Chief Operations Officer"
                      src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-md">
                      <p className="text-white font-title-lg text-title-lg">Marcus Chen</p>
                      <p className="text-white/80 font-label-md text-label-md">Chief Operations Officer</p>
                    </div>
                  </div>
                  <div className="p-md">
                    <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed">
                      "Efficiency in logistics means more time for care. We're bridging the gap through operational excellence."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 5. COMMUNITY IMPACT ==================== */}
          <section className="px-margin-mobile md:px-margin-desktop py-xl space-y-lg">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
              <div className="space-y-md">
                <h3 className="font-headline-md text-headline-md text-on-surface border-l-4 border-secondary pl-md">
                  Community Impact
                </h3>
                <div className="space-y-md">
                  <div className="flex items-start gap-md p-md bg-surface-container rounded-xl">
                    <div className="flex-none w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary text-headline-md">groups</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">50,000+ Patients</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Connected to vital care across three states and 120 rural counties.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-md p-md bg-surface-container rounded-xl">
                    <div className="flex-none w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-secondary text-headline-md">speed</span>
                    </div>
                    <div>
                      <h4 className="font-title-lg text-title-lg text-on-surface">40% Faster Response</h4>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Reduction in emergency wait times through our remote triage system.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full rounded-xl overflow-hidden h-64 border border-outline-variant relative shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  alt="Community members gathering for a health fair"
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=600&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </section>
        </main>

        {/* ==================== 6. FOOTER ==================== */}
        <footer className="w-full pt-xxl pb-xl bg-surface-container-low dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline mb-[72px] md:mb-0">
          <div className="w-full max-w-[1280px] mx-auto px-margin-mobile flex flex-col md:flex-row md:justify-between items-center gap-md text-center md:text-left">
            <div className="flex items-center gap-base">
              <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                medical_services
              </span>
              <span className="font-headline-md text-headline-md text-primary font-bold">MedLink</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-md">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">Privacy Policy</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">Terms of Service</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors hover:underline underline-offset-4" href="#">Contact Support</a>
            </nav>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              © 2026 MedLink Healthcare Solutions. All rights reserved.
            </p>
          </div>
        </footer>

        {/* ==================== 7. BOTTOM NAVIGATION BAR (MOBILE) ==================== */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-surface dark:bg-surface-container-highest flex justify-around items-center px-base pb-safe z-50 rounded-t-xl shadow-[0px_-4px_12px_rgba(9,30,66,0.08)]">
          <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md text-label-md">Home</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-label-md text-label-md">Schedule</span>
          </button>
          <button className="flex flex-col items-center justify-center text-primary dark:text-primary-fixed-dim bg-secondary-container dark:bg-on-secondary-fixed-variant rounded-full px-4 py-1 scale-95 duration-150">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            <span className="font-label-md text-label-md">Patients</span>
          </button>
          <button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high transition-all active:scale-95 duration-150">
            <span className="material-symbols-outlined">notifications</span>
            <span className="font-label-md text-label-md">Alerts</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default AboutPage;