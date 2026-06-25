import React from 'react';

const DigitalHealthProfile: React.FC = () => {
  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen w-full flex flex-col font-sans">
      {/* Material Symbols Outlined Icons Link */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="bg-[#faf9ff] border-b border-[#c3c3d6] px-4 py-3 sticky top-0 z-50 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-semibold">medical_services</span>
          <h1 className="text-2xl font-bold text-[#003d9b] tracking-tight">MedLink</h1>
        </div>
        <button type="button" className="p-2 rounded-full hover:bg-[#e9edff] transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-[#434654]">close</span>
        </button>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="flex-grow flex flex-col px-4 pt-6 pb-12 max-w-md w-full mx-auto box-border">
        
        {/* Progress Header */}
        <div className="mb-6 w-full block">
          <div className="flex justify-between items-end mb-2 w-full">
            <h2 className="text-xl font-bold text-[#051a3e]">Digital Health Profile</h2>
            <span className="text-xs font-semibold text-[#003d9b]" id="step-counter">Step 1 of 4</span>
          </div>
          <div className="w-full h-1 bg-[#e1e8ff] rounded-full overflow-hidden">
            <div className="h-full bg-[#003d9b] rounded-full" id="progress-bar" style={{ width: '25%' }}></div>
          </div>
        </div>

        {/* Form Canvas Area */}
        <div className="relative w-full block" id="form-steps-container">
          
          {/* Step 1: Allergies */}
          <section className="w-full block" id="step-1">
            <div className="mb-6 w-full block">
              <h3 className="text-2xl font-bold text-[#051a3e] mb-1">Allergies</h3>
              <p className="text-[#434654] text-sm">Help us protect you by listing any known allergies.</p>
            </div>
            
            <div className="space-y-4 w-full block">
              <div className="bg-white p-4 rounded-xl border border-[#c3c3d6] w-full block">
                <label className="block text-xs font-bold text-[#737685] mb-1 uppercase tracking-wider">
                  Search for Allergens
                </label>
                <div className="relative w-full block">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#737685]">search</span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg focus:outline-none focus:border-[#003d9b] transition-all text-[#051a3e]" 
                    placeholder="e.g. Penicillin, Peanuts" 
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 w-full">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#ffdad6] text-[#93000a] rounded-full text-xs font-semibold">
                  Latex <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#ffdad6] text-[#93000a] rounded-full text-xs font-semibold">
                  Sulfa Drugs <span className="material-symbols-outlined text-[14px] cursor-pointer">close</span>
                </span>
              </div>

              <div className="p-4 rounded-xl border-2 border-dashed border-[#c3c3d6] flex flex-col items-center justify-center py-8 text-center bg-[#faf9ff] w-full box-border">
                <span className="material-symbols-outlined text-[#737685] mb-2 text-3xl">no_accounts</span>
                <p className="text-[#434654] text-sm">No known allergies?</p>
                <button type="button" className="mt-2 text-[#003d9b] font-bold hover:underline bg-transparent border-none p-0 cursor-pointer text-sm">Mark as None</button>
              </div>
            </div>
          </section>

          {/* Step 2: Chronic Conditions (Hidden Initially) */}
          <section className="w-full hidden" id="step-2">
            <div className="mb-6 w-full block">
              <h3 className="text-2xl font-bold text-[#051a3e] mb-1">Chronic Conditions</h3>
              <p className="text-[#434654] text-sm">Select any long-term medical conditions you manage.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-6 w-full">
              <button type="button" className="flex flex-col items-start p-4 bg-white border border-[#c3c3d6] rounded-xl hover:border-[#003d9b] transition-colors text-left w-full">
                <span className="material-symbols-outlined text-[#003d9b] mb-4 text-xl">monitor_heart</span>
                <span className="text-sm font-semibold text-[#051a3e]">Hypertension</span>
              </button>
              <button type="button" className="flex flex-col items-start p-4 bg-[#0052cc] text-white border border-[#003d9b] rounded-xl transition-colors text-left w-full">
                <span className="material-symbols-outlined mb-4 text-xl">water_drop</span>
                <span className="text-sm font-semibold">Diabetes</span>
              </button>
              <button type="button" className="flex flex-col items-start p-4 bg-white border border-[#c3c3d6] rounded-xl hover:border-[#003d9b] transition-colors text-left w-full">
                <span className="material-symbols-outlined text-[#003d9b] mb-4 text-xl">air</span>
                <span className="text-sm font-semibold text-[#051a3e]">Asthma</span>
              </button>
              <button type="button" className="flex flex-col items-start p-4 bg-white border border-[#c3c3d6] rounded-xl hover:border-[#003d9b] transition-colors text-left w-full">
                <span className="material-symbols-outlined text-[#003d9b] mb-4 text-xl">psychology</span>
                <span className="text-sm font-semibold text-[#051a3e]">Anxiety</span>
              </button>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#c3c3d6] w-full block">
              <label className="block text-xs font-bold text-[#737685] mb-1 uppercase tracking-wider">Other Condition</label>
              <input className="w-full px-4 py-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg focus:outline-none text-[#051a3e]" placeholder="Type to add..." type="text"/>
            </div>
          </section>

          {/* Step 3: Medications (Hidden Initially) */}
          <section className="w-full hidden" id="step-3">
            <div className="mb-6 w-full block">
              <h3 className="text-2xl font-bold text-[#051a3e] mb-1">Medications</h3>
              <p className="text-[#434654] text-sm">Current prescriptions or supplements you're taking.</p>
            </div>
            <div className="space-y-4 w-full block">
              <div className="flex items-center gap-3 p-4 bg-white border border-[#c3c3d6] rounded-xl w-full box-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-[#6ae1ff] text-[#006374] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">medication</span>
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="text-sm font-bold text-[#051a3e] truncate">Metformin</h4>
                  <p className="text-[#434654] text-xs">500mg • Once Daily</p>
                </div>
                <button type="button" className="text-[#737685] hover:text-[#ba1a1a] transition-colors p-1 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">delete</span>
                </button>
              </div>
              <button type="button" className="w-full py-6 border-2 border-dashed border-[#003d9b] rounded-xl flex items-center justify-center gap-2 text-[#003d9b] font-bold hover:bg-[#003d9b]/5 transition-all text-sm">
                <span className="material-symbols-outlined text-xl">add_circle</span>
                Add New Medication
              </button>
              <div className="p-4 bg-[#f1f3ff] rounded-xl border border-[#c3c3d6] flex gap-3 mt-6 w-full box-border">
                <span className="material-symbols-outlined text-[#00687a] shrink-0 text-xl">verified_user</span>
                <p className="text-[#434654] text-xs leading-relaxed">Your data is encrypted and only shared with your care team.</p>
              </div>
            </div>
          </section>

          {/* Step 4: Emergency Contact (Hidden Initially) */}
          <section className="w-full hidden" id="step-4">
            <div className="mb-6 w-full block">
              <h3 className="text-2xl font-bold text-[#051a3e] mb-1">Emergency Contact</h3>
              <p className="text-[#434654] text-sm">Who should we contact in case of an emergency?</p>
            </div>
            <div className="space-y-4 w-full block">
              <div className="bg-white p-4 rounded-xl border border-[#c3c3d6] space-y-4 w-full block">
                <div className="w-full block">
                  <label className="block text-xs font-bold text-[#737685] mb-1 uppercase tracking-wider">Full Name</label>
                  <input className="w-full px-4 py-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg focus:outline-none text-[#051a3e]" placeholder="John Doe" type="text"/>
                </div>
                <div className="w-full block">
                  <label className="block text-xs font-bold text-[#737685] mb-1 uppercase tracking-wider">Relationship</label>
                  <div className="relative w-full block">
                    <select className="w-full px-4 py-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg focus:outline-none appearance-none text-[#051a3e]">
                      <option>Spouse</option>
                      <option>Parent</option>
                      <option>Sibling</option>
                      <option>Friend</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#434654]">
                      arrow_drop_down
                    </span>
                  </div>
                </div>
                <div className="w-full block">
                  <label className="block text-xs font-bold text-[#737685] mb-1 uppercase tracking-wider">Phone Number</label>
                  <input className="w-full px-4 py-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg focus:outline-none text-[#051a3e]" placeholder="+1 (555) 000-0000" type="tel"/>
                </div>
              </div>
            </div>
            <div className="mt-6 relative h-28 rounded-xl overflow-hidden flex items-center justify-center border border-[#c3c3d6] w-full">
              <div className="absolute inset-0 bg-[#003d9b] opacity-5"></div>
              <div className="relative text-center px-4 block">
                <p className="text-[#003d9b] font-bold text-xs italic max-w-xs leading-relaxed">
                  "Your safety is our priority. This information helps us provide tailored care during every visit."
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* ==================== BOTTOM NAVIGATION CONTROLS ==================== */}
      <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-[#c3c3d6] px-4 py-4 flex gap-4 z-50 box-border">
        <button 
          type="button"
          className="flex-1 py-3 text-[#003d9b] border border-[#003d9b] rounded-xl font-bold flex items-center justify-center gap-1 disabled:opacity-30 disabled:border-[#737685] disabled:text-[#737685] transition-all text-sm" 
          disabled 
          id="prev-btn"
        >
          <span className="material-symbols-outlined text-xl">chevron_left</span>
          Back
        </button>
        <button 
          type="button"
          className="flex-[2] py-3 bg-[#003d9b] text-white rounded-xl font-bold flex items-center justify-center gap-1 shadow-md active:scale-95 transition-all text-sm" 
          id="next-btn"
        >
          Next Step
          <span className="material-symbols-outlined text-xl">chevron_right</span>
        </button>
      </footer>
    </div>
  );
};

export default DigitalHealthProfile;