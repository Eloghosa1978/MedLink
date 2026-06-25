import React from 'react';

const FindSpecialist: React.FC = () => {
  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP NAVIGATION BAR ==================== */}
      <header className="bg-white border-b border-[#c3c3d6] flex justify-between items-center w-full px-4 py-3 sticky top-0 z-50 box-border">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-variation-settings-fill">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-[#f1f3ff] border border-[#c3c3d6]">
          <img 
            className="w-full h-full object-cover" 
            alt="Provider headshot thumbnail" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeXXXg1NZVkzsQSQSJ1sNrDRb5gjBrDoOzxsOPzDcUVFZJwThv-zUXgRLZkrb-FLdnCdWjGzb7f67vTot6VNX2cTNx23IJGtSVYRgciHQoUaSLb-Dh2UgKqIWsmEeCoPgqzWOVg5Nw9i3QxZELdR_P1j2JMaRv9HtCrsPy7qzm7yRaiVVNC3acgdxeydFyAVZBrBsTnXj38-8jqKa2GOCRil1XQ1VX3_cWbNxR578RxsitOciDxrftCh0z_jyyZcbCZ_i_MW_nh0Kn"
          />
        </div>
      </header>

      {/* ==================== MAIN SECTION CONTENT AREA ==================== */}
      <main className="w-full flex-grow">
        
        {/* Search & Filter Top Bar Section */}
        <section className="px-4 pt-6 pb-4 bg-[#f1f3ff]">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-[#051a3e] mb-4 tracking-tight">Find a Specialist</h2>
            
            {/* Search Input Input Container */}
            <div className="relative mb-4">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#434654] text-xl">
                search
              </span>
              <input 
                className="w-full pl-10 pr-4 py-3 bg-white border border-[#c3c3d6] rounded-xl focus:outline-none focus:border-[#003d9b] font-medium text-sm text-[#051a3e] placeholder:text-[#737685]/70" 
                placeholder="Search doctors, specialties..." 
                type="text"
              />
            </div>

            {/* Scrollable Filter Pill Strip Controls */}
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none w-full">
              <button type="button" className="flex items-center gap-1 px-4 py-2 bg-[#0052cc] text-white rounded-full whitespace-nowrap text-xs font-bold border-none cursor-pointer shadow-sm shrink-0">
                <span className="material-symbols-outlined text-base">tune</span>
                Specialty
              </button>
              <button type="button" className="px-4 py-2 bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6] rounded-full whitespace-nowrap text-xs font-bold cursor-pointer shrink-0 hover:bg-[#dae2ff] transition-colors">
                Language
              </button>
              <button type="button" className="px-4 py-2 bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6] rounded-full whitespace-nowrap text-xs font-bold cursor-pointer shrink-0 hover:bg-[#dae2ff] transition-colors">
                Rating
              </button>
              <button type="button" className="px-4 py-2 bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6] rounded-full whitespace-nowrap text-xs font-bold cursor-pointer shrink-0 hover:bg-[#dae2ff] transition-colors">
                Availability
              </button>
            </div>

            {/* Active Select Filter Applied Badges */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#6ae1ff]/20 text-[#006374] rounded-lg text-xs font-bold border border-[#6ae1ff]">
                General 
                <span className="material-symbols-outlined text-sm cursor-pointer hover:opacity-70">close</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#6ae1ff]/20 text-[#006374] rounded-lg text-xs font-bold border border-[#6ae1ff]">
                Cardio 
                <span className="material-symbols-outlined text-sm cursor-pointer hover:opacity-70">close</span>
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#6ae1ff]/20 text-[#006374] rounded-lg text-xs font-bold border border-[#6ae1ff]">
                Pediatrics 
                <span className="material-symbols-outlined text-sm cursor-pointer hover:opacity-70">close</span>
              </span>
            </div>
          </div>
        </section>

        {/* Doctor Directory Profile Card Feed List */}
        <section className="px-4 pt-6 flex flex-col gap-4 max-w-md mx-auto w-full box-border">
          <p className="text-[11px] font-bold text-[#737685] uppercase tracking-wider m-0">32 Specialists found</p>

          {/* Card 1: Dr. Elena Rodriguez */}
          <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#f1f3ff] shrink-0 border border-[#c3c3d6]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Dr. Elena Rodriguez portrait" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3twtAO1iwU4UtFhCHDCyD4ioIjhqsWOKuRcffGN72z673A9T-E4WzjJNwqKEv8zt9wcWjOtx4BTiVKFkFsIEI1s1nk4pTraOUpzFNXCfcpd_Y7RqxF9od5HC2cU06a2v-Uq86XDo2gbwy3eYLrvPIoNRu7d4CugOMvYOHBDmleXbQyHzjNjZpCAgvQVeOgUSckvM1L917MAD3HT6kDTZziCVejBuWDnYiSPvsFbcSovOdem3HbKW4zIXshCX_VOO1zQbWkCZbFgjB"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#051a3e] truncate">Dr. Elena Rodriguez</h3>
                <p className="text-xs text-[#00687a] font-bold mt-0.5">Cardiology Specialist</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="material-symbols-outlined text-[#7b2600] text-base font-variation-settings-fill">star</span>
                  <span className="text-xs font-bold text-[#051a3e]">4.9</span>
                  <span className="text-xs text-[#737685]">(120 reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">English</span>
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">Spanish</span>
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">15 yrs exp.</span>
            </div>
            
            <div className="flex gap-3 mt-1">
              <button type="button" className="flex-1 py-2.5 bg-[#003d9b] text-white rounded-lg text-xs font-bold border-none cursor-pointer hover:bg-[#0052cc] transition-colors">
                Book Now
              </button>
              <button type="button" className="flex-1 py-2.5 bg-white border border-[#c3c3d6] text-[#003d9b] rounded-lg text-xs font-bold cursor-pointer hover:bg-[#f1f3ff] transition-colors">
                View Profile
              </button>
            </div>
          </div>

          {/* Card 2: Dr. Marcus Chen */}
          <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#f1f3ff] shrink-0 border border-[#c3c3d6]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Dr. Marcus Chen portrait" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1sZyperfDUJHdPJ6lq4wkELS5wUvZpV21FVsv3a41DCMU9DKPv9UZE4F7C8_VnvfOeZav5WDZA1TUpCnw8focbwcZyoi8Et2NlAQ1CyRWE4OpT-16Px2m891PKyirnahmayT2IIAKMZGI93s65c-Vmosds4fgqMjIa28leyQw58D5Q6MHZucFIMSdpJOt6uzUw23UnpwthWJrWmk-qbOwoid8uCsRxFOYEaaS3vryG_NgWaGinkqTMDE8UtHCuOg7-TgViqlgSwoM"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#051a3e] truncate">Dr. Marcus Chen</h3>
                <p className="text-xs text-[#00687a] font-bold mt-0.5">Pediatrician</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="material-symbols-outlined text-[#7b2600] text-base font-variation-settings-fill">star</span>
                  <span className="text-xs font-bold text-[#051a3e]">4.8</span>
                  <span className="text-xs text-[#737685]">(95 reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">English</span>
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">Mandarin</span>
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">8 yrs exp.</span>
            </div>
            
            <div className="flex gap-3 mt-1">
              <button type="button" className="flex-1 py-2.5 bg-[#003d9b] text-white rounded-lg text-xs font-bold border-none cursor-pointer hover:bg-[#0052cc] transition-colors">
                Book Now
              </button>
              <button type="button" className="flex-1 py-2.5 bg-white border border-[#c3c3d6] text-[#003d9b] rounded-lg text-xs font-bold cursor-pointer hover:bg-[#f1f3ff] transition-colors">
                View Profile
              </button>
            </div>
          </div>

          {/* Card 3: Dr. Sarah Smith */}
          <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 flex flex-col gap-4 shadow-sm">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#f1f3ff] shrink-0 border border-[#c3c3d6]">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Dr. Sarah Smith portrait" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqRD2lG7VkFTU7yFzWz25DKxvNWJVDcJcdAcVurgQ2tCS83jqBua9ppOuDyQaqdFdFdIgJ76uAKtlMPj5cHGih70NYHUanPT3C9mHjn10VSXUzvcJKREAa9Wz84pSRBDjOm6nYKgwDmm8bwYIK4dsigRap1oAqtN4tm-s9G-Z_zvIqPsqSV8UGGptm_Fx16ufD6OiyvP_jStPO_9b6yd6q5HOd3vmm8AFrmGh_Z96mdSJLIYwxYGK6jq1PfYzCqG4WQi9l3zkvwujE"
                />
              </div>
              <div className="flex flex-col justify-center min-w-0 flex-1">
                <h3 className="text-base font-bold text-[#051a3e] truncate">Dr. Sarah Smith</h3>
                <p className="text-xs text-[#00687a] font-bold mt-0.5">General Practitioner</p>
                <div className="flex items-center gap-1 mt-1.5">
                  <span className="material-symbols-outlined text-[#7b2600] text-base font-variation-settings-fill">star</span>
                  <span className="text-xs font-bold text-[#051a3e]">5.0</span>
                  <span className="text-xs text-[#737685]">(210 reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">English</span>
              <span className="px-2.5 py-0.5 bg-[#f1f3ff] text-[#434654] rounded text-[11px] font-semibold">20 yrs exp.</span>
            </div>
            
            <div className="flex gap-3 mt-1">
              <button type="button" className="flex-1 py-2.5 bg-[#003d9b] text-white rounded-lg text-xs font-bold border-none cursor-pointer hover:bg-[#0052cc] transition-colors">
                Book Now
              </button>
              <button type="button" className="flex-1 py-2.5 bg-white border border-[#c3c3d6] text-[#003d9b] rounded-lg text-xs font-bold cursor-pointer hover:bg-[#f1f3ff] transition-colors">
                View Profile
              </button>
            </div>
          </div>

          {/* Pagination/Load More Footer Trigger Action */}
          <button type="button" className="w-full py-4 text-[#003d9b] bg-transparent border-none font-bold text-sm flex justify-center items-center gap-1 active:opacity-60 transition-opacity cursor-pointer">
            Load more doctors
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </section>
      </main>

      {/* Contextual Mapping View Screen FAB Overlay */}
      <button type="button" className="fixed bottom-24 right-4 w-14 h-14 bg-[#003d9b] text-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40 border-none cursor-pointer">
        <span className="material-symbols-outlined text-xl">map</span>
      </button>

      {/* ==================== SECURE GLOBAL BOTTOM NAVBAR ARCHITECTURE ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] flex justify-around items-center px-2 pb-5 bg-white border-t border-[#c3c3d6] shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] z-50 rounded-t-xl box-border">
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#home">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#schedule">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-medium mt-0.5">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 no-underline" href="#patients">
          <span className="material-symbols-outlined font-variation-settings-fill">groups</span>
          <span className="text-[10px] font-bold mt-0.5">Patients</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#alerts">
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ba1a1a] rounded-full"></span>
          </div>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
        </a>
      </nav>

      {/* Custom Styles Injection Block */}
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

export default FindSpecialist;