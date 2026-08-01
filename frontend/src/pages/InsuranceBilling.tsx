const InsuranceBilling = () => {
  return (
    <div className="bg-background text-on-background min-h-screen">
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-surface shadow-sm transition-colors">
        <div className="flex items-center gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            Fluent Health
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-1 rounded-full border border-outline-variant">
            <span className="material-symbols-outlined text-on-surface-variant mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-label-lg outline-none w-48"
              placeholder="Search records..."
              type="text"
            />
          </div>
          <button className="material-symbols-outlined text-primary hover:bg-surface-container transition-colors p-2 rounded-full">
            notifications
          </button>
          <button className="material-symbols-outlined text-primary hover:bg-surface-container transition-colors p-2 rounded-full">
            help
          </button>
          <div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden">
            <img
              className="w-full h-full object-cover"
              data-alt="A professional studio portrait of a medical professional with a warm, trustworthy expression. The lighting is soft and corporate, with a clean, cool-toned background that matches a medical office aesthetic. High-quality digital photography with sharp focus on the eyes and a slight blur in the background to create depth and authority."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHl5U_A0JhhoKxeZcH-s2_o5ItICaWn7RmHZeGMheEbZD3eIVb7-j_ep9GoajMZpyIiHEP-Or1OdJ1D1TJrF16btcI6xqs8vZgJp9oL5IRhkE0xBC1c7AaXK0POzQP5oxh-rpr3hjv2OLnJPlDwCrHrAeHv6P-e1ePi6LwI9j4qIf3rqf_xhdWsSZYvn-NP0BObRCv74Gyv-x5YUPh23hOFwFufYzKUlk0EQAp2RhU1nt1JMcnQt4KOQ"
            />
          </div>
        </div>
      </header>
      <nav className="fixed left-0 top-16 bottom-0 flex flex-col p-4 border-r border-outline-variant bg-surface-container-low w-64 hidden md:flex">
        <div className="mb-8 px-2">
          <h2 className="font-label-lg text-label-lg text-on-surface-variant uppercase tracking-wider mb-3">
            Health Profile
          </h2>
          <div className="flex items-center gap-3 p-2 bg-surface rounded-lg">
            <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary">
              <span className="material-symbols-outlined">
                health_and_safety
              </span>
            </div>
            <div>
              <p className="font-label-lg text-label-lg text-on-surface">
                Alex Rivera
              </p>
              <p className="text-xs text-on-surface-variant">Verified Member</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-lg text-label-lg"
            href="#"
          >
            <span className="material-symbols-outlined">history_edu</span>
            Medical History
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-lg text-label-lg"
            href="#"
          >
            <span className="material-symbols-outlined">medical_services</span>
            Symptom Triage
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-lg text-label-lg"
            href="#"
          >
            <span className="material-symbols-outlined">description</span>
            Lab Reports
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container font-semibold rounded-lg transition-transform duration-200 scale-[0.98] font-label-lg text-label-lg"
            href="#"
          >
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
            Insurance &amp; Billing
          </a>
        </div>
        <div className="pt-8 mt-auto space-y-1">
          <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-lg text-label-lg mb-4 hover:opacity-90 transition-opacity">
            Book Appointment
          </button>
          <a
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-lg text-label-lg"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors font-label-lg text-label-lg"
            href="#"
          >
            <span className="material-symbols-outlined">contact_support</span>
            Support
          </a>
        </div>
      </nav>
      <main className="md:ml-64 pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-margin-desktop">
          <div className="mb-8">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
              Insurance &amp; Billing
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Manage your coverage details, payment methods, and notification
              settings in one secure location.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <section className="lg:col-span-8 bg-surface-container-low rounded-xl p-6 border border-outline-variant">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    featured_video
                  </span>
                  Insurance Coverage
                </h2>
                <span className="px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-semibold uppercase">
                  Active
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group cursor-pointer">
                  <div className="aspect-[1.586/1] bg-surface-container-highest rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-outline hover:border-primary transition-colors overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
                      add_a_photo
                    </span>
                    <p className="font-label-lg text-label-lg text-on-surface-variant">
                      Upload Front
                    </p>
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                      data-alt="A mockup of a professional medical insurance card front, showing generic placeholders for policy name, ID number, and logo. The card has a clean, corporate blue and white design. The lighting is bright and overhead, casting a slight reflection on the card's plastic-like surface to emphasize its physical nature."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtPezAhCyX115MA3VlAnLeC39oJkwro8DY4pVYQh75k08I5-ZvEZR6AajQ-tOfQfmo1u2rK0Tef9Hi9yj0IhZ5ftf1G3XQ1OU7Nls8zBn-eP4tlsyQtaQMfegbBeWoFdpUnh6uX-ac9HTOozAlMY_cMJMVof6s2AFlfm6PMffRgK8CDvAgntKkNdj_wNfZm08ZFmc5U5irCizL2MfhNYGuJRjIy6tJemoBJ1YFc7eIYcy4C5_TjtsT7A"
                    />
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="aspect-[1.586/1] bg-surface-container-highest rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-outline hover:border-primary transition-colors overflow-hidden">
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">
                      add_a_photo
                    </span>
                    <p className="font-label-lg text-label-lg text-on-surface-variant">
                      Upload Back
                    </p>
                    <img
                      className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity"
                      data-alt="A mockup of the back of a medical insurance card, featuring placeholder text for claim filing instructions, contact phone numbers, and a magnetic strip. The design is minimalist and informative, maintaining the professional blue and white color scheme of the front. The image shows a realistic card texture with soft shadows."
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYVZMZmr000GwX2Gcu4dDdC8KHd-9wC0-5PBpWsM7SHRNI51hXONQP1DCXn-F8tfkJbumnOM12TEQSjDeQY2IK21jPlWC8qnHSLO0Kq3vHfARdMbGiBooQ3O1WarqhuvUCbr6rh6vFfigD3nRCP4VEC79QiT_EJhJYWRt8DOowk_mAf3dwln9zYUwlWN4tBgvMFdF8OP1rq7mlFaVHnMft3OK2grtqZPqFz_7LVQenCZiD3-CTpXtrYA"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">
                    Policy Number
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    type="text"
                    value="FL-8829-XJ2"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">
                    Group Number
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    type="text"
                    value="GRP-9001-A"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="font-label-md text-label-md text-on-surface-variant">
                    Insurance Carrier
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg p-3 font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    type="text"
                    value="BlueShield Modern Health"
                  />
                </div>
              </div>
            </section>
            <section className="lg:col-span-4 bg-surface-container-low rounded-xl p-6 border border-outline-variant h-full">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    credit_card
                  </span>
                  Payments
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-primary-container rounded-lg text-on-primary-container relative overflow-hidden shadow-sm">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-label-lg text-label-lg opacity-80">
                        HSA Card
                      </span>
                      <span className="material-symbols-outlined">
                        contactless
                      </span>
                    </div>
                    <p className="font-headline-md tracking-widest mb-2">
                      •••• 4412
                    </p>
                    <div className="flex justify-between items-end">
                      <p className="text-xs">ALEX RIVERA</p>
                      <p className="text-xs">08/26</p>
                    </div>
                  </div>
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
                </div>
                <div className="p-4 bg-surface-container-lowest border border-outline-variant rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase font-semibold mb-1">
                    Available HSA Balance
                  </p>
                  <p className="font-headline-md text-headline-md text-primary">
                    $3,420.00
                  </p>
                </div>
                <div className="p-4 bg-surface-container rounded-lg border border-outline-variant flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center font-bold text-[10px] text-primary italic">
                      VISA
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface">
                        Visa ending in 8831
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Default Billing
                      </p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">
                    more_vert
                  </span>
                </div>
                <button className="w-full py-3 border-2 border-dashed border-outline-variant rounded-lg text-on-surface-variant font-label-lg text-label-lg flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors mt-6">
                  <span className="material-symbols-outlined">add</span>
                  Link HSA or Credit Card
                </button>
              </div>
            </section>
            <section className="lg:col-span-12 bg-surface-container-low rounded-xl p-6 border border-outline-variant">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      notifications_active
                    </span>
                    Notification Preferences
                  </h2>
                  <p className="text-on-surface-variant text-label-lg">
                    Stay updated on billing cycles and claims status
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer group hover:shadow-md transition-shadow" />
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">sms</span>
                  </div>
                  <div>
                    <p className="font-label-lg text-label-lg text-on-surface">
                      SMS Alerts
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      Immediate billing updates
                    </p>
                  </div>
                </div>
                <input
                  checked
                  className="w-6 h-6 rounded text-primary focus:ring-primary border-outline transition-colors"
                  type="checkbox"
                />
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer group hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface">
                        Email Summaries
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Monthly statement reviews
                      </p>
                    </div>
                  </div>
                  <input
                    checked
                    className="w-6 h-6 rounded text-primary focus:ring-primary border-outline transition-colors"
                    type="checkbox"
                  />
                </label>
                <label className="flex items-center justify-between p-4 bg-surface-container-lowest border border-outline-variant rounded-xl cursor-pointer group hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">
                        notifications
                      </span>
                    </div>
                    <div>
                      <p className="font-label-lg text-label-lg text-on-surface">
                        App Notifications
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Claim status changes
                      </p>
                    </div>
                  </div>
                  <input
                    className="w-6 h-6 rounded text-primary focus:ring-primary border-outline transition-colors"
                    type="checkbox"
                  />
                </label>
              </div>
            </section>
            <section className="lg:col-span-12 bg-surface-container-low rounded-xl p-6 border border-outline-variant">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  receipt_long
                </span>
                Recent Activity
              </h2>
              <div className="overflow-hidden bg-surface-container-lowest border border-outline-variant rounded-lg">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant font-label-lg">
                      <th className="px-6 py-3">Service Date</th>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Amount</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="text-body-md">
                    <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">Oct 12, 2023</td>
                      <td className="px-6 py-4">
                        General Consultation - Dr. Smith
                      </td>
                      <td className="px-6 py-4 font-semibold">$45.00</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-green-700 font-semibold text-xs uppercase">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>{" "}
                          Paid
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:underline text-sm font-semibold">
                          Download
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b border-outline-variant hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">Sep 28, 2023</td>
                      <td className="px-6 py-4">Annual Wellness Exam</td>
                      <td className="px-6 py-4 font-semibold">$0.00</td>
                      <td className="px-6 py-4">
                        <span className="flex items-center gap-1 text-on-surface-variant font-semibold text-xs uppercase">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>{" "}
                          Covered
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-primary hover:underline text-sm font-semibold">
                          Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          <div className="mt-xxl flex flex-col md:flex-row justify-between items-center bg-surface-container-highest p-6 rounded-xl gap-6">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-4xl text-primary">
                security
              </span>
              <div>
                <p className="font-label-lg text-label-lg text-on-surface">
                  Bank-Grade Encryption Active
                </p>
                <p className="text-xs text-on-surface-variant">
                  Your financial data is protected by AES-256 standards.
                </p>
              </div>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-3 border border-outline rounded-lg font-label-lg text-label-lg hover:bg-surface-container transition-colors">
                Discard Changes
              </button>
              <button
                className="flex-1 md:flex-none px-8 py-3 bg-primary text-on-primary rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all flex items-center justify-center gap-2"
                id="saveBtn"
              >
                <span id="saveText">Save Profile</span>
                <span
                  className="material-symbols-outlined text-sm"
                  id="saveIcon"
                >
                  check_circle
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InsuranceBilling;
