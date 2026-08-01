const Diagnostics = () => {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface shadow-sm">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Fluent Health
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            className="font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-colors px-4 py-2 rounded-lg"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container transition-colors px-4 py-2 rounded-lg"
            href="#"
          >
            Symptom Triage
          </a>
          <a
            className="font-label-lg text-label-lg text-primary border-b-2 border-primary px-4 py-2"
            href="#"
          >
            Diagnostics
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="Profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAupz8PQoQQD4BDcLxnra4Z0S9pdvIyzWl5i2PDob7O3xRcZxHnpJjLodND7C2h4Exptsx42B-5i-10zH830MKTkOJh2lFEh10CvLhUxlOLwu9SSRPk9CAyo4xCC2a4Yw7ptfDRFPrFthQ5oS2a_A2w6slME8kkpuT6Ezh5F-wo3i2i2PSeYiwk41VtrdXCWtpPz5icl0Bl-MAXemQ6Tnv-EMCZi0zRPCXjL4fBbdUOcGoBTIRqcxvgdw"
            />
          </div>
        </div>
      </header>
      <aside className="fixed left-0 top-16 bottom-0 hidden md:flex flex-col p-4 border-r border-outline-variant bg-surface-container-low w-64">
        <div className="mb-6 px-4">
          <h2 className="font-headline-md text-headline-md font-bold text-primary">
            Health Profile
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            Verified Member
          </p>
        </div>
        <div className="space-y-xs flex-grow">
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">history_edu</span>{" "}
            Medical History
          </a>
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">medical_services</span>{" "}
            Symptom Triage
          </a>
          <a
            className="flex items-center gap-4 p-4 font-label-lg text-label-lg bg-secondary-container text-on-secondary-container font-semibold rounded-lg scale-[0.98]"
            href="#"
          >
            <span className="material-symbols-outlined">biotech</span> Lab
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
        <div className="mt-auto space-y-xs">
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
        <div className="max-w-5xl mx-auto px-4 md:px-10 py-6">
          <div className="mb-8">
            <h1 className="font-headline-lg text-headline-lg mb-1 text-primary">
              Diagnostics &amp; Lab Reports
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Securely upload, track, and manage your laboratory insights with
              precision AI extraction and clinical verification.
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
                    Upload Lab Report
                  </h2>
                </div>
                <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 flex flex-col items-center text-center bg-surface-container-lowest transition-all hover:border-primary/60 group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span
                      className="material-symbols-outlined text-primary text-[32px]"
                      data-icon="cloud_upload"
                    >
                      cloud_upload
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    Drag and drop your PDF, JPG, or PNG files here, or{" "}
                    <span className="text-primary font-bold cursor-pointer underline">
                      Browse Files
                    </span>
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <div className="bg-surface-container-high px-4 py-3 rounded-lg flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-sm text-on-surface-variant"
                        data-icon="description"
                      >
                        description
                      </span>
                      <span className="font-label-sm text-label-sm">
                        PDF, PNG, JPG
                      </span>
                    </div>
                    <div className="bg-surface-container-high px-4 py-3 rounded-lg flex items-center gap-2">
                      <span
                        className="material-symbols-outlined text-sm text-on-surface-variant"
                        data-icon="shield"
                      >
                        shield
                      </span>
                      <span className="font-label-sm text-label-sm">
                        Max 25MB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                    2
                  </span>
                  <h2 className="font-headline-md text-headline-md">
                    Manual Metrics Entry
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-3">
                    <label className="font-label-lg text-label-lg text-on-surface">
                      Clinic Name
                    </label>
                    <input
                      className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md"
                      placeholder="e.g., Central General Labs"
                      type="text"
                      value="Central General Labs"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="font-label-lg text-label-lg text-on-surface">
                      Collection Date
                    </label>
                    <input
                      className="w-full p-4 bg-surface-container-lowest border border-outline-variant rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md"
                      type="date"
                    />
                  </div>
                </div>
                <div className="overflow-x-auto custom-scrollbar bg-surface-container-lowest rounded-xl border border-outline-variant/30 mb-6">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-surface-container">
                      <tr>
                        <th className="px-4 py-3 font-label-lg text-label-lg text-primary">
                          Test Name
                        </th>
                        <th className="px-4 py-3 font-label-lg text-label-lg text-primary">
                          Value
                        </th>
                        <th className="px-4 py-3 font-label-lg text-label-lg text-primary">
                          Unit
                        </th>
                        <th className="px-4 py-3 font-label-lg text-label-lg text-primary">
                          Ref. Range
                        </th>
                        <th className="px-4 py-3 w-12"></th>
                      </tr>
                    </thead>
                    <tbody
                      className="divide-y divide-outline-variant/30"
                      id="table-body"
                    >
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="Glucose, Fasting"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="92"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="mg/dL"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="65 - 99"
                          />
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span
                            className="material-symbols-outlined text-on-surface-variant/40 hover:text-error cursor-pointer"
                            data-icon="delete"
                          >
                            delete
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="Cholesterol, Total"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="185"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="mg/dL"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="100 - 199"
                          />
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span
                            className="material-symbols-outlined text-on-surface-variant/40 hover:text-error cursor-pointer"
                            data-icon="delete"
                          >
                            delete
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-surface-container-low transition-colors">
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="Hemoglobin A1c"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="5.4"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="%"
                          />
                        </td>
                        <td className="px-4 py-4">
                          <input
                            className="bg-transparent border-0 focus:ring-0 w-full p-0 font-body-md text-on-surface"
                            type="text"
                            value="4.8 - 5.6"
                          />
                        </td>
                        <td className="px-4 py-4 text-right">
                          <span
                            className="material-symbols-outlined text-on-surface-variant/40 hover:text-error cursor-pointer"
                            data-icon="delete"
                          >
                            delete
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button
                  className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all px-2"
                  id="add-row-btn"
                >
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                  <span className="font-label-lg text-label-lg">Add Row</span>
                </button>
              </div>
            </section>
            <aside className="lg:col-span-4 space-y-6">
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/30 flex flex-col min-h-[400px] mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Recently Uploaded
                  </h3>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">
                    more_vert
                  </span>
                </div>
                <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/50 hover:border-primary/40 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-error-container rounded-lg flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-error"
                          data-icon="picture_as_pdf"
                        >
                          picture_as_pdf
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-lg text-label-lg truncate text-on-surface">
                          CBC_Panel_Oct2023.pdf
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Processed • Oct 12, 2023
                        </p>
                      </div>
                      <div className="px-2 py-1 bg-primary/10 rounded-full">
                        <span className="material-symbols-outlined text-primary text-sm">
                          check_circle
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/50 hover:border-primary/40 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-error-container rounded-lg flex items-center justify-center">
                        <span
                          className="material-symbols-outlined text-error"
                          data-icon="picture_as_pdf"
                        >
                          picture_as_pdf
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-label-lg text-label-lg truncate text-on-surface">
                          Lipid_Profile_Q3.pdf
                        </h4>
                        <p className="text-[11px] text-on-surface-variant">
                          Verified • Aug 05, 2023
                        </p>
                      </div>
                      <div className="px-2 py-1 bg-primary/10 rounded-full">
                        <span className="material-symbols-outlined text-primary text-sm">
                          check_circle
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-3 border border-outline-variant hover:border-primary text-on-surface-variant hover:text-primary rounded-xl font-label-lg text-label-lg transition-all">
                  View All History
                </button>
              </div>
              <div className="bg-secondary-container/30 p-6 rounded-xl border border-secondary-container relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      groups
                    </span>
                    <span className="font-label-lg text-label-lg font-bold uppercase tracking-wider">
                      Expert Verification
                    </span>
                  </div>
                  <p className="font-body-md text-body-md text-on-secondary-container">
                    Your records are currently being verified by our
                    world-className medical specialists.
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex -space-x-3">
                      <img
                        className="w-8 h-8 rounded-full border-2 border-surface-container object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGlhqFr6TiWQIL4QZJY0S0MlaXlWqQ6p_oY1s3E3ncfcO9OmAJujgifY9LujWHys5W7kpYjslaJvb1Jscj-KZhjzPOI-BwyyHrzUGzTNwsDxGB-lNG5UekA3dpPBFwmZuQAUjdVncohEqN2gOT_vONC0vFB7gk9MscogqukrcuJ-0yCAuXIkNLd2UED1XHpAvPj5phOHLIu6P13u92-tFM6F3itnuXgcHEDnRdy8QYDVFqqfAsrfF--Q"
                      />
                      <img
                        className="w-8 h-8 rounded-full border-2 border-surface-container object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDQkz-O7hutZcWlttMUF09OT2vBgCCvWzU8Y3MSTADDr_tept8JfuqOaIfZTtjg0tZPNdPUZlZ3HQdxyLCMmnHdt6Fqn8PqCOaOecxcI8cp-vanobffqM4Mb8AKvO06VpXsp8-l8ahjkDFVji4wickjGUR6DeUQtRtllKIAj4pMxZb40DuyXNQZrZJ8AB-fuvitOAgxXdTxIat1EtvlG_fy97BvMibiJyfhp76ydcN1IayZlTiLT7zlw"
                      />
                    </div>
                    <p className="text-[12px] font-medium text-on-secondary-container">
                      3 clinicians available now
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <section className="mt-xxl bg-surface-container-lowest p-8 md:p-xxl rounded-2xl shadow-sm border border-outline-variant/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-xl">
                <h2 className="font-headline-lg text-headline-lg mb-sm">
                  Sync Your Records
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Your data will be instantly synchronized with your personal
                  health longitudinal chart for clinical analysis.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <button className="px-8 py-6 border border-outline rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-all flex items-center justify-center gap-4">
                  <span className="material-symbols-outlined">save</span> Save
                  Draft
                </button>
                <button className="px-8 py-6 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-4 shadow-md">
                  Sync to Record{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-outline-variant">
              <div className="group flex items-start gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface">
                    HIPAA Compliant
                  </h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Encrypted with military-grade AES-256 protocols.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                  <span className="material-symbols-outlined">smart_toy</span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface">
                    Auto-Extraction
                  </h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Neural networks map metrics to your health chart.
                  </p>
                </div>
              </div>
              <div className="group flex items-start gap-4 p-4 hover:bg-surface-container-low rounded-xl transition-all">
                <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shrink-0">
                  <span className="material-symbols-outlined">
                    clinical_notes
                  </span>
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface">
                    Expert Verification
                  </h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    Results double-checked by clinical teams.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Diagnostics;
