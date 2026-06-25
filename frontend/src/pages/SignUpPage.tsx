import React, { useState } from 'react';
import '../Design.css';

type UserRole = 'Patient' | 'Doctor';

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState<UserRole>('Patient');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`MedLink Account Created successfully as a ${role}! Redirecting to dashboard...`);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col justify-start relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== HERO / BRANDING HEADER ==================== */}
      <header className="w-full max-w-md mx-auto px-4 pt-12 pb-6 flex flex-col items-center text-center">
        <div className="mb-4 flex items-center justify-center bg-primary text-on-primary w-16 h-16 rounded-xl shadow-lg">
          <span className="material-symbols-outlined text-[32px]">medical_services</span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">MedLink</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2 px-2">
          Reliability, Compassion, and Clarity in Healthcare Connect.
        </p>
      </header>

      {/* ==================== SIGN UP FORM FRAMEWORK ==================== */}
      <main className="w-full max-w-md mx-auto px-4 pb-12 flex flex-col gap-6">
        
        {/* Main Card */}
        <div className="bg-surface border border-outline-variant rounded-xl p-6 shadow-sm w-full">
          <h2 className="font-title-lg text-title-lg text-on-surface mb-6 font-bold">Create your account</h2>
          
          <form className="space-y-4" onSubmit={handleSignUpSubmit}>
            {/* Bento Identity Switcher */}
            <div className="space-y-3">
              <label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-bold block">
                Select Your Role
              </label>
              <div className="grid grid-cols-2 gap-3 p-1 bg-surface-container-low rounded-lg border border-outline-variant">
                <button 
                  type="button"
                  onClick={() => setRole('Patient')}
                  className={`flex flex-col items-center justify-center py-4 rounded-lg transition-all duration-200 focus:outline-none ${
                    role === 'Patient' 
                      ? 'bg-secondary-container text-on-secondary-container shadow-sm font-bold' 
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined mb-1">person</span>
                  <span className="font-label-md text-label-md">Patient</span>
                </button>
                
                <button 
                  type="button"
                  onClick={() => setRole('Doctor')}
                  className={`flex flex-col items-center justify-center py-4 rounded-lg transition-all duration-200 focus:outline-none ${
                    role === 'Doctor' 
                      ? 'bg-secondary-container text-on-secondary-container shadow-sm font-bold' 
                      : 'text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined mb-1">medical_information</span>
                  <span className="font-label-md text-label-md">Doctor</span>
                </button>
              </div>
            </div>

            {/* Input Fields */}
            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant tracking-wider block" htmlFor="name">
                FULL NAME
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-outline pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">badge</span>
                </span>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={role === 'Doctor' ? 'Dr. Sarah Smith' : 'Jane Doe'}
                  className="w-full h-12 pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md text-on-surface"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant tracking-wider block" htmlFor="email">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-outline pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </span>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@medlink.com"
                  className="w-full h-12 pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md text-on-surface"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-label-md text-label-md text-on-surface-variant tracking-wider block" htmlFor="password">
                PASSWORD
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-outline pointer-events-none">
                  <span className="material-symbols-outlined text-[20px]">lock</span>
                </span>
                <input 
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 pl-11 pr-4 py-3 bg-surface-container-lowest border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none font-body-md text-on-surface"
                />
              </div>
            </div>

            <p className="font-body-sm text-body-sm text-on-surface-variant text-center pt-2">
              By creating an account, you agree to our <a className="text-primary font-bold hover:underline" href="#">Privacy Policy</a> and <a className="text-primary font-bold hover:underline" href="#">Terms of Service</a>.
            </p>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full h-12 bg-primary text-on-primary rounded-lg shadow-md hover:bg-primary/95 active:scale-[0.98] transition-all flex justify-center items-center gap-2 disabled:opacity-75 font-bold text-title-lg"
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account'}
              {!isSubmitting && <span className="material-symbols-outlined text-[20px]">arrow_forward</span>}
            </button>
          </form>
        </div>

        {/* Alternative Actions Node */}
        <div className="w-full text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Already have an account? <a className="text-primary font-bold hover:underline" href="#">Log In</a>
          </p>
        </div>

        {/* HIPAA Security Banner Card */}
        <div className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-4 flex items-start gap-4 shadow-sm text-left">
          <div className="bg-secondary-container text-on-secondary-container p-2 rounded-lg shrink-0">
            <span className="material-symbols-outlined text-[20px] block" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified_user
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-title-lg text-title-lg text-on-surface text-[16px] font-bold">HIPAA Compliant Secure System</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
              Your medical data parameters are encrypted and stored following hospital-grade security network protocols.
            </p>
          </div>
        </div>
      </main>

      {/* ==================== SECURE COMPLIANCE FOOTER ==================== */}
      <footer className="w-full py-6 text-center bg-surface-container-lowest border-t border-outline-variant mt-auto">
        <div className="w-full max-w-md mx-auto px-4">
          <p className="font-body-sm text-body-sm text-outline">
            © 2026 MedLink Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;