import React from 'react';

const FindPharmacy: React.FC = () => {
  return (
    <div>
    <div className="bg-background text-on-surface min-h-screen flex flex-col">
<header className="bg-surface dark:bg-surface-container-low border-b border-outline-variant dark:border-outline-variant/10 shadow-sm dark:shadow-none docked full-width top-0 z-50 sticky">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">MedLink</span>
<nav className="hidden md:flex gap-4 ml-6">
<a className="text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary dark:border-secondary-fixed pb-1 font-label-md text-label-md" href="#">Services</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Doctors</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden lg:block group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-8 pr-4 py-1 rounded-full bg-surface-container border-none focus:ring-2 focus:ring-secondary w-64 transition-all" placeholder="Search pharmacies..." type="text"/>
</div>
<button className="bg-primary text-on-primary px-4 py-1 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">Sign In</button>
<button className="bg-error text-on-error px-4 py-1 rounded-full font-label-md text-label-md hover:opacity-90 transition-all active:scale-95">Emergency</button>
</div>
</div>
</header>
<main className="flex-grow flex flex-col md:flex-row h-[calc(100vh-72px)] overflow-hidden">
<section className="w-full md:w-[450px] lg:w-[500px] bg-surface flex flex-col border-r border-outline-variant overflow-hidden">
<div className="p-4 border-b border-outline-variant bg-surface-container-lowest">
<h1 className="font-headline-md text-headline-md mb-1">Pharmacy Directory</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">Find and manage prescriptions at 12 partner locations near you.</p>
<div className="flex gap-1 overflow-x-auto pb-1 no-scrollbar">
<button className="flex items-center gap-1 px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]" style={{fontVariationSettings: 'FILL 1' }}>filter_list</span> Filters
                    </button>
<button className="flex items-center gap-1 px-4 py-1 bg-surface-container-high rounded-full font-label-md text-label-md hover:bg-outline-variant transition-colors">
                        Open Now
                    </button>
<button className="flex items-center gap-1 px-4 py-1 bg-surface-container-high rounded-full font-label-md text-label-md hover:bg-outline-variant transition-colors">
                        24-Hour
                    </button>
<button className="flex items-center gap-1 px-4 py-1 bg-surface-container-high rounded-full font-label-md text-label-md hover:bg-outline-variant transition-colors">
                        Drive-Thru
                    </button>
</div>
</div>
<div className="flex-grow overflow-y-auto custom-scrollbar p-4 space-y-4">
<div className="pharmacy-card bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group relative cursor-pointer">
<div className="flex justify-between items-start mb-1">
<div>
<span className="inline-flex items-center px-1 py-[2px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-[10px] font-bold uppercase tracking-wider mb-1">Verified</span>
<h3 className="font-headline-md text-[18px] text-primary">Downtown Health Pharmacy</h3>
</div>
<span className="font-label-md text-label-md text-on-tertiary-container flex items-center">
<span className="material-symbols-outlined mr-[2px] text-[16px]">distance</span> 0.4 mi
                        </span>
</div>
<div className="space-y-1 mb-4">
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span> 452 Medical Center Way, Suite 10
                        </p>
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="text-on-tertiary-container font-semibold">Open Now</span> • Closes 8:00 PM
                        </p>
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">call</span> (555) 123-4567
                        </p>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-secondary text-on-secondary py-1 rounded-lg font-label-md text-label-md transition-transform active:scale-95">Send Prescription</button>
<button className="px-3 py-1 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">directions</span>
</button>
</div>
</div>
<div className="pharmacy-card bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group relative cursor-pointer">
<div className="flex justify-between items-start mb-1">
<div>
<span className="inline-flex items-center px-1 py-[2px] bg-secondary-fixed text-on-secondary-fixed-variant rounded text-[10px] font-bold uppercase tracking-wider mb-1">MedLink Partner</span>
<h3 className="font-headline-md text-[18px] text-primary">Blue Shield Apothecary</h3>
</div>
<span className="font-label-md text-label-md text-on-surface-variant flex items-center">
<span className="material-symbols-outlined mr-[2px] text-[16px]">distance</span> 1.2 mi
                        </span>
</div>
<div className="space-y-1 mb-4">
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span> 88 West Green St, North District
                        </p>
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="text-error font-semibold">Closed</span> • Opens 9:00 AM
                        </p>
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">call</span> (555) 987-6543
                        </p>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-secondary text-on-secondary py-1 rounded-lg font-label-md text-label-md transition-transform active:scale-95">View Profile</button>
<button className="px-3 py-1 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">directions</span>
</button>
</div>
</div>
<div className="bg-primary-container p-4 rounded-xl border border-outline-variant/30 shadow-lg text-on-primary-fixed-variant relative overflow-hidden group">
<div className="relative z-10">
<span className="bg-on-tertiary-container text-white px-1 py-[2px] rounded text-[10px] font-bold uppercase mb-1 inline-block">24/7 Available</span>
<h3 className="font-headline-md text-[18px] text-white mb-1">City General Pharmacy</h3>
<p className="font-body-sm text-body-sm text-white/70 mb-4">Located inside the main hospital lobby. Direct integration with MedLink Health Records.</p>
<div className="flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-container" data-alt="Close up professional portrait of a female pharmacist smiling in a modern medical clinic setting with blue and white soft lighting." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAD41PpEk7Aem4ZPGMIFJm8mDmT6Q_54s8Kco99XOM3P9eaxDS0zAmvhh9KnqwQLz5bOZBToEP7-cNYcGdHF7ErJmwAK4CeqpV0Z7v-I-OFoedx711d77eJX-1enzbfA72YlWFBJ972nVO8jaqaWPZGC9Q5mPb6NHKFFLy8dxOTtL7aCW3ZobtvE1EfeldJK5l8WLJ1ldX2_OYvBZWq4OpyqlLIKmh9ikqZP2ry9EltjwAk8EHAJG6XgKprNedlQoSy_GUB5a391_R')`}}></div>
<div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-container" data-alt="Professional headshot of a male pharmacist wearing a white coat and glasses in a brightly lit, clean medical laboratory." style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNx6PU6Y2sPpGptc9hip-Vg8X9stedB8I3eiwCJC13DHa0mqwuvsa5RFNZEqNJOCdjZhvBCh9uP-JcvCckNrxS6-sm3s7Iq3fsFii13057BnVCd6FRCJHb409HLwaxG_gOY8JPBddj2tJOJrJV-cMNk-c3iOixjr3_sYJm-tOV2VElZ_ERMcSjGEs1-ftEGiAp7zLWf7Rtkuzy3s-Oiyy_nAGurAuH2cwMdjhjolXZ6pJm0BxxtNgOjAaZBisR5meTs70-t1XTNj7E')`}}></div>
<div className="w-8 h-8 rounded-full border-2 border-primary-container bg-surface-container flex items-center justify-center text-[10px] font-bold text-white">+3</div>
</div>
<button className="bg-white text-primary px-4 py-1 rounded-lg font-label-md text-label-md">Book Consult</button>
</div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[120px]" style={{fontVariationSettings: 'FILL 1' }}>medical_services</span>
</div>
</div>
<div className="pharmacy-card bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all group relative cursor-pointer">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="font-headline-md text-[18px] text-primary">WellCare Corner Store</h3>
</div>
<span className="font-label-md text-label-md text-on-surface-variant flex items-center">
<span className="material-symbols-outlined mr-[2px] text-[16px]">distance</span> 2.5 mi
                        </span>
</div>
<div className="space-y-1 mb-4">
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">location_on</span> 1202 East Blvd, Suite B
                        </p>
<p className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px]">schedule</span>
<span className="text-on-tertiary-container font-semibold">Open Now</span> • Closes 10:00 PM
                        </p>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-secondary text-on-secondary py-1 rounded-lg font-label-md text-label-md transition-transform active:scale-95">Send Prescription</button>
<button className="px-3 py-1 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">directions</span>
</button>
</div>
</div>
</div>
</section>
<section className="flex-grow relative bg-surface-container-high hidden md:block">
<div className="absolute inset-0 z-0 bg-cover bg-center" data-location="Chicago" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfxhjyXtxZHSeBbRqVjSC9l4G3_KScZHKG3gCcjPEfW639uLUBNaBnJV-vvkl79bhH1dt3S460V4QrB4yzf54Xyw81EocOlauzcQMZhOH4HM9iMTh86in3ESdLaKem0gKHSVSTBKz24CM9TGEtlg06KVaRsGaII6rGy_D_qnMOimxXJ1XDaiJx5Fbg9j8HR2xVNfnaMH6iQdyD-bK9DY3B4jZ5xM6qSCa9Dj7BC67nSlOSP8LWPANMyXIeUdpc3PxtRVQ6KmuiK40A')`}}></div>
<div className="absolute top-4 right-md flex flex-col gap-3 z-10">
<div className="glass-panel p-sm rounded-xl flex flex-col gap-1">
<button className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
<button className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all">
<span className="material-symbols-outlined" style={{fontVariationSettings: 'FILL 1' }}>my_location</span>
</button>
</div>
<div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 group">
<div className="relative cursor-pointer">
<span className="material-symbols-outlined text-secondary text-[40px]" style={{fontVariationSettings: 'FILL 1' }}>location_on</span>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-sm w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<div className="glass-panel p-1 rounded-lg shadow-xl text-center">
<p className="font-label-md text-[12px] text-primary font-bold">Downtown Health Pharmacy</p>
<p className="text-[10px] text-on-tertiary-container">0.4 mi • Open Now</p>
</div>
<div className="w-3 h-3 bg-white rotate-45 mx-auto -mt-[6px] border-r border-b border-outline-variant/30"></div>
</div>
</div>
</div>
<div className="absolute bottom-sm right-sm text-[10px] text-on-surface-variant glass-panel px-1 py-[2px] rounded">
                © 2024 MedLink Map Data
            </div>
</section>
</main>
<footer className="hidden lg:block w-full py-8 border-t border-outline-variant dark:border-outline-variant/10 bg-surface-container-highest dark:bg-surface-container-low mt-auto">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col gap-1">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MedLink</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex gap-4">
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">HIPAA Compliance</a>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md" href="#">Contact Support</a>
</div>
</div>
</footer>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest border-t border-outline-variant z-50 flex justify-around items-center h-16 px-4">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-secondary">
<span className="material-symbols-outlined" style={{fontVariationSettings: 'FILL 1'}}>local_pharmacy</span>
<span className="text-[10px] font-bold">Pharmacies</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">calendar_today</span>
<span className="text-[10px] font-medium">Appointments</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>
</div>
</div>
  );
};

export default FindPharmacy;