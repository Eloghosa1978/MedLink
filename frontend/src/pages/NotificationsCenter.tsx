const NotificationsCenter = () => {
  return (
    <body className="bg-background text-on-background min-h-screen">
      <nav className="bg-surface border-b border-outline-variant/30 fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
          <div className="font-display-lg text-[24px] lg:text-display-lg font-bold text-primary">
            MedLink
          </div>
          <div className="hidden md:flex items-center gap-4">
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Services
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              Doctors
            </a>
            <a
              className="font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
              href="#"
            >
              About
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative group hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-body-sm w-64 focus:ring-2 focus:ring-secondary/20"
                placeholder="Search records..."
                type="text"
              />
            </div>
            <button className="flex items-center justify-center p-2 rounded-full hover:bg-surface-container transition-all relative">
              <span
                className="material-symbols-outlined text-secondary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                notifications
              </span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold overflow-hidden cursor-pointer">
              <img
                className="w-full h-full object-cover"
                data-alt="A professional studio portrait of a friendly-looking middle-aged male doctor with short brown hair, wearing a crisp white lab coat and a subtle smile. The lighting is soft and high-key, reflecting a clinical but approachable medical environment with a clean, light-blue background that matches the brand's corporate minimalist style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXM5DVgVHrA2nppEulOyTvuQzYJ14pgFiDJjdUASCTsvZME8xzb2y5rJWHuKG7tSzV95S_4s-1YS8DIsZBV6J9G9Xr956lHzL5q59lA7b-w2vllG408Hb8oyhGqj2wpursKCDh7FvF3B3X1jurGdjTOuznRCfmtWRHWy-zBMRP9sqJzFxLyVhU-t-jHeO0lL_K_NotveSynIUmUkChZ3bV97MWN4Ywz962n_iXLOiu6PZ1zsnyhbOpgzdLvmTLjTdOi9Sll8ZChFe-"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="flex max-w-[1440px] mx-auto pt-[72px]">
        <aside className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-64 bg-surface-container-lowest border-r border-outline-variant/20 flex flex-col p-3 z-40 hidden lg:flex">
          <div className="mb-6 px-1 pt-4">
            <h2 className="font-headline-md text-[18px] font-bold text-primary">
              Patient Portal
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant opacity-70">
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
              <span className="material-symbols-outlined">calendar_today</span>{" "}
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
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">description</span>{" "}
              Medical Records
            </a>
            <a
              className="flex items-center gap-1 bg-secondary-container text-on-secondary-container rounded-lg p-3 font-label-md text-label-md shadow-sm translate-x-1"
              href="#"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                notifications
              </span>{" "}
              Notifications
            </a>
            <a
              className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>{" "}
              Settings
            </a>
          </nav>
          <div className="mt-auto border-t border-outline-variant/20 pt-3">
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

        <main className="flex-1 lg:ml-64 p-margin-mobile md:p-margin-desktop bg-background min-h-[calc(100vh-72px)]">
          <div className="max-w-[1000px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <h1 className="font-display-lg text-headline-lg text-primary mb-1">
                  Notification Center
                </h1>
                <p className="font-body-md text-on-surface-variant max-w-xl">
                  Stay updated with your latest appointments, laboratory
                  findings, and medical prescriptions in real-time.
                </p>
              </div>
              <div className="flex gap-1">
                <button className="flex items-center gap-1 px-4 py-1 bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant rounded-lg transition-all font-label-md text-label-md border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[20px]">
                    done_all
                  </span>
                  Mark All Read
                </button>
                <button className="flex items-center gap-1 px-4 py-1 bg-secondary text-on-secondary rounded-lg transition-all font-label-md text-label-md shadow-lg shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]">
                  <span className="material-symbols-outlined text-[20px]">
                    tune
                  </span>
                  Preferences
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-6">
              <div className="md:col-span-3 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm flex flex-wrap items-center gap-3">
                <button className="px-4 py-2 bg-primary text-on-primary rounded-full font-label-md text-label-md">
                  All (12)
                </button>
                <button className="px-4 py-2 bg-surface hover:bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md border border-outline-variant/30 transition-colors">
                  Appointments
                </button>
                <button className="px-4 py-2 bg-surface hover:bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md border border-outline-variant/30 transition-colors">
                  Lab Results
                </button>
                <button className="px-4 py-2 bg-surface hover:bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md border border-outline-variant/30 transition-colors">
                  Prescriptions
                </button>
                <button className="px-4 py-2 bg-surface hover:bg-surface-container-high text-on-surface-variant rounded-full font-label-md text-label-md border border-outline-variant/30 transition-colors">
                  System
                </button>
              </div>

              <div className="bg-secondary-container/10 p-4 rounded-xl border border-secondary/10 flex flex-col justify-center">
                <span className="font-label-md text-secondary uppercase tracking-widest text-[10px]">
                  Unread
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-display-lg font-bold text-secondary">
                    04
                  </span>
                  <span className="text-on-surface-variant text-body-sm">
                    New alerts
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-md">
              <div className="flex items-center gap-4 mb-3">
                <span className="font-label-md text-label-md text-on-surface-variant/60 uppercase">
                  Today
                </span>
                <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
              </div>

              <div className="notification-card bg-surface-container-lowest border border-outline-variant/10 p-4 rounded-xl flex gap-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                  <span
                    className="material-symbols-outlined text-secondary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    science
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline-md text-body-lg font-bold text-primary">
                      Lab Results Available: Complete Blood Count
                    </h3>
                    <span className="text-body-sm text-on-surface-variant/60">
                      10:45 AM
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-4 max-w-2xl">
                    Your latest blood work results from the March 12th
                    collection are now available for review. Dr. Aris has
                    flagged these for your attention.
                  </p>
                  <div className="flex gap-3">
                    <button className="px-4 py-1.5 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md shadow-sm">
                      View Report
                    </button>
                    <button className="px-4 py-1.5 border border-outline-variant text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface-container transition-colors">
                      Mark as Read
                    </button>
                  </div>
                </div>
              </div>

              <div className="notification-card bg-surface-container-lowest border border-outline-variant/10 p-4 rounded-xl flex gap-4 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary-container"></div>
                <div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container">
                    medication
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline-md text-body-lg font-bold text-primary">
                      Prescription Refill Reminder
                    </h3>
                    <span className="text-body-sm text-on-surface-variant/60">
                      08:30 AM
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant mb-3">
                    Your prescription for{" "}
                    <span className="font-semibold text-primary">
                      Lisinopril 10mg
                    </span>{" "}
                    is running low. Would you like to request a refill from City
                    Central Pharmacy?
                  </p>
                  <div className="flex gap-3">
                    <button className="font-label-md text-label-md text-secondary hover:underline underline-offset-4">
                      Refill Now
                    </button>
                    <span className="text-outline-variant">•</span>
                    <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3 pt-4">
                <span className="font-label-md text-label-md text-on-surface-variant/60 uppercase">
                  Yesterday
                </span>
                <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
              </div>

              <div className="notification-card bg-surface/50 border border-outline-variant/10 p-4 rounded-xl flex gap-4 opacity-80 group grayscale-[0.3]">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    event_available
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                      Appointment Confirmed: Cardiology Follow-up
                    </h3>
                    <span className="text-body-sm text-on-surface-variant/60">
                      Mar 14, 2:15 PM
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant">
                    Confirmed with Dr. Sarah Jenkins for tomorrow at 10:00 AM.
                    Location: Medical Center East, Suite 402.
                  </p>
                  <div className="mt-3 flex items-center gap-1 px-3 py-1 bg-surface-container-high w-fit rounded-full">
                    <span className="material-symbols-outlined text-[14px] text-on-tertiary-container">
                      check_circle
                    </span>
                    <span className="text-[12px] font-medium text-on-tertiary-container">
                      Added to Calendar
                    </span>
                  </div>
                </div>
              </div>

              <div className="notification-card bg-surface/50 border border-outline-variant/10 p-4 rounded-xl flex gap-4 opacity-80 group">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface-variant">
                    security
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-headline-md text-body-lg font-bold text-on-surface">
                      New Login Detected
                    </h3>
                    <span className="text-body-sm text-on-surface-variant/60">
                      Mar 14, 09:02 AM
                    </span>
                  </div>
                  <p className="font-body-md text-on-surface-variant">
                    A new login to your Patient Portal was detected from a
                    Chrome browser on Windows in Seattle, WA. If this wasn't
                    you, please secure your account.
                  </p>
                </div>
              </div>

              <div className="hidden flex-col items-center justify-center py-8 bg-surface-container-lowest rounded-2xl border-2 border-dashed border-outline-variant/30">
                <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[40px] text-outline-variant">
                    notifications_off
                  </span>
                </div>
                <h4 className="font-headline-md text-primary">
                  All caught up!
                </h4>
                <p className="font-body-md text-on-surface-variant">
                  You have no new notifications to display right now.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-8 mb-8">
              <button className="px-8 py-3 rounded-full border border-outline text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md flex items-center gap-3">
                Load Previous Notifications
                <span className="material-symbols-outlined">expand_more</span>
              </button>
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
    </body>
  );
};

export default NotificationsCenter;
