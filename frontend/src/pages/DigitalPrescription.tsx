import  'react'

const DigitalPrescription = () => {
  return (
    <div>
      <div className="bg-background text-on-surface font-body-md min-h-screen">
<header className="bg-surface border-b border-outline-variant/10 shadow-sm sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary">MedLink</span>
<nav className="hidden md:flex items-center gap-6 ml-8">
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Services</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Doctors</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="px-6 h-[48px] rounded-full border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all">Emergency</button>
<button className="px-6 h-[48px] rounded-full bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-all">Sign In</button>
</div>
</div>
</header>
<main className="max-w-[1200px] mx-auto px-10 py-8">
<div className="grid grid-cols-12 gap-6">
<aside className="hidden lg:block col-span-3 space-y-3">
<div className="flex flex-col gap-1 p-3 bg-surface-container-lowest rounded-xl shadow-sm">
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
<a className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 translate-x-1 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-md text-label-md">Medical Records</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
<div className="mt-8 p-6 bg-primary-container text-on-primary-container rounded-xl">
<p className="font-label-md text-label-md opacity-70 mb-1">Next Visit</p>
<p className="font-headline-md text-headline-md font-bold text-white">Oct 24, 2024</p>
<p className="font-body-sm text-body-sm opacity-80 mt-2">Dr. Sarah Jenkins • Cardiology</p>
<button className="mt-4 w-full bg-secondary text-white py-3 rounded-lg font-label-md text-label-md hover:bg-opacity-90 transition-all">View Details</button>
</div>
</aside>
<section className="col-span-12 lg:col-span-9">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 no-print">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Digital Prescription</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Reference ID: #PRE-8829-01</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-1 px-6 h-[48px] bg-surface-container-lowest border border-outline-variant rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all">
<span className="material-symbols-outlined" data-icon="download">download</span>
                            Download PDF
                        </button>
<button className="flex items-center gap-1 px-6 h-[48px] bg-secondary text-white rounded-xl font-label-md text-label-md hover:opacity-90 transition-all">
<span className="material-symbols-outlined" data-icon="share">share</span>
                            Share with Pharmacy
                        </button>
</div>
</div>
<div className="prescription-card bg-surface-container-lowest p-8 md:p-[48px] rounded-2xl border border-outline-variant/10">
<div className="flex flex-col md:flex-row justify-between border-b border-outline-variant pb-6 mb-6 gap-6">
<div className="flex gap-4">
<div className="w-20 h-20 rounded-xl overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="A formal professional medical portrait of a female doctor in a white lab coat with a stethoscope around her neck, set against a clean, minimalist clinical background with soft morning light. The aesthetic is professional, empathetic, and high-quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6vbmGiOWYr3T31USUyO2MK2V8p2SgOv-0YKds1G584nyItC4YPTuKDVWx7zc3TGUQq8VgKlcTKXd_AfkJwsYKtbbisNfBJiSpqhPPN295aK3EneWyxFBzqo8K_yrh3AH9tqEyB_9xK6PzqQjWa9KUngp79fwQY8rKuW65IPFaQYn7D1zbKNNLUYHX7SJThU0-D3ZoDaFCQHvhGjJGgchAdpbs1oRNxKYE-QnkFSmNUkZ-rnfydxMxwT5L7oI1XxvOFxPHUAAVmjyg"/>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Dr. Sarah Jenkins, MD</h2>
<p className="font-label-md text-label-md text-secondary">Senior Cardiologist</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">St. Mary's General Hospital</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">License: #MC-29481-NY</p>
</div>
</div>
<div className="md:text-right">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Date Issued</p>
<p className="font-headline-md text-headline-md font-bold">October 12, 2024</p>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Valid until: Jan 12, 2025</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-surface-container-low p-6 rounded-xl mb-8">
<div>
<p className="font-label-md text-label-md text-on-surface-variant mb-2">Patient Name</p>
<p className="font-body-md text-body-md font-semibold">Robert C. Miller</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant mb-2">Age / Gender</p>
<p className="font-body-md text-body-md font-semibold">42 Years / Male</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant mb-2">Weight / Blood Group</p>
<p className="font-body-md text-body-md font-semibold">78 kg / B Positive</p>
</div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-1 border-b border-primary/10 pb-3">
<span className="material-symbols-outlined text-secondary" data-icon="prescriptions" style={{fontVariationSettings: 'FILL 1'}}>prescriptions</span>
<h3 className="font-headline-md text-headline-md">Prescribed Medications</h3>
</div>
<div className="group border-b border-outline-variant/30 pb-6 last:border-0">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-body-lg text-body-lg font-bold text-primary">Atorvastatin (Lipitor) 20mg</h4>
<p className="text-on-surface-variant font-body-sm text-body-sm">Primary Indication: Cholesterol Management</p>
</div>
<div className="px-3 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md">
                                    30 Day Supply
                                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Dosage</p>
<p className="font-body-md text-body-md">1 Tablet (20mg)</p>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Frequency</p>
<p className="font-body-md text-body-md">Once Daily (Night)</p>
</div>
<div className="col-span-2">
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Instructions</p>
<p className="font-body-md text-body-md">Take with water before bedtime. Avoid grapefruit juice.</p>
</div>
</div>
</div>
<div className="group border-b border-outline-variant/30 pb-6 last:border-0">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-body-lg text-body-lg font-bold text-primary">Lisinopril 10mg</h4>
<p className="text-on-surface-variant font-body-sm text-body-sm">Primary Indication: Hypertension</p>
</div>
<div className="px-3 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md">
                                    90 Day Supply
                                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Dosage</p>
<p className="font-body-md text-body-md">1 Tablet (10mg)</p>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Frequency</p>
<p className="font-body-md text-body-md">Twice Daily (Morning/Evening)</p>
</div>
<div className="col-span-2">
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Instructions</p>
<p className="font-body-md text-body-md">Take 30 minutes before meals. Monitor blood pressure weekly.</p>
</div>
</div>
</div>
<div className="group border-b border-outline-variant/30 pb-6 last:border-0">
<div className="flex justify-between items-start mb-3">
<div>
<h4 className="font-body-lg text-body-lg font-bold text-primary">Omega-3 Fish Oil 1000mg</h4>
<p className="text-on-surface-variant font-body-sm text-body-sm">Primary Indication: Supplement</p>
</div>
<div className="px-3 py-2 bg-secondary/10 text-secondary rounded-full font-label-md text-label-md">
                                    Ongoing
                                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Dosage</p>
<p className="font-body-md text-body-md">2 Softgels</p>
</div>
<div>
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Frequency</p>
<p className="font-body-md text-body-md">Once Daily</p>
</div>
<div className="col-span-2">
<p className="text-xs font-bold text-on-surface-variant uppercase mb-1">Instructions</p>
<p className="font-body-md text-body-md">Take with largest meal of the day to maximize absorption.</p>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-md">
<p className="font-label-md text-label-md text-on-surface-variant mb-1">Physician Notes</p>
<p className="font-body-sm text-body-sm italic text-on-surface-variant leading-relaxed">
                                "Continue daily cardiovascular exercise for 30 minutes. Monitor heart rate during activity. If dizziness or dry cough occurs with Lisinopril, please contact our office immediately."
                            </p>
</div>
<div className="text-right">
<div className="mb-1">
<img className="h-16 ml-auto opacity-80" data-alt="A clean, digitized medical signature on a white background. The signature is elegant and stylized, appearing as if written with a fountain pen in dark blue ink. Minimalist and professional medical document aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6OU8ceNSgc9cdVZkJIpd4E-vzcpwjeqesZKUd-6eLyYksWB2fzjYXbncnLEcpUvZEya8mgsv-Y21jtZerEwz94owL50RoUZ3G67pkVVjnt8UFFBDOMmnQrPRzWbVJQJy91UouSZoRpyZkthRqH1LsGEd5A7TjwtA4kJmv0wn7rUm_mF5dwNytAPAzUu4l4raSUz_90ATYA5zoC7cgvnnsnUe5xfZwIP24IULjfOIl6JE_UoMPQ3QCSs_LoRbRL0EK5BMiFm0G33aA"/>
</div>
<div className="h-px w-48 bg-outline-variant ml-auto mb-1"></div>
<p className="font-label-md text-label-md font-bold">Dr. Sarah Jenkins</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Digitally Signed &amp; Encrypted</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 no-print">
<div className="bg-surface-container-high p-6 rounded-2xl flex items-center gap-4 hover:bg-surface-container-highest transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="local_pharmacy">local_pharmacy</span>
</div>
<div>
<h5 className="font-label-md text-label-md font-bold">Find Nearest Pharmacy</h5>
<p className="font-body-sm text-body-sm text-on-surface-variant">Check drug availability and pricing nearby.</p>
</div>
</div>
<div className="bg-tertiary-fixed p-6 rounded-2xl flex items-center gap-4 hover:bg-opacity-90 transition-all cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-on-tertiary-container shadow-sm group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="history">history</span>
</div>
<div>
<h5 className="font-label-md text-label-md font-bold">Past Prescriptions</h5>
<p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">View medication history and refills.</p>
</div>
</div>
</div>
</section>
</div>
</main>
<footer className="bg-surface-container-highest border-t border-outline-variant/10 py-8 mt-8 no-print">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col gap-1">
<span className="font-headline-md text-headline-md font-bold text-primary">MedLink</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<nav className="flex flex-wrap justify-center gap-4">
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">HIPAA Compliance</a>
<a className="text-on-surface-variant hover:text-secondary font-label-md text-label-md transition-colors" href="#">Contact Support</a>
</nav>
</div>
</footer>
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant/10 h-[64px] flex items-center justify-around z-50 no-print px-3">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[24px]" data-icon="dashboard">dashboard</span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-[24px]" data-icon="description" style={{ fontVariationSettings: "'FILL' 1" }}>description</span>
<span className="text-[10px] font-bold">Records</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[24px]" data-icon="calendar_today">calendar_today</span>
<span className="text-[10px] font-medium">Dates</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[24px]" data-icon="person">person</span>
<span className="text-[10px] font-medium">Profile</span>
</button>
</nav>

</div>
    </div>
  )
}

export default DigitalPrescription