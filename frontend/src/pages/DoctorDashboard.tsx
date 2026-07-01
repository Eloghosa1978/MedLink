const DoctorDashboard = () => {
  return (
    <div className="bg-background text-on-background min-h-screen flex">
      <aside className="bg-black w-64 bg-clinical-navy text-white flex flex-col hidden lg:flex shrink-0">
        <div className="p-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary-container text-3xl">
            medical_services
          </span>
          <span className="text-xl font-bold tracking-tight">MedLink</span>
        </div>
        <nav className="flex-1 mt-4">
          <ul className="space-y-1">
            <li>
              <a
                className="flex items-center gap-3 px-6 py-3 sidebar-active text-white"
                href="#"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span className="font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors text-slate-300"
                href="#"
              >
                <span className="material-symbols-outlined">
                  calendar_month
                </span>
                <span className="font-medium">Appointments</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors text-slate-300"
                href="#"
              >
                <span className="material-symbols-outlined">groups</span>
                <span className="font-medium">Patients</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors text-slate-300"
                href="#"
              >
                <span className="material-symbols-outlined">
                  clinical_notes
                </span>
                <span className="font-medium">Medical Records</span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors text-slate-300"
                href="#"
              >
                <span className="material-symbols-outlined">mail</span>
                <span className="font-medium">Messaging</span>
                <span className="ml-auto bg-error text-[10px] px-1.5 py-0.5 rounded-full">
                  4
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex items-center gap-3 px-6 py-3 hover:bg-white/5 transition-colors text-slate-300"
                href="#"
              >
                <span className="material-symbols-outlined">settings</span>
                <span className="font-medium">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
              <span className="material-symbols-outlined">account_circle</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">
                Dr. Julianne Moore
              </p>
              <p className="text-xs text-slate-400 truncate">Cardiologist</p>
            </div>
            <button className="ml-auto text-slate-400 hover:text-white">
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-outline-variant flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden text-on-surface">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative w-full max-w-md">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-secondary/20 transition-all"
                placeholder="Search patient records, reports..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center text-outline hover:bg-surface-container rounded-full relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-outline-variant"></div>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-surface-container p-1 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">
                JM
              </div>
              <span className="text-sm font-medium hidden sm:inline">
                Dr. Moore
              </span>
              <span className="material-symbols-outlined text-outline">
                expand_more
              </span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-clinical-navy">
                Good morning, Dr. Moore
              </h1>
              <p className="text-on-surface-variant">
                Here's what's happening with your practice today.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white border border-outline-variant rounded-lg text-sm font-medium hover:bg-surface-container-low transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  download
                </span>{" "}
                Export Data
              </button>
              <button className="px-4 py-2 bg-secondary text-white rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">add</span>{" "}
                New Appointment
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="text-xs font-medium text-on-tertiary-container bg-tertiary-fixed px-2 py-1 rounded">
                  +12%
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">Total Patients</p>
              <h3 className="text-2xl font-bold text-clinical-navy">1,284</h3>
            </div>
            <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                </div>
                <span className="text-xs font-medium text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                  Today
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">
                Today's Appointments
              </p>
              <h3 className="text-2xl font-bold text-clinical-navy">14</h3>
            </div>
            <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <span className="material-symbols-outlined">
                    pending_actions
                  </span>
                </div>
                <span className="text-xs font-medium text-orange-700 bg-orange-50 px-2 py-1 rounded">
                  High
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">Pending Reports</p>
              <h3 className="text-2xl font-bold text-clinical-navy">08</h3>
            </div>
            <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">
                    chat_bubble_outline
                  </span>
                </div>
                <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded">
                  New
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">New Messages</p>
              <h3 className="text-2xl font-bold text-clinical-navy">04</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl border border-outline-variant shadow-sm flex flex-col">
              <div className="p-6 border-b border-outline-variant flex items-center justify-between">
                <h2 className="text-lg font-bold text-clinical-navy">
                  Upcoming Appointments
                </h2>
                <a
                  className="text-secondary text-sm font-medium hover:underline"
                  href="#"
                >
                  View All
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-low text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
                      <th className="px-6 py-3">Patient</th>
                      <th className="px-6 py-3">Time</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant">
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-clinical-navy">
                            AS
                          </div>
                          <div>
                            <p className="text-sm font-semibold">
                              Adrian Smith
                            </p>
                            <p className="text-xs text-on-surface-variant">
                              Routine Checkup
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">09:30 AM</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          <span className="material-symbols-outlined text-[14px]">
                            videocam
                          </span>{" "}
                          Video
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-secondary/90">
                          Join
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-clinical-navy">
                            EB
                          </div>
                          <div>
                            <p className="text-sm font-semibold">
                              Elena Belova
                            </p>
                            <p className="text-xs text-on-surface-variant">
                              Post-Surgery Follow-up
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">11:00 AM</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                          <span className="material-symbols-outlined text-[14px]">
                            person
                          </span>{" "}
                          In-person
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="border border-outline-variant text-clinical-navy text-xs font-bold px-3 py-1.5 rounded hover:bg-surface-container-low">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-clinical-navy">
                            MC
                          </div>
                          <div>
                            <p className="text-sm font-semibold">Mark Chen</p>
                            <p className="text-xs text-on-surface-variant">
                              Consultation
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">01:45 PM</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                          <span className="material-symbols-outlined text-[14px]">
                            videocam
                          </span>{" "}
                          Video
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="border border-outline-variant text-clinical-navy text-xs font-bold px-3 py-1.5 rounded hover:bg-surface-container-low">
                          View
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-xs text-clinical-navy">
                            DR
                          </div>
                          <div>
                            <p className="text-sm font-semibold">David Ross</p>
                            <p className="text-xs text-on-surface-variant">
                              Lab Results Review
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm">03:30 PM</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                          <span className="material-symbols-outlined text-[14px]">
                            person
                          </span>{" "}
                          In-person
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="border border-outline-variant text-clinical-navy text-xs font-bold px-3 py-1.5 rounded hover:bg-surface-container-low">
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-outline-variant shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-clinical-navy">
                    Daily Schedule
                  </h2>
                  <span className="text-xs text-on-surface-variant font-medium">
                    May 24, 2024
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-xs font-bold text-on-surface-variant w-12 pt-1">
                      08:00
                    </div>
                    <div className="flex-1 p-2 bg-surface-container-low rounded border-l-4 border-secondary">
                      <p className="text-xs font-semibold">Staff Meeting</p>
                      <p className="text-[10px] text-on-surface-variant">
                        Conference Room B
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-xs font-bold text-on-surface-variant w-12 pt-1">
                      09:30
                    </div>
                    <div className="flex-1 p-2 bg-blue-50 rounded border-l-4 border-blue-400">
                      <p className="text-xs font-semibold">
                        Patient: Adrian Smith
                      </p>
                      <p className="text-[10px] text-blue-700">Video Call</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-xs font-bold text-on-surface-variant w-12 pt-1">
                      12:30
                    </div>
                    <div className="flex-1 p-2 bg-surface-container-low rounded border-l-4 border-slate-300">
                      <p className="text-xs font-semibold">Lunch Break</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-xs font-bold text-on-surface-variant w-12 pt-1">
                      14:00
                    </div>
                    <div className="flex-1 p-2 bg-surface-container-low rounded border-l-4 border-clinical-navy">
                      <p className="text-xs font-semibold">Dept. Review</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-outline-variant shadow-sm">
                <div className="p-4 border-b border-outline-variant">
                  <h2 className="text-sm font-bold text-clinical-navy">
                    Patient Requests
                  </h2>
                </div>
                <div className="divide-y divide-outline-variant">
                  <div className="p-4 hover:bg-surface-container-low transition-colors">
                    <div className="flex gap-3">
                      <span className="material-symbols-outlined text-secondary">
                        prescriptions
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold">
                          Prescription Renewal
                        </p>
                        <p className="text-[11px] text-on-surface-variant mb-2">
                          Sarah Jenkins - Lisinopril 20mg
                        </p>
                        <div className="flex gap-2">
                          <button className="px-2 py-1 bg-secondary text-white text-[10px] font-bold rounded">
                            Approve
                          </button>
                          <button className="px-2 py-1 border border-outline-variant text-[10px] font-bold rounded">
                            Review
                          </button>
                        </div>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        2h ago
                      </span>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-surface-container-low transition-colors">
                    <div className="flex gap-3">
                      <span className="material-symbols-outlined text-orange-500">
                        lab_research
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold">New Lab Results</p>
                        <p className="text-[11px] text-on-surface-variant">
                          Mark Chen - Blood Panel
                        </p>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        4h ago
                      </span>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-surface-container-low transition-colors">
                    <div className="flex gap-3">
                      <span className="material-symbols-outlined text-blue-500">
                        contact_support
                      </span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold">General Inquiry</p>
                        <p className="text-[11px] text-on-surface-variant">
                          James Wilson - "Regarding post-op pain"
                        </p>
                      </div>
                      <span className="text-[10px] text-on-surface-variant">
                        Yesterday
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-3 text-center border-t border-outline-variant">
                  <button className="text-xs font-bold text-secondary hover:underline">
                    View All Requests
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;