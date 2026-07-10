const EmergencyServices = () => {
  return (
    <div className="bg-background text-on-surface font-body-md text-body-md overflow-x-hidden">

<header className="bg-surface border-b border-outline-variant/10 shadow-sm fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary">MedLink</span>
<nav className="hidden md:flex gap-4 ml-6">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Services</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Doctors</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="bg-surface-container-low hover:bg-surface-container-high text-secondary px-6 py-3 rounded-lg font-label-md text-label-md transition-all active:scale-95">Sign In</button>
<button className="bg-error text-on-error px-6 py-3 rounded-lg font-label-md text-label-md transition-all active:scale-95 text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary">Emergency</button>
</div>
</div>
</header>
<main className="pt-[104px] pb-8 px-4 md:px-10 max-w-[1200px] mx-auto">

<section className="mb-6">
<h1 className="font-headline-lg text-headline-lg text-error mb-2">Emergency Assistance</h1>
<p className="text-on-surface-variant font-body-lg text-body-lg">Immediate one-click access to life-saving services and your medical profile.</p>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

<div className="md:col-span-8 group cursor-pointer pr-3 pb-4">
<div className="bento-card h-full bg-error rounded-xl p-6 flex flex-col justify-between text-on-error relative overflow-hidden emergency-glow">
<div className="z-10">
<span className="material-symbols-outlined text-[64px] mb-4" data-icon="emergency_share">emergency_share</span>
<h2 className="font-display-lg text-display-lg mb-1">Call Ambulance</h2>
<p className="font-body-lg text-body-lg opacity-90 max-w-md">Dispatches the nearest emergency response team to your current GPS location immediately.</p>
</div>
<div className="mt-8 z-10 flex items-center gap-3">
<div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-full font-label-md text-label-md flex items-center gap-1">
<span className="material-symbols-outlined" data-icon="location_on">location_on</span>
                            Live: 42.3601° N, 71.0589° W
                        </div>
<div className="bg-white text-error px-8 py-4 rounded-full font-label-md text-label-md shadow-lg group-active:scale-90 transition-transform">
                            Tap to Initiate Call
                        </div>
</div>

<div className="absolute -right-16 -bottom-16 opacity-10">
<span className="material-symbols-outlined text-[320px]" data-icon="ambulance">ambulance</span>
</div>
</div>
</div>

<div className="md:col-span-4 mb-4">
<div className="bento-card h-full bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-secondary" data-icon="medical_information">medical_information</span>
                            Digital Medical ID
                        </h3>
<span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full font-label-md text-label-md">Verified</span>
</div>
<div className="space-y-md">
<div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg mb-4">
<div className="w-16 h-16 rounded-full bg-surface-container-high overflow-hidden border-2 border-white shadow-sm">
<img className="w-full h-full object-cover" data-alt="A professional, clean studio portrait of a mid-40s male patient with a friendly and calm expression. The lighting is bright and even, following a corporate healthcare aesthetic. The background is a soft, out-of-focus medical office in cool blue and white tones. The overall mood is authoritative yet empathetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9ze8XlwY8qZnqRSuRwe4-5LF3AMK4GHjv6PJmxp6WXR-gde1_IZ9HuiUFtD6GmnWSpF7b-E-7g_5dl6PKX5VNoNVaQaxnCnw17TaW-yfhiaVnTpS-ET70vY-g5nRAF3XWTUED8BdVTegGIPjxJUWV4Mc-wpH6BvuecfAfbV3boHqMjaX6HAylmRrbf2vn6dnzV5gZNZnb7b1CzPLyqvZwJBKuO57GEFL4ZgBQDLOLdfZ2KZ7GABri9hw-nuov3ixqGru541JoE6Wn"/>
</div>
<div>
<p className="font-label-md text-label-md text-primary">James Anderson</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">DOB: 12/05/1982</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mb-3">
<div className="p-3 bg-error-container/30 rounded-lg">
<p className="font-label-md text-label-md text-on-error-container flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="bloodtype">bloodtype</span>
                                    Blood Type
                                </p>
<p className="font-headline-md text-headline-md text-on-error-container">O Positive</p>
</div>
<div className="p-3 bg-tertiary-fixed/20 rounded-lg">
<p className="font-label-md text-label-md text-on-tertiary-container flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="height">height</span>
                                    Weight
                                    </p>
<p className="font-headline-md text-headline-md text-on-tertiary-container">82 kg</p>
</div>
</div>
<div className="space-y-xs">
<p className="font-label-md text-label-md text-outline mb-2">CRITICAL ALLERGIES</p>
<div className="flex flex-wrap gap-1 mb-3">
<span className="bg-error/10 text-error px-3 py-1 rounded font-label-md text-label-md">Penicillin</span>
<span className="bg-error/10 text-error px-3 py-1 rounded font-label-md text-label-md">Peanuts</span>
<span className="bg-error/10 text-error px-3 py-1 rounded font-label-md text-label-md">Latex</span>
</div>
</div>
<div className="space-y-xs">
<p className="font-label-md text-label-md text-outline mb-2">EMERGENCY CONTACT</p>
<div className="p-3 border border-outline-variant rounded-lg flex justify-between items-center">
<div>
<p className="font-label-md text-label-md">Sarah Anderson (Wife)</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">+1 (555) 012-3456</p>
</div>
<span className="material-symbols-outlined text-secondary" data-icon="call">call</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 lg:col-span-9 pr-4">
<div className="bento-card bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-full">
<div className="w-full md:w-1/2 p-6 space-y-md">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-primary">Nearby Hospitals</h3>
<button className="text-secondary font-label-md text-label-md flex items-center gap-1">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                                Filter
                            </button>
</div>
<div className="space-y-sm max-h-[400px] overflow-y-auto pr-1">

<div className="p-4 bg-secondary-container/10 border-l-4 border-secondary rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<p className="font-label-md text-label-md text-primary">City General Hospital</p>
<span className="text-on-tertiary-container font-label-md text-label-md">0.8 miles</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Emergency Room: 15 min wait</p>
<div className="flex gap-3">
<button className="bg-secondary text-on-secondary px-4 py-1 rounded-full font-label-md text-label-md">Navigate</button>
<button className="border border-secondary text-secondary px-4 py-1 rounded-full font-label-md text-label-md">Details</button>
</div>
</div>

<div className="p-4 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<p className="font-label-md text-label-md text-primary">St. Jude Medical Center</p>
<span className="text-on-surface-variant font-label-md text-label-md">2.4 miles</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Emergency Room: 45 min wait</p>
</div>

<div className="p-4 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-1">
<p className="font-label-md text-label-md text-primary">Northside Urgent Care</p>
<span className="text-on-surface-variant font-label-md text-label-md">3.1 miles</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Open 24/7 • 5 min wait</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 h-[300px] md:h-auto min-h-[400px] bg-surface-container-high relative">
<div className="w-full h-full bg-cover bg-center" data-alt="A professional medical digital map interface of a city center. The map style is minimalist with a cool color palette of light grays and whites. Several hospital icons are highlighted with pulsing blue and red pins. The aesthetic is clean, high-contrast, and focused on navigation, typical of a modern health application dashboard." data-location="Boston, Massachusetts" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuArrfg1H0fYy0GTekxVfCKoKb7nuqbKei_NOCd6GVKrXJGMHYJzLgC1tPMJFzlV5I8Gun4eNhY0I9b_h6zKSqIzCK0nEjp3XesYKDI3hz3PnSog7aJh6TngQHaWzxd-VdexBYhaDd8BI0GHHSVu21ULsdGT08QTCVgaPGmFSAnF-lRP75nOhltUmzw03DYZLAgJXt3TjlZv2LGlu4j_hTwqmL8BPrw4YgjX1YCZ6ElsRboIOa8LRSvU0GzY-orgCG3O2zfdwygOA4Lq')` }}></div>
<div className="absolute bottom-md left-md right-md bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white">
<p className="font-label-md text-label-md text-primary">Current Location</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">72 Beacon Street, Boston MA</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-12 lg:col-span-3">
<div className="bento-card h-full bg-primary-container text-on-primary-container rounded-xl p-6 flex flex-col">
<h3 className="font-headline-md text-headline-md mb-6">First Aid Guides</h3>
<div className="space-y-md flex-grow">
<a className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all mb-2" href="#">
<span className="font-label-md text-label-md">How to perform CPR</span>
<span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
</a>
<a className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all mb-2" href="#">
<span className="font-label-md text-label-md">Severe Bleeding</span>
<span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
</a>
<a className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all mb-2" href="#">
<span className="font-label-md text-label-md">Chest Pain Actions</span>
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</a>
<a className="flex items-center justify-between p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all mb-2" href="#">
<span className="font-label-md text-label-md">Seizure Protocol</span>
<span className="material-symbols-outlined" data-icon="info">info</span>
</a>
</div>
<button className="mt-8 w-full py-4 border border-white/30 rounded-lg font-label-md text-label-md hover:bg-white/10 transition-colors">
                        View All Protocols
                    </button>
</div>
</div>
</div>
</main>

<footer className="w-full py-8 border-t border-outline-variant/10 bg-surface-container-highest">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col gap-1">
<span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-4">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">HIPAA Compliance</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Contact Support</a>
</div>
</div>
</footer>
</div>
  );
}

export default EmergencyServices;