import  'react'

const MedicalReportsPage = () => {
  return (
    <div>
      <div className="bg-background text-on-surface">
<aside className="fixed left-0 top-0 h-screen flex flex-col p-3 z-40 h-full w-64 border-r border-outline-variant bg-surface-container-lowest shadow-sm">
<div className="mb-6 px-3">
<span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Patient Portal</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="calendar_today">calendar_today</span>
<span className="font-label-md text-label-md">Appointments</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
<span className="font-label-md text-label-md">Health Metrics</span>
</a>
<a className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="description" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
<span className="font-label-md text-label-md font-bold">Medical Records</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div className="mt-auto pt-4 border-t border-outline-variant/30 space-y-1">
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Logout</span>
</a>
</div>
</aside>
<main className="ml-64 min-h-screen">
<header className="h-[72px] bg-surface flex items-center justify-between px-10 border-b border-outline-variant sticky top-0 z-30">
<h1 className="font-headline-md text-headline-md text-primary">Medical Reports Gallery</h1>
<div className="flex items-center gap-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-secondary w-64 text-body-sm" placeholder="Search reports..." type="text"/>
</div>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity">
                    Upload New
                </button>
</div>
</header>
<div className="p-10 max-w-[1200px] mx-auto">
<div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
<button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md">All Reports</button>
<button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container-highest transition-colors">MRI Scans</button>
<button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container-highest transition-colors">Blood Tests</button>
<button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container-highest transition-colors">CT Scans</button>
<button className="px-6 py-2 bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md hover:bg-surface-container-highest transition-colors">X-Rays</button>
<button className="ml-auto flex items-center gap-1 font-label-md text-label-md text-secondary">
<span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
                    Advanced Filters
                </button>
</div>
<div className="grid grid-cols-12 gap-6">
<div className="col-span-12 mb-3 flex items-center gap-3">
<h2 className="font-headline-md text-headline-md text-on-surface">Diagnostic Imaging</h2>
<span className="h-px flex-1 bg-outline-variant/30"></span>
</div>
<div className="col-span-12 md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm p-4 report-card-hover transition-all duration-300">
<div className="flex flex-col md:flex-row gap-4">
<div className="w-full md:w-1/2 h-64 rounded-lg overflow-hidden bg-surface-container relative">
<img className="w-full h-full object-cover" data-alt="A highly detailed clinical MRI scan image of a human brain, displayed on a high-resolution medical monitor. The image shows intricate sagittal sections with high contrast between gray and white matter. The lighting is clinical and cool, typical of a radiology department. The aesthetic is clean, professional, and sophisticated, emphasizing precision and medical accuracy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHmGkwEfFYhjRU55rR8lupIY7pFouMCGpRevzQ1K15nAGLjRUMnerCBu17mVGGvFiEoWxz1S1h8ZD7e5XmrUqB5RGgnK9F3N31VssBzuB-i_puMYy_c5BVuXuDXCZKzgQxdVK05W49x4df1YL38kzp7YSrL1FYLnu0oef3c6v14SoraGscb1D3NhXGK41qjqdiSdw8OKvXecJOswAfgMXb_HvtozcmzqOK6J43y-VOy2s4rBTIlXWlQay99ShNjJHRaIIYa-xFCuFl"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-body-sm font-medium">Radiology Department</span>
</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Brain MRI - T1 Weighted</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Exam Date: Oct 24, 2024</p>
</div>
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">New</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 flex-1">Routine neurological screening for persistent migraine symptoms. Preliminary findings indicate no abnormalities in cortical structure or vascular systems.</p>
<div className="flex items-center gap-3 mt-auto pt-4 border-t border-outline-variant/10">
<button className="flex-1 flex items-center justify-center gap-1 py-2 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md active:scale-95 transition-all">
<span className="material-symbols-outlined text-[18px]" data-icon="visibility">visibility</span> Preview
                                </button>
<button className="p-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors active:scale-95">
<span className="material-symbols-outlined" data-icon="download">download</span>
</button>
<button className="p-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors active:scale-95">
<span className="material-symbols-outlined" data-icon="share">share</span>
</button>
</div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm p-3 report-card-hover transition-all duration-300">
<div className="h-32 rounded-lg overflow-hidden mb-3 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A professional medical CT scan of the abdominal cavity showing clear organ definitions. The image is monochrome with high clinical detail, presented on a dark interface background. The lighting is focused and sharp, conveying a sense of advanced medical technology and thorough investigation. Minimalist and corporate healthcare aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu7izxkGcUAYHhlL2KVo470oxLpsQL5tmLZ0kxOXR7qn6_32U-N0W_vV3X4_BjLnWbQ4Sqt3gPRDG0MWRUp87Sdpbns-50d2nJ0s4OLFHTZE_l4PSctjXlUSMilKKpoiyw-1h7bzHAK9-_XV_0Lm5Ex8IKw7wVuPnyCvXHHB29G09MEkpm461tUywANmlxGZDsLr-rbEudIkykf4utdvpFpG4E0dzw-1Owj9VWnnMOq-11u7cX4cX7ckwo_qYd8N89NCyL6F-uYvos"/>
</div>
<h4 className="font-label-md text-label-md text-on-surface">Abdominal CT Scan</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Date: Oct 12, 2024</p>
<div className="flex gap-1">
<button className="flex-1 py-1.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors">Details</button>
<button className="p-1.5 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined" data-icon="download">download</span></button>
</div>
</div>
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm p-3 report-card-hover transition-all duration-300">
<div className="h-32 rounded-lg overflow-hidden mb-3 bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A clean, medical chest X-ray image showing the thoracic cavity and lungs in high detail. The visual style is classNameic radiographic film but digitized for a modern UI. The background is a soft gray, creating a sterile and professional atmosphere. The mood is serious and clinical, fitting for a premium healthcare dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANsYUeJ7G5KjkB-KSJJSITBMgM4majkzbi8czXelmXfo9KKmDMmujqD66UswYgAavB_T2mRk-_UkKY7ZASFWNt34ty3kQpcz0gEBY-wGE_WpaNJAaWuwa7g6Ya5bF0NR7d6jnpC6WS2wbOs9Vse5fv60Oa-CbTUUO1us6xh8zyNt6ireovL0tTJGhCwCdO5ldYw8mDEBGIZXsKIAFunXMce2j9mdBquDrRAaqP_cfdlwyXPhFbNBwiDSkE6Q2_TmA8wbiIHb0dL1VG"/>
</div>
<h4 className="font-label-md text-label-md text-on-surface">Chest X-Ray PA View</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-3">Date: Sep 28, 2024</p>
<div className="flex gap-1">
<button className="flex-1 py-1.5 bg-surface-container text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-high transition-colors">Details</button>
<button className="p-1.5 text-secondary hover:bg-secondary-container/20 rounded-lg transition-colors"><span className="material-symbols-outlined" data-icon="download">download</span></button>
</div>
</div>
</div>
<div className="col-span-12 mt-4 mb-3 flex items-center gap-3">
<h2 className="font-headline-md text-headline-md text-on-surface">Laboratory Analysis</h2>
<span className="h-px flex-1 bg-outline-variant/30"></span>
</div>
<div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm p-4 flex flex-col report-card-hover transition-all duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-error-container/20 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[32px]" data-icon="bloodtype" style={{ fontVariationSettings: "'FILL' 1" }}>bloodtype</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface leading-tight">Complete Blood Count (CBC)</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 30, 2024</p>
</div>
</div>
<div className="space-y-3 mb-4 flex-1">
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">Hemoglobin</span>
<span className="font-bold text-on-surface">14.2 g/dL</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-on-tertiary-container h-full w-[70%]"></div>
</div>
<div className="flex justify-between items-center text-body-sm">
<span className="text-on-surface-variant">WBC Count</span>
<span className="font-bold text-on-surface">6.4 x10³/µL</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-on-tertiary-container h-full w-[45%]"></div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Full Report</button>
<button className="p-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined" data-icon="share">share</span></button>
</div>
</div>
<div className="col-span-12 md:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm p-4 flex flex-col report-card-hover transition-all duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed/20 flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[32px]" data-icon="science" style={{ fontVariationSettings: "'FILL' 1" }}>science</span>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface leading-tight">Lipid Profile</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oct 15, 2024</p>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-lg mb-4 flex-1">
<div className="flex items-center justify-between mb-1">
<span className="font-body-sm text-body-sm text-on-surface-variant">Total Cholesterol</span>
<span className="font-bold text-error">210 mg/dL</span>
</div>
<p className="text-[12px] text-error flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span> Slightly High
                        </p>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">Full Report</button>
<button className="p-2 border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined" data-icon="share">share</span></button>
</div>
</div>
<div className="col-span-12 md:col-span-4 bg-primary text-on-primary rounded-xl p-4 flex flex-col justify-between relative overflow-hidden shadow-xl">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-1">Need a second opinion?</h3>
<p className="font-body-sm text-body-sm opacity-80 mb-4">Securely share your clinical reports with specialists worldwide for a comprehensive review.</p>
<button className="w-full bg-on-primary text-primary font-label-md text-label-md py-3 rounded-lg hover:bg-primary-fixed transition-colors">Consult a Doctor</button>
</div>
<div className="absolute -right-8 -bottom-8 opacity-10">
<span className="material-symbols-outlined text-[160px]" data-icon="medical_information">medical_information</span>
</div>
</div>
</div>
</div>
</main>
<footer className="ml-64 border-t border-outline-variant bg-surface-container-highest py-8">
<div className="w-full px-margin-desktop max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col gap-1">
<span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex flex-wrap gap-4 justify-center">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">HIPAA Compliance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>

</div>
    </div>
  )
}

export default MedicalReportsPage