import React from 'react';
import '../Design.css';

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">

<header className="bg-surface dark:bg-surface-container-low border-b border-outline-variant dark:border-outline-variant/10 shadow-sm dark:shadow-none docked full-width top-0 sticky z-50">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">MedLink</span>
<nav className="hidden md:flex items-center gap-4 ml-6">
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Services</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Doctors</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors px-3 py-1">Sign In</button>
<button className="bg-error text-on-error font-label-md text-label-md px-4 py-1 rounded-full hover:opacity-90 active:scale-95 transition-all shadow-sm">Emergency</button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden pt-20 pb-32 hero-gradient">
<div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 z-10">
<div className="inline-flex items-center gap-1 bg-secondary-container/10 text-secondary px-3 py-1 rounded-full mb-4">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-label-md text-[12px] uppercase tracking-wider">Trusted by 5,000+ Specialists</span>
</div>
<h1 className="font-display-lg text-display-lg mb-4 text-primary leading-[1.1]">
                        Your Health, <br/><span className="text-secondary">Connected.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                        Securely connect with healthcare professionals, manage records, and book appointments in minutes. Experience a human-centric approach to digital medicine.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-secondary text-on-secondary px-6 h-[56px] rounded-xl font-label-md text-body-md shadow-lg shadow-secondary/20 hover:bg-on-secondary-fixed-variant transition-all active:scale-95">
                            Get Started
                        </button>
<button className="bg-surface border border-outline-variant text-on-surface px-6 h-[56px] rounded-xl font-label-md text-body-md hover:bg-surface-container-low transition-all active:scale-95 flex items-center gap-1">
                            Browse Doctors
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="lg:col-span-6 relative">
<div className="relative w-full aspect-square max-w-[540px] mx-auto">

<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-surface-container-lowest">
<img className="w-full h-full object-cover" data-alt="A professional female doctor in a crisp white lab coat smiling warmly, holding a digital tablet in a bright, modern medical clinic. The background features soft, out-of-focus medical equipment and large windows with natural sunlight. The color palette is dominated by clean whites, soft medical blues, and light grays, conveying trust and professional empathy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf0u0Ne4Y_JiTlao5VMrTB5nfgwUcK7tzxJq5lLuL5N_lAZQw-yYZfQ1zxplLoo1UaAwzF14iRo9CQ5RrcqkM6fisgRCwjqoO5mS9y9OY0QPS5eOgM8F9kyHdxbd4V61OmRySuJ__wI2gDtej46adCVAPSiBPnfEbPsRR-2oyc2tSZwVm9_8-OBx6mk8G18Wt45qUrzaoPWLFV7O9WTzkTHeyN-eZik7VQSHapMMA6J8a_VUXAoxOXLsDMj0UGhCVbnW4tiEk1ZTTG"/>
</div>

<div className="absolute -bottom-6 -left-60 glass-card p-6 rounded-xl shadow-xl w-[240px] animate-bounce-slow">
<div className="flex items-center justify-start mb-3">
<span className="font-label-md text-secondary">Heart Rate</span>
<span className="material-symbols-outlined text-secondary">favorite</span>
</div>
<div className="flex items-end gap-1 mb-1">
<span className="text-[32px] font-bold leading-none">72</span>
<span className="font-label-md text-on-surface-variant pb-1">BPM</span>
</div>

