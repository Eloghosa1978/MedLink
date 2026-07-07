import "react"

const PatientDashboard = () => {
  return (
    <div>
      <div className="bg-surface text-on-surface">
        <aside className="fixed left-0 top-0 h-screen flex flex-col p-3 z-40 h-full w-64 border-r border-outline-variant bg-surface-container-lowest shadow-sm">
          <div className="mb-6 px-3 pt-3">
            <h1 className="font-headline-md text-headline-md font-bold text-primary">
              MedLink
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Patient Portal
            </p>
          </div>
          <nav className="flex-1 space-y-1">
            <a
              className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 translate-x-1 transition-all duration-200"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="dashboard">
                dashboard
              </span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="calendar_today"
              >
                calendar_today
              </span>
              <span className="font-label-md text-label-md">Appointments</span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="monitoring"
              >
                monitoring
              </span>
              <span className="font-label-md text-label-md">
                Health Metrics
              </span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                data-icon="description"
              >
                description
              </span>
              <span className="font-label-md text-label-md">
                Medical Records
              </span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="settings">
                settings
              </span>
              <span className="font-label-md text-label-md">Settings</span>
            </a>
          </nav>
          <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/30">
            <button className="w-full bg-secondary text-on-secondary rounded-lg py-3 font-label-md text-label-md hover:opacity-90 transition-opacity mb-3">
              Book Appointment
            </button>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="help">
                help
              </span>
              <span className="font-label-md text-label-md">Support</span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined" data-icon="logout">
                logout
              </span>
              <span className="font-label-md text-label-md">Logout</span>
            </a>
          </div>
        </aside>

        <main className="ml-64 min-h-screen p-10 bg-surface max-w-[1400px]">
          <header className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Welcome back, Sarah Johnson
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Wednesday, October 23, 2024 • You have 2 notifications
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden md:block">
                <p className="font-label-md text-label-md text-on-surface">
                  Sarah Johnson
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Patient ID: #ML-8821
                </p>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20 p-0.5">
                <img
                  className="w-full h-full object-cover rounded-full"
                  data-alt="A professional headshot of a middle-aged woman with a friendly expression, set against a clean, minimalist medical office background. The lighting is soft and bright, emphasizing a calm and trustworthy atmosphere. She is wearing a simple blue blouse that complements the clinical yet empathetic corporate UI style of the MedLink brand."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNU4WRcgIFg6-oX8pDY8L7pZiKrer9kApYjrclFSZf5GqqSHAfN1bsA59Wr6WWiVd9hSbHg8kgYJlV7i1QFhzomq0_Izube6ot3mK53dvVHbsLUHPudIEdjFevGh_oK5heCT0TMRrZ3ECkluo1h7NLgk8yhEZd6HFzUL3ZnZxmfGmd11gvOpGrHGYrxBGteh9ZaOnVaRJBSvNnRD3XzLRhTycRMKtT7tgmRhZX4wpdBQMItpkRUW1BJ9nBN-F-73dIHoLlVIhGDTTZ"
                />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-12 gap-6">
            <section className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="metric-card bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span
                    className="material-symbols-outlined text-secondary"
                    data-icon="favorite"
                  >
                    favorite
                  </span>
                  <span className="px-1 py-1 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container font-label-md text-[10px]">
                    NORMAL
                  </span>
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Heart Rate
                </p>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="font-display-lg text-display-lg text-primary">
                    72
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    bpm
                  </span>
                </div>
                <div className="h-16 w-full opacity-60">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-on-tertiary-container/20 to-transparent rounded-lg flex items-end px-1 gap-1">
                    <div className="w-full bg-on-tertiary-container/40 h-[40%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[60%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[55%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[80%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[70%] rounded-t-sm"></div>
                  </div>
                </div>
              </div>

              <div className="metric-card bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span
                    className="material-symbols-outlined text-secondary"
                    data-icon="blood_pressure"
                  >
                    blood_pressure
                  </span>
                  <span className="px-1 py-1 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container font-label-md text-[10px]">
                    NORMAL
                  </span>
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Blood Pressure
                </p>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="font-display-lg text-display-lg text-primary">
                    118/76
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    mmHg
                  </span>
                </div>
                <div className="h-16 w-full opacity-60">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-on-tertiary-container/20 to-transparent rounded-lg flex items-end px-1 gap-1">
                    <div className="w-full bg-on-tertiary-container/40 h-[50%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[45%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[48%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[52%] rounded-t-sm"></div>
                    <div className="w-full bg-on-tertiary-container/40 h-[50%] rounded-t-sm"></div>
                  </div>
                </div>
              </div>

              <div className="metric-card bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <span
                    className="material-symbols-outlined text-secondary"
                    data-icon="weight"
                  >
                    weight
                  </span>
                  <span className="px-1 py-1 rounded-full bg-secondary-container/10 text-secondary font-label-md text-[10px]">
                    -2.4 lbs
                  </span>
                </div>
                <p className="font-label-md text-label-md text-on-surface-variant">
                  Weight History
                </p>
                <div className="flex items-baseline gap-1 my-1">
                  <span className="font-display-lg text-display-lg text-primary">
                    164.2
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    lbs
                  </span>
                </div>
                <div className="h-16 w-full opacity-60">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-on-tertiary-container/20 to-transparent rounded-lg flex items-end px-1 gap-1">
                    <div className="w-full bg-secondary/40 h-[90%] rounded-t-sm"></div>
                    <div className="w-full bg-secondary/40 h-[85%] rounded-t-sm"></div>
                    <div className="w-full bg-secondary/40 h-[82%] rounded-t-sm"></div>
                    <div className="w-full bg-secondary/40 h-[80%] rounded-t-sm"></div>
                    <div className="w-full bg-secondary/40 h-[78%] rounded-t-sm"></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="col-span-12 lg:col-span-4 bg-primary-container text-on-primary-container p-6 rounded-xl flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-label-md text-label-md text-on-primary-container opacity-80 uppercase tracking-widest">
                    Next Appointment
                  </span>
                  <span
                    className="material-symbols-outlined"
                    data-icon="video_call"
                  >
                    video_call
                  </span>
                </div>
                <div className="flex gap-4 items-center mb-6">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-variant">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="A sharp, clinical portrait of a male doctor in a white coat with a stethoscope around his neck. The image is set against a blurred medical background with a cool blue color palette to maintain the corporate medical aesthetic. He has a professional and reassuring demeanor, perfectly aligning with the MedLink identity."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYYvs3tRaUIWEGaVdwP4T4yoikRhW28R4ixDu6XdhgYqxrpj-G7b8V90T8j4a59MVLrrlfVLd3gBpQXA2fRkoliKa9PoQEQsMrKyGH1k2mxQwFdixTuYpGHbytTxtDSrwx0uxrJAN6r56yk3YygsSxYDaJ_8pi7U7YHJXxxQyD9Yc3UOxN-uIWUMogrs-OcMjpZ26vZjFo4Fm7Qqri-Vt3AK6fvYqzupepjgVwU3645lO9vWigekeLz50CO12JtZ_HxqnQaUt0Wtf3"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-white">
                      Dr. Aris Thorne
                    </h3>
                    <p className="font-body-sm text-body-sm opacity-80">
                      Cardiology Specialist
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-4 mb-8">
                  <div className="flex flex-col border-r border-white/20 pr-4">
                    <span className="font-label-md text-label-md opacity-60 uppercase text-[10px]">
                      Date
                    </span>
                    <span className="font-body-md text-body-md text-white">
                      Oct 24, 2024
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md opacity-60 uppercase text-[10px]">
                      Time
                    </span>
                    <span className="font-body-md text-body-md text-white">
                      10:30 AM (EST)
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-secondary text-white py-4 rounded-lg font-label-md text-label-md flex items-center justify-center gap-1 hover:bg-secondary/90 transition-all active:scale-[0.98]">
                <span
                  className="material-symbols-outlined"
                  data-icon="play_circle"
                >
                  play_circle
                </span>
                Join Video Consultation
              </button>
            </section>

            <section className="col-span-12 lg:col-span-6 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">
                  Daily Medications
                </h3>
                <button className="text-secondary font-label-md text-label-md hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low rounded-lg transition-colors border border-transparent hover:border-outline-variant/30">
                  <input
                    className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary"
                    type="checkbox"
                  />
                  <div className="flex-1">
                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      Lisinopril (10mg)
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Take 1 tablet after breakfast
                    </p>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    8:00 AM
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low rounded-lg transition-colors border border-transparent hover:border-outline-variant/30">
                  <input
                    defaultChecked
                    className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary opacity-50"
                    type="checkbox"
                  />
                  <div className="flex-1 opacity-50">
                    <p className="font-body-md text-body-md font-semibold text-on-surface line-through">
                      Multivitamin
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Take 1 capsule with water
                    </p>
                  </div>
                  <span className="font-label-md text-label-md text-on-tertiary-container bg-tertiary-fixed-dim/20 px-2 py-1 rounded flex items-center gap-1">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      data-icon="check_circle"
                    >
                      check_circle
                    </span>
                    Done
                  </span>
                </div>

                <div className="flex items-center gap-4 p-3 hover:bg-surface-container-low rounded-lg transition-colors border border-transparent hover:border-outline-variant/30">
                  <input
                    className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary"
                    type="checkbox"
                  />
                  <div className="flex-1">
                    <p className="font-body-md text-body-md font-semibold text-on-surface">
                      Atorvastatin (20mg)
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Take 1 tablet before bed
                    </p>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    10:00 PM
                  </span>
                </div>
              </div>
            </section>

            <section className="col-span-12 lg:col-span-6 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline-md text-headline-md text-primary">
                  Recent Lab Results
                </h3>
                <button className="text-secondary font-label-md text-label-md hover:underline">
                  Full History
                </button>
              </div>
              <div className="space-y-4">
                <div className="group flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl hover:bg-surface-container-low transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                      <span
                        className="material-symbols-outlined"
                        data-icon="biotech"
                      >
                        biotech
                      </span>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md font-semibold">
                        Complete Blood Count (CBC)
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Processed: Oct 18, 2024
                      </p>
                    </div>
                  </div>
                  <a
                    className="flex items-center gap-1 font-label-md text-label-md text-secondary group-hover:bg-secondary group-hover:text-white px-3 py-1.5 rounded-lg transition-all"
                    href="#"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="download"
                    >
                      download
                    </span>
                    PDF
                  </a>
                </div>

                <div className="group flex items-center justify-between p-4 bg-surface-container-low/50 rounded-xl hover:bg-surface-container-low transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-lg flex items-center justify-center">
                      <span
                        className="material-symbols-outlined"
                        data-icon="water_drop"
                      >
                        water_drop
                      </span>
                    </div>
                    <div>
                      <p className="font-body-md text-body-md font-semibold">
                        Lipid Panel
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Processed: Oct 15, 2024
                      </p>
                    </div>
                  </div>
                  <a
                    className="flex items-center gap-1 font-label-md text-label-md text-secondary group-hover:bg-secondary group-hover:text-white px-3 py-1.5 rounded-lg transition-all"
                    href="#"
                  >
                    <span
                      className="material-symbols-outlined text-[18px]"
                      data-icon="download"
                    >
                      download
                    </span>
                    PDF
                  </a>
                </div>
              </div>

              <div className="mt-6 p-4 bg-secondary-fixed/30 rounded-xl border border-secondary-fixed flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-secondary"
                  data-icon="info"
                >
                  info
                </span>
                <div>
                  <p className="font-label-md text-label-md text-on-secondary-fixed-variant">
                    Results Interpretation
                  </p>
                  <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant/80">
                    Your CBC results are within the normal range. Dr. Thorne
                    will discuss the Lipid Panel during your next visit.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="fixed bottom-margin-desktop right-margin-desktop flex flex-col gap-3 items-end">
            <button
              className="flex items-center gap-3 bg-white text-primary border border-outline-variant shadow-lg px-6 py-3 rounded-full hover:bg-surface-container-high transition-all group"
              id="quick-action-msg"
            >
              <span className="font-label-md text-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Message Doctor
              </span>
              <span
                className="material-symbols-outlined text-secondary"
                data-icon="chat_bubble"
              >
                chat_bubble
              </span>
            </button>
            <button className="flex items-center gap-3 bg-secondary text-white shadow-xl px-6 py-4 rounded-full hover:scale-105 transition-all group">
              <span className="font-label-md text-label-md">
                Book New Appointment
              </span>
              <span className="material-symbols-outlined" data-icon="add">
                add
              </span>
            </button>
          </div>
        </main>

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
export default PatientDashboard;
