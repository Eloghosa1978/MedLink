const AppointmentDetails = () => {
  return (
    <div>
      <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        <header className="bg-surface dark:bg-surface-container-low border-b border-outline-variant dark:border-outline-variant/10 shadow-sm dark:shadow-none sticky top-0 z-50">
          <div className="flex justify-between items-center w-full px-4 max-w-[1200px] mx-auto h-[72px]">
            <div className="flex items-center gap-4">
              <span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">
                MedLink
              </span>
              <nav className="hidden md:flex gap-4 ml-6">
                <a
                  className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md"
                  href="#"
                >
                  Services
                </a>
                <a
                  className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md"
                  href="#"
                >
                  Doctors
                </a>
                <a
                  className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md"
                  href="#"
                >
                  About
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <button className="px- h-[40px] font-label-md text-label-md text-secondary border border-secondary rounded-lg hover:bg-secondary-container/10 transition-all px-4">
                Emergency
              </button>
              <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A clean, professional studio headshot of a friendly medical patient in their early 40s, looking confidently at the camera against a neutral grey background. The lighting is soft and corporate, matching a modern healthcare application's aesthetic. High clarity, minimal shadows, very professional."
                  src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
                />
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-[1200px] mx-auto px-4 py-6 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <nav className="flex items-center gap-1 text-on-surface-variant font-label-md text-label-md mb-1">
                <a className="hover:text-secondary" href="#">
                  Dashboard
                </a>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <a className="hover:text-secondary" href="#">
                  Appointments
                </a>
                <span className="material-symbols-outlined text-[14px]">
                  chevron_right
                </span>
                <span className="text-on-surface">Details</span>
              </nav>
              <h1 className="font-headline-lg text-headline-lg text-on-surface">
                Appointment #12345 - Confirmed
              </h1>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-1 px- py-3 bg-surface-container-highest border border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-container-high transition-all active:scale-95 px-4">
                <span className="material-symbols-outlined">edit_calendar</span>
                <span className="font-label-md">Reschedule</span>
              </button>
              <button className="flex items-center gap-1 px- py-3 bg-error/5 border border-error/20 text-error rounded-lg hover:bg-error/10 transition-all active:scale-95 px-4">
                <span className="material-symbols-outlined">event_busy</span>
                <span className="font-label-md">Cancel</span>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden bg-primary-container text-on-primary-container p-6 rounded-xl shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            ></div>
            <div className="flex items-center gap-4 z-10">
              <div className="p-3 bg-secondary rounded-full flex items-center justify-center animate-pulse">
                <span
                  className="material-symbols-outlined text-white text-[32px]"
                  data-weight="fill"
                >
                  videocam
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md text-white">
                  Join your Video Consultation
                </h3>
                <p className="text-on-primary-container/80 font-body-md">
                  Scheduled to begin in 15 minutes. Ensure your camera and mic
                  are ready.
                </p>
              </div>
            </div>
            <button className="z-10 bg-secondary hover:bg-on-secondary-fixed-variant text-white font-label-md px-8 py-4 rounded-full shadow-lg transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-3 min-h-[48px]">
              <span className="font-label-md">Join Video Call</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-4 space-y-6">
              <div className="bg-surface-container-lowest border border-outline-variant/10 shadow-sm rounded-xl overflow-hidden">
                <div className="h-24 bg-secondary-container/20"></div>
                <div className="px-6 pb-6 -mt-12 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-4 border-surface-container-lowest overflow-hidden shadow-lg mb-3">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="A portrait of a professional female doctor in her late 50s, wearing a white medical coat and a stethoscope. She has a warm, empathetic expression. The background is a brightly lit, clean medical office with soft blue and white tones. High-end photography style, corporate but caring."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdxi_6isPfdNR6u8cyxZ_FWQ4u6GBVuEjdZpfXgifokgh1MP0pQHBaSvuhUxvlPR-cAd2ySKaszYwWZWNJEdZoHU37q6nRF3V2jXeCsnfAWlfNMU0ejXx1mayqtwT1cKDLKiQxwFgXQd9y_cb4aECpsV8yS1CJKoO-2z-X1cKY4j-jgkYfJJOQNVxFdaMU80vH61kGHilQuNbs9OMOYqJUGA5Vpp0BxgYcktUg01AgzXrLpG7hYrNVELI4K0lB-D2E4eSmZaR4CsAE"
                    />
                  </div>
                  <h2 className="font-headline-md text-headline-md">
                    Dr. Sarah Jenkins
                  </h2>
                  <p className="text-secondary font-label-md mb-md">
                    Senior Cardiologist, MD
                  </p>
                  <div className="w-full space-y-sm text-left pt-3 border-t border-outline-variant/10">
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        verified_user
                      </span>
                      <span className="font-body-sm">
                        Board Certified - 15+ Yrs Exp
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        mail
                      </span>
                      <span className="font-body-sm">
                        s.jenkins@medlink.com
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]">
                        call
                      </span>
                      <span className="font-body-sm">+1 (555) 902-1234</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest border border-outline-variant/10 shadow-sm rounded-xl p-4">
                <h3 className="font-label-md text-label-md mb-md text-on-surface-variant uppercase tracking-wider">
                  Previous Notes
                </h3>
                <div className="p-3 bg-surface-container-low rounded-lg border-l-4 border-secondary">
                  <p className="font-body-sm italic text-on-surface-variant">
                    "Patient reported minor palpitations during exercise.
                    Routine follow-up required to review ECG results from last
                    month."
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-6">
              <div className="bg-surface-container-lowest border border-outline-variant/10 shadow-sm rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-surface-container rounded">
                        <span className="material-symbols-outlined text-secondary">
                          calendar_today
                        </span>
                      </div>
                      <div>
                        <p className="font-label-md text-on-surface-variant">
                          Date
                        </p>
                        <p className="font-headline-md text-on-surface">
                          Monday, Oct 14, 2024
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-surface-container rounded">
                        <span className="material-symbols-outlined text-secondary">
                          schedule
                        </span>
                      </div>
                      <div>
                        <p className="font-label-md text-on-surface-variant">
                          Time
                        </p>
                        <p className="font-headline-md text-on-surface">
                          10:00 AM - 10:30 AM
                        </p>
                        <p className="font-body-sm text-on-surface-variant">
                          Pacific Daylight Time (PDT)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-surface-container rounded">
                        <span className="material-symbols-outlined text-secondary">
                          location_on
                        </span>
                      </div>
                      <div>
                        <p className="font-label-md text-on-surface-variant">
                          Location
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="px-1 py-[2px] bg-secondary-container/20 text-on-secondary-fixed-variant text-[10px] font-bold rounded uppercase">
                            Telemedicine
                          </span>
                          <p className="font-headline-md text-on-surface">
                            Virtual Suite 4
                          </p>
                        </div>
                        <a
                          className="text-secondary font-body-sm hover:underline"
                          href="#"
                        >
                          Test connection speed
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-surface-container rounded">
                        <span className="material-symbols-outlined text-secondary">
                          receipt_long
                        </span>
                      </div>
                      <div>
                        <p className="font-label-md text-on-surface-variant">
                          Billing Details
                        </p>
                        <p className="font-body-md text-on-surface">
                          Co-pay: $25.00 (Paid)
                        </p>
                        <button className="flex items-center gap-1 text-secondary font-label-md mt-1 hover:text-on-secondary-fixed-variant transition-colors">
                          <span className="material-symbols-outlined text-[18px]">
                            download
                          </span>
                          Download Receipt
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-outline-variant/10">
                  <h4 className="font-label-md text-on-surface-variant mb-3 uppercase">
                    Appointment Notes
                  </h4>
                  <p className="font-body-md text-on-surface leading-relaxed">
                    This is a follow-up appointment to discuss your recent
                    echocardiogram. Please have your current list of medications
                    ready to review. We will also discuss the lifestyle
                    adjustments discussed in September.
                  </p>
                </div>
              </div>

              <div className="space-y-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-md text-headline-md">
                    Linked Records &amp; Lab Results
                  </h3>
                  <button className="text-secondary font-label-md hover:underline">
                    View All Records
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="group bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 shadow-sm rounded-xl p-4 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-tertiary-fixed/20 rounded-lg flex items-center justify-center text-on-tertiary-container">
                        <span className="material-symbols-outlined">
                          lab_panel
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-label-md text-on-surface group-hover:text-secondary transition-colors">
                          Complete Blood Count
                        </h4>
                        <p className="font-body-sm text-on-surface-variant">
                          Analyzed Sept 28, 2024
                        </p>
                      </div>
                      <div className="px-1 py-[2px] bg-tertiary-fixed/30 text-on-tertiary-fixed-variant text-[10px] font-bold rounded">
                        NORMAL
                      </div>
                    </div>
                  </div>

                  <div className="group bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 shadow-sm rounded-xl p-4 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary-container/20 rounded-lg flex items-center justify-center text-secondary">
                        <span className="material-symbols-outlined">
                          description
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-label-md text-on-surface group-hover:text-secondary transition-colors">
                          Echocardiogram_Sept.pdf
                        </h4>
                        <p className="font-body-sm text-on-surface-variant">
                          2.4 MB • Image Scan
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant">
                        download
                      </span>
                    </div>
                  </div>

                  <div className="group bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 shadow-sm rounded-xl p-4 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant">
                        <span className="material-symbols-outlined">
                          radiology
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-label-md text-on-surface group-hover:text-secondary transition-colors">
                          Chest X-Ray Series
                        </h4>
                        <p className="font-body-sm text-on-surface-variant">
                          Uploaded Aug 15, 2024
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant">
                        visibility
                      </span>
                    </div>
                  </div>

                  <div className="group bg-surface-container-lowest border border-outline-variant/10 hover:border-secondary/30 shadow-sm rounded-xl p-4 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-on-tertiary-fixed-variant/10 rounded-lg flex items-center justify-center text-on-tertiary-fixed-variant">
                        <span className="material-symbols-outlined">
                          monitoring
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-label-md text-on-surface group-hover:text-secondary transition-colors">
                          Vitals Trend Report
                        </h4>
                        <p className="font-body-sm text-on-surface-variant">
                          Last 3 Months History
                        </p>
                      </div>
                      <span className="material-symbols-outlined text-on-surface-variant">
                        trending_up
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="bg-surface-container-highest w-full py-8 border-t border-outline-variant">
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

        <div className="lg:hidden hidden lg:flex fixed left-0 top-0 h-screen flex-col p-3 z-40 bg-surface-container-lowest border-r border-outline-variant/10 w-64">
          <div className="mb-6 px-3">
            <span className="font-headline-md text-headline-md font-bold text-primary">
              MedLink
            </span>
            <p className="text-on-surface-variant font-body-sm mt-1">
              Patient Portal
            </p>
          </div>
          <nav className="flex-1 space-y-1">
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 shadow-sm translate-x-1 transition-all duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="font-label-md">Appointments</span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">monitoring</span>
              <span className="font-label-md">Health Metrics</span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">description</span>
              <span className="font-label-md">Medical Records</span>
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="font-label-md">Settings</span>
            </a>
          </nav>
          <div className="pt-3 border-t border-outline-variant/10 space-y-1">
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">help</span>
              <span className="font-label-md">Support</span>
            </a>
            <a
              className="flex items-center gap-1 text-error p-3 hover:bg-error/5 rounded-lg transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-md">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