<div className="w-full h-8 flex items-end gap-[2px]">
<div className="w-2 bg-on-tertiary-container/30 h-[60%] rounded-full"></div>
<div className="w-2 bg-on-tertiary-container/50 h-[80%] rounded-full"></div>
<div className="w-2 bg-on-tertiary-container h-[70%] rounded-full"></div>
<div className="w-2 bg-on-tertiary-container/40 h-[90%] rounded-full"></div>
<div className="w-2 bg-on-tertiary-container/60 h-[75%] rounded-full"></div>
<div className="w-2 bg-on-tertiary-container h-[85%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 bg-surface-container-lowest border-y border-outline-variant/10">
<div className="max-w-[1200px] mx-auto px-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<div className="flex items-center gap-1 font-headline-md text-outline">
<span className="material-symbols-outlined">corporate_fare</span>
<span className="font-bold">HospitalNet</span>
</div>
<div className="flex items-center gap-1 font-headline-md text-outline">
<span className="material-symbols-outlined">health_metrics</span>
<span className="font-bold">TrustedCare</span>
</div>
<div className="flex items-center gap-1 font-headline-md text-outline">
<span className="material-symbols-outlined">verified</span>
<span className="font-bold">HIPAA Compliant</span>
</div>
<div className="flex items-center gap-1 font-headline-md text-outline">
<span className="material-symbols-outlined">security</span>
<span className="font-bold">MediVault</span>
</div>
<div className="flex items-center gap-1 font-headline-md text-outline">
<span className="material-symbols-outlined">support_agent</span>
<span className="font-bold">24/7 Global</span>
</div>
</div>
</section>

<section className="py-32 bg-surface">
<div className="max-w-[1200px] mx-auto px-10">
<div className="text-center mb-24">
<h2 className="font-headline-lg text-headline-lg mb-3">Comprehensive Digital Care</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Modern healthcare requires modern tools. MedLink provides everything you need to manage your medical journey from a single, secure portal.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-8 bg-surface-container-low rounded-3xl p-6 relative overflow-hidden group border border-outline-variant/5 mr-3 mb-4">
<div className="relative z-10 max-w-xs">
<div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined">videocam</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Secure Telemedicine</h3>
<p className="text-on-surface-variant mb-4">Consult with board-certified specialists from the comfort of your home via HD video calls. Encrypted, private, and convenient.</p>
<a className="text-secondary font-label-md flex items-center gap-1 group-hover:gap-3 transition-all" href="#">
                                Learn about virtual care <span className="material-symbols-outlined">arrow_right_alt</span>
</a>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<img className="w-full h-full object-cover rounded-tl-[3rem]" data-alt="A macro shot of a sleek smartphone displaying a high-resolution video call interface for a telemedicine appointment. The screen shows a professional doctor in focus, while the phone itself is held by a person in a softly lit domestic setting. The aesthetic is extremely clean, corporate, and minimalist, with a cool-toned medical color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-V2vlmIaR81Emn1th26hzTCCrYBMn-a2VESRhwecWukw-GgoxZZ4WA3NiV8LRo7mX6RTUALwQD96i8JQeOkvB6_Jf1Ey-_n11vQe-EcGY_ZfXCQ5MwnemKJnY_EXOYzT76yVUsTf1GMFA8w4i7Bm88R1tHX0dbToiIP4IRhBOlXNOE0OmFjWec9Up1i0S4RDenarfiMS7VE2IUlXDg0UAeLJ6zFoPxIrc48kRh7m21OLdditX_B1wmMpptjRdR4bIk5Cu7E3UfExo"/>
</div>
</div>

<div className="md:col-span-4 bg-white rounded-3xl p-6 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow mb-4">
<div className="w-12 h-12 bg-on-tertiary-container/10 rounded-xl flex items-center justify-center text-on-tertiary-container mb-4">
<span className="material-symbols-outlined">calendar_month</span>
</div>
<h3 className="font-headline-md text-headline-md mb-1">Smart Scheduling</h3>
<p className="text-on-surface-variant">Book and manage appointments in seconds. Sync with your personal calendar and receive automated reminders.</p>
</div>

<div className="md:col-span-4 bg-white rounded-3xl p-6 border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow mr-3">
<div className="w-12 h-12 bg-on-primary-fixed-variant/10 rounded-xl flex items-center justify-center text-on-primary-fixed-variant mb-4">
<span className="material-symbols-outlined">folder_shared</span>
</div>
<h3 className="font-headline-md text-headline-md mb-1">Medical Records</h3>
<p className="text-on-surface-variant">Access your entire health history, lab results, and imaging reports in one centralized, secure location.</p>
</div>

