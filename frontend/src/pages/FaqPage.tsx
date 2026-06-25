import React, { useState } from 'react';
import '../Design.css';

interface FaqItem {
  id: number;
  icon: string;
  title: string;
  content: string;
}

const FaqPage: React.FC = () => {
  // Search query state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Track open accordion index state (null means all closed)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  // Search Bar Focus State
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Hardcoded FAQ dataset
  const faqData: FaqItem[] = [
    {
      id: 1,
      icon: 'security',
      title: 'Is my data secure?',
      content: 'Your privacy is our highest priority. MedLink uses end-to-end AES-256 encryption for all data transmissions and is fully HIPAA and SOC2 compliant. Your medical records are stored in geographically redundant, secure cloud environments with strict access controls.'
    },
    {
      id: 2,
      icon: 'devices',
      title: 'What technology do I need?',
      content: 'You only need a smartphone, tablet, or computer with a working camera, microphone, and a stable internet connection. Our platform is accessible via any modern web browser, or through our native iOS and Android applications for the best experience.'
    },
    {
      id: 3,
      icon: 'videocam',
      title: 'How do virtual visits work?',
      content: "After scheduling, you'll receive a secure link via email or SMS. Simply click the link at your appointment time to join a virtual waiting room. Your provider will admit you to a high-definition video session where you can discuss symptoms, share photos, and receive prescriptions."
    },
    {
      id: 4,
      icon: 'payments',
      title: 'Insurance coverage?',
      content: 'We partner with major insurance carriers including Blue Cross, Aetna, Cigna, and UnitedHealthcare. Coverage varies by plan, but many virtual visits are covered at a similar co-pay rate to in-person office visits. You can verify your specific coverage in the billing section.'
    }
  ];

  // Filter items dynamically based on search string
  const filteredFaqs = faqData.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md antialiased min-h-screen flex flex-col">
      {/* Material Design Icons Link */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== 1. TOP BAR ==================== */}
      <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-[64px] sticky top-0 z-50">
        <div className="flex items-center gap-base">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
            medical_services
          </span>
          <h1 className="font-headline-md text-headline-md font-bold text-primary">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            alt="Female doctor clinical professional portrait" 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=150&auto=format&fit=crop"
          />
        </div>
      </header>

      {/* ==================== MAIN CENTERED HUB ==================== */}
      <main className="flex-grow w-full max-w-[576px] mx-auto px-margin-mobile py-xl pb-[96px] md:pb-xl">
        
        {/* Hero Segment */}
        <section className="mb-xl text-center">
          <div className="inline-flex items-center px-base py-xs bg-secondary-container text-on-secondary-container rounded-full mb-md">
            <span className="material-symbols-outlined text-[16px] mr-1">help_center</span>
            <span className="font-label-md text-label-md">Support Center</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-sm">How can we help?</h2>
          <p className="text-on-surface-variant font-body-md text-body-md max-w-[480px] mx-auto whitespace-normal break-words">
            Find answers to common questions about your care, technology, and security.
          </p>
        </section>

        {/* Dynamic Search Bar (Replaces raw scale script) */}
        <div className={`mb-xl relative transition-transform duration-200 ${isSearchFocused ? 'scale-[1.02]' : 'scale-100'}`}>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="w-full h-12 pl-xl pr-md bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
            placeholder="Search for a topic..."
          />
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-md">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = activeIndex === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
                >
                  <button 
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between p-md text-left focus:outline-none hover:bg-surface-container-low/40 transition-colors"
                  >
                    <div className="flex items-center gap-md pr-sm">
                      <div className="w-8 h-8 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">{faq.icon}</span>
                      </div>
                      <span className="font-title-lg text-title-lg text-on-surface leading-snug">{faq.title}</span>
                    </div>
                    <span className={`material-symbols-outlined text-outline transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      expand_more
                    </span>
                  </button>
                  
                  {/* Smooth dynamic height container max-height animation */}
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] border-t border-outline-variant/30' : 'max-h-0'}`}>
                    <div className="p-md text-on-surface-variant font-body-md leading-relaxed whitespace-normal break-words bg-surface-container-lowest">
                      {faq.content}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-xl bg-surface-container-low/40 border border-dashed border-outline-variant rounded-xl">
              <span className="material-symbols-outlined text-outline text-[40px]">search_off</span>
              <p className="font-body-md text-on-surface-variant mt-sm">No matching topics found.</p>
            </div>
          )}
        </div>

        {/* Emergency Call-to-Action Card */}
        <section className="mt-xxl p-lg bg-primary text-on-primary rounded-xl shadow-lg relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[160px]">medical_information</span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-base relative z-10">Still have questions?</h3>
          <p className="font-body-md text-body-md mb-xl opacity-90 relative z-10 leading-relaxed">
            Our patient advocacy team is available 24/7 to help you navigate your care journey.
          </p>
          <div className="flex flex-col gap-base relative z-10">
            <button className="w-full py-md bg-white text-primary font-bold rounded-lg hover:bg-surface-container-high transition-colors flex items-center justify-center gap-base active:opacity-85 shadow-sm">
              <span className="material-symbols-outlined">chat</span>
              Live Chat Now
            </button>
            <button className="w-full py-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-colors active:opacity-85">
              Contact Support
            </button>
          </div>
        </section>
      </main>

      {/* ==================== 5. FOOTER ==================== */}
      <footer className="bg-surface-container-low border-t border-outline-variant w-full pt-xxl pb-xl mt-auto mb-[72px] md:mb-0">
        <div className="w-full max-w-[1280px] mx-auto px-margin-mobile flex flex-col items-center gap-md">
          <div className="flex items-center gap-base mb-base">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              medical_services
            </span>
            <span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
          </div>
          <div className="flex flex-wrap justify-center gap-xl mb-base">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Contact Support</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Accessibility</a>
          </div>
          <p className="text-on-surface-variant font-body-sm text-body-sm text-center">
            © 2026 MedLink Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ==================== 6. MOBILE ONLY APP NAVIGATION BAR ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] flex justify-around items-center px-base pb-safe bg-surface shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] rounded-t-xl z-50 md:hidden">
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="font-label-md text-label-md mt-1">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-md text-label-md mt-1">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">groups</span>
          <span className="font-label-md text-label-md mt-1">Patients</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
          <span className="material-symbols-outlined">notifications</span>
          <span className="font-label-md text-label-md mt-1">Alerts</span>
        </a>
      </nav>
    </div>
  );
};

export default FaqPage;