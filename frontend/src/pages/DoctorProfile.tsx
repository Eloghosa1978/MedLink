import React from 'react';

const DoctorProfile: React.FC = () => {
  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="bg-[#faf9ff] border-b border-[#c3c3d6] flex justify-between items-center w-full px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <button type="button" className="p-2 hover:bg-[#e1e8ff] transition-colors rounded-full flex items-center justify-center border-none bg-transparent cursor-pointer">
            <span className="material-symbols-outlined text-[#003d9b]">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c3c3d6]">
          <img 
            className="w-full h-full object-cover" 
            alt="Doctor profile thumbnail" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQpQhGMoeptLc5OGSwlqSCP1AglnvQkMobELHID1pUi5V1J1pfIom9gGQ8Lkcq_MeGQZLhbBr7O8ZLAaB7fk_YFA9EOKNBx7vaZ3gt1wIRriQCepos7Aeq_26h_HDpsoBgVOQetHJuws9rA0revhguHAbW-0JVYC7y1DcGmpQ9aqEYz6QvNcvfMk-pHmfTg-MLeZ-qTcDGH2s4TIr0Crvbx8YWkK8OZDfEh_Fy7LqN8O1lMHflwr2rLEUPyOYjR0rRQUzmxlLGQ1PD"
          />
        </div>
      </header>

      {/* ==================== MAIN SECTION AREA ==================== */}
      <main className="max-w-md w-full mx-auto px-4 pt-6 box-border flex-grow">
        
        {/* Doctor Identity Block */}
        <section className="flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="w-24 h-24 rounded-xl overflow-hidden shadow-sm shrink-0 border border-[#c3c3d6]">
              <img 
                className="w-full h-full object-cover" 
                alt="Dr. Sarah Smith portrait" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACr8WHT880PUbA6fUsgy7XiQj10QO7qOJN7DPwte6XGQoL1J2gIT_ESYk98ddDIi_SzzqI8Drhtix79976-AxADEpSPYZf7k627qZe4UjKiGlnG56sUtrfAZz1OvdULv3ifP7UirX3VG5Q6f5-Y4U4vxU_UysffLI3l4ylDv-DsGfSzJtu7KZxLWJc50LeV5vNSqw3l5rRW-T9UGW7clw1RfUO92AnOlVKv0yzKdl80Gfz2lJ1KCCOfepUxslF7-4So52kO-EN-7S4"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-[#051a3e] leading-tight">Dr. Sarah Smith</h2>
              <p className="text-sm text-[#434654] mb-2 font-medium">General Practitioner</p>
              
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#003d9b] text-lg font-variation-settings-fill">star</span>
                <span className="text-xs font-bold text-[#051a3e]">4.9</span>
                <span className="text-xs text-[#737685]">(124 Reviews)</span>
              </div>
              
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="bg-[#6ae1ff] text-[#006374] px-2.5 py-0.5 rounded-full text-[11px] font-bold">15+ Yrs Exp</span>
                <span className="bg-[#e1e8ff] text-[#434654] px-2.5 py-0.5 rounded-full text-[11px] font-bold">Fluent English/Spanish</span>
              </div>
            </div>
          </div>
        </section>

        {/* Profile Narrative Section */}
        <section className="mt-6">
          <h3 className="text-base font-bold text-[#051a3e] mb-2">About</h3>
          <p className="text-sm text-[#434654] leading-relaxed">
            Dr. Sarah Smith is a highly experienced General Practitioner dedicated to providing compassionate, patient-centered care. She specializes in preventive medicine, chronic disease management, and mental wellness. Known for her clarity and reliability in diagnosis.
          </p>
          
          <div className="mt-4 p-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-[#003d9b] font-variation-settings-fill">location_on</span>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold text-[#737685] uppercase tracking-wider">Location</p>
              <p className="text-sm font-semibold text-[#051a3e] truncate">Rural Clinic A, Medical District</p>
            </div>
          </div>
        </section>

        {/* Calendar Grid Picker Section */}
        <section className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold text-[#051a3e]">Availability</h3>
            <div className="flex gap-1.5">
              <button type="button" className="p-1 hover:bg-[#e1e8ff] transition-colors rounded-lg border border-[#c3c3d6] bg-transparent flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-[#434654] text-xl">chevron_left</span>
              </button>
              <button type="button" className="p-1 hover:bg-[#e1e8ff] transition-colors rounded-lg border border-[#c3c3d6] bg-transparent flex items-center justify-center cursor-pointer">
                <span className="material-symbols-outlined text-[#434654] text-xl">chevron_right</span>
              </button>
            </div>
          </div>

          {/* Date Carousel Strip */}
          <div className="flex gap-3 overflow-x-auto pb-3 w-full scrollbar-none">
            {/* Active Day Card */}
            <div className="flex-shrink-0 w-16 h-20 bg-[#003d9b] text-white rounded-xl flex flex-col items-center justify-center shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-80">Mon</span>
              <span className="text-xl font-bold">12</span>
            </div>
            
            {/* Standard Day Cards */}
            <div className="flex-shrink-0 w-16 h-20 bg-white border border-[#c3c3d6] rounded-xl flex flex-col items-center justify-center hover:bg-[#f1f3ff] transition-all cursor-pointer">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737685]">Tue</span>
              <span className="text-xl font-bold text-[#051a3e]">13</span>
            </div>
            <div className="flex-shrink-0 w-16 h-20 bg-white border border-[#c3c3d6] rounded-xl flex flex-col items-center justify-center hover:bg-[#f1f3ff] transition-all cursor-pointer">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737685]">Wed</span>
              <span className="text-xl font-bold text-[#051a3e]">14</span>
            </div>
            <div className="flex-shrink-0 w-16 h-20 bg-white border border-[#c3c3d6] rounded-xl flex flex-col items-center justify-center hover:bg-[#f1f3ff] transition-all cursor-pointer">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737685]">Thu</span>
              <span className="text-xl font-bold text-[#051a3e]">15</span>
            </div>
            <div className="flex-shrink-0 w-16 h-20 bg-white border border-[#c3c3d6] rounded-xl flex flex-col items-center justify-center hover:bg-[#f1f3ff] transition-all cursor-pointer">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#737685]">Fri</span>
              <span className="text-xl font-bold text-[#051a3e]">16</span>
            </div>
          </div>

          {/* Hourly Time Slots Matrix */}
          <div className="mt-4">
            <p className="text-xs font-bold text-[#737685] uppercase tracking-wider mb-3">Select Time Slot</p>
            <div className="grid grid-cols-3 gap-3" id="slots-container">
              
              {/* Available Slot Item */}
              <button type="button" className="slot-btn py-3 rounded-lg border border-[#c3c3d6] bg-white text-[#051a3e] font-semibold text-sm hover:bg-[#e1e8ff] hover:border-[#003d9b] transition-colors cursor-pointer">
                09:00 AM
              </button>
              
              {/* Booked/Disabled Slot Item */}
              <button type="button" className="py-3 rounded-lg border border-[#c3c3d6] bg-[#e1e8ff] text-[#737685] font-semibold text-sm opacity-50 cursor-not-allowed" disabled>
                09:30 AM
              </button>
              
              <button type="button" className="slot-btn py-3 rounded-lg border border-[#c3c3d6] bg-white text-[#051a3e] font-semibold text-sm hover:bg-[#e1e8ff] hover:border-[#003d9b] transition-colors cursor-pointer">
                10:00 AM
              </button>
              
              <button type="button" className="slot-btn py-3 rounded-lg border border-[#c3c3d6] bg-white text-[#051a3e] font-semibold text-sm hover:bg-[#e1e8ff] hover:border-[#003d9b] transition-colors cursor-pointer">
                10:30 AM
              </button>
              
              <button type="button" className="py-3 rounded-lg border border-[#c3c3d6] bg-[#e1e8ff] text-[#737685] font-semibold text-sm opacity-50 cursor-not-allowed" disabled>
                11:00 AM
              </button>
              
              <button type="button" className="slot-btn py-3 rounded-lg border border-[#c3c3d6] bg-white text-[#051a3e] font-semibold text-sm hover:bg-[#e1e8ff] hover:border-[#003d9b] transition-colors cursor-pointer">
                11:30 AM
              </button>
              
              <button type="button" className="slot-btn py-3 rounded-lg border border-[#c3c3d6] bg-white text-[#051a3e] font-semibold text-sm hover:bg-[#e1e8ff] hover:border-[#003d9b] transition-colors cursor-pointer">
                02:00 PM
              </button>
              
              <button type="button" className="slot-btn py-3 rounded-lg border border-[#c3c3d6] bg-white text-[#051a3e] font-semibold text-sm hover:bg-[#e1e8ff] hover:border-[#003d9b] transition-colors cursor-pointer">
                02:30 PM
              </button>
              
              <button type="button" className="py-3 rounded-lg border border-[#c3c3d6] bg-[#e1e8ff] text-[#737685] font-semibold text-sm opacity-50 cursor-not-allowed" disabled>
                03:00 PM
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ==================== CONTROL ACTION CTA STICKY FOOTER ==================== */}
      <footer className="fixed bottom-0 left-0 w-full bg-[#faf9ff] px-4 py-4 border-t border-[#c3c3d6] flex flex-col gap-2 z-50 box-border shadow-[0px_-4px_12px_rgba(9,30,66,0.08)]">
        <div className="max-w-md w-full mx-auto flex flex-col gap-2">
          <button 
            type="button" 
            className="w-full bg-[#003d9b] text-white py-3.5 rounded-xl text-base font-bold shadow-md opacity-50 transition-all border-none cursor-not-allowed" 
            disabled 
            id="book-now-btn"
          >
            Book Appointment
          </button>
          <p className="text-center text-[11px] font-medium text-[#737685]">You won't be charged yet</p>
        </div>
      </footer>

      {/* Embedded configurations style layer block */}
      <style>{`
        .font-variation-settings-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default DoctorProfile;