import React, { useState } from 'react';

type SlotStatus = 'open' | 'booked' | 'closed';

interface TimeSlot {
  id: string;
  time: string;
  type: 'morning' | 'afternoon';
  status: SlotStatus;
  patientName?: string;
}

const ManageAvailability: React.FC = () => {
  const [weeklyRoutine, setWeeklyRoutine] = useState<boolean>(true);
  const [activeDay, setActiveDay] = useState<number>(12);

  const [slots, setSlots] = useState<TimeSlot[]>([
    { id: 'm1', time: '08:00 AM', type: 'morning', status: 'open' },
    { id: 'm2', time: '08:30 AM', type: 'morning', status: 'booked', patientName: 'Patient: J. Doe' },
    { id: 'm3', time: '09:00 AM', type: 'morning', status: 'open' },
    { id: 'm4', time: '09:30 AM', type: 'morning', status: 'closed' },
    { id: 'a1', time: '01:00 PM', type: 'afternoon', status: 'open' },
    { id: 'a2', time: '01:30 PM', type: 'afternoon', status: 'open' },
    { id: 'a3', time: '02:00 PM', type: 'afternoon', status: 'closed' },
    { id: 'a4', time: '02:30 PM', type: 'afternoon', status: 'closed' },
  ]);

  const toggleSlot = (id: string) => {
    setSlots((prevSlots) =>
      prevSlots.map((slot) => {
        if (slot.id !== id || slot.status === 'booked') return slot;
        return {
          ...slot,
          status: slot.status === 'open' ? 'closed' : 'open',
        };
      })
    );
  };

  const getSlotStyles = (status: SlotStatus) => {
    switch (status) {
      case 'open':
        return 'bg-[#003d9b] text-white border-transparent shadow-sm';
      case 'booked':
        return 'bg-[#f1f3ff] text-[#051a3e] border border-[#c3c3d6] cursor-not-allowed';
      case 'closed':
        return 'bg-white text-[#051a3e] border border-[#c3c3d6] shadow-sm';
    }
  };

  const days = [
    { label: 'MON', date: 12 },
    { label: 'TUE', date: 13 },
    { label: 'WED', date: 14 },
    { label: 'THU', date: 15 },
    { label: 'FRI', date: 16 },
  ];

  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="bg-white border-b border-[#c3c3d6] fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 py-3 box-border">
        <div className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-variation-settings-fill">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#c3c3d6]">
          <img
            className="w-full h-full object-cover"
            alt="Dr. Sarah Smith professional light-mode thumbnail"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmkcG9tDk-8jTPZvD53HWuz02KsA1HgFqdcBjgJ9C6yUzK1PTfWXWWS2W-deuRc7HdLbvRQLI-FVKOYbq3tWRbFKaq0hOjQS-ytxaeE2YWepxKwgeORrTwHxJicAi0N4kdXKqTJXFOoFfMdYL8v9rdj_Uq7XHxh2rC7f5DRgSEJVllBryFfjIOOWVOvXKDWKVKRBp6bj0T7XKj5qOi56TllSh_vvDMykFxnTeJmdDR1ngXgXSkTJEsnEuH2Z52ufK2vCr4woBeejmC"
          />
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="mt-16 px-4 py-6 max-w-md w-full mx-auto box-border flex-1">
        
        {/* Welcome Doctor Sub-Header Section */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-[#051a3e] mb-0.5 tracking-tight">Manage Availability</h2>
          <p className="text-sm text-[#434654]">Dr. Sarah Smith • General Practitioner</p>
        </section>

        {/* Global Routine Configuration Sync Panel */}
        <div className="bg-[#f1f3ff] p-4 rounded-xl border border-[#c3c3d6]/60 mb-5 flex justify-between items-center box-border">
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#051a3e]">Weekly Routine</span>
            <span className="text-xs text-[#434654]">Sync changes across all weeks</span>
          </div>
          {/* Custom Toggle Switch apparatus */}
          <label className="relative inline-flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              checked={weeklyRoutine}
              onChange={(e) => setWeeklyRoutine(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-[#c3c3d6] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#003d9b]"></div>
          </label>
        </div>

        {/* Categorization State Legend Dots */}
        <div className="flex gap-4 mb-5 overflow-x-auto scrollbar-none pb-1 box-border">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#003d9b]"></div>
            <span className="text-xs font-bold text-[#434654]">Open</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full bg-[#f1f3ff] border border-[#c3c3d6]"></div>
            <span className="text-xs font-bold text-[#434654]">Booked</span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-3 h-3 rounded-full border border-[#c3c3d6] bg-white"></div>
            <span className="text-xs font-bold text-[#434654]">Closed</span>
          </div>
        </div>

        {/* Interactive Day Tabs Slider */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none mb-6 -mx-4 px-4 box-border">
          {days.map((day) => (
            <button
              key={day.date}
              type="button"
              onClick={() => setActiveDay(day.date)}
              className={`flex flex-col items-center min-w-[56px] py-3 px-2 rounded-xl border transition-all cursor-pointer ${
                activeDay === day.date
                  ? 'bg-[#003d9b] text-white border-transparent shadow-sm'
                  : 'bg-[#f1f3ff] border-[#c3c3d6] text-[#051a3e]'
              }`}
            >
              <span className={`text-[10px] font-bold tracking-wider ${activeDay === day.date ? 'opacity-80' : 'text-[#434654]'}`}>
                {day.label}
              </span>
              <span className="text-lg font-bold mt-0.5">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Schedule Grid Bento Boxes Matrix */}
        <div className="grid grid-cols-2 gap-3">
          
          {/* ==================== MORNING SECTION ==================== */}
          <div className="col-span-2 mb-1 mt-1">
            <h3 className="text-sm font-bold text-[#051a3e] flex items-center gap-2 m-0">
              <span className="material-symbols-outlined text-[#7b2600] text-lg font-variation-settings-fill">light_mode</span>
              Morning
            </h3>
          </div>

          {slots
            .filter((s) => s.type === 'morning')
            .map((slot) => {
              const isBooked = slot.status === 'booked';
              const Comp = isBooked ? 'div' : 'button';
              return (
                <Comp
                  key={slot.id}
                  {...(!isBooked && { type: 'button', onClick: () => toggleSlot(slot.id) })}
                  className={`flex flex-col p-4 rounded-xl text-left transition-all duration-150 ${
                    !isBooked ? 'active:scale-95 cursor-pointer' : ''
                  } ${getSlotStyles(slot.status)}`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    slot.status === 'open' ? 'text-white/90' : 'text-[#434654]'
                  }`}>
                    {slot.time}
                  </span>
                  <span className="text-sm font-bold leading-tight">
                    {slot.status === 'open' && 'Open Slot'}
                    {slot.status === 'closed' && 'Closed'}
                    {slot.status === 'booked' && (slot.patientName || 'Booked')}
                  </span>
                </Comp>
              );
            })}

          {/* ==================== AFTERNOON SECTION ==================== */}
          <div className="col-span-2 mt-4 mb-1">
            <h3 className="text-sm font-bold text-[#051a3e] flex items-center gap-2 m-0">
              <span className="material-symbols-outlined text-[#003d9b] text-lg font-variation-settings-fill">sunny</span>
              Afternoon
            </h3>
          </div>

          {slots
            .filter((s) => s.type === 'afternoon')
            .map((slot) => {
              const isBooked = slot.status === 'booked';
              const Comp = isBooked ? 'div' : 'button';
              return (
                <Comp
                  key={slot.id}
                  {...(!isBooked && { type: 'button', onClick: () => toggleSlot(slot.id) })}
                  className={`flex flex-col p-4 rounded-xl text-left transition-all duration-150 ${
                    !isBooked ? 'active:scale-95 cursor-pointer' : ''
                  } ${getSlotStyles(slot.status)}`}
                >
                  <span className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    slot.status === 'open' ? 'text-white/90' : 'text-[#434654]'
                  }`}>
                    {slot.time}
                  </span>
                  <span className="text-sm font-bold leading-tight">
                    {slot.status === 'open' && 'Open Slot'}
                    {slot.status === 'closed' && 'Closed'}
                    {slot.status === 'booked' && (slot.patientName || 'Booked')}
                  </span>
                </Comp>
              );
            })}
        </div>

        {/* Global Blueprint Schedule Submission System Trigger */}
        <div className="mt-12">
          <button
            type="button"
            className="w-full py-3.5 bg-[#003d9b] text-white rounded-xl text-sm font-bold border-none shadow-md hover:opacity-95 transition-opacity active:scale-[0.99] duration-150 cursor-pointer"
          >
            Update Schedule
          </button>
        </div>
      </main>

      {/* ==================== GLOBAL APP DESKTOP/MOBILE FOOTER NAV ANCHOR ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] bg-white flex justify-around items-center px-2 pb-5 shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] border-t border-[#c3c3d6] box-border z-50 rounded-t-xl">
        <div className="flex flex-col items-center justify-center text-[#434654] cursor-pointer w-16">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </div>
        <div className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 cursor-pointer scale-95">
          <span className="material-symbols-outlined font-variation-settings-fill">calendar_today</span>
          <span className="text-[10px] font-bold mt-0.5">Schedule</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#434654] cursor-pointer w-16">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-[10px] font-medium mt-0.5">Patients</span>
        </div>
        <div className="flex flex-col items-center justify-center text-[#434654] cursor-pointer w-16">
          <div className="relative flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#ba1a1a] rounded-full"></span>
          </div>
          <span className="text-[10px] font-medium mt-0.5">Alerts</span>
        </div>
      </nav>

      {/* Embedded view utilities style tags */}
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

export default ManageAvailability;