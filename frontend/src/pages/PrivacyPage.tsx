import React from 'react';
import '../Design.css';

const PrivacyPage: React.FC = () => {
  const handleBackNavigation = () => {
    // Simply fallback to window history pop state if router navigation hooks are absent
    if (window.history.length > 1) {
      window.history.back();
    } else {
      alert('Redirecting back to dashboard overview...');
    }
  };

  const handleDownloadPdf = () => {
    alert('Preparing your encrypted compliance document download package...');
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* Material Symbols Outlined Icons Global CDN */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== 1. TOP BAR ==================== */}
      <header className="bg-surface fixed top-0 w-full z-50 border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop h-[64px]">
        <div className="flex items-center gap-md">
          <button 
            onClick={handleBackNavigation}
            className="w-10 h-10 flex items-center justify-center hover:bg-surface-container-low active:bg-surface-container-high rounded-full transition-colors focus:outline-none"
            aria-label="Navigate back"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center border border-outline-variant overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            alt="Female medical officer smiling inside modern secure clinic setting" 
            src="https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=150&auto=format&fit=crop"
          />
        </div>
      </header>

      {/* ==================== MAIN CONTENT ARCHITECTURE ==================== */}
      <main className="flex-grow pt-[64px] pb-xxl px-margin-mobile md:px-margin-desktop max-w-2xl mx-auto w-full">
        <div className="mt-xl">
          
          {/* Header Description Section */}
          <section className="mb-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-base">Legal Transparency</h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Your health data privacy is our highest priority. Read how we protect your sensitive medical information under HIPAA guidelines and global encryption protocols.
            </p>
            <div className="mt-md flex gap-sm overflow-x-auto pb-xs scrollbar-none">
              <span className="px-md py-xs bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md whitespace-nowrap">
                Last Updated: Oct 2024
              </span>
              <span className="px-md py-xs bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md whitespace-nowrap">
                v2.4.0 Compliance
              </span>
            </div>
          </section>

          {/* HIPAA Compliance Bento Framework */}
          <section className="grid grid-cols-1 gap-md mb-xxl">
            <div className="bg-surface border border-outline-variant p-lg rounded-xl flex flex-col gap-sm shadow-sm">
              <div className="flex items-center gap-base text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  security
                </span>
                <h3 className="font-title-lg text-title-lg">HIPAA Compliance</h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                We strictly adhere to the Health Insurance Portability and Accountability Act. This ensures all PHI (Protected Health Information) is managed with the highest standard of security, tracking, and confidentiality.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
              <div className="bg-surface border border-outline-variant p-md rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-secondary mb-base">encrypted</span>
                <h4 className="font-label-md text-label-md text-primary mb-xs">Data Encryption</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  AES-256 bit military encryption for records at rest and secure TLS 1.3 for transit.
                </p>
              </div>
              <div className="bg-surface border border-outline-variant p-md rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-secondary mb-base">policy</span>
                <h4 className="font-label-md text-label-md text-primary mb-xs">Audit Logs</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-tight">
                  Every interaction with patient accounts is logged, monitored, and audited 24/7.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Regulatory Policy Paragraphs */}
          <div className="space-y-xl">
            {/* Clause 1: Data Usage */}
            <article className="space-y-md">
              <div className="flex items-center gap-base">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h3 className="font-headline-md text-headline-md text-on-surface">1. Information We Collect</h3>
              </div>
              <div className="space-y-md font-body-md text-body-md text-on-surface-variant leading-relaxed">
                <p>To provide accurate medical management profiles, MedLink collects two standard streams of records:</p>
                <ul className="list-disc pl-md space-y-base">
                  <li>
                    <strong className="text-on-surface">Personal Identity Information:</strong> Name, date of birth, contact details, and insurance provider identifiers.
                  </li>
                  <li>
                    <strong className="text-on-surface">Health Information:</strong> Clinical diagnostic notes, diagnostic photography images, pharmaceutical prescription history, and lab metrics.
                  </li>
                </ul>
                <div className="bg-surface-container-low p-md border-l-4 border-secondary rounded-r-lg">
                  <p className="font-body-sm text-body-sm italic text-on-surface-variant">
                    "We never sell your medical profile parameters or personal data to third-party advertisers or insurance brokers for commercial marketing use cases."
                  </p>
                </div>
              </div>
            </article>

            {/* Clause 2: Patient Legal Rights */}
            <article className="space-y-md">
              <div className="flex items-center gap-base">
                <div className="w-1 h-8 bg-primary rounded-full"></div>
                <h3 className="font-headline-md text-headline-md text-on-surface">2. Your Patient Rights</h3>
              </div>
              <div className="space-y-md">
                <div className="flex items-start gap-md p-md bg-surface border border-outline-variant rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary shrink-0">visibility</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Right to Access</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Request a digital copy of your medical information at any time. We process access pipeline extractions within 48 business hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-md p-md bg-surface border border-outline-variant rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary shrink-0">edit_note</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Right to Amendment</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      If you believe your health history files contain structural inaccuracies, you maintain the legal right to request formal correction protocols.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-md p-md bg-surface border border-outline-variant rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary shrink-0">delete_forever</span>
                  <div>
                    <h4 className="font-title-lg text-title-lg mb-xs text-on-surface">Right to Erasure</h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Subject to local regulatory health authority preservation timeline rules, you can request the erasure of platform authentication records.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* Graphic Image Visualization Anchor */}
            <section className="my-xxl">
              <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
                <img 
                  className="w-full h-full object-cover" 
                  alt="High tech abstract visual representing medical database architecture security" 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex items-end p-lg">
                  <p className="text-white font-headline-md text-headline-md-mobile font-bold">Enterprise-Grade Encryption</p>
                </div>
              </div>
            </section>

            {/* Terms of Service Parameters */}
            <article className="bg-surface-container p-lg rounded-xl border border-outline-variant shadow-sm">
              <h3 className="font-headline-md text-headline-md text-primary mb-md">Terms of Service</h3>
              <div className="space-y-md font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                <p>By registering and creating a medical profile on MedLink, you explicitly agree to:</p>
                <ul className="list-decimal pl-md space-y-base">
                  <li>Provide complete and accurate health parameters during setup profiles.</li>
                  <li>Maintain secure isolation parameters for your user profile access tokens.</li>
                  <li>
                    <span className="font-bold text-on-surface">Not use this service for immediate emergency response prioritization.</span> If you are facing an active medical emergency, please contact 911 or visit the closest urgent trauma environment immediately.
                  </li>
                </ul>
                <button 
                  onClick={handleDownloadPdf}
                  className="mt-md w-full bg-primary text-on-primary py-md rounded-lg font-title-lg text-title-lg hover:bg-primary/95 active:scale-95 transition-all focus:outline-none font-bold"
                >
                  Download Full PDF Terms
                </button>
              </div>
            </article>
          </div>

          {/* Communications & Privacy Office Contact Node */}
          <section className="mt-xxl mb-xl p-lg text-center bg-surface-container-low border border-outline-variant rounded-xl">
            <span className="material-symbols-outlined text-primary text-[48px] mb-xs block" style={{ fontVariationSettings: "'FILL' 1" }}>
              help_center
            </span>
            <h3 className="font-headline-md text-headline-md mb-base text-on-surface">Questions?</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-lg max-w-[480px] mx-auto">
              Our assigned medical privacy administration officers are ready to assist you regarding security questions.
            </p>
            <div className="flex flex-col gap-md">
              <a 
                className="flex items-center justify-center gap-base text-primary font-bold border border-primary py-md rounded-lg hover:bg-surface-container-high transition-colors active:scale-98 transition-transform" 
                href="mailto:privacy@medlink.healthcare"
              >
                <span className="material-symbols-outlined">mail</span>
                Contact Privacy Officer
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* ==================== 5. FOOTER ARCHITECTURE ==================== */}
      <footer className="bg-surface-container-low border-t border-outline-variant w-full pt-xxl pb-xl px-margin-mobile md:px-margin-desktop mt-auto">
  <div className="max-w-[1280px] mx-auto w-full flex flex-col items-center gap-md">
    
    {/* Explicitly add a min-width and normal whitespace behavior to stop vertical collapsing */}
    <div className="flex flex-col items-center text-center gap-xs w-full max-w-sm min-w-[280px]">
      <div className="font-headline-md text-headline-md font-bold text-primary">MedLink</div>
      <p className="font-body-sm text-body-sm text-on-surface-variant whitespace-normal break-words leading-relaxed">
        Connecting care parameters with ultimate server encryption stability since 2024.
      </p>
    </div>
    
    <div className="flex flex-wrap justify-center gap-xl my-sm">
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all" href="#">Privacy Policy</a>
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all" href="#">Terms of Service</a>
      <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all" href="#">Contact Support</a>
    </div>
    
    <div className="pt-lg border-t border-outline-variant w-full text-center">
      <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">
        © 2026 MedLink Healthcare Solutions. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default PrivacyPage;