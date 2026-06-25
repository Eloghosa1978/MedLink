import React from 'react';

const PatientHealthProfile: React.FC = () => {
  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#faf9ff] border-b border-[#c3c3d6] flex justify-between items-center px-4 py-3 box-border">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-variation-settings-fill">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="material-symbols-outlined text-[#434654] p-1 hover:bg-[#e1e8ff] transition-colors rounded-full border-none bg-transparent cursor-pointer text-xl">
            search
          </button>
          <div className="w-8 h-8 rounded-full bg-[#f1f3ff] border border-[#c3c3d6] overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              alt="User avatar slot" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN61C876XHRghCSBeHPKpWcovJLnEFBl0EyDcZEjXsoc2bKnMWIqEi9kuG98MtW-m807YxZEPxGvgFvJje6G1FTFpBEiINZLz7Iydo5jAB3WKM2nN6I_r75CoYxtCL0cciz0Kt_FT3_xpEjuGFoSsnHaQ30m7nUKJJ1JtWJk4Mq_IqIl6xYtw5abjv1Vz49TnRE9WwNk9MzoXFdPCz5XStaLOwEn-r9tdSIoj3Jt6fjBnxW8hadSHIe0WE_78bsPJu1_7Pg9kp3yjP"
            />
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="max-w-md w-full mx-auto px-4 mt-20 pt-4 box-border flex-grow">
        
        {/* Welcome Header Summary */}
        <section className="mb-6">
          <p className="text-[10px] font-bold text-[#003d9b] uppercase tracking-widest mb-1">Patient Dashboard</p>
          <h2 className="text-2xl font-bold text-[#051a3e] mb-1 tracking-tight">Patient Health Profile</h2>
          <p className="text-xs text-[#434654] leading-relaxed">Manage your clinical history and log active symptoms for your care team.</p>
        </section>

        {/* Section 1: Medical History Read-Only Records */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-[#051a3e]">Medical History</h3>
            <span className="text-[10px] font-bold text-[#003d9b] bg-[#003d9b]/10 px-2.5 py-0.5 rounded-full">Verified Record</span>
          </div>
          
          <div className="space-y-3">
            {/* Record 1 */}
            <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-[#6ae1ff]/20 p-2 rounded-lg shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#006374]">history_edu</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start w-full">
                    <h4 className="text-sm font-bold text-[#051a3e] truncate">Hypertension</h4>
                    <span className="text-xs text-[#737685] shrink-0 ml-2">Since 2019</span>
                  </div>
                  <p className="text-xs text-[#434654] mt-1 leading-relaxed">Managed with daily medication and lifestyle adjustments. Last check: Optimal.</p>
                  <div className="mt-2.5 flex">
                    <span className="inline-flex items-center px-2 py-0.5 bg-[#f1f3ff] rounded-full text-[9px] font-bold text-[#434654] uppercase tracking-wider">
                      Active Management
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Record 2 */}
            <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-[#7b2600]/10 p-2 rounded-lg shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#7b2600]">vaccines</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start w-full">
                    <h4 className="text-sm font-bold text-[#051a3e] truncate">Type 2 Diabetes</h4>
                    <span className="text-xs text-[#737685] shrink-0 ml-2">Since 2021</span>
                  </div>
                  <p className="text-xs text-[#434654] mt-1 leading-relaxed">A1C monitoring quarterly. Maintaining stable glycemic levels.</p>
                  <div className="mt-2.5 flex">
                    <span className="inline-flex items-center px-2 py-0.5 bg-[#f1f3ff] rounded-full text-[9px] font-bold text-[#434654] uppercase tracking-wider">
                      Monitor Regularly
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Record 3 */}
            <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="bg-[#003d9b]/10 p-2 rounded-lg shrink-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#003d9b]">healing</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start w-full">
                    <h4 className="text-sm font-bold text-[#051a3e] truncate">Knee Arthroscopy</h4>
                    <span className="text-xs text-[#737685] shrink-0 ml-2">March 2023</span>
                  </div>
                  <p className="text-xs text-[#434654] mt-1 leading-relaxed">Post-surgical recovery complete. Physical therapy concluded.</p>
                  <div className="mt-2.5 flex">
                    <span className="inline-flex items-center px-2 py-0.5 bg-[#f1f3ff] rounded-full text-[9px] font-bold text-[#434654] uppercase tracking-wider">
                      Resolved
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Current Symptoms Intake Form */}
        <section className="bg-white rounded-xl border border-[#c3c3d6] p-5 shadow-sm relative overflow-hidden">
          {/* Subtle watermark illustration background */}
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[80px] font-variation-settings-fill">assignment</span>
          </div>
          
          <h3 className="text-base font-bold text-[#051a3e] mb-1">Current Symptoms</h3>
          <p className="text-xs text-[#434654] mb-5 leading-relaxed">Briefly describe what you are feeling and rate the intensity.</p>
          
          <form className="space-y-5" id="symptoms-form">
            {/* Description Textarea Area */}
            <div className="space-y-1.5">
              <label className="block text-[11px] font-bold text-[#051a3e] uppercase tracking-wider px-0.5" htmlFor="symptom-description">
                Symptom Description
              </label>
              <textarea 
                className="w-full bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg p-3 text-sm focus:outline-none focus:border-[#003d9b] resize-none placeholder:text-[#737685]/60 text-[#051a3e]" 
                id="symptom-description" 
                placeholder="E.g., Dull ache in lower back that worsens when sitting..." 
                rows={4}
              />
            </div>

            {/* Severity Radio Matrix */}
            <div className="space-y-2">
              <label className="block text-[11px] font-bold text-[#051a3e] uppercase tracking-wider px-0.5">
                Severity Level
              </label>
              <div className="grid grid-cols-2 gap-3">
                
                {/* Mild Radio Block */}
                <label className="flex items-center gap-3 p-3 bg-white border border-[#c3c3d6] rounded-lg cursor-pointer hover:bg-[#f1f3ff] transition-colors box-border">
                  <input className="w-4 h-4 text-[#003d9b] border-[#c3c3d6] focus:ring-[#003d9b]" name="severity" type="radio" value="mild"/>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#051a3e] m-0">Mild</p>
                    <p className="text-[10px] text-[#737685] m-0 mt-0.5 truncate">Noticeable but manageable</p>
                  </div>
                </label>

                {/* Moderate Radio Block */}
                <label className="flex items-center gap-3 p-3 bg-white border border-[#c3c3d6] rounded-lg cursor-pointer hover:bg-[#f1f3ff] transition-colors box-border">
                  <input className="w-4 h-4 text-[#003d9b] border-[#c3c3d6] focus:ring-[#003d9b]" name="severity" type="radio" value="moderate"/>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#051a3e] m-0">Moderate</p>
                    <p className="text-[10px] text-[#737685] m-0 mt-0.5 truncate">Affects daily tasks</p>
                  </div>
                </label>

                {/* Severe Radio Block */}
                <label className="flex items-center gap-3 p-3 bg-white border border-[#c3c3d6] rounded-lg cursor-pointer hover:bg-[#f1f3ff] transition-colors box-border">
                  <input className="w-4 h-4 text-[#003d9b] border-[#c3c3d6] focus:ring-[#003d9b]" name="severity" type="radio" value="severe"/>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#051a3e] m-0">Severe</p>
                    <p className="text-[10px] text-[#737685] m-0 mt-0.5 truncate">Significant distress</p>
                  </div>
                </label>

                {/* Urgent Radio Block */}
                <label className="flex items-center gap-3 p-3 bg-white border border-[#c3c3d6] rounded-lg cursor-pointer hover:bg-[#f1f3ff] transition-colors box-border">
                  <input className="w-4 h-4 text-[#ba1a1a] border-[#c3c3d6] focus:ring-[#ba1a1a]" name="severity" type="radio" value="urgent"/>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#ba1a1a] m-0">Urgent</p>
                    <p className="text-[10px] text-[#93000a] m-0 mt-0.5 truncate">Immediate care needed</p>
                  </div>
                </label>

              </div>
            </div>

            {/* Submission Interactive Control Action Button */}
            <button className="w-full bg-[#003d9b] text-white font-bold text-sm py-3 rounded-xl shadow-md active:scale-95 transition-all flex justify-center items-center gap-2 border-none cursor-pointer" type="submit">
              <span className="material-symbols-outlined text-lg">send</span>
              Update Care Team
            </button>
          </form>
        </section>

        {/* Informational Compliance Footer Block inside scroll view */}
        <div className="mt-8 text-center opacity-75 max-w-xs mx-auto pb-4">
          <span className="material-symbols-outlined text-2xl text-[#0052cc] mb-1 block">encrypted</span>
          <p className="text-[11px] text-[#434654] leading-relaxed m-0">
            Your data is encrypted and secure. MedLink follows HIPAA and international medical privacy standards.
          </p>
        </div>
      </main>

      {/* ==================== GLOBAL STICKY BOTTOM NAVIGATION ==================== */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-[#c3c3d6] shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] flex justify-around items-center px-2 pb-5 h-20 box-border z-50 rounded-t-xl">
        <button type="button" className="flex flex-col items-center justify-center text-[#434654] bg-transparent border-none cursor-pointer p-1">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#434654] bg-transparent border-none cursor-pointer p-1">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-medium mt-0.5">Schedule</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 border-none cursor-pointer">
          <span className="material-symbols-outlined font-variation-settings-fill">groups</span>
          <span className="text-[10px] font-bold mt-0.5">Profile</span>
        </button>
        <button type="button" className="flex flex-col items-center justify-center text-[#434654] bg-transparent border-none cursor-pointer p-1">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
        </button>
      </nav>

      {/* Configuration styling adjustment injection block */}
      <style>{`
        .font-variation-settings-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default PatientHealthProfile;