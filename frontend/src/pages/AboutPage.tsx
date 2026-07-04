import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <div className="bg-background text-on-background font-body-md selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden">
<header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10">
<nav className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop h-[72px] flex items-center justify-between">
<div className="flex items-center">
<span className="font-display-lg text-headline-md font-bold text-primary tracking-tight cursor-pointer">MedLink</span>
</div>
<div className="hidden md:flex items-center gap-6 lg:gap-8">
<a className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Features</a>
<a className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Solutions</a>
<a className="font-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Security</a>
<a className="font-label-md text-secondary font-bold border-b-2 border-secondary pb-1" href="#">About Us</a>
</div>
<div className="flex items-center gap-1 sm:gap-3">
<button className="hidden sm:block font-label-md text-on-surface-variant hover:text-secondary px-3 py-1 transition-colors">Sign In</button>
<button className="bg-secondary text-on-secondary font-label-md px-6 lg:px-6 py-1 lg:py-3 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">Get Started</button>
</div>
</nav>
</header>
<main>
<section className="reveal relative overflow-hidden pt-8 pb-24 lg:pt-32 lg:pb-40">
<div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="space-y-4 lg:pr-12">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-md text-[12px] uppercase tracking-wider">
                        Our Mission
                    </span>
<h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background leading-tight">
                        Advancing healthcare through <span className="text-secondary">connected intelligence</span>
</h1>
<p className="font-body-lg text-on-surface-variant max-w-lg">
                        MedLink is building the digital infrastructure that empowers clinicians to provide better care. We bridge the gap between fragmented data and life-saving insights.
                    </p>
<div className="flex flex-wrap gap-3 pt-2">
<button className="bg-primary text-on-primary font-label-md px-6 py-3 rounded-lg hover:bg-on-background/90 transition-all flex items-center gap-1">
                            View Platform <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<button className="border border-outline-variant text-on-surface font-label-md px-6 py-3 rounded-lg hover:bg-surface-container-low transition-all">
                            Our Values
                        </button>
</div>
</div>
<div className="relative flex justify-center items-center mt-12 lg:mt-0">
<div className="w-full max-w-[560px] aspect-square bg-surface-container-high/50 rounded-3xl overflow-hidden border border-outline-variant/20 shadow-2xl p-3">
<div className="w-full h-full bg-white rounded-2xl shadow-sm border border-outline-variant/10 p-md space-y-4 overflow-hidden">
<div className="flex items-center justify-between border-b border-outline-variant/5 pb-sm">
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-error/20"></div>
<div className="w-3 h-3 rounded-full bg-tertiary-fixed"></div>
<div className="w-3 h-3 rounded-full bg-secondary-fixed"></div>
</div>
<div className="h-4 w-32 bg-surface-container rounded"></div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="h-20 bg-secondary/5 rounded-xl border border-secondary/10"></div>
<div className="h-20 bg-surface-container rounded-xl border border-outline-variant/10"></div>
<div className="h-20 bg-surface-container rounded-xl border border-outline-variant/10"></div>
</div>
<div className="h-48 bg-surface-container-low rounded-2xl relative overflow-hidden border border-outline-variant/10">
<div className="absolute inset-x-0 bottom-0 h-2/3 bg-white p-3 space-y-3">
<div className="h-3 w-full bg-surface-container rounded"></div>
<div className="h-3 w-3/4 bg-surface-container rounded"></div>
<div className="flex gap-1">
<div className="h-8 w-1/3 bg-secondary/20 rounded-lg"></div>
<div className="h-8 w-1/3 bg-secondary/10 rounded-lg"></div>
</div>
</div>
<div className="absolute top-4 right-4 h-12 w-12 bg-secondary rounded-full flex items-center justify-center text-white shadow-lg">
<span className="material-symbols-outlined">analytics</span>
</div>
</div>
</div>
</div>
<div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-12 -left-12 w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>
<section className="reveal bg-primary-container py-24">
<div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
<div className="space-y-1">
<div className="font-display-lg text-headline-md md:text-headline-lg text-primary-fixed">500+</div>
<div className="font-label-md text-on-primary-container uppercase tracking-widest text-[11px]">Partner Hospitals</div>
</div>
<div className="space-y-1">
<div className="font-display-lg text-headline-md md:text-headline-lg text-primary-fixed">1.2M+</div>
<div className="font-label-md text-on-primary-container uppercase tracking-widest text-[11px]">Active Patients</div>
</div>
<div className="space-y-1">
<div className="font-display-lg text-headline-md md:text-headline-lg text-primary-fixed">99.99%</div>
<div className="font-label-md text-on-primary-container uppercase tracking-widest text-[11px]">System Uptime</div>
</div>
<div className="space-y-1">
<div className="font-display-lg text-headline-md md:text-headline-lg text-primary-fixed">HIPAA</div>
<div className="font-label-md text-on-primary-container uppercase tracking-widest text-[11px]">Fully Compliant</div>
</div>
</div>
</div>
</section>
<section className="reveal py-24 lg:py-32 bg-surface">
<div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-start">
<div className="lg:sticky lg:top-32">
<div className="w-12 h-1 bg-secondary mb-4"></div>
<h2 className="font-display-lg text-headline-lg text-on-background">Our Story</h2>
<p className="font-body-md text-on-surface-variant mt-3">Founded in 2018 by clinical experts and data scientists.</p>
</div>
<div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed">
<p>
                        The healthcare industry has long been plagued by siloed data and inefficient workflows. Our founders witnessed firsthand the frustration of clinicians spending more time navigating software than caring for patients. This realization became the catalyst for MedLink.
                    </p>
