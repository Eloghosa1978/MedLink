import React, { useState } from 'react';

type FilterType = 'all' | 'appointments' | 'reminders' | 'profile';

interface NotificationItem {
  id: string;
  type: FilterType;
  title: string;
  time: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  hasActions?: boolean;
  actionType?: 'calendar' | 'checkin';
}

const NotificationsCenter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [readItems, setReadItems] = useState<Record<string, boolean>>({});

  const notifications: NotificationItem[] = [
    {
      id: 'alert-1',
      type: 'appointments',
      title: 'Booking Confirmed: Dr. Sarah Smith',
      time: '2m ago',
      description: 'Your visit with Cardiology is scheduled for tomorrow at 10:00 AM.',
      icon: 'event_available',
      bgColor: '#6ae1ff',
      textColor: '#006374',
      hasActions: true,
      actionType: 'calendar',
    },
    {
      id: 'alert-2',
      type: 'reminders',
      title: 'Reminder: Appointment in 1 hour',
      time: '1h ago',
      description: 'Please ensure you have your medical history and current prescriptions ready for the call.',
      icon: 'alarm',
      bgColor: '#ffb49b',
      textColor: '#7b2600',
      hasActions: true,
      actionType: 'checkin',
    },
    {
      id: 'alert-3',
      type: 'profile',
      title: 'Update: Profile changed',
      time: '3h ago',
      description: 'Your emergency contact information has been successfully updated in our records.',
      icon: 'manage_accounts',
      bgColor: '#e1e8ff',
      textColor: '#434654',
      hasActions: false,
    },
  ];

  const handleItemClick = (id: string) => {
    setReadItems((prev) => ({ ...prev, [id]: true }));
  };

  const filteredNotifications = notifications.filter(
    (item) => activeFilter === 'all' || item.type === activeFilter
  );

  return (
    <div className="bg-[#faf9ff] text-[#051a3e] min-h-screen pb-32 w-full flex flex-col font-sans selection:bg-[#dae2ff] selection:text-[#001848]">
      {/* Material Symbols Outlined Icons Link Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== TOP APP BAR ==================== */}
      <header className="sticky top-0 z-50 bg-[#faf9ff] border-b border-[#c3c3d6] flex justify-between items-center w-full px-4 md:px-16 py-3 box-border transition-shadow duration-200">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#003d9b] text-2xl font-variation-settings-fill">medical_services</span>
          <h1 className="text-xl font-bold text-[#003d9b]">MedLink</h1>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full border border-[#c3c3d6] overflow-hidden bg-[#f1f3ff]">
            <img 
              className="w-full h-full object-cover" 
              alt="Medical user workspace avatar reference" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKYBN6XMHKBlaZtkzYT4DxdzCNdwUJr7I_X0zoXYKOzqeVCN-q8VVkZ0RG0r1qRlpV2CrrDj43G9wqDVUh9LxhRp1TDTQmi6vbbco3OnfhZJcyxMXUb91J_qwMf2QspExj6EEnwTeXST5CQ0cdwGE9yGCyvmJyBQlND3XZNXq7BEoYRCzIA5DrfV7Ut-zRT5nmYvG1YOAPi0bRt2RVoKehRpGIlEMBHO2ssjSsdAMrImfn_CZ_jQM6OWgREvHTcFbNWepKnDTCPs6b"
            />
          </div>
        </div>
      </header>

      {/* ==================== MAIN CONTENT CANVAS ==================== */}
      <main className="px-4 pt-6 max-w-md w-full mx-auto box-border flex-grow">
        
        {/* Header Title Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[#051a3e] mb-0.5 tracking-tight">Notifications</h2>
          <p className="text-xs text-[#434654]">Stay updated with your healthcare activities.</p>
        </div>

        {/* Dynamic Horizontal Chip Filter Swiper Controls */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none w-full box-border">
          <button 
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold border-none transition-all cursor-pointer shrink-0 ${
              activeFilter === 'all' 
                ? 'bg-[#003d9b] text-white shadow-sm' 
                : 'bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6]'
            }`}
          >
            All Alerts
          </button>
          <button 
            type="button"
            onClick={() => setActiveFilter('appointments')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all cursor-pointer shrink-0 ${
              activeFilter === 'appointments' 
                ? 'bg-[#003d9b] text-white shadow-sm border-none' 
                : 'bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6]'
            }`}
          >
            Appointments
          </button>
          <button 
            type="button"
            onClick={() => setActiveFilter('reminders')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all cursor-pointer shrink-0 ${
              activeFilter === 'reminders' 
                ? 'bg-[#003d9b] text-white shadow-sm border-none' 
                : 'bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6]'
            }`}
          >
            Reminders
          </button>
          <button 
            type="button"
            onClick={() => setActiveFilter('profile')}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-bold transition-all cursor-pointer shrink-0 ${
              activeFilter === 'profile' 
                ? 'bg-[#003d9b] text-white shadow-sm border-none' 
                : 'bg-[#e1e8ff] text-[#434654] border border-[#c3c3d6]'
            }`}
          >
            Profile
          </button>
        </div>

        {/* Render Feed Stream Matrix */}
        <div className="flex flex-col gap-3 mt-2">
          {filteredNotifications.map((alert) => {
            const isRead = readItems[alert.id];
            return (
              <div 
                key={alert.id}
                onClick={() => handleItemClick(alert.id)}
                className={`bg-white border rounded-xl p-4 flex gap-4 shadow-sm transition-all duration-200 cursor-pointer ${
                  isRead ? 'opacity-60 border-dashed border-[#c3c3d6]' : 'border-[#c3c3d6]'
                }`}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${alert.bgColor}33`, color: alert.textColor }}
                >
                  <span className="material-symbols-outlined text-xl font-variation-settings-fill">
                    {alert.icon}
                  </span>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2 w-full">
                    <h3 className="text-sm font-bold text-[#051a3e] leading-snug truncate pr-1">
                      {alert.title}
                    </h3>
                    <span className="text-[10px] text-[#737685] shrink-0 pt-0.5">{alert.time}</span>
                  </div>
                  <p className="text-xs text-[#434654] mt-1 leading-relaxed">
                    {alert.description}
                  </p>

                  {alert.hasActions && !isRead && (
                    <div className="flex gap-3 mt-3.5">
                      {alert.actionType === 'calendar' && (
                        <>
                          <button type="button" className="bg-[#003d9b] text-white text-xs font-bold px-3 py-2 rounded-lg border-none cursor-pointer active:opacity-80 transition-opacity shadow-sm">
                            Add to Calendar
                          </button>
                          <button type="button" className="bg-[#f1f3ff] border border-[#c3c3d6] text-[#003d9b] text-xs font-bold px-3 py-2 rounded-lg cursor-pointer">
                            Details
                          </button>
                        </>
                      )}
                      {alert.actionType === 'checkin' && (
                        <button type="button" className="bg-[#003d9b] text-white text-xs font-bold px-4 py-2 rounded-lg border-none cursor-pointer active:opacity-80 transition-opacity shadow-sm">
                          Check In Now
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Empty State Static Illustration Block Component */}
          {filteredNotifications.length === 0 && (
            <div className="mt-8 text-center opacity-50 py-12">
              <p className="text-sm text-[#434654]">No updates found in this directory context.</p>
            </div>
          )}

          <div className="mt-12 text-center opacity-40">
            <div className="inline-block p-4 bg-[#f1f3ff] rounded-full mb-3">
              <span className="material-symbols-outlined text-3xl block">notifications_none</span>
            </div>
            <p className="text-xs text-[#434654] m-0">No more notifications for today</p>
          </div>
        </div>
      </main>

      {/* Global Refresh Data System FAB Interaction Core Action */}
      <button 
        type="button" 
        onClick={() => setReadItems({})}
        className="fixed bottom-24 right-4 w-14 h-14 bg-[#003d9b] text-white rounded-full shadow-lg flex items-center justify-center z-40 border-none active:scale-95 transition-transform cursor-pointer"
      >
        <span className="material-symbols-outlined text-xl">refresh</span>
      </button>

      {/* ==================== GLOBAL APP NAVIGATION HOOK ==================== */}
      <nav className="fixed bottom-0 left-0 w-full h-[72px] bg-white shadow-[0px_-4px_12px_rgba(9,30,66,0.08)] border-t border-[#c3c3d6] flex justify-around items-center px-2 pb-5 z-50 rounded-t-xl box-border">
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#home">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-medium mt-0.5">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#schedule">
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-[10px] font-medium mt-0.5">Schedule</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#434654] no-underline w-16" href="#patients">
          <span className="material-symbols-outlined">groups</span>
          <span className="text-[10px] font-medium mt-0.5">Patients</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#dae2ff] text-[#001848] rounded-full px-4 py-1 no-underline scale-95" href="#alerts">
          <span className="material-symbols-outlined font-variation-settings-fill">notifications</span>
          <span className="text-[10px] font-bold mt-0.5">Alerts</span>
        </a>
      </nav>

      {/* Configuration baseline styles injection layer */}
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

export default NotificationsCenter;