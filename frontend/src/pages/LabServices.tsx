const LabServices = () => {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <nav className="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant h-16 px-4 lg:px-10 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2 text-primary" href="#">
            <span className="material-symbols-outlined text-secondary text-3xl">
              medical_services
            </span>
            <span className="text-xl font-bold tracking-tight">MedLink</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm"
              href="#"
            >
              Appointments
            </a>
            <a
              className="text-primary font-semibold text-sm border-b-2 border-primary py-5"
              href="#"
            >
              Lab Services
            </a>
            <a
              className="text-on-surface-variant hover:text-primary font-medium text-sm"
              href="#"
            >
              Records
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
            <div className="hidden lg:block text-right">
              <p className="text-sm font-semibold">Alex Johnson</p>
              <p className="text-xs text-on-surface-variant">
                Patient ID: #29481
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-white font-bold">
              AJ
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 lg:px-10 py-8">
        <section className="mb-12">
          <div className="max-w-2xl">
            <h1 className="text-display-lg text-primary mb-4">
              Laboratory Services
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-8">
              Professional diagnostic testing with clinical precision. Browse
              tests, book appointments, and receive digital results securely.
            </p>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none"
                placeholder="Search for specific tests (e.g., Lipid Panel, Blood Count, MRI...)"
                type="text"
              />
            </div>
          </div>
        </section>

        <section className="mb-10 overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-3 min-w-max">
            <button className="px-6 py-2 bg-primary text-white rounded-full text-sm font-medium">
              All Tests
            </button>
            <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                bloodtype
              </span>{" "}
              Hematology
            </button>
            <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">biology</span>{" "}
              Biochemistry
            </button>
            <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                visibility
              </span>{" "}
              Imaging
            </button>
            <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                microscope
              </span>{" "}
              Pathology
            </button>
            <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high rounded-full text-sm font-medium transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                vaccines
              </span>{" "}
              Immunization
            </button>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-gutter">
          <aside className="lg:col-span-1 space-y-6 mr-4">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant">
              <h3 className="font-bold text-lg mb-4">Partner Laboratories</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container mt-1">
                    verified
                  </span>
                  <div>
                    <p className="text-sm font-semibold">
                      Precision Diagnostics
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      CAP &amp; CLIA Accredited
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container mt-1">
                    location_on
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Multiple Locations</p>
                    <p className="text-xs text-on-surface-variant">
                      15+ centers across the city
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-on-tertiary-container mt-1">
                    schedule
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Fast Processing</p>
                    <p className="text-xs text-on-surface-variant">
                      90% of results within 24h
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 py-2 text-secondary text-sm font-semibold border border-secondary rounded-lg hover:bg-secondary-fixed transition-colors">
                View All Locations
              </button>
            </div>
            <div className="bg-primary-container p-6 rounded-xl text-white">
              <h3 className="font-bold text-lg mb-2">Need Assistance?</h3>
              <p className="text-sm text-on-primary-container mb-4">
                Unsure which test is right for you? Consult with our clinical
                advisors.
              </p>
              <button className="w-full py-2 bg-white text-primary text-sm font-semibold rounded-lg hover:bg-surface-bright transition-colors">
                Chat with Support
              </button>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-12">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-headline-md text-primary">
                  Featured Lab Packages
                </h2>
                <a
                  className="text-secondary text-sm font-semibold flex items-center gap-1 hover:underline"
                  href="#"
                >
                  View All Packages{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-2 border-secondary-fixed shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-secondary-fixed rounded-lg flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined">
                        health_and_safety
                      </span>
                    </div>
                    <span className="text-2xl font-bold">$149.00</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Comprehensive Full Body Checkup
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Includes 65+ parameters: Liver profile, Kidney profile,
                    Thyroid, Lipid, CBC, and Diabetes screening.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-on-tertiary-container text-base">
                        check_circle
                      </span>{" "}
                      Home Sample Collection Available
                    </li>
                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-on-tertiary-container text-base">
                        check_circle
                      </span>{" "}
                      Results in 24-48 hours
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Book Package
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-on-tertiary-fixed-variant">
                      <span className="material-symbols-outlined">
                        monitor_heart
                      </span>
                    </div>
                    <span className="text-2xl font-bold">$89.00</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Healthy Heart Screening
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4">
                    Specialized panel for cardiac health including Lipid
                    profile, CRP, and ECG at the facility.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-on-tertiary-container text-base">
                        check_circle
                      </span>{" "}
                      Doctor consultation included
                    </li>
                    <li className="flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-on-tertiary-container text-base">
                        check_circle
                      </span>{" "}
                      Results in 24 hours
                    </li>
                  </ul>
                  <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Book Package
                  </button>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-headline-md text-primary mb-6">
                Individual Tests
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
                  <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    Comprehensive Metabolic Panel (CMP)
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">
                    Evaluates kidney and liver function, electrolytes, and blood
                    sugar levels.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="text-lg font-bold">$45.00</p>
                      <p className="text-[10px] text-outline flex items-center gap-1 uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-sm">
                          timer
                        </span>{" "}
                        24 Hours
                      </p>
                    </div>
                    <button className="bg-surface-container-low p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
                  <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    Complete Blood Count (CBC)
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">
                    Measures red and white blood cells, platelets, and
                    hemoglobin.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="text-lg font-bold">$35.00</p>
                      <p className="text-[10px] text-outline flex items-center gap-1 uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-sm">
                          timer
                        </span>{" "}
                        12-24 Hours
                      </p>
                    </div>
                    <button className="bg-surface-container-low p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
                  <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    Lipid Panel
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">
                    Measures cholesterol levels and triglycerides to assess
                    cardiovascular risk.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="text-lg font-bold">$40.00</p>
                      <p className="text-[10px] text-outline flex items-center gap-1 uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-sm">
                          timer
                        </span>{" "}
                        24 Hours
                      </p>
                    </div>
                    <button className="bg-surface-container-low p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
                  <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    HbA1c (Diabetes)
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">
                    Measures your average blood sugar levels over the past 3
                    months.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="text-lg font-bold">$30.00</p>
                      <p className="text-[10px] text-outline flex items-center gap-1 uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-sm">
                          timer
                        </span>{" "}
                        24 Hours
                      </p>
                    </div>
                    <button className="bg-surface-container-low p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
                  <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    Thyroid Profile (T3, T4, TSH)
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">
                    Screening for thyroid gland performance and metabolic
                    health.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="text-lg font-bold">$55.00</p>
                      <p className="text-[10px] text-outline flex items-center gap-1 uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-sm">
                          timer
                        </span>{" "}
                        48 Hours
                      </p>
                    </div>
                    <button className="bg-surface-container-low p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant hover:border-secondary transition-colors group">
                  <h4 className="font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                    Vitamin D (Total)
                  </h4>
                  <p className="text-xs text-on-surface-variant mb-4 line-clamp-2">
                    Assess levels of Vitamin D, essential for bone health and
                    immunity.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant">
                    <div>
                      <p className="text-lg font-bold">$60.00</p>
                      <p className="text-[10px] text-outline flex items-center gap-1 uppercase tracking-wider font-bold">
                        <span className="material-symbols-outlined text-sm">
                          timer
                        </span>{" "}
                        48 Hours
                      </p>
                    </div>
                    <button className="bg-surface-container-low p-2 rounded-lg text-primary hover:bg-secondary hover:text-white transition-all">
                      <span className="material-symbols-outlined">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <button className="px-8 py-3 bg-surface-container-high text-on-surface-variant font-semibold rounded-lg hover:bg-outline-variant transition-colors">
                  Load More Tests
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-surface-container-lowest border-t border-outline-variant py-12 mt-16 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-primary mb-4">
              <span className="material-symbols-outlined text-secondary text-2xl">
                medical_services
              </span>
              <span className="text-lg font-bold">MedLink</span>
            </div>
            <p className="text-sm text-on-surface-variant">
              Connecting patients with precision diagnostics. Trusted by over
              500k patients across the region.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>
                <a className="hover:text-secondary" href="#">
                  Home Sample Collection
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Test Preparation Guide
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Corporate Health Plans
                </a>
              </li>
              <li>
                <a className="hover:text-secondary" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-wider">
              Contact Support
            </h4>
            <p className="text-sm text-on-surface-variant mb-2">
              Available 24/7 for urgent queries
            </p>
            <p className="text-lg font-bold text-primary">1-800-MED-LINK</p>
            <div className="flex gap-4 mt-4">
              <a
                className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-secondary"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a
                className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant hover:text-secondary"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-outline-variant text-center">
          <p className="text-xs text-outline">
            © 2024 MedLink Healthcare Solutions. All rights reserved. Precision
            in every result.
          </p>
        </div>
      </footer>

      <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-secondary text-white rounded-full shadow-xl flex items-center justify-center z-40">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="absolute -top-1 -right-1 bg-error text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-background">
          2
        </span>
      </button>
    </div>
  );
};

export default LabServices;