import React from 'react';

const PatientDashboard: React.FC = () => {
  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="bg-[#faf9ff] fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 border-b border-[#c3c3d6] box-border transition-shadow">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-semibold">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#e1e8ff] border border-[#c3c3d6] overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            alt="User profile avatar" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_-R85ofLsPNYJbA3FjFwHfo8vqJCtNU5A0aunHb7rabGKcXgacyhdipqxV5NJsaV3TrA2aJ1dssLC_Se4OcpNgpf1Qd7oROQ0-JqE-zmopjFoQ5Ev0ubmpKZmLLoX7oXQzgcq0XfvNGCTqUiXCTljACWkvekF4sO4AFBehTXhLVCQiV-0i7zRB6u5cnDGNHyxaWcfe77A0Tm2WOSEZMnXIIeYKwmzjH4SVyvD33JvTL0sknhru_yQbd41ijph2drUPwjs_lx2pQv6"
          />
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="mt-20 px-4 flex flex-col gap-6 max-w-md w-full mx-auto box-border flex-grow">
        
        {/* Greeting Heading Section */}
        <section className="mt-2">
          <h2 className="text-2xl font-bold text-[#051a3e] tracking-tight">Hello, Alex.</h2>
          <p className="text-sm text-[#434654]">Welcome back to your health overview.</p>
        </section>

        {/* Next Appointment Premium Widget */}
        <section>
          <div className="relative overflow-hidden rounded-xl bg-[#0052cc] p-5 shadow-md border border-[#003d9b]/10 text-white">
            {/* Background Accent Sphere */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#6ae1ff] opacity-20 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="text-[10px] font-bold text-[#003d9b] bg-white rounded-full px-2.5 py-0.5 mb-3 inline-block tracking-wider">
                  NEXT APPOINTMENT
                </span>
                <h3 className="text-lg font-bold text-white leading-tight">Dr. Sarah Smith</h3>
                <p className="text-xs text-[#c4d2ff] mt-0.5">General Practitioner</p>
              </div>
              <div className="bg-white/20 p-2.5 rounded-lg backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined text-white">calendar_today</span>
              </div>
            </div>
            
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[#c4d2ff]/80 tracking-wider">WHEN</span>
                <span className="text-sm font-semibold text-white">Tomorrow, 10 AM</span>
              </div>
              <button type="button" className="bg-[#6ae1ff] text-[#006374] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#adecff] transition-colors border-none cursor-pointer shadow-sm">
                DETAILS
              </button>
            </div>
          </div>
        </section>

        {/* Bento Style Quick Links Grid Layout */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            
            {/* Search Tile */}
            <div className="bg-white border border-[#c3c3d6] p-4 rounded-xl flex flex-col justify-between h-32 hover:bg-[#f1f3ff] transition-all cursor-pointer group shadow-sm">
              <div className="bg-[#00687a]/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#00687a]">person_search</span>
              </div>
              <div className="flex justify-between items-end w-full">
                <p className="text-sm font-bold text-[#051a3e] m-0">Search Doctors</p>
                <span className="material-symbols-outlined text-[#434654] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>

            {/* Records Tile */}
            <div className="bg-white border border-[#c3c3d6] p-4 rounded-xl flex flex-col justify-between h-32 hover:bg-[#f1f3ff] transition-all cursor-pointer group shadow-sm">
              <div className="bg-[#7b2600]/10 w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#7b2600]">description</span>
              </div>
              <div className="flex justify-between items-end w-full">
                <p className="text-sm font-bold text-[#051a3e] m-0">My Records</p>
                <span className="material-symbols-outlined text-[#434654] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </div>
            </div>

          </div>
        </section>

        {/* Recent Urgent Health Alerts Section */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold text-[#051a3e]">Recent Health Alerts</h3>
            <button type="button" className="text-[#003d9b] font-bold text-xs tracking-wider bg-transparent border-none cursor-pointer hover:underline">
              SEE ALL
            </button>
          </div>
          
          <div className="bg-[#ffdad6]/40 border border-[#ffb4ab] p-4 rounded-xl flex items-start gap-3 shadow-sm">
            <div className="bg-[#ba1a1a] p-2 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-white text-base font-variation-settings-fill">vaccines</span>
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-[#410002]">Vaccination reminder</h4>
              <p className="text-xs text-[#410002]/80 mt-1 leading-relaxed">
                Your seasonal flu shot is due this month. Schedule an appointment at your convenience.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER CONTENT AREA ==================== */}
      <footer className="w-full pt-6 pb-8 bg-white border-t border-[#c3c3d6] px-4 box-border mb-16 text-center">
        <div className="max-w-md mx-auto flex flex-col gap-3">
          <span className="text-xs text-[#434654]">© 2026 MedLink Healthcare Solutions. All rights reserved.</span>
          <div className="flex justify-center gap-4">
            <a className="text-xs font-semibold text-[#003d9b] no-underline hover:underline" href="#privacy">Privacy Policy</a>
            <a className="text-xs font-semibold text-[#003d9b] no-underline hover:underline" href="#support">Support</a>
          </div>
        </div>
      </footer>

      {/* ==================== STICKY BOTTOM NAVIGATION ANCHOR ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] bg-white border-t border-[#c3c3d6] shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] flex justify-around items-center px-2 z-50 rounded-t-xl box-border">
        
        {/* Dashboard Active Navigation Item */}
        <div className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 cursor-pointer transition-all active:scale-95">
          <span className="material-symbols-outlined font-variation-settings-fill">dashboard</span>
          <span className="text-[10px] font-bold mt-0.5">Home</span>
        </div>
        
        {/* Inactive Schedule Navigation Item */}
        <div className="flex flex-col items-center justify-center text-[#434654] hover:bg-[#f1f3ff] rounded-full p-2 w-16 transition-colors cursor-pointer active:scale-95">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-medium mt-0.5">Schedule</span>
        </div>
        
        {/* Inactive Doctors Navigation Item */}
        <div className="flex flex-col items-center justify-center text-[#434654] hover:bg-[#f1f3ff] rounded-full p-2 w-16 transition-colors cursor-pointer active:scale-95">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-[10px] font-medium mt-0.5">Doctors</span>
        </div>
        
        {/* Inactive Alerts Navigation Item with Badge */}
        <div className="flex flex-col items-center justify-center text-[#434654] hover:bg-[#f1f3ff] rounded-full p-2 w-16 transition-colors cursor-pointer relative active:scale-95">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
          {/* Urgent Notification Counter Dot */}
          <div className="absolute top-1.5 right-4 w-2 h-2 bg-[#ba1a1a] rounded-full border border-white"></div>
        </div>

      </nav>

      {/* Embedded configuration style injection layer */}
      <style>{`
        .font-variation-settings-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default PatientDashboard;