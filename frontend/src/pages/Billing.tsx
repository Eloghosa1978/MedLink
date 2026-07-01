const Billing = () => {
  return (
    <body className="bg-background text-on-surface min-h-screen">

<header className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-outline-variant/10 shadow-sm">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary">MedLink</span>
<nav className="hidden md:flex items-center gap-4 ml-lg">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Services</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Doctors</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-secondary w-64 text-body-sm font-body-sm" placeholder="Search invoices..." type="text"/>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all">Sign In</button>
<button className="border border-error text-error px-6 py-2 rounded-full font-label-md text-label-md hover:bg-error/5 active:scale-95 transition-all">Emergency</button>
</div>
</div>
</header>
<div className="flex pt-[72px] min-h-screen">

<aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 bg-surface-container-lowest border-r border-outline-variant/5 shadow-sm p-3 flex flex-col z-40">
<div className="mb-6 px-1 py-3">
<p className="font-headline-md text-headline-md font-bold text-primary">Patient Portal</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Manage your health journey</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">calendar_today</span>
                    Appointments
                </a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">monitoring</span>
                    Health Metrics
                </a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">description</span>
                    Medical Records
                </a>
<a className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 transition-all translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">payments</span>
                    Billing &amp; Payments
                </a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">settings</span>
                    Settings
                </a>
</nav>
<div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/10">
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">help</span>
                    Support
                </a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">logout</span>
                    Logout
                </a>
</div>
</aside>

<main className="ml-64 flex-1 p-10 bg-background max-w-[1200px] mx-auto">
<header className="mb-6 flex justify-between items-end">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-1">Billing &amp; Payments</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Review your consultation history, manage payment methods, and download tax invoices.</p>
</div>
<button className="bg-secondary text-on-secondary px-6 py-3 rounded-xl font-label-md text-label-md flex items-center gap-1 shadow-md hover:shadow-lg transition-all active:scale-95">
<span className="material-symbols-outlined">add</span>
                    Add Payment Method
                </button>
</header>

<div className="grid grid-cols-12 gap-gutter">

<div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-gutter gap-3 mb-4">
<div className="col-span-1 bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-xl shadow-sm">
<p className="font-label-md text-label-md text-outline mb-1">Outstanding Balance</p>
<h2 className="font-display-lg text-display-lg text-secondary">$0.00</h2>
<div className="mt-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
                            Paid in Full
                        </div>
</div>
<div className="col-span-1 bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-xl shadow-sm">
<p className="font-label-md text-label-md text-outline mb-1">Total consultations</p>
<h2 className="font-display-lg text-display-lg text-primary">24</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-3">Since Jan 2024</p>
</div>
<div className="col-span-1 bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-xl shadow-sm">
<p className="font-label-md text-label-md text-outline mb-1">Insurance Savings</p>
<h2 className="font-display-lg text-display-lg text-on-tertiary-container">$1,240.50</h2>
<div className="mt-3 flex items-center gap-1 text-on-tertiary-container font-label-md text-label-md">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
                            15% vs Last Year
                        </div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant/10 p-6 rounded-xl shadow-sm flex flex-col gap-4 ml-3 mb-4">
<h3 className="font-headline-md text-headline-md text-primary">Payment Methods</h3>
<div className="space-y-sm">

<div className="relative p-4 rounded-xl bg-primary text-on-primary overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]">credit_card</span>
</div>
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-3xl">contactless</span>
<span className="font-label-md text-label-md bg-white/20 px-1 py-0.5 rounded">Primary</span>
</div>
<div className="font-code-md text-code-md mb-1 tracking-[0.2em]">•••• •••• •••• 4242</div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] uppercase opacity-60">Card Holder</p>
<p className="font-label-md text-label-md">Alex Johnson</p>
</div>
<div className="text-right">
<p className="text-[10px] uppercase opacity-60">Expires</p>
<p className="font-label-md text-label-md">12/26</p>
</div>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl border border-outline-variant/20 hover:bg-surface-container-low transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div className="flex-1">
<p className="font-label-md text-label-md text-primary">Chase Savings</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">•••• 8821</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-secondary">chevron_right</span>
</div>
</div>
</div>

<div className="col-span-12 bg-surface-container-lowest border border-outline-variant/10 rounded-xl shadow-sm overflow-hidden mb-4">
<div className="p-6 flex justify-between items-center border-b border-outline-variant/10">
<h3 className="font-headline-md text-headline-md text-primary">Billing History</h3>
<div className="flex gap-3">
<button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                                Filter
                            </button>
<button className="flex items-center gap-1 px-3 py-2 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">download</span>
                                Export All
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low/50">
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Transaction Date</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Description</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Fee Type</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Amount</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Tax (10%)</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Discount</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider">Total</th>
<th className="px-6 py-4 font-label-md text-label-md text-outline uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">

<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="px-6 py-4">
<p className="font-label-md text-label-md text-primary">Oct 24, 2024</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">INV-88291</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">stethoscope</span>
</div>
<p className="font-body-md text-body-md text-primary">Cardiology Follow-up</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[12px] font-semibold">Consultation</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md">$150.00</td>
<td className="px-6 py-4 font-body-md text-body-md">$15.00</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-tertiary-container">-$25.00</td>
<td className="px-6 py-4 font-label-md text-label-md text-primary">$140.00</td>
<td className="px-6 py-4 text-right">
<button className="text-secondary hover:underline font-label-md text-label-md flex items-center gap-1 ml-auto">
<span className="material-symbols-outlined text-[18px]">receipt</span>
                                            PDF
                                        </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="px-6 py-4">
<p className="font-label-md text-label-md text-primary">Oct 12, 2024</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">INV-88102</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-[18px]">biotech</span>
</div>
<p className="font-body-md text-body-md text-primary">Comprehensive Blood Panel</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[12px] font-semibold">Lab Services</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md">$280.00</td>
<td className="px-6 py-4 font-body-md text-body-md">$28.00</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant">$0.00</td>
<td className="px-6 py-4 font-label-md text-label-md text-primary">$308.00</td>
<td className="px-6 py-4 text-right">
<button className="text-secondary hover:underline font-label-md text-label-md flex items-center gap-1 ml-auto">
<span className="material-symbols-outlined text-[18px]">receipt</span>
                                            PDF
                                        </button>
</td>
</tr>

<tr className="hover:bg-surface-container-low/30 transition-colors">
<td className="px-6 py-4">
<p className="font-label-md text-label-md text-primary">Sep 30, 2024</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">INV-87955</p>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[18px]">medical_services</span>
</div>
<p className="font-body-md text-body-md text-primary">Urgent Care Visit</p>
</div>
</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[12px] font-semibold">Emergency</span>
</td>
<td className="px-6 py-4 font-body-md text-body-md">$450.00</td>
<td className="px-6 py-4 font-body-md text-body-md">$45.00</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-tertiary-container">-$450.00</td>
<td className="px-6 py-4 font-label-md text-label-md text-primary">$45.00</td>
<td className="px-6 py-4 text-right">
<button className="text-secondary hover:underline font-label-md text-label-md flex items-center gap-1 ml-auto">
<span className="material-symbols-outlined text-[18px]">receipt</span>
                                            PDF
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 bg-surface-container-low/30 flex justify-center">
<button className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors flex items-center gap-1">
                            Load More Transactions
                            <span className="material-symbols-outlined">expand_more</span>
</button>
</div>
</div>

<div className="col-span-12 relative h-48 rounded-2xl overflow-hidden shadow-lg">
<div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary-container z-10 flex flex-col justify-center px-8">
<h4 className="font-headline-md text-headline-md text-white mb-1">Save 20% with Auto-Pay</h4>
<p className="font-body-md text-body-md text-white/80 max-w-md">Enable automatic billing for recurring prescriptions and follow-up consultations to unlock exclusive health network rewards.</p>
<button className="mt-4 w-fit bg-on-secondary-container text-secondary px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-white transition-all active:scale-95">Enable Auto-Pay</button>
</div>
<div className="absolute inset-0 z-0">
<div className="w-full h-full opacity-30" data-alt="A futuristic medical laboratory with abstract blue glowing particles and sleek glass surfaces, clean lighting, and a high-tech corporate hospital aesthetic." style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmrsCu4HFeNbWH5yUGw5CQoqzz03VkLTbnUxNPKSRmnUWDipScuHi8cCK7ymb9j2BoCUqrAFIDJPY3l0TB23weQfTuTvfjLzb0nCyNPgMaM_zsFHeae3VWYhmfQ983vjxpGdnJjtclPARnjMcwFly9gilSt1vIRNNfV_jIoWe2wDuvSE1je9qACdMDvnMREu_U9iDUvMoyEHcUfPbokwGKw0NniPrrUZ-7a3bEPfi6zLjd5I2eiI-8Uw9rvvSfTcjnG0sGNJIEB04F')`}}></div>
</div>
</div>
</div>
</main>
</div>

<footer className="ml-64 bg-surface-container-highest w-auto py-8 border-t border-outline-variant">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col">
<h4 className="font-headline-md text-headline-md font-bold text-primary">MedLink</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacy Policy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Terms of Service</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">HIPAA Compliance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>
</body>
  )
}

export default Billing;