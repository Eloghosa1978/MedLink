const SymptomsIntake = () => {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface dark:bg-surface-dim shadow-sm dark:shadow-none">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary dark:text-on-secondary-container hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors">
            Med Link
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            className="font-label-lg text-label-lg text-on-surface-variant dark:text-on-secondary-container hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors px-4 py-2 rounded-lg"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="font-label-lg text-label-lg text-on-surface-variant dark:text-on-secondary-container hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors px-4 py-2 rounded-lg"
            href="#"
          >
            Symptom Triage
          </a>
          <a
            className="font-label-lg text-label-lg text-on-surface-variant dark:text-on-secondary-container hover:bg-surface-container dark:hover:bg-surface-container-highest transition-colors px-4 py-2 rounded-lg"
            href="#"
          >
            Appointments
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="A professional medical profile headshot of a friendly middle-aged woman with glasses, wearing a white clinical coat over a blue blouse. The lighting is soft and professional in a bright, modern clinic office. The image conveys trust and expertise with a clean, high-key light-mode aesthetic."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupz8PQoQQD4BDcLxnra4Z0S9pdvIyzWl5i2PDob7O3xRcZxHnpJjLodND7C2h4Exptsx42B-5i-10zH830MKTkOJh2lFEh10CvLhUxlOLwu9SSRPk9CAyo4xCC2a4Yw7ptfDRFPrFthQ5oS2a_A2w6slME8kkpuT6Ezh5F-wo3i2i2PSeYiwk41VtrdXCWtpPz5icl0Bl-MAXemQ6Tnv-EMCZi0zRPCXjL4fBbdUOcGoBTIRqcxvgdw"
            />
          </div>
        </div>
      </header>
      <aside className="fixed left-0 top-16 bottom-0 hidden md:flex flex-col p-4 border-r border-outline-variant dark:border-on-secondary-fixed-variant bg-surface-container-low dark:bg-surface-container-low w-64">
        <div className="mb-6 px-4">
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Health Profile
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            Verified Member
          </p>
        </div>
        <div className="space-y-1 flex-grow">
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">history_edu</span>{" "}
            Medical History
          </a>
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg bg-secondary-container text-on-secondary-container font-semibold rounded-lg scale-[0.98] transition-transform"
            href="#"
          >
            <span className="material-symbols-outlined">medical_services</span>{" "}
            Symptom Triage
          </a>
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">description</span> Lab
            Reports
          </a>
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>{" "}
            Insurance &amp; Billing
          </a>
        </div>
        <div className="mt-auto space-y-1">
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span> Settings
          </a>
          <button className="w-full mt-4 bg-primary text-on-primary py-3 px-6 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-opacity">
            Book Appointment
          </button>
        </div>
      </aside>
      <main className="md:ml-64 pt-16 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 md:px-margin-desktop py-6">
          <div className="mb-8">
            <h1 className="font-headline-lg text-headline-lg mb-1 text-primary">
              Symptom Intake &amp; Triage
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Help us understand your condition before your clinical
              consultation. Your data is encrypted and securely shared with your
              healthcare provider.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-8 space-y-6">
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                    1
                  </span>
                  <h2 className="font-headline-md text-headline-md">
                    Symptom Selection
                  </h2>
                </div>
                <p className="font-body-md text-body-md mb-4 text-on-surface-variant">
                  Select all that apply to your current condition.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button className="tag-btn group flex items-center gap-1 px-4 py-2 rounded-full border border-outline bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      headset_mic
                    </span>
                    <span className="font-label-lg text-label-lg">
                      Headache
                    </span>
                  </button>
                  <button className="tag-btn group flex items-center gap-1 px-4 py-2 rounded-full border border-outline bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      thermostat
                    </span>
                    <span className="font-label-lg text-label-lg">Fever</span>
                  </button>
                  <button className="tag-btn group flex items-center gap-1 px-4 py-2 rounded-full border border-outline bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      air
                    </span>
                    <span className="font-label-lg text-label-lg">Cough</span>
                  </button>
                  <button className="tag-btn group flex items-center gap-1 px-4 py-2 rounded-full border border-outline bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      ecg
                    </span>
                    <span className="font-label-lg text-label-lg">
                      Palpitations
                    </span>
                  </button>
                  <button className="tag-btn group flex items-center gap-1 px-4 py-2 rounded-full border border-outline bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      personal_injury
                    </span>
                    <span className="font-label-lg text-label-lg">Nausea</span>
                  </button>
                  <button className="tag-btn group flex items-center gap-1 px-4 py-2 rounded-full border border-outline bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      fitness_center
                    </span>
                    <span className="font-label-lg text-label-lg">Fatigue</span>
                  </button>
                  <button className="flex items-center gap-1 px-4 py-2 rounded-full border border-dashed border-primary text-primary hover:bg-primary/5 transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[18px]">
                      add
                    </span>
                    <span className="font-label-lg text-label-lg">
                      Add Other
                    </span>
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                    2
                  </span>
                  <h2 className="font-headline-md text-headline-md">
                    Symptom Details
                  </h2>
                </div>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Pain Severity
                      </label>
                      <span
                        className="font-bold text-primary font-headline-md"
                        id="severity-val"
                      >
                        5/10
                      </span>
                    </div>
                    <input
                      className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                      max="10"
                      min="0"
                      type="range"
                      value="5"
                    />
                    <div className="flex justify-between font-label-md text-label-md text-on-surface-variant">
                      <span>No Pain</span>
                      <span>Moderate</span>
                      <span>Severe</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        When did it start?
                      </label>
                      <div className="relative">
                        <input
                          className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                          type="date"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="font-label-lg text-label-lg text-on-surface">
                        Frequency
                      </label>
                      <select className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:outline-none focus:border-primary appearance-none">
                        <option>Continuous</option>
                        <option>Intermittent</option>
                        <option>Occasional</option>
                        <option>Worsening over time</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-surface-container p-6 rounded-xl border-2 border-dashed border-primary/30 flex flex-col items-center text-center">
                <span className="material-symbols-outlined text-display-lg text-primary mb-4">
                  photo_camera
                </span>
                <h3 className="font-headline-md text-headline-md mb-1">
                  Photo Evidence
                </h3>
                <p className="font-label-md text-label-md text-on-surface-variant mb-6">
                  Clear images of rashes, swelling, or visible symptoms help
                  diagnostics.
                </p>
                <button className="w-full py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:shadow-lg transition-all flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined">upload</span>{" "}
                  Upload Images
                </button>
                <p className="mt-4 font-label-md text-label-md text-on-surface-variant opacity-60">
                  HEIC, JPEG, PNG (Max 10MB)
                </p>
              </div>
              <div className="bg-secondary-container/50 p-6 rounded-xl border border-secondary-container relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                    <span className="font-label-lg text-label-lg font-bold">
                      AI SYMPTOM CHECKER
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-secondary-container mb-4">
                    Based on your entries, our AI suggests 3 possible conditions
                    for discussion.
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span className="font-label-md text-label-md">
                        Seasonal Allergy (85%)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                      <span className="font-label-md text-label-md">
                        Common Cold (12%)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 opacity-5">
                  <span className="material-symbols-outlined text-[120px]">
                    medical_information
                  </span>
                </div>
              </div>
            </aside>
          </div>
          <section className="mt-[48px] bg-surface-container-lowest p-8 md:p-[48px] rounded-2xl shadow-sm border border-outline-variant/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline-lg text-headline-lg mb-3">
                  Ready for Review
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Review your data before submitting. Once submitted, a
                  clinician will review your triage and provide the next steps
                  via the portal.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button className="px-8 py-6 border border-outline rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-all flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined">save</span> Save
                  Draft
                </button>
                <button className="px-8 py-6 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-4 shadow-md">
                  Submit &amp; Consult{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-outline-variant">
              <a
                className="group flex items-center gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-all"
                href="#"
              >
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">videocam</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface">
                    Join Telemedicine Waiting Room
                  </h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Estimated wait: 12 mins
                  </p>
                </div>
              </a>
              <a
                className="group flex items-center gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-all"
                href="#"
              >
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">forum</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface">
                    Chat with Health Assistant
                  </h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Instant AI support
                  </p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-on-surface/40 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300"
        id="success-modal"
      >
        <div
          className="bg-surface-container-lowest p-[48px] rounded-2xl max-w-md w-full shadow-2xl scale-95 transition-transform duration-300 transform"
          id="modal-content"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-on-primary mb-6">
              <span className="material-symbols-outlined text-[32px]">
                check_circle
              </span>
            </div>
            <h2 className="font-headline-lg text-headline-lg mb-4">
              Submission Successful
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Your clinical triage data has been encrypted and shared with Dr.
              Aris. You will be notified when your review is complete.
            </p>
            <div className="flex flex-col gap-4 w-full">
              <button className="w-full py-6 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg">
                Go to Dashboard
              </button>
              <button className="w-full py-6 text-primary font-label-lg text-label-lg">
                View Summary
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomsIntake;
