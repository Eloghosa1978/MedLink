import '../Design.css';

const HomePage = () => {
  return (
    <div>
      {/* Material Icons Stylesheet */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen w-full relative">
        
        {/* ==================== 1. TOP NAVIGATION BAR ==================== */}
        <header className="bg-background dark:bg-on-background fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-mobile md:px-margin-desktop py-base">
          <div className="flex items-center gap-base">
            <span
              className="material-symbols-outlined text-primary dark:text-primary-fixed-dim text-headline-md"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              medical_services
            </span>
            <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
              MedLink
            </h1>
          </div>
          <div className="hidden md:flex gap-lg">
            <nav className="flex gap-md items-center">
              <a
                className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary py-1"
                href="#"
              >
                Home
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1 rounded"
                href="#"
              >
                Find Care
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low transition-colors px-2 py-1 rounded"
                href="#"
              >
                How It Works
              </a>
            </nav>
          </div>
          <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
            <img
              className="w-full h-full object-cover"
              alt="User avatar preset"
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
            />
          </div>
        </header>

        <main className="pt-[64px] pb-[80px] md:pb-0">
          
          {/* ==================== 2. HERO SECTION ==================== */}
          <section className="relative min-h-[751px] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
            </div>
            <div className="relative z-10 text-center max-w-[896px] mx-auto flex flex-col items-center gap-xl">
              <div className="inline-flex items-center gap-xs px-md py-base bg-secondary-container text-on-secondary-container rounded-full">
                <span className="material-symbols-outlined text-[16px]">
                  health_and_safety
                </span>
                <span className="font-label-md text-label-md">
                  Trusted by 10k+ Rural Families
                </span>
              </div>
              <h2 className="font-display-lg text-display-lg text-on-surface text-balance leading-tight">
                Bridging the Healthcare Gap for{" "}
                <span className="text-primary italic">Rural Communities</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px]">
                Connect with expert doctors from comfort of home. No more long drives or waiting weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
                <button className="bg-primary text-on-primary font-title-lg text-title-lg px-xl py-md rounded-xl hover:opacity-90 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-base">
                  Find a Doctor
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="bg-surface-container-lowest border border-primary text-primary font-title-lg text-title-lg px-xl py-md rounded-xl hover:bg-surface-container transition-all active:scale-95 flex items-center justify-center gap-base">
                  Join as a Provider
                </button>
              </div>
              <div className="mt-xxl grid grid-cols-2 md:grid-cols-4 gap-md w-full">
                <div className="glass-card p-lg rounded-xl text-left shadow-sm bg-surface-container-low/60 backdrop-blur-md">
                  <p className="text-primary font-bold text-headline-md">24/7</p>
                  <p className="text-on-surface-variant font-label-md">Emergency Access</p>
                </div>
                <div className="glass-card p-lg rounded-xl text-left shadow-sm bg-surface-container-low/60 backdrop-blur-md">
                  <p className="text-primary font-bold text-headline-md">150+</p>
                  <p className="text-on-surface-variant font-label-md">Specialists</p>
                </div>
                <div className="glass-card p-lg rounded-xl text-left shadow-sm bg-surface-container-low/60 backdrop-blur-md">
                  <p className="text-primary font-bold text-headline-md">98%</p>
                  <p className="text-on-surface-variant font-label-md">Patient Satisfaction</p>
                </div>
                <div className="glass-card p-lg rounded-xl text-left shadow-sm bg-surface-container-low/60 backdrop-blur-md">
                  <p className="text-primary font-bold text-headline-md">15m</p>
                  <p className="text-on-surface-variant font-label-md">Avg. Wait Time</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 3. HOW IT WORKS SECTION ==================== */}
          <section className="py-xxl bg-surface px-margin-mobile md:px-margin-desktop block w-full">
            <div className="max-w-[1280px] mx-auto w-full">
              <div className="mb-xl w-full text-left">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-base block w-full">
                  How It Works
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant block w-full max-w-[576px]">
                  Three simple steps to getting the care you deserve without leaving your doorstep.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-lg w-full">
                {/* Step 1 */}
                <div className="group relative bg-surface-container-lowest border border-outline-variant p-xl rounded-xl transition-all hover:shadow-md">
                  <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-lg">
                    <span className="material-symbols-outlined text-headline-md">
                      event_available
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg mb-base">1. Book</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                    Select a specialist and schedule a video consultation at a time that works for you.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="UI for booking medical appointments"
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group relative bg-surface-container-lowest border border-outline-variant p-xl rounded-xl transition-all hover:shadow-md">
                  <div className="w-12 h-12 bg-secondary-container text-on-secondary-container rounded-lg flex items-center justify-center mb-lg">
                    <span className="material-symbols-outlined text-headline-md">
                      video_chat
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg mb-base">2. Connect</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                    Meet your doctor via our secure, high-definition video platform.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Patient on video chat with physician"
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=500&auto=format&fit=crop"
                    />
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group relative bg-surface-container-lowest border border-outline-variant p-xl rounded-xl transition-all hover:shadow-md">
                  <div className="w-12 h-12 bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center justify-center mb-lg">
                    <span className="material-symbols-outlined text-headline-md">
                      vital_signs
                    </span>
                  </div>
                  <h4 className="font-title-lg text-title-lg mb-base">3. Recover</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-xl">
                    Receive your digital prescription, treatment plan, and follow-up care instructions instantly.
                  </p>
                  <div className="aspect-video rounded-lg overflow-hidden bg-surface-container">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt="Prescription summary shown on smartphone display"
                      src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=500&auto=format&fit=crop"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 4. TRUST / VALUE PROPOSITION SECTION ==================== */}
          <section className="py-xxl px-margin-mobile md:px-margin-desktop">
            <div className="max-w-[1280px] mx-auto bg-surface-container-low/50 backdrop-blur-md rounded-xxl p-xl md:p-xxl flex flex-col md:flex-row items-center gap-xxl border border-outline-variant">
              <div className="flex-1 space-y-md">
                <h3 className="font-headline-lg text-headline-lg text-primary">
                  Your health, our priority.
                </h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  We partner with top-tier medical institutions to ensure geographical distance never stands in the way.
                </p>
                <ul className="space-y-base">
                  <li className="flex items-center gap-base font-body-md text-body-md">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    Secure encrypted medical records
                  </li>
                  <li className="flex items-center gap-base font-body-md text-body-md">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    Board-certified specialists only
                  </li>
                  <li className="flex items-center gap-base font-body-md text-body-md">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    Direct pharmacy integration
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full max-w-md">
                <div className="relative">
                  <div className="absolute -inset-2 bg-primary/10 blur-xl rounded-full"></div>
                  <img
                    className="relative rounded-xl shadow-xl w-full"
                    alt="Futuristic medical dashboard interface visualization"
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* ==================== 5. FOOTER ==================== */}
        <footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full pt-xxl pb-xl border-t border-outline-variant">
          <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md">
            <div className="flex flex-col gap-xs items-center md:items-start">
              <div className="flex items-center gap-base">
                <span
                  className="material-symbols-outlined text-primary text-headline-md"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  medical_services
                </span>
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  MedLink
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-base">
                © 2026 MedLink Healthcare Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-md">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Terms of Service</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Contact Support</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline" href="#">Accessibility</a>
            </div>
          </div>
        </footer>

        {/* ==================== 6. MOBILE NAVIGATION BAR ==================== */}
        <nav className="md:hidden fixed bottom-0 left-0 w-full h-[72px] bg-surface dark:bg-surface-container-highest flex justify-around items-center px-base pb-safe z-50 rounded-t-xl shadow-[0px_-4px_12px_rgba(9,30,66,0.08)]">
          <a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-full px-4 py-1 scale-95 duration-150 ease-in-out" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
            <span className="font-label-md text-label-md">Home</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high transition-colors" href="#">
            <span className="material-symbols-outlined">search</span>
            <span className="font-label-md text-label-md">Find Care</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high transition-colors" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="font-label-md text-label-md">Book</span>
          </a>
          <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high transition-colors" href="#">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-md text-label-md">Profile</span>
          </a>
        </nav>

        {/* Mobile Floating Action Button */}
        <button className="md:hidden fixed bottom-[88px] right-margin-mobile bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 active:scale-90 transition-all z-40">
          <span className="material-symbols-outlined text-2xl">add</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;