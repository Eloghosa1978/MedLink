import React, { useState } from 'react';
import '../Design.css';

const ContactPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Appointment Inquiry');
  const [message, setMessage] = useState('');

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ fullName, email, subject, message });
    alert('Thank you for contacting MedLink. Your inquiry has been submitted safely.');
  };

  const handleMobileMenuClick = () => {
    alert('Navigation Menu coming soon to your patient portal.');
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* Material Design Icons Link */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== 1. APPLICATION TOP BAR ==================== */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex justify-between items-center px-margin-mobile md:px-margin-desktop h-[64px]">
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary dark:text-primary-fixed-dim" style={{ fontSize: '28px' }}>
            medical_services
          </span>
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">
            MedLink
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-xl">
          <nav className="flex gap-lg">
            <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-md py-xs rounded-lg font-body-md" href="#">Home</a>
            <a className="text-on-surface-variant hover:bg-surface-container-low transition-colors px-md py-xs rounded-lg font-body-md" href="#">Services</a>
            <a className="text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary px-md py-xs font-body-md" href="#">Contact</a>
          </nav>
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border border-outline-variant">
            <img 
              className="w-full h-full object-cover" 
              alt="Medical Office Administrator" 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* Mobile Burger Menu Button */}
        <button 
          onClick={handleMobileMenuClick} 
          className="md:hidden text-on-surface-variant flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>

      {/* Main Container */}
      <main className="pt-[64px] pb-[80px] md:pb-xxl">
        
        {/* ==================== 2. HERO HEADER SECTION ==================== */}
        <section className="relative px-margin-mobile md:px-margin-desktop pt-xl pb-xxl overflow-hidden">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-xxl">
            <div className="flex-1 space-y-md">
              <div className="inline-flex items-center px-md py-xs rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md uppercase tracking-wider">
                Support Center
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface leading-tight">
                We’re here to <span className="text-primary">care</span> for you.
              </h1>
              {/* Added safe string wrap control rules avoiding line breaks breaking layout */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[576px] whitespace-normal break-words">
                Have questions about your health records or need to schedule an urgent consultation? Our dedicated medical support team is available to assist you.
              </p>
            </div>
            
            <div className="hidden md:block flex-1 relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-container opacity-10 rounded-full blur-2xl"></div>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-lg border border-outline-variant">
                <img 
                  className="w-full h-80 object-cover" 
                  alt="Contemporary healthcare clinic reception desk setup" 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 3. ASYMMETRIC CONTENT: FORM & INFRASTRUCTURE ==================== */}
        <section className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-lowest">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
            
            {/* Form Section */}
            <div className="md:col-span-7 bg-white p-md md:p-xl rounded-xl border border-outline-variant shadow-sm">
              <h2 className="font-headline-md text-headline-md mb-xl text-on-surface">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className={`font-label-md text-label-md transition-colors uppercase ${focusedInput === 'name' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                      Full Name
                    </label>
                    <input 
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-md py-base bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body-md" 
                      placeholder="Dr. Sarah Smith"
                      required
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className={`font-label-md text-label-md transition-colors uppercase ${focusedInput === 'email' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                      Email Address
                    </label>
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedInput('email')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-md py-base bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body-md" 
                      placeholder="sarah.smith@medlink.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-xs">
                  <label className={`font-label-md text-label-md transition-colors uppercase ${focusedInput === 'subject' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                    Subject
                  </label>
                  <div className="relative">
                    <select 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      onFocus={() => setFocusedInput('subject')}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full px-md py-base bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body-md appearance-none pr-xl"
                    >
                      <option>Appointment Inquiry</option>
                      <option>Technical Support</option>
                      <option>Billing Questions</option>
                      <option>General Feedback</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-md text-on-surface-variant">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-xs">
                  <label className={`font-label-md text-label-md transition-colors uppercase ${focusedInput === 'message' ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>
                    Your Message
                  </label>
                  <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={() => setFocusedInput('message')}
                    onBlur={() => setFocusedInput(null)}
                    className="w-full px-md py-base bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-body-md resize-none" 
                    placeholder="How can we help you today?" 
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto px-xl py-md bg-primary text-on-primary font-title-lg text-title-lg rounded-lg hover:bg-primary/90 active:scale-98 transition-all flex items-center justify-center gap-md"
                >
                  Submit Inquiry
                  <span className="material-symbols-outlined">send</span>
                </button>
              </form>
            </div>

            {/* Sidebar Contact Info & Map Details */}
            <div className="md:col-span-5 space-y-lg w-full">
              <div className="bg-surface-container-low p-md md:p-lg rounded-xl border border-outline-variant space-y-xl">
                <h3 className="font-headline-md text-headline-md text-primary">Contact Details</h3>
                
                <div className="space-y-lg">
                  <div className="flex items-start gap-md">
                    <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase">Phone Support</p>
                      <p className="font-title-lg text-title-lg text-on-surface">+1 (800) MED-LINK</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Mon-Fri, 8:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-md">
                    <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase">Email Us</p>
                      <p className="font-title-lg text-title-lg text-on-surface">support@medlink.com</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Guaranteed response within 24 hours.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-md">
                    <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-on-surface-variant uppercase">Main Headquarters</p>
                      <p className="font-title-lg text-title-lg text-on-surface">1200 Medical Plaza Dr.</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Boston, MA 02108</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Layout Block Wrapper */}
              <div className="rounded-xl overflow-hidden border border-outline-variant shadow-sm h-64 relative group">
                <div className="absolute inset-0 bg-surface-dim flex items-center justify-center z-0">
                  <div className="text-center">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '48px' }}>map</span>
                    <p className="font-label-md text-label-md mt-base">View on Map</p>
                  </div>
                </div>
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 relative z-10" 
                  alt="Minimalist rendering map pointing to MedLink headquarters in Boston" 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop"
                />
                <div className="absolute bottom-md left-md bg-white px-md py-xs rounded-full border border-outline-variant shadow-md flex items-center gap-base z-20">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="font-label-md text-label-md text-black">Main Clinic Location</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ==================== 4. FAQ ACCORDION SECTION ==================== */}
        <section className="px-margin-mobile md:px-margin-desktop py-xxl bg-background">
          <div className="max-w-3xl mx-auto text-center space-y-xl">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Common Questions</h2>
            
            <div className="grid gap-md text-left">
              <details className="group bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center p-lg cursor-pointer hover:bg-surface-container-low transition-colors list-none">
                  <span className="font-title-lg text-title-lg text-on-surface">How do I access my health records?</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-lg pb-lg text-on-surface-variant font-body-md border-t border-outline-variant/30 pt-md">
                  You can log in to the MedLink Patient Portal using your credentials provided during registration. Once logged in, navigate to the "Health Records" tab to view history, results, and notes.
                </div>
              </details>

              <details className="group bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center p-lg cursor-pointer hover:bg-surface-container-low transition-colors list-none">
                  <span className="font-title-lg text-title-lg text-on-surface">What insurance providers do you accept?</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-lg pb-lg text-on-surface-variant font-body-md border-t border-outline-variant/30 pt-md">
                  We accept most major national providers including BlueCross, Aetna, and UnitedHealth. Please contact our billing office at billing@medlink.com for specific plan verifications.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== 5. GLOBAL FOOTER ==================== */}
      <footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full pt-xxl pb-xl border-t border-outline-variant dark:border-outline mb-[72px] md:mb-0">
        <div className="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="flex flex-col items-center md:items-start gap-xs">
            <span className="font-headline-md text-headline-md text-primary font-bold">MedLink</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center md:text-left">
              © 2026 MedLink Healthcare Solutions. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-lg">
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline font-body-sm" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline font-body-sm" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline font-body-sm" href="#">Contact Support</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4 hover:underline font-body-sm" href="#">Accessibility</a>
          </nav>
        </div>
      </footer>

      {/* ==================== 6. BOTTOM APP NAVIGATION BAR (MOBILE ONLY) ==================== */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full h-[72px] flex justify-around items-center px-base pb-safe bg-surface dark:bg-surface-container-highest shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] z-50 rounded-t-xl">
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high scale-95 duration-150 ease-in-out" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-label-md">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high scale-95 duration-150 ease-in-out" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-md text-label-md">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-secondary-fixed rounded-full px-4 py-1 scale-95 duration-150 ease-in-out" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
          <span className="font-label-md text-label-md">Contact</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline hover:bg-surface-container-high scale-95 duration-150 ease-in-out" href="#">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-md text-label-md">Alerts</span>
        </a>
      </nav>
    </div>
  );
};

export default ContactPage;