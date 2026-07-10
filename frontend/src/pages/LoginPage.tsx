import React from 'react';
import '../Design.css';

const LoginPage: React.FC = () => {
  return (
    <div>
    <div className="bg-surface text-on-surface font-body-md min-h-screen flex flex-col overflow-x-hidden">

<main className="flex-grow flex flex-col lg:flex-row min-h-screen relative">

<section className="hidden lg:flex lg:w-1/2 bg-primary-container relative overflow-hidden items-center justify-center p-8">
<div className="absolute inset-0 pattern-bg opacity-10"></div>
<div className="relative z-10 max-w-lg text-center">
<div className="mb-6 inline-flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-5xl" data-icon="health_and_safety">health_and_safety</span>
<h1 className="font-display-lg text-display-lg text-on-primary-container tracking-tighter">MedLink</h1>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-4">Advancing Care through Connected Intelligence.</h2>
<p className="font-body-lg text-body-lg text-on-primary-container opacity-80">
                    A unified ecosystem for patients and providers to manage health metrics, appointments, and medical records with uncompromising security.
                </p>

<div className="mt-8 rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-64 object-cover" data-alt="A professional medical environment featuring a high-tech digital interface displaying health analytics. The scene is bathed in a clinical yet soft corporate blue lighting, reflecting the MedLink brand's authoritative and empathetic identity. Detailed elements include a floating holographic stethoscope and clear data visualizations on a glass surface. The aesthetic is minimalist and modern, emphasizing clarity and technological advancement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5_AsYldWvDhsgqop9cYsA3RTKlXHLXdUJypdsKNKG29uJrzpPCxI2122JMo-hN8DRAzPqYmmkB9Uq9mcElV8CWO5k1j8ZJrKN1qeN4iOOBhsoPVdbzNzTHCMnipufsdpPO81NXUH27sAMHjgqO81Pzt8UG-oDFlEV5oPdlLx-esMScEtsSrAkkQ1e91uHK0qLvohnW8oy5URTICt8HaJDmhnnw0j0hwUmylyHkb0TCpmA9VXZ7RiB5UDpe0sYEhoiHyVlSHH74BmE"/>
</div>
</div>

<div className="absolute bottom-10 left-10 flex gap-4 opacity-40">
<span className="material-symbols-outlined text-secondary" data-icon="shield_with_heart">shield_with_heart</span>
<span className="material-symbols-outlined text-secondary" data-icon="clinical_notes">clinical_notes</span>
<span className="material-symbols-outlined text-secondary" data-icon="verified_user">verified_user</span>
</div>
</section>

<section className="flex-1 flex flex-col items-center justify-center p-margin-4 lg:p-8 bg-surface relative">

<div className="lg:hidden mb-6 flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-3xl" data-icon="health_and_safety">health_and_safety</span>
<span className="font-display-lg text-headline-md text-primary font-bold">MedLink</span>
</div>
<div className="w-full max-w-[440px] bg-surface-container-lowest p-6 lg:p-8 rounded-xl border border-outline-variant/10 auth-card-shadow">

<div className="flex bg-surface-container rounded-lg p-2 mb-6">
<button className="flex-1 py-1 rounded-md font-label-md transition-all bg-secondary text-on-secondary shadow-sm" id="tab-login">
                        Login
                    </button>
<button className="flex-1 py-1 rounded-md font-label-md transition-all text-on-surface-variant hover:bg-surface-container-high" id="tab-register">
                        Create Account
                    </button>
</div>
<div className="mb-6" id="auth-header">
<h3 className="font-headline-md text-headline-md text-primary mb-1">Welcome Back</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Please select your role to continue accessing the portal.</p>
</div>

<div className="flex gap-3 mb-6">
<button className="flex-1 flex flex-col items-center gap-1 p-4 rounded-xl border-2 border-secondary bg-secondary-container/5 transition-all group" id="role-patient">
<span className="material-symbols-outlined text-secondary text-3xl group-hover:scale-110 transition-transform" data-icon="person">person</span>
<span className="font-label-md text-secondary">I am a Patient</span>
</button>
<button className="flex-1 flex flex-col items-center gap-1 p-4 rounded-xl border border-outline-variant hover:border-secondary transition-all group" id="role-doctor">
<span className="material-symbols-outlined text-on-surface-variant text-3xl group-hover:scale-110 transition-transform" data-icon="medical_services">medical_services</span>
<span className="font-label-md text-on-surface-variant">I am a Doctor</span>
</button>
</div>

<form className="space-y-4" id="auth-form">
<div className="space-y-1">
<label className="font-label-md text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
<div className="relative group">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline" data-icon="mail">mail</span>
<input className="w-full h-12 pl-12 pr-4 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" id="email" placeholder="name@medical.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="font-label-md text-on-surface-variant ml-1" htmlFor="password">Password</label>
<div className="relative group">
<span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline" data-icon="lock">lock</span>
<input className="w-full h-12 pl-12 pr-12 bg-surface border border-outline-variant rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" id="password" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-secondary transition-colors" type="button">
<span className="material-symbols-outlined" data-icon="visibility" id="pw-toggle-icon">visibility</span>
</button>
</div>
</div>
<div className="flex justify-end" id="forgot-pw-container">
<a className="font-label-md text-secondary hover:underline transition-all" href="#">Forgot password?</a>
</div>
<button className="w-full h-[48px] bg-secondary text-on-secondary font-label-md rounded-lg hover:bg-on-secondary-fixed-variant active:scale-[0.98] transition-all shadow-md" type="submit">
                        Sign In
                    </button>
</form>

<div className="flex items-center gap-4 my-6">
<div className="flex-grow h-[1px] bg-outline-variant/30"></div>
<span className="font-label-md text-outline text-xs uppercase tracking-widest">or continue with</span>
<div className="flex-grow h-[1px] bg-outline-variant/30"></div>
</div>

<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-1 h-12 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path></svg>
<span className="font-label-md text-on-surface-variant">Google</span>
</button>
<button className="flex items-center justify-center gap-1 h-12 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.18 16.4 3.5 11.5 5.56 8.04c1.02-1.74 2.76-2.81 4.67-2.84 1.45-.02 2.37.7 3.32.7.92 0 2.24-.87 3.91-.7 1.7.18 2.93.8 3.65 1.86-3.51 2.13-2.95 6.78.53 8.2-.66 1.68-1.55 3.34-3.05 5.02zM13.03 5.04c-.1-.83.22-1.72.76-2.35.73-.86 1.86-1.39 2.82-1.39.14 1.01-.25 1.99-.83 2.68-.73.86-1.89 1.41-2.75 1.06z"></path></svg>
<span className="font-label-md text-on-surface-variant">Apple</span>
</button>
</div>
</div>

<footer className="mt-8 w-full max-w-[440px] flex flex-col md:flex-row justify-between items-center gap-3 px-1">
<span className="font-body-sm text-on-surface-variant opacity-60">© 2024 MedLink Healthcare</span>
<div className="flex gap-4">
<a className="font-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-sm" data-icon="support_agent">support_agent</span> Support
                    </a>
<a className="font-label-md text-secondary hover:text-on-secondary-fixed-variant transition-colors" href="#">Legal</a>
</div>
</footer>
</section>
</main>
</div>
</div>
  );
};

export default LoginPage;