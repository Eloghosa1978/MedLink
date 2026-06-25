import React from 'react';

interface Appointment {
  id: string;
  time: string;
  period: 'AM' | 'PM';
  patientName: string;
  reason: string;
  isNext?: boolean;
  borderClass: string;
}

const DoctorDashboard: React.FC = () => {
  const appointments: Appointment[] = [
    {
      id: 'apt-1',
      time: '09:00',
      period: 'AM',
      patientName: 'Michael Chen',
      reason: 'Follow-up: Hypertension',
      isNext: true,
      borderClass: 'border-l-[#003d9b]',
    },
    {
      id: 'apt-2',
      time: '10:15',
      period: 'AM',
      patientName: 'Eleanor Vance',
      reason: 'Annual Physical',
      borderClass: 'border-l-[#00687a]',
    },
    {
      id: 'apt-3',
      time: '11:00',
      period: 'AM',
      patientName: 'James Wilson',
      reason: 'Consultation: Orthopedics',
      borderClass: 'border-l-[#c3c3d6]',
    },
    {
      id: 'apt-4',
      time: '01:30',
      period: 'PM',
      patientName: 'Sarah Connor',
      reason: 'Review Lab Results',
      borderClass: 'border-l-[#c3c3d6]',
    },
  ];

  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#c3c3d6] flex justify-between items-center w-full px-4 md:px-16 py-3 box-border transition-colors">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-variation-settings-fill">
            medical_services
          </span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="relative">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0052cc]">
            <img
              className="w-full h-full object-cover"
              alt="Dr. Sarah Smith professional portrait reference"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJE6Mnn_MVdSMRoX2RxzJU4HNxn2Q8yya1F838D_ytYgm9Z3bsa1V7_fr7yXeEk8PyGh20WVkaUOLWk-26r6vwQ9OpMNBWGoiBy5s9yhr_9kV0xWJd8WrQitpBejVSgscDsGR-r73erhcQs42blg9cAgrBSOSABGtbwoIgP3FCuG1fZYLbGOTtMs6d3f0UYb-dgnj4sWaxJU9chbjsTTSvvoK4vWaLiD9IeD6GBz_i5Z83pq_rNDYViC2Vb_0miAhVGIBySpo-3row"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="max-w-xl w-full mx-auto px-4 pt-6 box-border flex-grow">
        
        {/* Greeting Banner Segment */}
        <section className="mb-6 mt-1">
          <h2 className="text-2xl font-bold text-[#051a3e] tracking-tight mb-0.5">
            Welcome, Dr. Sarah Smith.
          </h2>
          <p className="text-xs text-[#434654]">You have a busy morning ahead.</p>
        </section>

        {/* Telehealth Telemedicine Instant Quick Room Launcher */}
        <section className="mb-6">
          <button
            type="button"
            className="w-full relative overflow-hidden bg-[#0052cc] text-white rounded-xl p-5 flex items-center justify-between border-none text-left cursor-pointer shadow-sm active:scale-[0.99] transition-transform"
          >
            <div className="relative z-10 flex flex-col items-start">
              <span className="text-base font-bold flex items-center gap-1.5">
                <span className="material-symbols-outlined font-variation-settings-fill">video_chat</span>
                Open Virtual Room
              </span>
              <span className="text-[11px] opacity-90 mt-1">Start your next session instantly</span>
            </div>
            <div className="relative z-10 bg-white/20 p-2 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
            {/* Subtle decorative internal background element */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none"></div>
          </button>
        </section>

        {/* Operational Statistics Bento Summary Analytics Row Grid */}
        <section className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-[#f1f3ff] rounded-xl p-4 border border-[#c3c3d6]/50">
            <div className="flex items-center gap-2 mb-1 text-[#003d9b]">
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">Today</span>
            </div>
            <p className="text-3xl font-bold text-[#051a3e] m-0 leading-tight">8</p>
            <p className="text-[11px] text-[#434654] m-0 mt-0.5 font-medium">Today's Appointments</p>
          </div>

          <div className="bg-[#f1f3ff] rounded-xl p-4 border border-[#c3c3d6]/50">
            <div className="flex items-center gap-2 mb-1 text-[#00687a]">
              <span className="material-symbols-outlined text-lg">person_search</span>
              <span className="text-[10px] font-bold tracking-wider uppercase">Network</span>
            </div>
            <p className="text-3xl font-bold text-[#051a3e] m-0 leading-tight">154</p>
            <p className="text-[11px] text-[#434654] m-0 mt-0.5 font-medium">Total Patients</p>
          </div>
        </section>

        {/* Daily Patient Consultation Workflow Tracker Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-3.5">
            <h3 className="text-base font-bold text-[#051a3e] m-0">Today's Schedule</h3>
            <button type="button" className="text-[#003d9b] bg-transparent border-none text-xs font-bold hover:underline cursor-pointer">
              View All
            </button>
          </div>

          {/* Chronological Vertical List Array mapping */}
          <div className="space-y-3">
            {appointments.map((apt) => (
              <div
                key={apt.id}
                className={`bg-white rounded-xl border-l-4 ${apt.borderClass} shadow-sm p-4 flex items-center justify-between`}
              >
                <div className="flex gap-4 items-center min-w-0 flex-1">
                  <div className={`flex flex-col items-center justify-center min-w-[54px] ${apt.isNext ? 'text-[#003d9b]' : 'text-[#434654]'}`}>
                    <span className="text-base font-bold leading-none">{apt.time}</span>
                    <span className="text-[10px] font-bold mt-0.5 tracking-wider">{apt.period}</span>
                  </div>
                  <div className="h-8 w-px bg-[#c3c3d6]/40 shrink-0"></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-[#051a3e] m-0 truncate">{apt.patientName}</p>
                    <p className="text-xs text-[#434654] m-0 mt-0.5 truncate">{apt.reason}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {apt.isNext && (
                    <span className="bg-[#ffdad6] text-[#410002] px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider">
                      NEXT
                    </span>
                  )}
                  <span className="material-symbols-outlined text-[#737685] cursor-pointer hover:text-[#051a3e]">
                    more_vert
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Micro-Contextual Vibe / Weather Operating Load Monitor Status Indicator */}
        <section className="mb-6">
          <div className="bg-white border border-[#c3c3d6] rounded-2xl p-4 overflow-hidden relative shadow-sm">
            <div className="flex items-center gap-4 relative z-10">
              <div className="bg-[#adecff] text-[#001f26] p-2 rounded-full flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined font-variation-settings-fill text-xl">wb_sunny</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-bold text-[#051a3e] m-0">A Clear Day for Care</p>
                <p className="text-xs text-[#434654] m-0 mt-0.5">The clinic is operating at normal capacity.</p>
              </div>
            </div>
            {/* Abstract fluid vector path decoration element */}
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 pointer-events-none flex items-center justify-end">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
                <path
                  d="M47.7,-64.1C60.4,-57.1,68.4,-41.2,74.7,-24.5C80.9,-7.7,85.5,10,80.7,25.8C75.8,41.6,61.6,55.5,45.8,64.2C30.1,72.9,12.8,76.4,-3.2,80.8C-19.3,85.2,-34.1,90.4,-48.3,85.6C-62.5,80.8,-76.1,65.9,-82.2,49C-88.3,32.1,-87,13.2,-81.4,-3.2C-75.8,-19.7,-65.9,-33.6,-54,-41.8C-42,-50,-28.1,-52.4,-14.2,-60C-0.3,-67.6,13.6,-80.4,30.3,-78.9C47,-77.4,66.4,-61.5,47.7,-64.1Z"
                  fill="#00687a"
                  transform="translate(130 100)"
                ></path>
              </svg>
            </div>
          </div>
        </section>
      </main>

      {/* Global Quick Capture System Action FAB Core */}
      <button
        type="button"
        className="fixed right-4 bottom-24 bg-[#003d9b] text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg active:scale-95 transition-transform border-none cursor-pointer z-40"
      >
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>

      {/* ==================== BOTTOM TAB APPARATUS HUB NAV BAR ==================== */}
      <nav className="bg-white border-t border-[#c3c3d6] shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] fixed bottom-0 left-0 w-full h-[72px] flex justify-around items-center px-2 pb-5 z-50 rounded-t-xl box-border transition-all">
        <a
          className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 scale-95 no-underline"
          href="#home"
        >
          <span className="material-symbols-outlined font-variation-settings-fill">dashboard</span>
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#schedule">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-medium mt-0.5">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#patients">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-[10px] font-medium mt-0.5">Patients</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#alerts">
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ba1a1a] rounded-full border border-white"></span>
          </div>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
        </a>
      </nav>

      {/* Font fill variables block adjustments */}
      <style>{`
        .font-variation-settings-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default DoctorDashboard;