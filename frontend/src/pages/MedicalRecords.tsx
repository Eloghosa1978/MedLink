const MedicalRecords = () => {
  return (
    <div>
      <div className="bg-background text-on-surface">
        <header className="bg-surface docked full-width top-0 border-b border-outline-variant/10 shadow-sm z-50 sticky">
          <div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
            <div className="flex items-center gap-4">
              <span className="font-display-lg text-[28px] font-bold text-primary">
                MedLink
              </span>
              <nav className="hidden md:flex items-center gap-4 ml-6">
                <a
                  className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md"
                  href="#"
                >
                  Services
                </a>
                <a
                  className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md"
                  href="#"
                >
                  Doctors
                </a>
                <a
                  className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md"
                  href="#"
                >
                  About
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden sm:block">
                <input
                  className="bg-surface-container-low border-none rounded-full py-1 px-6 pl-8 focus:ring-2 focus:ring-secondary text-body-sm transition-all w-64"
                  placeholder="Search records..."
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">
                  search
                </span>
              </div>
              <button className="text-secondary font-label-md text-label-md px-4 py-1 hover:bg-surface-container-low rounded-lg transition-all active:scale-95">
                Sign In
              </button>
              <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-1 rounded-lg shadow-sm hover:opacity-90 active:scale-95 transition-all">
                Emergency
              </button>
            </div>
          </div>
        </header>
        <div className="flex max-w-[1440px] mx-auto min-h-[calc(100vh-72px)]">
          <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 border-r border-outline-variant/5 bg-surface-container-lowest p-3 hidden lg:flex flex-col z-40">
            <div className="mb-6 px-1">
              <h2 className="font-headline-md text-headline-md font-bold text-primary">
                Patient Portal
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Manage your health journey
              </p>
            </div>
            <nav className="flex-1 space-y-1">
              <a
                className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
                href="#"
              >
                <span className="material-symbols-outlined">dashboard</span>{" "}
                Dashboard
              </a>
              <a
                className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
                href="#"
              >
                <span className="material-symbols-outlined">
                  calendar_today
                </span>{" "}
                Appointments
              </a>
              <a
                className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
                href="#"
              >
                <span className="material-symbols-outlined">monitoring</span>{" "}
                Health Metrics
              </a>
              <a
                className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 font-label-md text-label-md translate-x-1 shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined fill-icon">
                  description
                </span>{" "}
                Medical Records
              </a>
              <a
                className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>{" "}
                Settings
              </a>
            </nav>
            <div className="mt-auto space-y-1 border-t border-outline-variant/10 pt-3">
              <button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-3 rounded-xl mb-4 hover:shadow-lg transition-all active:scale-95">
                Book Appointment
              </button>
              <a
                className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
                href="#"
              >
                <span className="material-symbols-outlined">help</span> Support
              </a>
              <a
                className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
                href="#"
              >
                <span className="material-symbols-outlined">logout</span> Logout
              </a>
            </div>
          </aside>
          <main className="flex-1 lg:ml-64 p-4 md:p-margin-desktop bg-background">
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="font-headline-lg text-headline-lg text-primary mb-1">
                  Medical Records Center
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
                  View and manage your comprehensive health history, including
                  diagnostic reports, active prescriptions, and immunization
                  logs.
                </p>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-lowest p-1 rounded-xl shadow-sm border border-outline-variant/5">
                <div className="px-3 flex items-center gap-1 border-r border-outline-variant/20">
                  <span className="material-symbols-outlined text-outline">
                    event
                  </span>
                  <select className="bg-transparent border-none focus:ring-0 text-label-md font-label-md cursor-pointer">
                    <option>Last 12 Months</option>
                    <option>2023 Records</option>
                    <option>2022 Records</option>
                    <option>All Time</option>
                  </select>
                </div>
                <button className="flex items-center gap-1 px-4 py-1 text-secondary hover:bg-secondary/5 rounded-lg transition-all">
                  <span className="material-symbols-outlined">filter_list</span>
                  <span className="font-label-md">Filters</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 md:col-span-4 lg:col-span-3 h-full">
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/5 shadow-sm h-full flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="font-label-md text-on-surface-variant">
                      Profile Summary
                    </span>
                    <span className="material-symbols-outlined text-secondary">
                      info
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/20">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="A professional medical profile portrait of a middle-aged patient, high-key lighting, minimalist medical clinic background, corporate photography style, calm and confident expression, soft navy and white color palette."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnVSmkWLttSYITPhiMC7zBziIeU13T-5Rv0Y5pp6oRHaSCySkbr49YNf3NOjMNtAepP1IUK-vv9Iac9B514hWcpfyRVAcAWO16byfpyxXoGEl1wPHUYXVQjVr1i6zHj2Y9JvrJGv8wjwj4FGjGC60X8C9QPwNjBfEe45lsKU_rACId0g87QaoYXwsoWMvXCEukPNHGVc1iqcX05vigiZOA-Q5aJiqdMdeudiIT-Pt56x1-2Ha_ObLeF-_ee3VVlp0zS3LM9fOnUz6X"
                      />
                    </div>
                    <div>
                      <h3 className="font-headline-md text-[18px] font-bold">
                        James R. Carter
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        ID: ML-99283-X
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 mt-4">
                    <div className="p-3 bg-surface-container-low rounded-lg flex justify-between">
                      <span className="font-body-sm text-on-surface-variant">
                        Blood Type
                      </span>
                      <span className="font-label-md text-primary">
                        O Positive
                      </span>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg flex justify-between">
                      <span className="font-body-sm text-on-surface-variant">
                        Allergies
                      </span>
                      <span className="font-label-md text-error">
                        Penicillin, Latex
                      </span>
                    </div>
                    <div className="p-3 bg-surface-container-low rounded-lg flex justify-between">
                      <span className="font-body-sm text-on-surface-variant">
                        Status
                      </span>
                      <span className="px-1 py-[2px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-[10px] font-bold uppercase tracking-wider">
                        High Compliance
                      </span>
                    </div>
                  </div>
                  <button className="mt-auto w-full flex items-center justify-center gap-1 py-3 border border-secondary text-secondary rounded-lg font-label-md hover:bg-secondary hover:text-on-secondary transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      download
                    </span>{" "}
                    Export All Data
                  </button>
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 lg:col-span-9">
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/5 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-outline-variant/5 flex justify-between items-center">
                    <h2 className="font-headline-md text-[20px] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary">
                        history_edu
                      </span>{" "}
                      Medical History &amp; Diagnoses
                    </h2>
                    <button className="text-secondary font-label-md text-label-md hover:underline">
                      View All
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-surface-container-low/50">
                        <tr>
                          <th className="px-6 py-3 font-label-md text-on-surface-variant">
                            Diagnosis
                          </th>
                          <th className="px-6 py-3 font-label-md text-on-surface-variant">
                            Date
                          </th>
                          <th className="px-6 py-3 font-label-md text-on-surface-variant">
                            Physician
                          </th>
                          <th className="px-6 py-3 font-label-md text-on-surface-variant">
                            Status
                          </th>
                          <th className="px-6 py-3 font-label-md text-on-surface-variant"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-outline-variant/5">
                        <tr className="hover:bg-surface-container-low/30 transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-label-md text-primary">
                              Type 2 Diabetes Mellitus
                            </p>
                            <p className="font-body-sm text-on-surface-variant text-[12px]">
                              Chronic Management
                            </p>
                          </td>
                          <td className="px-6 py-4 font-body-sm">
                            Oct 14, 2023
                          </td>
                          <td className="px-6 py-4 font-body-sm">
                            Dr. Sarah Jenkins
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-1 py-[2px] bg-secondary-container/10 text-secondary rounded-full text-[12px] font-medium">
                              Monitoring
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity material-symbols-outlined text-outline">
                              chevron_right
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low/30 transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-label-md text-primary">
                              Hyperlipidemia
                            </p>
                            <p className="font-body-sm text-on-surface-variant text-[12px]">
                              Metabolic Review
                            </p>
                          </td>
                          <td className="px-6 py-4 font-body-sm">
                            Feb 22, 2023
                          </td>
                          <td className="px-6 py-4 font-body-sm">
                            Dr. Michael Chen
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-1 py-[2px] bg-tertiary-fixed/20 text-on-tertiary-container rounded-full text-[12px] font-medium">
                              Stable
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity material-symbols-outlined text-outline">
                              chevron_right
                            </button>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low/30 transition-colors group">
                          <td className="px-6 py-4">
                            <p className="font-label-md text-primary">
                              Acute Sinusitis
                            </p>
                            <p className="font-body-sm text-on-surface-variant text-[12px]">
                              Respiratory Infection
                            </p>
                          </td>
                          <td className="px-6 py-4 font-body-sm">
                            Nov 05, 2022
                          </td>
                          <td className="px-6 py-4 font-body-sm">
                            Urgent Care Clinic
                          </td>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center px-1 py-[2px] bg-surface-container-highest text-on-surface-variant rounded-full text-[12px] font-medium">
                              Resolved
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button className="opacity-0 group-hover:opacity-100 transition-opacity material-symbols-outlined text-outline">
                              chevron_right
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/5 shadow-sm overflow-hidden h-full">
                  <div className="px-6 py-4 border-b border-outline-variant/5 flex justify-between items-center bg-white">
                    <h2 className="font-headline-md text-[20px] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary">
                        medication
                      </span>{" "}
                      Current Medications
                    </h2>
                    <div className="flex gap-1">
                      <button className="p-1 hover:bg-surface-container-low rounded-lg transition-all">
                        <span className="material-symbols-outlined">add</span>
                      </button>
                      <button className="p-1 hover:bg-surface-container-low rounded-lg transition-all">
                        <span className="material-symbols-outlined">
                          more_vert
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-surface-container-low/40 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-secondary text-[32px]">
                          pill
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-label-md text-primary">
                            Metformin HCL
                          </h4>
                          <span className="text-[10px] bg-secondary/10 text-secondary px-1 py-0.5 rounded font-bold">
                            500mg
                          </span>
                        </div>
                        <p className="font-body-sm text-on-surface-variant text-[13px] mt-1">
                          1 pill, twice daily with meals.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[11px] font-label-md text-outline">
                            Refills: 3 Left
                          </span>
                          <button className="text-secondary font-label-md text-[12px] hover:underline">
                            Request Refill
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-surface-container-low/40 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-on-tertiary-container text-[32px]">
                          vaccines
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-label-md text-primary">
                            Atorvastatin
                          </h4>
                          <span className="text-[10px] bg-secondary/10 text-secondary px-1 py-0.5 rounded font-bold">
                            20mg
                          </span>
                        </div>
                        <p className="font-body-sm text-on-surface-variant text-[13px] mt-1">
                          1 pill, nightly before bed.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[11px] font-label-md text-outline">
                            Refills: 1 Left
                          </span>
                          <button className="text-secondary font-label-md text-[12px] hover:underline">
                            Request Refill
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-surface-container-low/40 rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
                      <div className="bg-white p-3 rounded-lg shadow-sm">
                        <span className="material-symbols-outlined text-secondary text-[32px]">
                          pill
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-label-md text-primary">
                            Lisinopril
                          </h4>
                          <span className="text-[10px] bg-secondary/10 text-secondary px-1 py-0.5 rounded font-bold">
                            10mg
                          </span>
                        </div>
                        <p className="font-body-sm text-on-surface-variant text-[13px] mt-1">
                          1 pill every morning.
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <span className="text-[11px] font-label-md text-outline">
                            Refills: 5 Left
                          </span>
                          <button className="text-secondary font-label-md text-[12px] hover:underline">
                            Request Refill
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center border-2 border-dashed border-outline-variant/30 rounded-xl p-6 hover:border-secondary/50 transition-all cursor-pointer group">
                      <div className="text-center">
                        <span className="material-symbols-outlined text-outline group-hover:text-secondary transition-colors">
                          add_circle
                        </span>
                        <p className="font-label-md text-on-surface-variant group-hover:text-secondary mt-1 transition-colors">
                          Add Medication
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/5 shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="px-6 py-4 border-b border-outline-variant/5 flex justify-between items-center">
                    <h2 className="font-headline-md text-[20px] font-bold flex items-center gap-1">
                      <span className="material-symbols-outlined text-secondary">
                        verified_user
                      </span>{" "}
                      Vaccinations
                    </h2>
                  </div>
                  <div className="p-6 space-y-4 overflow-y-auto max-h-[400px] custom-scrollbar flex-1">
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-[12px]">
                          24
                        </div>
                        <div className="w-0.5 flex-1 bg-outline-variant/20 my-1"></div>
                      </div>
                      <div className="pb-4">
                        <h4 className="font-label-md text-primary">
                          Influenza (Flu)
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Annual dose • Oct 24, 2023
                        </p>
                        <span className="text-[10px] text-on-tertiary-container font-bold">
                          UP TO DATE
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-[12px]">
                          22
                        </div>
                        <div className="w-0.5 flex-1 bg-outline-variant/20 my-1"></div>
                      </div>
                      <div className="pb-4">
                        <h4 className="font-label-md text-primary">
                          COVID-19 Booster
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Bivalent dose • Sep 12, 2022
                        </p>
                        <span className="text-[10px] text-secondary font-bold">
                          BOOSTER RECOMMENDED
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-[12px]">
                          18
                        </div>
                        <div className="w-0.5 flex-1 bg-outline-variant/20 my-1"></div>
                      </div>
                      <div className="pb-4">
                        <h4 className="font-label-md text-primary">
                          Tetanus (Tdap)
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Booster dose • Jun 08, 2018
                        </p>
                        <span className="text-[10px] text-on-tertiary-container font-bold">
                          UP TO DATE
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-[12px]">
                          09
                        </div>
                      </div>
                      <div className="pb-4">
                        <h4 className="font-label-md text-primary">
                          Hepatitis B Series
                        </h4>
                        <p className="font-body-sm text-[12px] text-on-surface-variant">
                          Final dose • Mar 20, 2009
                        </p>
                        <span className="text-[10px] text-on-tertiary-container font-bold">
                          LIFETIME VALIDITY
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-surface-container-low mt-auto">
                    <button className="w-full text-center font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors">
                      Download Immunization Record (PDF)
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <div className="relative overflow-hidden rounded-2xl bg-primary-container p-8 text-on-primary min-h-[240px] flex flex-col justify-center">
                  <div className="relative z-10 max-w-2xl">
                    <h2 className="font-headline-lg text-headline-lg text-white mb-4">
                      Secure Data Sharing
                    </h2>
                    <p className="font-body-lg text-body-lg text-on-primary-container mb-6">
                      Need to share your records with a specialist or new
                      clinic? Generate a temporary secure access code for
                      healthcare providers that expires automatically.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-secondary-container text-on-secondary-container font-label-md text-label-md px-6 py-4 rounded-xl hover:shadow-xl transition-all active:scale-95">
                        Generate Access Code
                      </button>
                      <button className="bg-transparent border border-on-primary-container text-white font-label-md text-label-md px-6 py-4 rounded-xl hover:bg-white/10 transition-all">
                        Learn About Security
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <footer className="ml-64 bg-surface-container-highest w-auto py-8 border-t border-outline-variant">
          <div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col">
              <h4 className="font-headline-md text-headline-md font-bold text-primary">
                MedLink
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                © 2024 MedLink Healthcare Systems. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                HIPAA Compliance
              </a>
              <a
                className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Contact Support
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MedicalRecords;
