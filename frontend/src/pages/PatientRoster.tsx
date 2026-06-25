import React, { useState } from 'react';

type SortFilter = 'all' | 'alphabetical' | 'recent';
type StatusType = 'Stable' | 'Urgent' | 'In Review';

interface Patient {
  id: string;
  patientCode: string;
  name: string;
  initials: string;
  status: StatusType;
  lastVisit: string;
  nextVisit: string;
  nextVisitColorClass: string;
  avatarBgColor: string;
  avatarTextColor: string;
  group: string;
}

const PatientRoster: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSort, setActiveSort] = useState<SortFilter>('all');
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);

  const patients: Patient[] = [
    {
      id: 'p-1',
      patientCode: '#ML-8821',
      name: 'Abigail Anderson',
      initials: 'AA',
      status: 'Stable',
      lastVisit: 'Oct 12, 2023',
      nextVisit: 'Nov 05, 2023',
      nextVisitColorClass: 'text-[#003d9b]',
      avatarBgColor: 'bg-[#6ae1ff]/20 text-[#006374]',
      avatarTextColor: 'text-[#006374]',
      group: 'A',
    },
    {
      id: 'p-2',
      patientCode: '#ML-4290',
      name: 'Arthur Reed',
      initials: 'AR',
      status: 'Urgent',
      lastVisit: 'Sep 28, 2023',
      nextVisit: 'Oct 24, 2023',
      nextVisitColorClass: 'text-[#ba1a1a]',
      avatarBgColor: 'bg-[#ffb49b]/20 text-[#7b2600]',
      avatarTextColor: 'text-[#7b2600]',
      group: 'A',
    },
    {
      id: 'p-3',
      patientCode: '#ML-1102',
      name: 'Beatrix Bennet',
      initials: 'BB',
      status: 'In Review',
      lastVisit: 'Oct 05, 2023',
      nextVisit: 'TBD',
      nextVisitColorClass: 'text-[#434654]',
      avatarBgColor: 'bg-[#e1e8ff] text-[#003d9b]',
      avatarTextColor: 'text-[#003d9b]',
      group: 'B',
    },
  ];

  const getStatusBadgeStyles = (status: StatusType) => {
    switch (status) {
      case 'Stable':
        return 'bg-green-500/10 text-[#00687a] border-green-500/20';
      case 'Urgent':
        return 'bg-[#ffdad6] text-[#ba1a1a] border-[#ffdad6]/50';
      case 'In Review':
        return 'bg-[#dae2ff] text-[#001848] border-[#dae2ff]/50';
    }
  };

  const filteredPatients = patients.filter((patient) => {
    const query = searchQuery.toLowerCase();
    return (
      patient.name.toLowerCase().includes(query) ||
      patient.patientCode.toLowerCase().includes(query) ||
      patient.status.toLowerCase().includes(query)
    );
  });

  // Group patients by letter symbol
  const groups = Array.from(new Set(filteredPatients.map((p) => p.group))).sort();

  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="bg-white border-b border-[#c3c3d6] sticky top-0 w-full z-40 flex justify-between items-center px-4 md:px-16 py-3 box-border transition-colors">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-variation-settings-fill">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#0052cc]">
          <img
            className="w-full h-full object-cover"
            alt="Dr. Sarah Smith professional portfolio circle icon"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_PjSdhgfq1BOOmYSxPYjwxnC_3yD1JJKxjYf0hpfFef59zVuJdHTXAB37Vd4X68Sz3BFDAhphPEP7Qui5QttSzyqfbyi4T397e9IpTc5LWLlsufvI4L-DVWp83L13JdhWoVXWcVGEgbgjp2xu4WGEDBdCdyiu0qTR9NaEMoDKbl2WL69aA9cGeYuF9wxRGDC9fQy_ejUfo0wg_-KsAGzG3wdAV8NMFJWXdg22O0yxev7CAKrUz-ou6fMDQvbskOeehBy3wtZPw7ju"
          />
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="flex-grow flex flex-col w-full max-w-md mx-auto box-border pb-12">
        
        {/* Search & Dynamic Filter Context Area */}
        <section className="px-4 py-6 space-y-4">
          <div className="flex flex-col gap-0.5">
            <h2 className="text-2xl font-bold text-[#051a3e] tracking-tight">Patients</h2>
            <p className="text-xs text-[#434654]">Manage and view your current patient roster.</p>
          </div>

          {/* Fully Interactive Custom Input Layout Capsule */}
          <div className={`relative transition-all duration-200 ${isSearchFocused ? 'scale-[1.02]' : ''}`}>
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#737685] text-xl">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="w-full pl-12 pr-4 py-3 bg-[#f1f3ff] border border-[#c3c3d6] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003d9b] focus:border-transparent text-sm text-[#051a3e] box-border transition-all placeholder-[#737685]"
              placeholder="Search by name, ID, or condition..."
            />
          </div>

          {/* Filter Sorting Action Chips Track */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 box-border">
            <button
              type="button"
              onClick={() => setActiveSort('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 border-none ${
                activeSort === 'all' ? 'bg-[#003d9b] text-white shadow-sm' : 'bg-[#e1e8ff] text-[#434654]'
              }`}
            >
              All Patients
            </button>
            <button
              type="button"
              onClick={() => setActiveSort('alphabetical')}
              className={`px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 whitespace-nowrap transition-colors cursor-pointer shrink-0 border-none ${
                activeSort === 'alphabetical' ? 'bg-[#003d9b] text-white shadow-sm' : 'bg-[#e1e8ff] text-[#434654] hover:bg-[#c3c3d6]/50'
              }`}
            >
              <span className="material-symbols-outlined text-base">sort_by_alpha</span>
              Alphabetical
            </button>
            <button
              type="button"
              onClick={() => setActiveSort('recent')}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-colors cursor-pointer shrink-0 border-none ${
                activeSort === 'recent' ? 'bg-[#003d9b] text-white shadow-sm' : 'bg-[#e1e8ff] text-[#434654] hover:bg-[#c3c3d6]/50'
              }`}
            >
              Recent
            </button>
          </div>
        </section>

        {/* Grouped Clinical Directory Stream Grid */}
        <div className="px-4 space-y-6 flex-grow">
          {groups.map((groupLetter) => (
            <div key={groupLetter} className="space-y-3">
              {/* Alphabetical Group Divider Header */}
              <div className="flex items-center gap-4">
                <span className="text-lg font-extrabold text-[#003d9b]">{groupLetter}</span>
                <div className="h-[1px] flex-grow bg-[#c3c3d6]/70"></div>
              </div>

              {/* Render Filtered Patient Data Cards Row */}
              {filteredPatients
                .filter((p) => p.group === groupLetter)
                .map((patient) => (
                  <div
                    key={patient.id}
                    className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm flex flex-col gap-4 active:border-[#003d9b] transition-all"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex gap-3 min-w-0">
                        <div className={`w-12 h-12 rounded-lg ${patient.avatarBgColor} flex items-center justify-center font-bold text-sm shrink-0`}>
                          {patient.initials}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-bold text-[#051a3e] m-0 truncate pr-1">{patient.name}</h3>
                          <p className="text-xs text-[#737685] m-0 mt-0.5">{patient.patientCode}</p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border shrink-0 ${getStatusBadgeStyles(patient.status)}`}>
                        {patient.status}
                      </span>
                    </div>

                    {/* Operational Core Analytics Metadata Block Grid */}
                    <div className="grid grid-cols-2 gap-4 py-2.5 border-y border-dashed border-[#c3c3d6]/70">
                      <div>
                        <p className="text-[9px] font-bold text-[#737685] uppercase tracking-wider m-0">Last Visit</p>
                        <p className="text-xs text-[#051a3e] font-semibold m-0 mt-0.5">{patient.lastVisit}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-[#737685] uppercase tracking-wider m-0">Next Visit</p>
                        <p className={`text-xs font-semibold m-0 mt-0.5 ${patient.nextVisitColorClass}`}>{patient.nextVisit}</p>
                      </div>
                    </div>

                    {/* Primary Engagement Profile Activation Trigger */}
                    <button
                      type="button"
                      className="w-full py-2.5 bg-[#003d9b] text-white rounded-lg text-xs font-bold border-none cursor-pointer hover:bg-[#0052cc] transition-colors active:opacity-80"
                    >
                      View Profile
                    </button>
                  </div>
                ))}
            </div>
          ))}

          {filteredPatients.length === 0 && (
            <div className="py-12 text-center text-xs text-[#737685] font-medium">
              No medical roster profiles matched your directory filter context.
            </div>
          )}
        </div>
      </main>

      {/* ==================== BOTTOM TAB DESKTOP/MOBILE APPARATUS SYSTEM NAVIGATION ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] bg-white z-50 rounded-t-xl shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] border-t border-[#c3c3d6] flex justify-around items-center px-2 pb-5 box-border">
        <div className="flex flex-col items-center justify-center text-[#434654] cursor-pointer w-16">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#434654] cursor-pointer w-16">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-medium mt-0.5">Schedule</span>
        </div>
        {/* Active Navigation Capsule: Patients */}
        <div className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 cursor-pointer scale-95">
          <span className="material-symbols-outlined font-variation-settings-fill">groups</span>
          <span className="text-[10px] font-bold mt-0.5">Patients</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#434654] cursor-pointer w-16">
          <span className="material-symbols-outlined">notifications</span>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
        </div>
      </nav>

      {/* Embedded configuration line utilities layer styles */}
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

export default PatientRoster;