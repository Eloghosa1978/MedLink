import React, { useState } from 'react';

interface Medication {
  name: string;
  dosage: string;
  instructions: string;
}

interface TimelineItem {
  date: string;
  title: string;
  provider: string;
  clinic: string;
  notes?: string;
  isActive?: boolean;
}

interface LabResult {
  test: string;
  result: string;
  trend: 'trending_down' | 'trending_flat' | 'trending_up';
  trendColorClass: string;
}

const PatientProfile: React.FC = () => {
  const [noteText, setNoteText] = useState<string>('');
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  const medications: Medication[] = [
    { name: 'Lisinopril 10mg', dosage: 'Once daily', instructions: 'oral' },
    { name: 'Metformin 500mg', dosage: 'Twice daily', instructions: 'with meals' },
  ];

  const timeline: TimelineItem[] = [
    {
      date: 'MAR 12, 2024',
      title: 'General Wellness Check',
      provider: 'Dr. Sarah Smith',
      clinic: 'Rural Clinic A',
      notes: '"Patient reports improved mobility after physical therapy sessions. Blood pressure stable..."',
      isActive: true,
    },
    {
      date: 'JAN 05, 2024',
      title: 'Cardiology Referral',
      provider: 'Dr. James Wilson',
      clinic: 'Heart Center',
      isActive: false,
    },
  ];

  const labs: LabResult[] = [
    { test: 'HbA1c', result: '6.4%', trend: 'trending_down', trendColorClass: 'text-[#7b2600]' },
    { test: 'LDL Cholesterol', result: '112 mg/dL', trend: 'trending_flat', trendColorClass: 'text-[#003d9b]' },
  ];

  const handleAppendFile = () => {
    if (!noteText.trim() || isSaving) return;

    setIsSaving(true);
    setSaveStatus('saving');

    setTimeout(() => {
      setSaveStatus('saved');
      setNoteText('');

      setTimeout(() => {
        setSaveStatus('idle');
        setIsSaving(false);
      }, 2000);
    }, 800);
  };

  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-64 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <nav className="bg-white sticky top-0 z-40 border-b border-[#c3c3d6] flex justify-between items-center w-full px-4 py-3 box-border backdrop-blur-md bg-white/90">
        <div className="flex items-center gap-3">
          <button 
            type="button" 
            className="w-10 h-10 flex items-center justify-center rounded-full border-none bg-transparent hover:bg-[#f1f3ff] transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[#051a3e]">arrow_back</span>
          </button>
          <span className="text-xl font-bold text-[#003d9b]">MedLink</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#434654] font-variation-settings-fill">lock</span>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-[#e1e8ff] border border-[#c3c3d6]">
            <img
              className="w-full h-full object-cover"
              alt="Dr. Sarah Smith provider miniature portal context"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDix1AYGmDREg9q4jHFFhPN1-Bgno157w1wsXJXrlhkNvnzf2Uxb7v-qVm-GZCYU5Zn6NkWFAG1xsAKLqrEyAxed65Tjb7qHxCddCrthmHEhDQBziqRjY53iEqGXq_R2VHOK6cmqs9KaF-zcYFWHJuhSiK4tOnFkxtLAj3NxRmdvTLqiF5FlGkBMLPkExuW4e9XMiDoPvTf19N1SyjAZU7DyPVb3Ka3XnOsMfceH1MDzF0Q6faD7XHxOn2pYcSoRTohwPsQUUgvAq2g"
            />
          </div>
        </div>
      </nav>

      {/* ==================== MAIN MEDICAL DASHBOARD ==================== */}
      <main className="max-w-md w-full mx-auto box-border pb-12">
        
        {/* Patient Summary Identity Card Header */}
        <section className="px-4 py-6 bg-gradient-to-b from-[#f1f3ff] to-[#faf9ff]">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm bg-white shrink-0">
              <img
                className="w-full h-full object-cover"
                alt="Patient Arthur Jenkins case reference profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLNXYO_ubQBARnCBUFSkhYz8QRFQ7evF8OaqrIsOTezo4OxDq4QIth-ssHxQNNjONW0chk7g3tuDLUxXhBReKW0rq4n2eaE49p7ItTdfHrZSLaJVSKTKneC4foWFF2gUsleRCgDKWGKPrzLVSwGbnHOgddHSXiSbtbnA25bWcPg78oY1Ne05oywgb36WFz3bEb2fEp1w98kYTuHPgRq1Qlc6dz8TNedU2wiUASKOo25lULxIs31mOoxsgzkPBeqhG7KKj4Cw_vjzyj"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-1">
                <h1 className="text-xl font-bold text-[#051a3e] m-0 truncate">Arthur Jenkins</h1>
                <span className="bg-[#ffdad6] text-[#410002] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0">
                  High Risk
                </span>
              </div>
              <p className="text-[#434654] text-xs m-0 mt-0.5">Patient ID: ML-9928-X</p>
              <div className="flex flex-wrap gap-1 mt-2.5">
                <span className="bg-[#e1e8ff] text-[#051a3e] text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                  72y • Male
                </span>
                <span className="bg-[#e1e8ff] text-[#051a3e] text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                  A+ Positive
                </span>
              </div>
            </div>
          </div>

          {/* Quick Vital Parameter Status Blocks */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-xl border border-[#c3c3d6] flex items-center gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#ffdad6] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#ba1a1a] text-lg">warning</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-[#434654] m-0">Allergies</p>
                <p className="text-xs text-[#ba1a1a] font-bold m-0 mt-0.5 truncate">Penicillin, Latex</p>
              </div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#c3c3d6] flex items-center gap-3 shadow-sm">
              <div className="w-8 h-8 rounded-lg bg-[#6ae1ff]/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#00687a] text-lg">monitor_heart</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-medium text-[#434654] m-0">BP (Last)</p>
                <p className="text-xs text-[#051a3e] font-bold m-0 mt-0.5 truncate">138/84 mmHg</p>
              </div>
            </div>
          </div>
        </section>

        {/* Full Comprehensive Medical Dossier Sections */}
        <section className="px-4 space-y-4">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-base font-bold text-[#051a3e] m-0">Medical History</h2>
            <button 
              type="button" 
              className="text-[#003d9b] bg-transparent border-none text-xs font-bold flex items-center gap-1 cursor-pointer hover:underline"
            >
              <span className="material-symbols-outlined text-base">filter_list</span>
              Filter
            </button>
          </div>

          {/* Core Prescription Grid Block */}
          <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3 text-[#003d9b]">
              <span className="material-symbols-outlined text-lg">prescriptions</span>
              <h3 className="text-xs font-bold uppercase tracking-wider m-0">Active Medications</h3>
            </div>
            <ul className="space-y-2 p-0 m-0 list-none">
              {medications.map((med, index) => (
                <li key={index} className="flex justify-between items-center p-3 bg-[#f1f3ff] rounded-lg cursor-pointer hover:bg-[#e1e8ff] transition-colors">
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-[#051a3e] m-0">{med.name}</p>
                    <p className="text-[11px] text-[#434654] m-0 mt-0.5">{med.dosage}, {med.instructions}</p>
                  </div>
                  <span className="text-[#737685] material-symbols-outlined text-lg shrink-0 ml-1">chevron_right</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Longitudinal Medical Consult Timeline */}
          <div className="bg-white border border-[#c3c3d6] rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-4 text-[#00687a]">
              <span className="material-symbols-outlined text-lg">history</span>
              <h3 className="text-xs font-bold uppercase tracking-wider m-0">Clinical Timeline</h3>
            </div>
            <div className="relative pl-5 space-y-5 border-l border-solid border-[#c3c3d6]/60 ml-2">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className={`absolute -left-[25px] top-0.5 w-2.5 h-2.5 rounded-full border-2 border-white ${
                    item.isActive ? 'bg-[#003d9b]' : 'bg-[#c3c3d6]'
                  }`} />
                  <p className={`text-[10px] font-bold mb-0.5 ${item.isActive ? 'text-[#003d9b]' : 'text-[#434654]'}`}>
                    {item.date}
                  </p>
                  <p className="text-xs font-bold text-[#051a3e] m-0">{item.title}</p>
                  <p className="text-[11px] text-[#434654] m-0 mt-0.5">{item.provider} • {item.clinic}</p>
                  {item.notes && (
                    <div className="mt-2 p-3 bg-[#faf9ff] rounded border border-solid border-[#c3c3d6]/40">
                      <p className="italic text-[11px] text-[#434654] m-0 leading-relaxed line-clamp-2">
                        {item.notes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Laboratory Diagnostic Metrics Summary Layout */}
          <div className="bg-white border border-[#c3c3d6] rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 flex items-center gap-2 text-[#7b2600]">
              <span className="material-symbols-outlined text-lg">lab_research</span>
              <h3 className="text-xs font-bold uppercase tracking-wider m-0">Recent Lab Panels</h3>
            </div>
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-[#f1f3ff] text-[#434654] uppercase text-[10px] font-bold tracking-wider">
                <tr>
                  <th className="px-4 py-2.5 font-bold">Test</th>
                  <th className="px-4 py-2.5 font-bold">Result</th>
                  <th className="px-4 py-2.5 font-bold">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c3d6]/50">
                {labs.map((lab, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-[#051a3e] font-medium">{lab.test}</td>
                    <td className="px-4 py-3 font-bold text-[#051a3e]">{lab.result}</td>
                    <td className={`px-4 py-3 ${lab.trendColorClass}`}>
                      <span className="material-symbols-outlined text-lg">{lab.trend}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* ==================== BOTTOM STICKY CONSULTATION DRAWER ==================== */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-[#c3c3d6]">
        {/* Subtle blur bleed overlay indicator */}
        <div className="absolute top-0 left-0 right-0 h-12 -mt-12 bg-gradient-to-t from-[#faf9ff] to-transparent pointer-events-none"></div>
        
        <section className="bg-white p-4 box-border shadow-md">
          <div className="max-w-md w-full mx-auto">
            <div className="flex items-center justify-between mb-2">
              <label 
                className="text-xs font-bold flex items-center gap-1.5 text-[#003d9b] uppercase tracking-wider" 
                htmlFor="consultation-note"
              >
                <span className="material-symbols-outlined text-base">edit_note</span>
                Current Consultation Note
              </label>
              <span className="text-[#434654] text-[10px] font-semibold">MAR 14, 10:45 AM</span>
            </div>

            <div className="relative">
              <textarea
                id="consultation-note"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="w-full bg-[#f1f3ff] border border-[#c3c3d6] rounded-lg p-3 text-xs text-[#051a3e] placeholder-[#737685] focus:ring-2 focus:ring-[#003d9b] focus:border-transparent transition-all outline-none resize-none box-border font-sans"
                placeholder="Type clinical observations or append treatment plan here..."
                rows={3}
              />
              
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={handleAppendFile}
                  disabled={!noteText.trim() || isSaving}
                  className={`flex-1 text-white text-xs font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 border-none transition-all cursor-pointer ${
                    saveStatus === 'saved'
                      ? 'bg-[#00687a]'
                      : !noteText.trim()
                      ? 'bg-[#003d9b]/50 cursor-not-allowed'
                      : 'bg-[#003d9b] hover:opacity-90 active:scale-95'
                  }`}
                >
                  {saveStatus === 'saving' && (
                    <>
                      <span className="material-symbols-outlined text-base animate-spin">sync</span>
                      Saving...
                    </>
                  )}
                  {saveStatus === 'saved' && (
                    <>
                      <span className="material-symbols-outlined text-base">check_circle</span>
                      Appended
                    </>
                  )}
                  {saveStatus === 'idle' && (
                    <>
                      <span className="material-symbols-outlined text-base font-variation-settings-fill">save</span>
                      Append to File
                    </>
                  )}
                </button>

                <button 
                  type="button" 
                  className="w-12 h-12 shrink-0 border border-[#c3c3d6] bg-transparent rounded-lg flex items-center justify-center text-[#434654] hover:bg-[#f1f3ff] transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-xl">mic</span>
                </button>
              </div>
            </div>

            {/* Secure Network Validation Stamp Footer */}
            <p className="mt-3 text-center text-[9px] text-[#737685] uppercase tracking-widest font-semibold flex items-center justify-center gap-1 m-0">
              <span className="material-symbols-outlined text-[11px]">verified_user</span>
              HIPAA Compliant Secure Session • MedLink ID: DR-771
            </p>
          </div>
        </section>
      </div>

      {/* Font symbol overrides style configuration variables inline */}
      <style>{`
        .font-variation-settings-fill {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PatientProfile;