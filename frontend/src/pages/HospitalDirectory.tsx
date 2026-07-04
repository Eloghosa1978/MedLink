const HospitalDirectory = () => {
  return (
    <div className="bg-background text-on-surface">

<header className="bg-surface docked full-width top-0 border-b border-outline-variant shadow-sm sticky z-50">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary">MedLink</span>
<nav className="hidden md:flex items-center gap-4 ml-6">
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Services</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Doctors</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center bg-surface-container rounded-full px-3 py-1 border border-outline-variant/30">
<span className="material-symbols-outlined text-outline">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-sm w-48 outline-none" placeholder="Search facilities..." type="text"/>
</div>
<button className="text-on-surface font-label-md text-label-md px-4 py-3 hover:bg-surface-container-low transition-all rounded-lg">Sign In</button>
<button className="bg-secondary text-on-secondary font-label-md text-label-md px-4 py-3 rounded-lg active:scale-95 transition-all">Emergency</button>
</div>
</div>
</header>
<main className="max-w-[1200px] mx-auto px-10 py-6">

<div className="mb-8">
<h1 className="font-headline-lg text-headline-lg mb-1">Hospital Directory</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">Find world-className healthcare facilities near you. Filter by specialization, check working hours, and view locations on the map.</p>
</div>

<div className="flex flex-col lg:flex-row gap-4 mb-6 items-end lg:items-center">
<div className="w-full lg:w-auto flex-1">
<label className="font-label-md text-label-md mb-1 block text-on-surface-variant">Filter by Department</label>
<div className="flex gap-1 overflow-x-auto scrollbar-hide pb-1">
<button className="whitespace-nowrap px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md">All Facilities</button>
<button className="whitespace-nowrap px-4 py-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md transition-colors">Cardiology</button>
<button className="whitespace-nowrap px-4 py-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md transition-colors">Pediatrics</button>
<button className="whitespace-nowrap px-4 py-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md transition-colors">Neurology</button>
<button className="whitespace-nowrap px-4 py-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md transition-colors">Oncology</button>
<button className="whitespace-nowrap px-4 py-1 bg-surface-container text-on-surface-variant hover:bg-surface-container-high rounded-full font-label-md text-label-md transition-colors">Orthopedics</button>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-1 px-4 py-3 bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-lg">
<span className="material-symbols-outlined">map</span>
                    View Map
                </button>
<button className="flex items-center gap-1 px-4 py-3 bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-lg">
<span className="material-symbols-outlined">filter_list</span>
                    Sort
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 group cursor-pointer">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden card-lift h-full flex flex-col md:flex-row">
<div className="w-full md:w-1/2 relative h-64 md:h-auto overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="absolute top-3 left-sm z-20 flex gap-1">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full font-label-md text-[12px] uppercase">Level 1 Trauma</span>
<span className="bg-secondary-fixed text-on-secondary-fixed px-3 py-1 rounded-full font-label-md text-[12px] uppercase">Open 24/7</span>
</div>
<div className="w-full h-full" data-alt="A grand, ultra-modern hospital building with glass facades and sleek architecture. The setting is sunset, casting a warm golden light over the landscaping and the pristine white entrance. The style is clean, corporate architectural photography with a high-end medical aesthetic. Deep blues and soft whites dominate the scene." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxTbPFPK00Bf6sgLOi6M57_Zn51K6IIHmpthcHsvs4h1pjY3qmulBcE8O-NqqDqKdoubtb1FCXYIljyCtnnNV4CS_DdVdkNjb5Uw92OU2t2eYWy7BfxAcZ_t7tum0V-vbFrAurZon6yqujb9sSX5VsA-cqa7EFLGQc1l44swqtsiIDZZ2BGVy38tFKosux7CrxNKmfZSF8rv4DpayabMomOpGT3DDK7E_rNLltvRSVXEMCEqQuteCx-DZdqcDRpFl1TLh_0hvd2c36')` }}></div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-3">
<h2 className="font-headline-md text-headline-md text-primary">St. Jude Medical Center</h2>
<div className="flex items-center text-secondary">
<span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>star</span>
<span className="font-label-md ml-1">4.9</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Leading research and care facility specializing in advanced cardiology and neurosurgery. State-of-the-art robotic surgery suites.</p>
<div className="space-y-sm mb-6">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary shrink-0">location_on</span>
<span className="font-body-sm text-body-sm">124 Healthcare Plaza, Central District, Metropolis</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary shrink-0">clinical_notes</span>
<span className="font-body-sm text-body-sm">Departments: Cardiology, Neurology, ICU, Emergency, MRI</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-all">Book Consultation</button>
<button className="px-4 py-3 border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-all">Details</button>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 h-full min-h-[400px]">
<div className="bg-surface-container-high rounded-xl h-full flex flex-col overflow-hidden border border-outline-variant/30 sticky top-24">
<div className="p-4 bg-surface-container-lowest border-b border-outline-variant/20 flex justify-between items-center">
<span className="font-label-md text-label-md">Interactive Coverage</span>
<span className="text-secondary font-body-sm text-body-sm cursor-pointer hover:underline">Expand Map</span>
</div>
<div className="flex-1 relative bg-surface-container-highest">

<img className="w-full h-full object-cover" data-alt="A clean, minimalist digital map of a city center with medical icons marking hospital locations. The map uses a soft grey and blue palette to match the corporate healthcare UI. Pulse animations or subtle glow effects indicate active facilities. Minimalist street lines and green park areas are visible." data-location="New York City" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-UwflvO38p0wWqaiwcBDA1jVybuFrJmrI38-CrVMajvDV9GaPXQ4JLzFCd0ecqps2AaOpz96DucV-3OybiSxGWCgSEBd2yN43YYpBBE_gjf4f8iPMNfYaOzTxYBM7ImJxS9wjAFyl9AmptubFlgoE2WjPU4YTikdapzkYZMEmJsUG3KIlajLWk2l5JDekOOPo8i0xWD6Lr3BE3v2zdZKmy19GIaUP59WjSA6M43kFLhzlf3jBXviOw2WMgbBHyCc1kmu-mlQdEbI7"/>
<div className="absolute bottom-md left-md right-md bg-surface-container-lowest/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant/20 shadow-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined">directions</span>
</div>
<div>
<p className="font-label-md text-label-md">Closest to you</p>
<p className="font-body-sm text-body-sm opacity-70">2.4 miles • 10 min drive</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden card-lift flex flex-col h-full border border-outline-variant/30">
<div className="h-40 bg-cover bg-center" data-alt="Modern pediatric clinic interior with colorful but minimalist decor. Large windows let in bright, natural light. The environment looks sterile but very friendly for children, featuring soft rounded furniture and teal accents. High-quality medical photography style." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6FjQ_eMAvZh483RxoGZT4d4fgNYXjyi08yTLKffJm8gKuPsxGR1Ik0EmAb3pLOXPPYMVLSr67iC6Hw9c6nZexxq7g9dw7Mi865gOx-sDtP5foA47wx34OKIebG-qNOuOrSJ4CRGM9GCMC71OJeOwx6dmf4-HFRxGWbEv3EZ4LdgfiC8D528Z30vujwWCQxcv4q5vU0L6WuwyMOQf_2JBDuvInqp-8FSLgFaw8zr9DgHw_AIvGMHW7ySpt-GSQfewPJ1rm7-8b1Xcp')` }}></div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-headline-md text-[20px] mb-1">Hope Pediatrics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Specialized care for infants and children. Child-friendly environment with 24/7 emergency support.</p>
<div className="flex items-center gap-1 text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="font-label-md text-[13px]">Mon - Sat: 08:00 - 20:00</span>
</div>
<div className="flex gap-1 mt-auto">
<button className="flex-1 bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-all">Directions</button>
</div>
</div>
</div>
</div>
<div className="md:col-span-4">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden card-lift flex flex-col h-full border border-outline-variant/30">
<div className="h-40 bg-cover bg-center" data-alt="High-tech radiology and imaging center with MRI and CT scan equipment. The room is softly lit with cool blue LED lighting and features pristine white surfaces. Professional and sterile atmosphere emphasizing advanced technology." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMLoYgjxUtmQmTQP6i7EzgwWRaw5k-ARMI8ZA0RwXbcfV-zuuS-W-jwW1bZKfbKQpfHtRRSmnc2lY-mbZiOaPyneWwmWVT2Cra2Pl4jWwxLer4P78CW4tEEuSBSjPVwf-4WfecI41MhfSl2YvSvKAPGajKDw4-wXFzuRd-6FCk8UQHZwR2H9r6KoiaWzS98SpXqMc_weegCfTeRIS-8GIJFwdWAbPqg4H7FIpFSUxH-B5Tr6I2s2QkZg5wpfBdIHeFyEI0eNB4zMch')` }}></div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-headline-md text-[20px] mb-1">City Imaging Center</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Premium diagnostic services including 3T MRI, CT scans, and digital mammography with same-day results.</p>
<div className="flex items-center gap-1 text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="font-label-md text-[13px]">Open 24/7</span>
</div>
<div className="flex gap-1 mt-auto">
<button className="flex-1 bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-all">Book Scan</button>
</div>
</div>
</div>
</div>
<div className="md:col-span-4">
<div className="bg-surface-container-lowest rounded-xl overflow-hidden card-lift flex flex-col h-full border border-outline-variant/30">
<div className="h-40 bg-cover bg-center" data-alt="Minimalist reception area of a modern orthopedic clinic. Clean lines, wood textures mixed with medical blue colors. Comfortable waiting area with professional health posters. Bright and airy light-mode feel." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuArmrqWvSGfNmcWl863dgzDLrq1vDYlDuI_88By8_ubbGi-w7xbgvFnXIuyhGaa3O6s6ioV7AGtwpwsVDFnH4ECQlvOmyyOq_8HiDVezH-4oQk4RoXJYjWodEqa089ct8_MbIiwkq_DT6piGg7jlBWdkkGR2W2Q-g002Nx6FffeUjTyoqVyXTFKe1xNASQs_hXvVas3txf5JOmwt7VIdiJiKJTKwfB_PLkdvCAKUQoruAsnWvYMXbriGfo29_36GLY6AWuZXKXGOf_y')` }}></div>
<div className="p-4 flex flex-col flex-1">
<h3 className="font-headline-md text-[20px] mb-1">Westside Orthopedics</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4 flex-1">Comprehensive sports medicine and physical therapy. Expert surgeons for joint replacement and recovery.</p>
<div className="flex items-center gap-1 text-on-surface-variant mb-4">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="font-label-md text-[13px]">Mon - Fri: 09:00 - 18:00</span>
</div>
<div className="flex gap-1 mt-auto">
<button className="flex-1 bg-secondary text-on-secondary py-3 rounded-lg font-label-md text-label-md active:scale-95 transition-all">Call Clinic</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<button className="group flex items-center gap-3 px-8 py-4 bg-surface-container-high rounded-full font-label-md text-label-md hover:bg-outline-variant/20 transition-all">
                Load 12 More Facilities
                <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">expand_more</span>
</button>
</div>
</main>

<footer className="bg-surface-container-highest w-full py-8 border-t border-outline-variant mt-8">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-4">
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">HIPAA Compliance</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>

</div>
  )
}

export default HospitalDirectory;