<div className="md:col-span-8 bg-primary-container text-on-primary rounded-3xl p-6 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-on-tertiary-fixed mb-4">
<span className="material-symbols-outlined">psychology</span>
</div>
<h3 className="font-headline-md text-headline-md mb-1 text-white">AI Symptom Checker</h3>
<p className="text-on-primary-container mb-4">Get instant insights into your symptoms using our advanced clinical AI, trained on millions of medical journals.</p>
<button className="bg-white text-primary px-4 py-3 rounded-lg font-label-md hover:bg-surface-variant transition-all">Try AI Checker</button>
</div>
<div className="flex-1 w-full h-48 md:h-full bg-on-primary-fixed-variant/20 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-[80px] opacity-20">biotech</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-surface-container-low overflow-hidden">
<div className="max-w-[1200px] mx-auto px-10">
<div className="flex flex-col lg:flex-row gap-8 items-center">
<div className="lg:w-1/2">
<h2 className="font-headline-lg text-headline-lg mb-6">What patients say about <span className="text-secondary">MedLink</span></h2>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-white font-bold">4.9</div>
<div>
<div className="flex text-on-tertiary-container">
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
<span className="material-symbols-outlined">star</span>
</div>
<p className="font-label-md">Average Rating (20k+ reviews)</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm relative">
<span className="material-symbols-outlined text-secondary/10 text-[120px] absolute -top-4 -left-4">format_quote</span>
<p className="font-body-lg text-body-lg italic mb-6 relative z-10">
                                "MedLink completely changed how I manage my chronic condition. Being able to message my specialist and see my blood work results in one app saves me hours of stress every month. It feels like healthcare finally entered the 21st century."
                            </p>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary/20">
<img className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged man with a friendly, satisfied expression. He is wearing a high-quality navy blue sweater and is set against a clean, softly lit office background. The lighting is flattering and high-key, maintaining the corporate and professional aesthetic of the healthcare brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt1qDamH7RwiBJvN9CiQ01DXzVRNGO3BaV8LSg9EWnhXyLQFCv--G7rfShPlg2hfI-qTOV3XannuUeWl8g8h-y0sidvLZFk3kiE4irZIGtCHyXwa-iUhqJa1-K_m7XqB_YMHNRsQlCiA2a5dfsUst8wkqIVUFTN9-nRtGAjrgEYz_bDMds9H6jBk7ssM5m0ihT-8CewnrpXOPHxf8HDJDNtXSs7RoKEl86MT3Oi0x8RVL8Pdz3tQIlVGeFMDpbRKPl8qV9DayKgNKX"/>
</div>
<div>
<p className="font-bold text-on-surface">David Chen</p>
<p className="text-on-surface-variant text-body-sm">Patient since 2022</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-10">
<div className="max-w-[1200px] mx-auto bg-secondary rounded-[2.5rem] p-8 text-center text-on-secondary relative overflow-hidden">

<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg mb-4">Ready to take control of your health?</h2>
<p className="font-body-lg text-body-lg opacity-90 mb-8 max-w-xl mx-auto">Join thousands of patients who have simplified their medical journey with MedLink's secure platform.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-secondary px-8 h-[64px] rounded-xl font-bold text-body-lg shadow-xl hover:scale-105 transition-transform">Create Free Account</button>
<button className="bg-secondary-container text-white border border-white/20 px-8 h-[64px] rounded-xl font-bold text-body-lg hover:bg-on-secondary-fixed-variant transition-colors">Contact Support</button>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-highest dark:bg-surface-container-low border-t border-outline-variant dark:border-outline-variant/10 w-full py-8">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MedLink</span>
<p className="text-on-surface-variant font-body-sm text-body-sm text-center md:text-left">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-4">
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">HIPAA Compliance</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Contact Support</a>
</div>
</div>
</footer>

</div>
    </div>
  );
};

export default HomePage;