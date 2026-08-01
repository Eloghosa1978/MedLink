const HealthMetrics = () => {
  return (
    <>
      <div className="bg-background text-on-background pb-32">
<header className="w-full top-0 sticky z-50 bg-surface/80 backdrop-blur-md shadow-sm flex justify-between items-center px-4 md:px-margin-desktop py-3 h-16">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxWIvhvsMNmwfEEWARPyJYG5VrVGlTguccVW-DRBb-pJ0LumRq7MsjH9TPpqtoxr_2py6dgskuR7XfRmKaqX2BApZXCS--5YsuZnLZbBnjBNVtf3xKGdfZfnE42Z_xBT7ULHexFCVGzriYn9lEQXgYJRy3K063bGby45P3kgtrOP8Zzeb5ipXDXL_rsTt-AGJNZE0EtS-VSrZ8uOAIqnf50bceHbi6f7gZTuUP1pNiInmAe7EVUxHAmA"/>
</div>
<h1 className="font-headline-md text-headline-md font-bold text-primary">HealthVital</h1>
</div>
<div className="flex items-center gap-1">
<button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="max-w-[1280px] mx-auto px-4 md:px-margin-desktop py-6 space-y-8">
<section>
<div className="clinical-card rounded-xl p-6 relative overflow-hidden flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1 space-y-2">
<h2 className="text-label-sm font-label-sm text-outline uppercase tracking-wider">Weekly Summary</h2>
<p className="text-headline-md font-headline-md text-on-surface">Unified Health Dashboard</p>
<p className="text-body-md font-body-md text-on-surface-variant max-w-xl">Great job! Your health stats are within optimal ranges. Activity levels are up by 12% and heart rate is stable at 68 bpm. All monitored systems are performing normally this week.</p>
</div>
</div>
</section>
<section className="space-y-3">
<h3 className="font-headline-md text-headline-md text-on-surface">Quick Stats</h3>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="clinical-card rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
<div className="flex justify-between">
<p className="text-label-sm text-outline">Heart Rate</p>
<span className="material-symbols-outlined text-error text-[20px]" data-icon="monitor_heart">monitor_heart</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-metric-xl font-bold text-error">72</span>
<span className="text-label-sm text-outline">bpm</span>
</div>
<p className="text-label-sm text-on-surface-variant mt-1">Stable since yesterday</p>
</div>
</div>
<div className="clinical-card rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
<div className="flex justify-between">
<p className="text-label-sm text-outline">Blood Pressure</p>
<span className="material-symbols-outlined text-primary text-[20px]" data-icon="water_drop">water_drop</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-metric-xl font-bold text-primary">120/80</span>
</div>
<p className="text-label-sm text-on-surface-variant mt-1">Perfectly within range</p>
</div>
</div>
<div className="clinical-card rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
<div className="flex justify-between">
<p className="text-label-sm text-outline">Weight</p>
<span className="material-symbols-outlined text-secondary text-[20px]" data-icon="scale">scale</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-metric-xl font-bold text-on-surface">70.2</span>
<span className="text-label-sm text-outline">kg</span>
</div>
<p className="text-label-sm text-on-surface-variant mt-1">Trending down 0.4kg</p>
</div>
</div>
<div className="clinical-card rounded-xl p-4 flex flex-col justify-between min-h-[140px]">
<div className="flex justify-between">
<p className="text-label-sm text-outline">Oxygen</p>
<span className="material-symbols-outlined text-tertiary text-[20px]" data-icon="air">air</span>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-metric-xl font-bold text-tertiary">98</span>
<span className="text-label-sm text-outline">%</span>
</div>
<p className="text-label-sm text-on-surface-variant mt-1">Consistent at 98%</p>
</div>
</div>
</div>
</section>
<section className="space-y-3">
<div className="flex justify-between items-end">
<h3 className="font-headline-md text-headline-md text-on-surface">Trend Analysis</h3>
<div className="bg-surface-container-low p-base rounded-xl flex gap-1 shadow-sm">
<button className="px-6 py-1.5 rounded-lg text-label-sm font-semibold transition-all bg-white text-primary shadow-sm">Day</button>
<button className="px-6 py-1.5 rounded-lg text-label-sm font-semibold text-on-surface-variant hover:bg-surface-variant/50">Week</button>
<button className="px-6 py-1.5 rounded-lg text-label-sm font-semibold text-on-surface-variant hover:bg-surface-variant/50">Month</button>
</div>
</div>
<div className="clinical-card rounded-xl p-6 space-y-6">
<div className="flex justify-between items-start">
<div>
<h4 className="font-bold text-body-lg">Heart Rate Overview</h4>
<p className="text-body-md text-on-surface-variant">Average 72 BPM today</p>
</div>
<div className="bg-error-container/20 text-error px-6 py-1 rounded-full text-label-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_down</span> -4% vs yesterday
                    </div>
</div>
<div className="py-8 px-6 bg-surface-container-low rounded-xl text-center">
<p className="text-body-md text-on-surface-variant italic">Data indicates a gradual decline in resting heart rate throughout the day, peaking at 142 BPM during your mid-afternoon activity session and stabilizing at 64 BPM in the evening.</p>
</div>
<div className="grid grid-cols-3 gap-6 border-t border-outline-variant/30 pt-6 text-center">
<div>
<p className="text-label-sm text-outline uppercase">Average</p>
<p className="text-headline-md font-bold">72</p>
</div>
<div>
<p className="text-label-sm text-outline uppercase">Resting</p>
<p className="text-headline-md font-bold">64</p>
</div>
<div>
<p className="text-label-sm text-outline uppercase text-error">Peak</p>
<p className="text-headline-md font-bold">142</p>
</div>
</div>
</div>
</section>
<section className="space-y-3">
<h3 className="font-headline-md text-headline-md text-on-surface">AI Health Insights</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="glass-card p-6 rounded-xl flex flex-col gap-3 shadow-sm border-l-4 border-l-error">
<div className="flex items-center gap-3">
<div className="bg-error-container/20 p-2 rounded-lg text-error">
<span className="material-symbols-outlined" data-icon="blood_pressure">blood_pressure</span>
</div>
<h4 className="font-bold text-body-lg">Evening BP Spikes</h4>
</div>
<p className="text-body-md text-on-surface-variant">Systolic pressure tends to be 12% higher between 7 PM and 10 PM. Consider reducing evening sodium.</p>
<div className="mt-auto pt-3 flex items-center text-error text-label-sm font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm mr-1">warning</span> Action Recommended
                    </div>
</div>
<div className="glass-card p-6 rounded-xl flex flex-col gap-3 shadow-sm">
<div className="flex items-center gap-3 text-tertiary">
<div className="bg-tertiary-fixed/30 p-2 rounded-lg">
<span className="material-symbols-outlined" data-icon="bedtime">bedtime</span>
</div>
<h4 className="font-bold text-body-lg">Sleep Correlation</h4>
</div>
<p className="text-body-md text-on-surface-variant">Resting heart rate is consistently 5bpm lower on nights when you record at least 7.5 hours of sleep.</p>
<div className="mt-auto pt-3 flex items-center text-tertiary text-label-sm font-bold uppercase tracking-wider">
<span className="material-symbols-outlined text-sm mr-1">verified</span> Positive Correlation
                    </div>
</div>
</div>
</section>
<section className="pt-2">
<button className="w-full bg-primary text-on-primary py-6 rounded-2xl font-bold text-body-lg shadow-lg hover:brightness-95 transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
                Log New Vitals
            </button>
</section>
</main>
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-16 bg-surface/90 backdrop-blur-md shadow-[0px_-4px_20px_rgba(0,0,0,0.04)] pb-safe z-50">
<a className="flex flex-col items-center justify-center text-primary px-6 py-1" href="#">
<span className="material-symbols-outlined" data-icon="monitor_heart" style={{fontVariationSettings: "'FILL' 1"}}>monitor_heart</span>
<span className="font-label-sm text-label-sm">Vitals</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-6 py-1 hover:bg-surface-container-high rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="show_chart">show_chart</span>
<span className="font-label-sm text-label-sm">Trends</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-6 py-1 hover:bg-surface-container-high rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
<span className="font-label-sm text-label-sm">Log</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-6 py-1 hover:bg-surface-container-high rounded-xl transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="lightbulb">lightbulb</span>
<span className="font-label-sm text-label-sm">Insights</span>
</a>
</nav>

</div>
    </>
  );
};

export default HealthMetrics;
