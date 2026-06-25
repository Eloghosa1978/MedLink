import React, { useState } from 'react';
import '../Design.css';

const LoginPage: React.FC = () => {
  // Input Visibility and Context Management
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Initiating secure encrypted transaction layer for terminal profile: ${email}`);
  };

  return (
    <div className="bg-background text-on-background font-body-md text-body-md min-h-screen flex flex-col medical-pattern overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Material Design Icons Global Module Hook */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      {/* ==================== BRAND HEADER IDENTIFIER ==================== */}
      <header className="w-full flex justify-center pt-xxl pb-xl px-margin-mobile">
        <div className="flex items-center gap-base transition-opacity duration-300">
          <span className="material-symbols-outlined text-primary text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            medical_services
          </span>
          <h1 className="font-headline-md text-headline-md font-bold tracking-tight text-primary">MedLink</h1>
        </div>
      </header>

      {/* ==================== CENTRAL LOGIN CONTAINER ==================== */}
      <main className="flex-grow flex items-start justify-center px-margin-mobile pb-xxl">
        <div className="w-full max-w-[400px] bg-surface border border-outline-variant rounded-xl p-lg shadow-[0px_8px_24px_rgba(9,30,66,0.15)] transition-all duration-300">
          
          <div className="mb-xl text-center">
            <h2 className="font-title-lg text-title-lg text-on-surface mb-xs">Welcome Back</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant whitespace-normal break-words px-xs">
              Secure access for healthcare professionals
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-lg">
            {/* Email Form Control Section */}
            <div className={`space-y-xs transition-transform duration-200 ${focusedField === 'email' ? 'scale-[1.01]' : 'scale-100'}`}>
              <label className="font-label-md text-label-md text-on-surface-variant ml-xs tracking-wider" htmlFor="email">
                PROFESSIONAL EMAIL
              </label>
              <div className="relative group">
                <span className={`material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline transition-colors ${focusedField === 'email' ? 'text-primary' : 'text-outline'}`}>
                  mail
                </span>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="dr.smith@medlink.com"
                  className="w-full pl-[48px] pr-md py-md bg-[#F4F5F7] border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface placeholder:text-outline font-body-md"
                />
              </div>
            </div>

            {/* Password Form Control Section */}
            <div className={`space-y-xs transition-transform duration-200 ${focusedField === 'password' ? 'scale-[1.01]' : 'scale-100'}`}>
              <div className="flex justify-between items-center px-xs">
                <label className="font-label-md text-label-md text-on-surface-variant tracking-wider" htmlFor="password">
                  PASSWORD
                </label>
                <a className="font-label-md text-label-md text-primary hover:underline underline-offset-4 transition-all focus:outline-none" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="relative group">
                <span className={`material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-outline transition-colors ${focusedField === 'password' ? 'text-primary' : 'text-outline'}`}>
                  lock
                </span>
                <input 
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="••••••••"
                  className="w-full pl-[48px] pr-[44px] py-md bg-[#F4F5F7] border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none text-on-surface placeholder:text-outline font-body-md"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface-variant transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <span className="material-symbols-outlined text-[22px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Encrypted Session Metadata Security Checklist */}
            <div className="bg-surface-container-low border border-outline-variant/40 rounded-lg p-md flex items-start gap-md">
              <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-[2px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified_user
              </span>
              <div className="space-y-xs min-w-0 flex-1">
                <p className="font-label-md text-label-md text-on-secondary-container font-bold">Encrypted Login Session</p>
                <p className="text-[11px] leading-tight text-on-surface-variant whitespace-normal break-words">
                  Your communication tunnel is protected by active HIPAA-compliant end-to-end cloud encryption.
                </p>
              </div>
            </div>

            {/* Form Authorization Trigger */}
            <button 
              type="submit"
              className="w-full h-12 bg-primary text-on-primary font-title-lg text-title-lg rounded-lg shadow-md hover:bg-[#00307a] active:scale-[0.98] focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all flex justify-center items-center gap-base font-bold"
            >
              <span>Login</span>
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>

          {/* Registration Secondary Call To Action */}
          <div className="mt-xl pt-lg border-t border-outline-variant text-center">
            <p className="font-body-sm text-body-sm text-on-surface-variant whitespace-normal break-words">
              Don't have an account? <a className="text-primary font-bold hover:underline underline-offset-4 focus:outline-none" href="#">Register Clinic</a>
            </p>
          </div>

        </div>
      </main>

      {/* ==================== TRANSACTIONAL COMPLIANCE FOOTER ==================== */}
      <footer className="w-full py-xl px-margin-mobile border-t border-outline-variant bg-white mt-auto">
        <div className="w-full max-w-[400px] min-w-[280px] mx-auto text-center space-y-md">
          <div className="flex justify-center gap-xl text-on-surface-variant font-label-md text-label-md font-bold">
            <a className="hover:text-primary transition-colors focus:outline-none" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors focus:outline-none" href="#">Terms</a>
            <a className="hover:text-primary transition-colors focus:outline-none" href="#">Support</a>
          </div>
          <p className="font-body-sm text-body-sm text-outline whitespace-normal break-words">
            © 2026 MedLink Healthcare Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;