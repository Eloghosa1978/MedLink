const TelemedicineRoom = () => {
  return (
    <div>
      <div className="bg-background text-on-surface">
<header className="bg-surface dark:bg-surface-container-low border-b border-outline-variant dark:border-outline-variant/10 shadow-sm dark:shadow-none fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">MedLink</span>
<div className="hidden md:flex gap-4 ml-10">
<span className="text-secondary dark:text-secondary-fixed font-bold border-b-2 border-secondary dark:border-secondary-fixed pb-1 font-label-md text-label-md">Services</span>
<span className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">Doctors</span>
<span className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">About</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center gap-1 px-3 py-1 bg-error-container text-on-error-container rounded-full">
<span className="material-symbols-outlined text-[20px]">emergency</span>
<span className="font-label-md text-label-md">Emergency</span>
</div>
<div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional medical professional headshot, a female doctor with a stethoscope around her neck, wearing a crisp white lab coat. She has a warm, confident smile, set against a blurred clean hospital environment with soft, high-key lighting. The style is modern, clinical, and corporate minimalist with a focus on trust and empathy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJVv3tmLxQ0Hh0gfiZY4SG97FvJyPpoKKajfVIHgE9OekFNhH_w--o1UWGo7LA6Vl9I8hw_JAzKUM9DhXsE2CTQ6HwkbKSEsmkWTeH2pK_eMTRltPb385JHFyEG2tJCQic_mcYrAZizUDk-McvRKwzTv_4X6nejiUO9In2-GiCj19LXWpAR5Yr2h62UOw4p_MZ6gO1v5pS66_3nkYXRztEF50F0xjiuyf9ZDrbwYaNMlBkdtsEd7wyYIBnCx-6ZKKIIpUcNC_6SzNU"/>
</div>
</div>
</div>
</header>
<main className="pt-[72px] h-screen flex flex-col md:flex-row overflow-hidden">
<section className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto custom-scrollbar">
<div className="flex flex-wrap items-center justify-between bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
<img className="w-full h-full object-cover" data-alt="A close-up portrait of an elderly male patient with a gentle, dignified expression. He has grey hair and is wearing a simple blue shirt. The lighting is soft and natural, emphasizing a calm and supportive healthcare environment. The overall aesthetic is clean, empathetic, and professional light-mode." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbP6EhcBgxZ-S1zCGdyGbX7PSy6_8z15zPNHXKkcgCV_GUOiyjVO8csj7Qk-eZOKhGal8_v4a5fAdX-rElGROcEUwZlv_v8HvC4dfDUSVFn48TqMrW_bxNatMxHYBPYkD5_-Pa5NKSnA9MXl-7blJdBXLXDXVNO7zotvJsx48zMT-4BEeGkKSgvNpdOu8t73PNRFIzyHXXtA5zUfkIo8J82icev7PSNEFQLEBrqZBnL9ZEECH-Yn_LDskW0vqnfazdk5tMGG8-eX4y"/>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-secondary rounded-full border-2 border-white"></div>
</div>
<div>
<h1 className="font-headline-md text-headline-md text-on-surface">Consultation: Arthur Morgan</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">General Cardiology Follow-up • ID: #MED-9021</p>
</div>
</div>
<div className="flex items-center gap-3 bg-surface-container rounded-lg px-4 py-2">
<span className="material-symbols-outlined text-secondary">schedule</span>
<span className="font-code-md text-code-md font-bold text-on-surface tabular-nums" id="timer">14:22</span>
<span className="text-on-surface-variant text-[12px]">Remaining</span>
</div>
</div>
<div className="grid grid-cols-12 gap-4 flex-1 min-h-[500px]">
<div className="col-span-12 lg:col-span-9 relative bg-black rounded-2xl overflow-hidden shadow-lg group">
<img className="w-full h-full object-cover opacity-90" data-alt="A high-definition wide-angle view of a patient's home environment during a video call. A senior man is seen sitting comfortably in a well-lit living room with bookshelves in the background. The lighting is bright and cheerful, suggesting a successful and clear telemedicine connection. The image is crisp and clear, mirroring a 4K video stream interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC13cizwISujiRZr67P7XL3egom1-FnqXE3SPoGf06hsHlhCHZUzkd-UvzlbnZo4RnyEO1ElGwu7C47rDEg7TcDyf1Msm3q6kL2atkDIherKNOetrP4iUMCwaQ5bXPcpXcjSa2zrOAG_PL2iEsul6GBApaSZoWyHokVr6B4yQ5Ojo0DHVaTScElceegun524aS6U6icrpQe5rMDoJDhRRX-gL40yYGZs5VOSnGp16uM1QUqEQHWNgMKzuIisXgVHWc2cNbV9VzZs4Bq"/>
<div className="absolute top-4 right-4 w-48 h-32 rounded-xl overflow-hidden border-2 border-white shadow-xl">
<img className="w-full h-full object-cover" data-alt="A focused view of a professional doctor looking directly into the camera as if in a video call. She is wearing a white coat and a stethoscope, set against a blurred office background with medical certificates. The lighting is flattering and professional, conveying authority and approachability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR4MH0mKz0hwlQKqH7qbieIhqmvLRisxdqX7op4sKg2IuwR-uR70ys5EvRZdjn-DQ_-ZOWXWHWuMQ7vF_Pov2jyk7S7Q0BSAz4G9WahTbgwZZKuIQOmHw-Egu2FDemUsb9zNT9oherKIvO7JnvfmWHSmR1vi8WP_Pqrizy7GMZjDgOb-XU_xvlKU4FKC2uyXsA6CQojTM3BsmW4D4NVSKOqbUmDwE1CsKuMA-rBZ80GumosZybZuyfidRoNUyQQTzwAui4Z5hC_BJn"/>
<div className="absolute bottom-1 left-2 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-white text-[10px] font-medium">Dr. Sarah Jenkins</div>
</div>
<div className="absolute bottom-lg left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-black/60 backdrop-blur-xl rounded-full border border-white/20 transition-transform group-hover:scale-105">
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
<span className="material-symbols-outlined">mic</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
<span className="material-symbols-outlined">videocam</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
<span className="material-symbols-outlined">screen_share</span>
</button>
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-[1px] h-8 bg-white/20"></div>
<button className="px-6 h-12 flex items-center justify-center rounded-full bg-error text-on-error font-bold transition-all hover:scale-105">
                            End Call
                        </button>
</div>
</div>
<div className="hidden lg:flex lg:col-span-3 flex-col gap-4">
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex items-center justify-between mb-sm">
<h3 className="font-label-md text-label-md text-on-surface-variant">Heart Rate</h3>
<span className="material-symbols-outlined text-error text-[18px]" style={{fontVariationSettings: "FILL 1"}}>favorite</span>
</div>
<p className="font-display-lg text-headline-lg text-on-surface">78 <span className="text-body-sm text-on-surface-variant">bpm</span></p>
<div className="w-full h-12 mt-3 bg-error/5 rounded-lg overflow-hidden">

<div className="w-full h-full opacity-30 flex items-end">
<div className="w-1/12 h-[30%] bg-error"></div>
<div className="w-1/12 h-[40%] bg-error"></div>
<div className="w-1/12 h-[55%] bg-error"></div>
<div className="w-1/12 h-[45%] bg-error"></div>
<div className="w-1/12 h-[60%] bg-error"></div>
<div className="w-1/12 h-[75%] bg-error"></div>
<div className="w-1/12 h-[70%] bg-error"></div>
<div className="w-1/12 h-[85%] bg-error"></div>
<div className="w-1/12 h-[65%] bg-error"></div>
<div className="w-1/12 h-[50%] bg-error"></div>
<div className="w-1/12 h-[40%] bg-error"></div>
<div className="w-1/12 h-[35%] bg-error"></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="font-label-md text-label-md text-on-surface-variant">Blood Oxygen</h3>
<span className="material-symbols-outlined text-secondary text-[18px]">water_drop</span>
</div>
<p className="font-display-lg text-headline-lg text-on-surface">98 <span className="text-body-sm text-on-surface-variant">%</span></p>
<span className="px-1 py-[2px] bg-tertiary-fixed text-on-tertiary-fixed-variant rounded text-[10px] font-bold">STABLE</span>
</div>
<div className="bg-secondary p-4 rounded-xl text-white shadow-md cursor-pointer hover:bg-secondary/90 transition-colors">
<span className="material-symbols-outlined mb-1">add_notes</span>
<h3 className="font-label-md text-label-md">Add Encounter Note</h3>
<p className="font-body-sm text-[12px] opacity-80">Document findings in real-time</p>
</div>
</div>
</div>
<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 md:col-span-6 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<h2 className="font-headline-md text-headline-md mb-4">Patient Summary</h2>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-1/3">
<p className="text-on-surface-variant font-label-md text-[12px]">Allergies</p>
<p className="font-body-md text-error font-semibold">Penicillin, Pollen</p>
</div>
<div className="w-2/3">
<p className="text-on-surface-variant font-label-md text-[12px]">Chronic Conditions</p>
<p className="font-body-md text-on-surface">Hypertension, Type 2 Diabetes</p>
</div>
</div>
<hr className="border-outline-variant/20"/>
<div>
<p className="text-on-surface-variant font-label-md text-[12px] mb-1">Current Medications</p>
<div className="flex flex-wrap gap-1">
<span className="px-3 py-1 bg-surface-container text-on-surface text-[12px] rounded-lg">Lisinopril 10mg</span>
<span className="px-3 py-1 bg-surface-container text-on-surface text-[12px] rounded-lg">Metformin 500mg</span>
<span className="px-3 py-1 bg-surface-container text-on-surface text-[12px] rounded-lg">Atorvastatin 20mg</span>
</div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h2 className="font-headline-md text-headline-md">Recent History</h2>
<button className="text-secondary font-label-md text-label-md hover:underline">View Full EHR</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
<div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded-full">
<span className="material-symbols-outlined text-secondary">description</span>
</div>
<div className="flex-1">
<p className="font-body-md text-on-surface font-medium">Lab Results: Lipid Panel</p>
<p className="text-[12px] text-on-surface-variant">Feb 12, 2024 • LabCorp</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</div>
<div className="flex items-center gap-4 p-3 hover:bg-surface-container transition-colors rounded-lg cursor-pointer">
<div className="w-10 h-10 bg-secondary/10 flex items-center justify-center rounded-full">
<span className="material-symbols-outlined text-secondary">radiology</span>
</div>
<div className="flex-1">
<p className="font-body-md text-on-surface font-medium">Chest X-Ray Report</p>
<p className="text-[12px] text-on-surface-variant">Jan 05, 2024 • City Imaging</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
<aside className="w-full md:w-80 lg:w-96 bg-surface-container-lowest border-l border-outline-variant/20 flex flex-col h-full shadow-xl overflow-auto custom-scrollbar px-4">

<div className="flex border-b border-outline-variant/20">
<button className="flex-1 py-4 font-label-md text-label-md text-secondary border-b-2 border-secondary bg-secondary/5">Chat</button>
<button className="flex-1 py-4 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors">Shared Files</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar" id="chat-messages">
  </div>

<div className="text-center">
<span className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-widest bg-surface-container px-3 py-[2px] rounded-full">Secure End-to-End Encrypted</span>
</div>

<div className="flex flex-col items-end gap-1">
<div className="max-w-[85%] bg-secondary-container text-on-secondary-container p-3 rounded-2xl rounded-tr-xs text-body-sm">
                        Hello Arthur, I see your latest blood work shows some improvement in your cholesterol levels.
                    </div>
<span className="text-[10px] text-on-surface-variant">10:05 AM</span>
</div>

<div className="flex flex-col items-start gap-1">
<div className="max-w-[85%] bg-surface-container text-on-surface p-3 rounded-2xl rounded-tl-xs text-body-sm">
                        That's great news! I've been trying to stick to the diet you suggested.
                    </div>
<span className="text-[10px] text-on-surface-variant">10:06 AM</span>

<div className="flex flex-col items-end gap-1">
<div className="max-w-[85%] bg-secondary-container text-on-secondary-container p-3 rounded-2xl rounded-tr-xs text-body-sm">
                        I'm sharing the updated prescription plan with you now. Please review it and let me know if you have questions about the dosage.
                    </div>
<span className="text-[10px] text-on-surface-variant">10:07 AM</span>
</div>

<div className="flex flex-col items-end gap-1">
<div className="bg-surface-container-high border border-outline-variant/20 p-3 rounded-xl flex items-center gap-3">
<div className="w-8 h-8 bg-error/10 text-error flex items-center justify-center rounded">
<span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
</div>
<div className="flex-1">
<p className="text-[12px] font-bold text-on-surface truncate w-32">Updated_Rx_Morgan.pdf</p>
<p className="text-[10px] text-on-surface-variant">1.2 MB</p>
</div>
<button className="material-symbols-outlined text-secondary">download</button>
</div>
<span className="text-[10px] text-on-surface-variant">10:08 AM</span>
</div>
</div>

<div className="p-4 border-t border-outline-variant/20">
<div className="flex items-center gap-3 bg-surface-container rounded-xl p-1">
<button className="w-10 h-10 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-body-sm text-on-surface placeholder:text-on-surface-variant/50" placeholder="Type a message..." type="text"/>
<button className="w-10 h-10 bg-secondary text-white flex items-center justify-center rounded-lg shadow-sm hover:bg-secondary/90 transition-all active:scale-95">
<span className="material-symbols-outlined">send</span>
</button>
</div>
<p className="text-[10px] text-center mt-3 text-on-surface-variant">Press Enter to send</p>
</div>
</aside>
</main>

<footer className="bg-surface-container-highest dark:bg-surface-container-low border-t border-outline-variant dark:border-outline-variant/10 py-4 relative z-10">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MedLink</span>
<div className="flex gap-4">
<span className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">Privacy Policy</span>
<span className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">Terms of Service</span>
<span className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">HIPAA Compliance</span>
<span className="text-on-surface-variant dark:text-outline-variant hover:text-secondary dark:hover:text-secondary-fixed transition-colors font-label-md text-label-md cursor-pointer">Contact Support</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
</footer>
</div>
</div>
  )
};

export default TelemedicineRoom