<p>
                        We began with a simple premise: technology should serve the human connection at the heart of healthcare. By integrating disparate systems into a unified intelligence layer, we empower care teams with the clarity they need to make life-changing decisions.
                    </p>
<p>
                        Today, MedLink serves some of the largest healthcare networks in the country. Our commitment remains the same—leveraging the most advanced B2B SaaS architecture to ensure clinical data is accessible, actionable, and secure.
                    </p>
<div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-secondary mb-3">verified</span>
<h4 className="font-headline-md text-on-surface text-body-lg font-bold mb-xs">Uncompromising Security</h4>
<p className="font-body-sm">Enterprise-grade protection for every data point, ensuring total peace of mind for providers and patients.</p>
</div>
<div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-secondary mb-3">groups</span>
<h4 className="font-headline-md text-on-surface text-body-lg font-bold mb-xs">People-First Philosophy</h4>
<p className="font-body-sm">We design for the human experience, prioritizing empathy and clarity in every interface we build.</p>
</div>
</div>
</div>
</div>
</section>
<section className="reveal py-24 lg:py-32 bg-background">
<div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop">
<div className="text-center mb-20 space-y-3">
<h2 className="font-display-lg text-headline-lg text-on-background">The Pillars of MedLink</h2>
<p className="text-on-surface-variant max-w-xl mx-auto">Foundational principles that guide every feature we ship and every partnership we build.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[32px]">hub</span>
</div>
<h3 className="font-headline-md text-on-surface mb-3">Interoperability</h3>
<p className="font-body-md text-on-surface-variant">Seamlessly connecting legacy EHRs with modern diagnostic tools through our proprietary API layer.</p>
</div>
<div className="group p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[32px]">psychology</span>
</div>
<h3 className="font-headline-md text-on-surface mb-3">Augmented Insight</h3>
<p className="font-body-md text-on-surface-variant">Leveraging machine learning to surface critical trends and anomalies before they become emergencies.</p>
</div>
<div className="group p-6 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
<div className="w-14 h-14 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[32px]">shield</span>
</div>
<h3 className="font-headline-md text-on-surface mb-3">Radical Trust</h3>
<p className="font-body-md text-on-surface-variant">Building with transparency and rigor to exceed the strictest global standards for healthcare data.</p>
</div>
</div>
</div>
</section>
<section className="reveal pb-24 lg:pb-32 px-4 md:px-margin-desktop">
<div className="max-w-[1280px] mx-auto hero-pattern bg-primary-container text-on-primary rounded-[2rem] p-6 lg:p-24 text-center space-y-4 border border-white/5 shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent pointer-events-none"></div>
<h2 className="font-display-lg text-headline-md md:text-headline-lg relative z-10">Ready to transform your health network?</h2>
<p className="text-on-primary-container font-body-lg max-w-2xl mx-auto relative z-10 opacity-90">
                    Join hundreds of leading institutions already using MedLink to streamline operations and improve patient outcomes.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 relative z-10">
<button className="w-full sm:w-auto bg-secondary text-on-secondary font-label-md px-8 py-4 rounded-lg shadow-lg hover:bg-secondary-container active:scale-95 transition-all">
                        Request a Demo
                    </button>
<button className="w-full sm:w-auto border border-white/20 text-on-primary font-label-md px-8 py-4 rounded-lg hover:bg-white/10 transition-all">
                        Talk to Sales
                    </button>
</div>
</div>
</section>
</main>
<footer className="bg-surface-container-highest py-8 border-t border-outline-variant/10">
<div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1 space-y-4">
<span className="font-headline-md text-primary font-bold">MedLink</span>
<p className="font-body-sm text-on-surface-variant">Leading the digital transformation of modern healthcare intelligence.</p>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined text-[18px]">share</span>
</a>
<a className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-all" href="#">
<span className="material-symbols-outlined text-[18px]">public</span>
</a>
</div>
</div>
<div className="space-y-3">
<h4 className="font-label-md text-on-surface">Platform</h4>
<nav className="flex flex-col gap-1 font-body-sm text-on-surface-variant">
<a className="hover:text-secondary transition-colors" href="#">EHR Integration</a>
<a className="hover:text-secondary transition-colors" href="#">Analytics Engine</a>
<a className="hover:text-secondary transition-colors" href="#">Patient Portal</a>
<a className="hover:text-secondary transition-colors" href="#">Security Standards</a>
</nav>
</div>
<div className="space-y-3">
<h4 className="font-label-md text-on-surface">Company</h4>
<nav className="flex flex-col gap-1 font-body-sm text-on-surface-variant">
<a className="hover:text-secondary transition-colors" href="#">Our Story</a>
<a className="hover:text-secondary transition-colors" href="#">Careers</a>
<a className="hover:text-secondary transition-colors" href="#">Press Kit</a>
<a className="hover:text-secondary transition-colors" href="#">Contact</a>
</nav>
</div>
<div className="space-y-3">
<h4 className="font-label-md text-on-surface">Legal</h4>
<nav className="flex flex-col gap-1 font-body-sm text-on-surface-variant">
<a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-secondary transition-colors" href="#">Terms of Service</a>
<a className="hover:text-secondary transition-colors" href="#">HIPAA Compliance</a>
<a className="hover:text-secondary transition-colors" href="#">Data Security</a>
</nav>
</div>
</div>
<div className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop pt-6 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-sm text-on-surface-variant text-center md:text-left">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
<div className="flex gap-6">
<span className="flex items-center gap-1 font-label-md text-[12px] text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Systems Operational
                </span>
</div>
</div>
</footer>
</div>
    </div>
  )
}

export default AboutPage;