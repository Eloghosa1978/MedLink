import React from 'react';

const ProfessionalProfile: React.FC = () => {
  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="flex justify-between items-center w-full px-4 py-4 sticky top-0 z-50 bg-[#faf9ff]/80 backdrop-blur-md border-b border-[#c3c3d6]">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Go back" className="p-2 rounded-full hover:bg-[#e1e8ff] transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-[#003d9b]">arrow_back</span>
          </button>
          <h1 className="text-xl font-bold text-[#051a3e]">MedLink</h1>
        </div>
        <div className="flex items-center">
          <span className="text-xs font-medium text-[#434654]">Step 2 of 3</span>
        </div>
      </header>

      {/* ==================== PROGRESS INDICATOR ==================== */}
      <div className="px-4 pt-2">
        <div className="h-1 w-full bg-[#e1e8ff] rounded-full overflow-hidden">
          <div className="h-full bg-[#003d9b] w-2/3 rounded-full transition-all duration-500"></div>
        </div>
      </div>

      {/* ==================== MAIN SECTION AREA ==================== */}
      <main className="flex-grow px-4 py-6 max-w-md w-full mx-auto box-border">
        {/* Header Typography Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#051a3e] mb-2 tracking-tight">Professional Profile</h2>
          <p className="text-sm text-[#434654] leading-relaxed">
            Verify your medical credentials and tell patients about your expertise. This information will be visible on your public profile.
          </p>
        </section>

        {/* Doctor Identity Form Layout */}
        <form className="space-y-5" id="profileSetupForm">
          
          {/* Profile Picture Upload Container Box */}
          <div className="flex flex-col items-center gap-3 p-4 bg-white border border-[#c3c3d6] rounded-xl shadow-[0_4px_12px_rgba(9,30,66,0.08)] mb-6 transition-all duration-300">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-[#f1f3ff] flex items-center justify-center overflow-hidden border-2 border-[#dae2ff]">
                <img 
                  className="w-full h-full object-cover hidden" 
                  alt="Professional medical headshot" 
                  id="avatarPreview" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT53rp8AY7nixWoarXhSKtwaYw1wHBKJhOwV4IzgyyiE20fuEExtHhTm0IZQoT2K8SKRqpALtm7zzY7vp3gJ1SLMOd9Ilbj33VfxG-J-Lk2jgqAlquLWcxRf9uf_uOg4KEbawYoZ3RURD6Nby4-2kfgUkSOvcAF6VpUmnQiSWuDDhPXAGupZo2V6yi_Ovw6y5IqR6c87jb6lbPtu_yrKssBbJ4t3wg3qjaD0Gq-27EgKVIYV572IiyAk0KfO6-V9LFuC64CDOfV825"
                />
                <span className="material-symbols-outlined text-[48px] text-[#003d9b]" id="avatarPlaceholder">add_a_photo</span>
              </div>
              <button className="absolute bottom-0 right-0 bg-[#003d9b] text-white p-2 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center" type="button">
                <span className="material-symbols-outlined text-[18px]">edit</span>
              </button>
            </div>
            <div className="text-center">
              <button className="text-[#003d9b] font-semibold text-xs hover:underline bg-transparent border-none p-0 cursor-pointer" type="button">
                Upload Professional Photo
              </button>
              <p className="text-[#737685] text-[11px] mt-1">JPG or PNG. Max 2MB.</p>
            </div>
          </div>

          {/* Specialty Select Field Row */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#051a3e] px-1 uppercase tracking-wider">Medical Specialty</label>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434654]">stethoscope</span>
              <select 
                defaultValue=""
                className="w-full bg-[#F4F5F7] border border-[#c3c3d6] rounded-lg py-3 pl-11 pr-10 text-sm focus:outline-none focus:border-[#003d9b] appearance-none text-[#051a3e]"
              >
                <option disabled value="">Select your specialty</option>
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
                <option value="general_practice">General Practice</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#434654]">expand_more</span>
            </div>
          </div>

          {/* License Number Entry Block */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#051a3e] px-1 uppercase tracking-wider">Medical License Number</label>
            <div className="relative w-full">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434654]">verified_user</span>
              <input 
                className="w-full bg-[#F4F5F7] border border-[#c3c3d6] rounded-lg py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#003d9b] text-[#051a3e]" 
                placeholder="e.g. LIC-987654321" 
                type="text"
              />
            </div>
            <p className="text-[11px] text-[#737685] flex items-center gap-1 px-1">
              <span className="material-symbols-outlined text-[14px]">info</span>
              This will be used for professional verification.
            </p>
          </div>

          {/* Professional Narrative TextArea Block */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#051a3e] px-1 uppercase tracking-wider">Professional Bio</label>
            <textarea 
              className="w-full bg-[#F4F5F7] border border-[#c3c3d6] rounded-lg p-3 text-sm focus:outline-none focus:border-[#003d9b] resize-none text-[#051a3e]" 
              placeholder="Briefly describe your experience, education, and patient care philosophy..." 
              rows={4}
            />
            <div className="flex justify-between px-1 text-[11px] text-[#737685]">
              <span>Min. 100 characters</span>
              <span>0/500</span>
            </div>
          </div>

          {/* Verification Legal Authorization Checkbox */}
          <div className="flex items-start gap-3 py-2">
            <input 
              className="mt-0.5 w-4 h-4 rounded border-[#c3c3d6] text-[#003d9b] focus:ring-[#0052cc]" 
              id="verificationConsent" 
              type="checkbox"
            />
            <label className="text-xs text-[#434654] leading-tight cursor-pointer select-none" htmlFor="verificationConsent">
              I certify that the information provided is accurate and I authorize MedLink to verify my medical license.
            </label>
          </div>
        </form>
      </main>

      {/* ==================== CONTROL ACTIONS FOOTER ==================== */}
      <footer className="p-4 bg-white border-t border-[#c3c3d6] sticky bottom-0 z-50 w-full box-border">
        <div className="flex flex-col gap-2 max-w-md mx-auto">
          <button 
            className="w-full bg-[#003d9b] text-white py-3 rounded-lg text-base font-bold hover:bg-[#001848] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-md border-none cursor-pointer" 
            form="profileSetupForm" 
            type="submit"
          >
            Continue
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
          
          <button 
            className="w-full py-2.5 rounded-lg text-sm font-semibold text-[#434654] hover:bg-[#f1f3ff] transition-colors border-none bg-transparent cursor-pointer" 
            type="button"
          >
            Save as Draft
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProfessionalProfile;