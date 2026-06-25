import React, { useState } from 'react';

type TabView = 'upcoming' | 'past';

const AppointmentsOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabView>('upcoming');

  const switchTab = (view: TabView) => {
    setActiveTab(view);
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(5);
    }
  };

  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 bg-white border-b border-[#c3c3d6] box-border">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c3c3d6] bg-[#f1f3ff]">
          <img 
            className="w-full h-full object-cover" 
            alt="Doctor profile thumbnail reference" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-cTBvAvFlVZI4om_ORB_bYhB36K_6hSzDu5eXmEmRII0ZZO4OdHc3qsWoagpSSKmZ72dOMQa_TTTMRdIfGF1Kr1ult8GHryqU7kiXuVD46s33b0ES3huK-0hHKwVW4Ec4ZMUo7VLY7CtzGt78pLlR8EZvv3OlTHy-lkdf5mmM7zuR3NAplhnJxHqPWShnVWfWfuHdIedYKtDatcssvnCcioADH69OAgE2SjbB0vWQx-vAqtEGt6s9V4FbG9cf5CWku8DS29I_Wq3"
          />
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="flex-grow pt-20 px-4 max-w-md w-full mx-auto box-border">
        
        {/* Header Intro Title Section */}
        <section className="mb-4 mt-2">
          <h2 className="text-2xl font-bold text-[#051a3e] tracking-tight mb-0.5">Your Appointments</h2>
          <p className="text-xs text-[#434654]">Manage and view your medical history</p>
        </section>

        {/* Premium Styled Segmented Tab Switcher Control Matrix */}
        <div className="flex w-full bg-[#f1f3ff] rounded-xl p-1 mb-5 border border-[#c3c3d6]/30 box-border">
          <button 
            type="button"
            className={`flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              activeTab === 'upcoming' 
                ? 'bg-[#003d9b] text-white shadow-sm' 
                : 'bg-transparent text-[#434654] hover:bg-[#e1e8ff]'
            }`}
            onClick={() => switchTab('upcoming')}
          >
            Upcoming
          </button>
          <button 
            type="button"
            className={`flex-1 py-2 text-center rounded-lg text-xs font-bold transition-all border-none cursor-pointer ${
              activeTab === 'past' 
                ? 'bg-[#003d9b] text-white shadow-sm' 
                : 'bg-transparent text-[#434654] hover:bg-[#e1e8ff]'
            }`}
            onClick={() => switchTab('past')}
          >
            Past
          </button>
        </div>

        {/* Dynamic List Render Viewport Container */}
        <div className="space-y-3">
          
          {/* ==================== UPCOMING APPOINTMENTS PANEL ==================== */}
          {activeTab === 'upcoming' && (
            <div className="space-y-3 animate-fadeIn">
              
              {/* Upcoming Appointment Card 1 */}
              <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm active:opacity-80 transition-opacity">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-[#003d9b]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#003d9b]">event_available</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#051a3e] truncate">Dr. Sarah Smith</h3>
                      <p className="text-xs text-[#434654] truncate">General Practitioner</p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 bg-[#6ae1ff]/20 text-[#006374] rounded-full text-[10px] font-bold tracking-wider">
                    Confirmed
                  </span>
                </div>
                
                <div className="flex items-center gap-4 pt-3 border-t border-[#c3c3d6]/30 mt-3">
                  <div className="flex items-center gap-1 text-[#434654]">
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    <span className="text-xs font-medium">Oct 24, 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#434654]">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span className="text-xs font-medium">09:30 AM</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Appointment Card 2 */}
              <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm active:opacity-80 transition-opacity">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-[#003d9b]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#003d9b]">monitor_heart</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#051a3e] truncate">Dr. James Wilson</h3>
                      <p className="text-xs text-[#434654] truncate">Cardiology Specialist</p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 bg-[#6ae1ff]/20 text-[#006374] rounded-full text-[10px] font-bold tracking-wider">
                    Confirmed
                  </span>
                </div>
                
                <div className="flex items-center gap-4 pt-3 border-t border-[#c3c3d6]/30 mt-3">
                  <div className="flex items-center gap-1 text-[#434654]">
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    <span className="text-xs font-medium">Oct 28, 2024</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#434654]">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span className="text-xs font-medium">02:15 PM</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ==================== PAST HISTORICAL RECORDS PANEL ==================== */}
          {activeTab === 'past' && (
            <div className="space-y-3 animate-fadeIn">
              
              {/* Historical Past Appointment Completed Card */}
              <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 opacity-90 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-[#434654]/10 rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#737685]">check_circle</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#051a3e] truncate">Dr. Sarah Smith</h3>
                      <p className="text-xs text-[#434654] truncate">General Practitioner</p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 bg-[#e1e8ff] text-[#434654] rounded-full text-[10px] font-bold tracking-wider">
                    Completed
                  </span>
                </div>
                
                <div className="flex items-center gap-4 pt-3 border-t border-[#c3c3d6]/30 mt-3">
                  <div className="flex items-center gap-1 text-[#737685]">
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    <span className="text-xs font-medium">Sep 12, 2024</span>
                  </div>
                </div>
              </div>

              {/* Historical Past Appointment Cancelled Card */}
              <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 opacity-80 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 bg-[#ffdad6] rounded-lg flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#ba1a1a]">cancel</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#051a3e] truncate">Physiotherapy Unit</h3>
                      <p className="text-xs text-[#434654] truncate">Physical Rehab</p>
                    </div>
                  </div>
                  <span className="shrink-0 px-2.5 py-0.5 bg-[#ffdad6] text-[#410002] rounded-full text-[10px] font-bold tracking-wider">
                    Cancelled
                  </span>
                </div>
                
                <div className="flex items-center gap-4 pt-3 border-t border-[#c3c3d6]/30 mt-3">
                  <div className="flex items-center gap-1 text-[#737685]">
                    <span className="material-symbols-outlined text-base">calendar_month</span>
                    <span className="text-xs font-medium">Aug 30, 2024</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* Contextual Intake Floating Action Button Trigger Action (FAB) */}
      <button type="button" className="fixed right-4 bottom-24 w-14 h-14 bg-[#003d9b] text-white rounded-2xl shadow-lg flex items-center justify-center active:scale-95 transition-transform border-none cursor-pointer z-40">
        <span className="material-symbols-outlined text-2xl">add</span>
      </button>

      {/* ==================== GLOBAL FOOTER NAVIGATION STICKY ANCHOR ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-center px-2 pb-4 bg-white shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] border-t border-[#c3c3d6] box-border z-50 rounded-t-xl">
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#home">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 no-underline scale-95" href="#schedule">
          <span className="material-symbols-outlined font-variation-settings-fill">calendar_today</span>
          <span className="text-[10px] font-bold mt-0.5">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#doctors">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-[10px] font-medium mt-0.5">Doctors</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#alerts">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
        </a>
      </nav>

      {/* Micro-interaction helper styling styles */}
      <style>{`
        .font-variation-settings-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AppointmentsOverview;