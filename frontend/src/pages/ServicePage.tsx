import React from 'react';
import '../Design.css';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden min-h-screen flex flex-col selection:bg-secondary-container">
      {/* Material Symbols Outlined Icons Global Resource */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== 1. TOP BAR ==================== */}
      <header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-[64px]">
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
            medical_services
          </span>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
          <img 
            className="w-full h-full object-cover" 
            alt="Female healthcare expert smiling inside premium clinic layout" 
            src="https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
          />
        </div>
      </header>

      {/* ==================== MAIN CONTENT HUB ==================== */}
      <main className="pt-[64px] pb-xxl px-margin-mobile md:px-margin-desktop flex-grow w-full max-w-[1280px] mx-auto">
        
        {/* Hero Section */}
        <section className="py-xl grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div className="space-y-md">
            <h2 className="font-display-lg text-display-lg text-on-surface leading-tight">
              Seamless Care from Anywhere
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md max-w-[500px]">
              Access world-class medical expertise through our simplified four-step digital healthcare journey.
            </p>
          </div>
          <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden shadow-sm border border-outline-variant">
            <img 
              className="w-full h-full object-cover"
              alt="Telehealth consultation platform dashboard interface display on mobile device"
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
          </div>
        </section>

        {/* Dynamic Responsive Layout: Step Journey + Bento Grid Combo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
          
          {/* ==================== 2. HOW IT WORKS JOURNEY TRACK ==================== */}
          <section className="lg:col-span-5 space-y-lg">
            <div>
              <h3 className="font-headline-md text-headline-md text-primary">How It Works</h3>
              <p className="text-on-surface-variant text-body-sm font-body-sm">Your pathway to immediate medical clarity.</p>
            </div>
            
            <div className="space-y-lg relative before:absolute before:left-[24px] before:top-4 before:bottom-4 before:w-[2px] before:bg-outline-variant">
              {/* Step 1 */}
              <div className="flex gap-md relative">
                <div className="z-10 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md font-bold">
                  1
                </div>
                <div className="glass-card bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex-1 active:scale-98 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-headline-sm mb-xs block">person_add</span>
                  <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Sign Up</h4>
                  <p className="text-on-surface-variant text-body-sm font-body-sm">Create your secure health profile in under 2 minutes. Your data is encrypted and protected.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-md relative">
                <div className="z-10 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md font-bold">
                  2
                </div>
                <div className="glass-card bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex-1 active:scale-98 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-headline-sm mb-xs block">search</span>
                  <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Find a Specialty</h4>
                  <p className="text-on-surface-variant text-body-sm font-body-sm">Browse through our curated list of certified specialists from general practice to mental health.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-md relative">
                <div className="z-10 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md font-bold">
                  3
                </div>
                <div className="glass-card bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex-1 active:scale-98 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-headline-sm mb-xs block">calendar_month</span>
                  <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Book a Slot</h4>
                  <p className="text-on-surface-variant text-body-sm font-body-sm">Select a date and time that fits your schedule. Real-time availability for instant confirmation.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-md relative">
                <div className="z-10 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md font-bold">
                  4
                </div>
                <div className="glass-card bg-surface-container-lowest border border-outline-variant rounded-xl p-md flex-1 active:scale-98 transition-transform cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-headline-sm mb-xs block">video_chat</span>
                  <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Secure Video Call</h4>
                  <p className="text-on-surface-variant text-body-sm font-body-sm">Connect with your doctor via our encrypted HD video platform safely from any desktop or mobile screen.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 3. SERVICES SECTION (BENTO GRID) ==================== */}
          <section className="lg:col-span-7 space-y-lg w-full">
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-headline-md text-headline-md text-primary">Our Services</h3>
                <p className="text-on-surface-variant text-body-sm font-body-sm">Specialized diagnostic care parameters for every need.</p>
              </div>
              <button className="text-primary font-label-md text-label-md flex items-center gap-xs hover:underline underline-offset-4">
                VIEW ALL <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-md">
              {/* General Practice - Large Card */}
              <div className="col-span-2 glass-card bg-surface-container-low border border-outline-variant rounded-xl p-lg flex flex-col gap-base active:scale-[0.99] transition-transform cursor-pointer hover:shadow-sm">
                <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stethoscope
                  </span>
                </div>
                <h4 className="font-title-lg text-title-lg text-on-surface">General Practice</h4>
                <p className="text-on-surface-variant text-body-sm font-body-sm leading-relaxed">
                  Comprehensive primary care, chronic disease monitoring management, and preventive clinical medical screenings for patients of all age groups.
                </p>
                <div className="mt-xs inline-flex items-center gap-xs text-primary font-label-md text-label-md font-bold">
                  Learn More <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                </div>
              </div>

              {/* Cardiology - Compact Card */}
              <div className="glass-card bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-base active:scale-[0.99] transition-transform cursor-pointer hover:shadow-sm">
                <div className="w-10 h-10 bg-error-container/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-error text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    favorite
                  </span>
                </div>
                <h4 className="font-body-md text-body-md font-bold text-on-surface">Cardiology</h4>
                <p className="text-on-surface-variant text-[12px] leading-relaxed">
                  Expert cardiac monitoring consultations and preventative cardiovascular planning.
                </p>
              </div>

              {/* Pediatrics - Compact Card */}
              <div className="glass-card bg-surface-container-low border border-outline-variant rounded-xl p-md flex flex-col gap-base active:scale-[0.99] transition-transform cursor-pointer hover:shadow-sm">
                <div className="w-10 h-10 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-headline-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    child_care
                  </span>
                </div>
                <h4 className="font-body-md text-body-md font-bold text-on-surface">Pediatrics</h4>
                <p className="text-on-surface-variant text-[12px] leading-relaxed">
                  Compassionate continuous care programs for infant, pediatric and adolescent health.
                </p>
              </div>

              {/* Mental Health - Large Card */}
              <div className="col-span-2 glass-card bg-surface-container-low border border-outline-variant rounded-xl p-lg flex items-center gap-md active:scale-[0.99] transition-transform cursor-pointer hover:shadow-sm">
                <div className="w-12 h-12 bg-primary-container/20 rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
                    psychology
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-title-lg text-title-lg text-on-surface">Mental Health</h4>
                  <p className="text-on-surface-variant text-body-sm font-body-sm leading-relaxed">
                    Dedicated telehealth therapy, psychiatric wellness screening support with fully licensed professional counselors.
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* ==================== 4. CALL TO ACTION SECTION ==================== */}
        <section className="bg-primary text-on-primary rounded-2xl p-xl my-xxl text-center overflow-hidden relative shadow-lg">
          <div className="relative z-10 max-w-[600px] mx-auto space-y-md">
            <h3 className="font-headline-md text-headline-md leading-tight">Ready to get started?</h3>
            <p className="text-on-primary/80 text-body-sm font-body-sm leading-relaxed">
              Join thousands of patient profiles receiving top-tier comprehensive care from world-class medical specialists today.
            </p>
            <button className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-xl py-md rounded-full shadow-md hover:bg-secondary-container/90 active:scale-95 transition-all uppercase tracking-wider font-bold">
              BOOK YOUR FIRST CONSULTATION
            </button>
          </div>
          {/* Decorative design nodes */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        </section>

      </main>

      {/* ==================== 5. FOOTER ARCHITECTURE ==================== */}
      <footer className="bg-surface-container-low border-t border-outline-variant w-full pt-xxl pb-xl px-margin-mobile md:px-margin-desktop mt-auto mb-[72px] md:mb-0">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-md w-full">
          <div className="flex items-center gap-base">
            <span className="material-symbols-outlined text-primary text-headline-md" style={{ fontVariationSettings: "'FILL' 1" }}>
              medical_services
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
          </div>
          <div className="flex flex-wrap justify-center gap-lg">
            <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Contact Support</a>
            <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-primary transition-colors" href="#">Accessibility</a>
          </div>
          <p className="text-on-surface-variant font-body-sm text-body-sm opacity-60">
            © 2026 MedLink Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ==================== 6. BOTTOM NAVIGATION (MOBILE ONLY LAYOUT) ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] bg-surface shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] z-50 flex justify-around items-center px-base pb-safe rounded-t-xl md:hidden">
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-label-md">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-md text-label-md">Schedule</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-95 transition-transform">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
          <span className="font-label-md text-label-md">Patients</span>
        </a>
        <a href="#" className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-md text-label-md">Alerts</span>
        </a>
      </nav>
    </div>
  );
};

export default ServicesPage;