import 'react'

const AISymptomsCheckerPage = () => {
  return (
    <div>
      <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">

<header className="bg-surface border-b border-outline-variant/10 shadow-sm sticky top-0 z-50">
<div className="flex justify-between items-center w-full px-10 max-w-[1200px] mx-auto h-[72px]">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary">MedLink</span>
<nav className="hidden md:flex gap-4 ml-6">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Services</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Doctors</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">About</a>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-3 rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-all">Sign In</button>
<button className="px-4 py-3 rounded-lg bg-error text-on-error font-label-md text-label-md hover:opacity-90 transition-all shadow-sm">Emergency</button>
</div>
</div>
</header>
<main className="flex-grow w-full max-w-[1200px] mx-auto px-10 py-8">
<section className="mb-8 text-center max-w-2xl mx-auto" id="checker-intro">
<div className="mb-4 inline-flex items-center justify-center p-3 bg-secondary-container text-on-secondary-fixed rounded-full floating-element">
<span className="material-symbols-outlined text-[32px]">neurology</span>
</div>
<h1 className="font-display-lg text-display-lg mb-3">AI Symptom Checker</h1>
<p className="text-on-surface-variant text-body-lg font-body-lg mb-6">Get immediate clinical insights into your health. Our AI analyzes your symptoms against millions of clinical cases to provide a guidance report.</p>
<button className="px-8 py-4 bg-secondary text-on-secondary rounded-xl font-headline-md text-headline-md shadow-lg hover:translate-y-[-2px] transition-all" >Start Evaluation</button>
</section>

<div className="hidden glass-card rounded-3xl p-6 md:p-xl shadow-xl max-w-4xl mx-auto overflow-hidden" id="evaluator-card">
<div className="w-full bg-surface-container rounded-full h-1.5 mb-8 overflow-hidden">
<div className="bg-secondary h-full transition-all duration-500 ease-out" id="progress-indicator" style={{width: '20%'}}></div>
</div>

<div className="step-transition" id="step-content">

</div>

<div className="flex justify-between mt-8 border-t border-outline-variant/20 pt-6">
<button className="flex items-center gap-1 px-4 py-3 text-on-surface-variant hover:text-secondary font-label-md text-label-md invisible" id="btn-back" >
<span className="material-symbols-outlined">arrow_back</span> Back
                </button>
<button className="flex items-center gap-1 px-6 py-4 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md shadow-md hover:opacity-90 transition-all" id="btn-next" >
                    Next <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>

<div className="hidden" id="results-view">
<div className="bento-grid">
<div className="col-span-12 md:col-span-4 glass-card p-6 rounded-3xl flex flex-col items-center text-center">
<div className="w-20 h-20 rounded-full flex items-center justify-center mb-4" id="result-severity-icon">
</div>
<h3 className="font-headline-md text-headline-md mb-1" id="result-severity-label">Moderate Severity</h3>
<p className="text-on-surface-variant font-body-sm text-body-sm mb-4">Based on your answers, we recommend seeking medical advice within 24-48 hours.</p>
<div className="w-full bg-surface-container-low p-3 rounded-xl">
<span className="font-label-md text-label-md text-secondary">ID: Evaluation-8821</span>
</div>
</div>

<div className="col-span-12 md:col-span-8 glass-card p-6 rounded-3xl">
<h2 className="font-headline-md text-headline-md mb-6">Possible Conditions</h2>
<div className="space-y-4">
<div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl flex justify-between items-center">
<div>
<h4 className="font-label-md text-label-md">Upper Respiratory Infection</h4>
<p className="text-body-sm text-on-surface-variant">85% match based on cough and mild fever.</p>
</div>
<span className="bg-secondary-container text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-bold">85%</span>
</div>
<div className="p-4 bg-surface-container-lowest border border-outline-variant/30 rounded-2xl flex justify-between items-center">
<div>
<h4 className="font-label-md text-label-md">Seasonal Allergies</h4>
<p className="text-body-sm text-on-surface-variant">42% match with existing history.</p>
</div>
<span className="bg-surface-container-high text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold">42%</span>
</div>
</div>
</div>
<div className="col-span-12 glass-card p-6 rounded-3xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
<div>
<h2 className="font-headline-md text-headline-md">Recommended Specialists</h2>
<p className="text-on-surface-variant font-body-md text-body-md">We've identified 3 top-rated doctors nearby available for consultations.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:scale-95 transition-all">Book Online Consultation</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A portrait of a professional female doctor in a white lab coat, smiling confidently in a modern, brightly lit medical clinic setting. The lighting is soft and clinical, conveying expertise and warmth. The background features blurred medical equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH-4efnZmxDEDcedKjy1iQ8T-JC0pxQ_kKK0ttJ9uW2KXpcdJJptuvoltwVUZ9ThMAgQtar0JpVyUDcr6oiR1qUt8PnizW9BcOPvyt9_CXZ1sBZBWhrHypg3PCYR0sQygUvTdj4P_ozIUk2h9wv-OwssERyoGhwcPuLCrwD8f0ctCKKCtw-xG0zr1YUk0Q0Rp6d3S-7X2TTBJSrrmRn-NieYB6q7Y4M6H4MJC6nCR2EeZjEYK58r0nabYfEJEi_EICESOZlz776MAD"/>
</div>
<div>
<h4 className="font-label-md text-label-md">Dr. Elena Rodriguez</h4>
<p className="text-xs text-on-tertiary-container font-semibold uppercase">General Practitioner</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-secondary">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-sm font-bold">4.9 (120+ reviews)</span>
</div>
<button className="w-full py-3 bg-surface-container-lowest border border-secondary text-secondary rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all">Select</button>
</div>

<div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A male physician with a stethoscope around his neck, standing in a minimalist contemporary hospital corridor. Soft focus background with blue and white tones. He looks approachable and experienced, wearing professional scrubs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPRzNZG-jMXWVvfEXAj5WjwS528Wx7Nxeh8741g1Ov9lWHKdvdsAzfoB-NXLi65SCzyHzOf7oTQDujTeL66FJTeQA02l5xEu209Nx4AF6fK7F5a7Fr4fogtL7hRmTXJjy74opmwWqncZ222JLXN4zJwlAWOyzb0rkJ8PlKG_2RGi0ziWDR8NhkLxAtd1y82SVd8AJNdg8CTYJ9f6eiN11soI6Qh_kFdnsRhNzqbVNtRij8CjqML63xMF4FRKKy_XQiQKcaEuQYAsRV"/>
</div>
<div>
<h4 className="font-label-md text-label-md">Dr. James Chen</h4>
<p className="text-xs text-on-tertiary-container font-semibold uppercase">Pulmonologist</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-secondary">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-sm font-bold">4.8 (95+ reviews)</span>
</div>
<button className="w-full py-3 bg-surface-container-lowest border border-secondary text-secondary rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all">Select</button>
</div>

<div className="bg-surface-container-low p-4 rounded-2xl border border-outline-variant/10">
<div className="flex items-center gap-4 mb-4">
<div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A female medical professional in professional medical attire, sitting in a modern office with large windows. The aesthetic is clean and corporate, featuring a palette of medical blues and neutral whites. She is holding a tablet." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCav1bZzWPEugiiQdarJf4fZWmim5jIB3oJxi6M3TRO1Ti93KYelItf6inS5veWciZ384pl7PyhGYOLPlD9ldxbFFBsDEU3QiAKjAV402wJ0QiDDFlh0G1z_o6TCmewkM8wztbtfhKSUoU4BphtG_OsqA--cJKxzbZYH68b_c_tTZhavQU3AKMNgDAG4RBJkPgX1l23YFcNbCrnAWPEqPmRsXOhJh_fRH98YGTBpzMFxDhdtWWltRpiIzfo16YcOcL1n-epnNrqaYbC"/>
</div>
<div>
<h4 className="font-label-md text-label-md">Dr. Sarah Miller</h4>
<p className="text-xs text-on-tertiary-container font-semibold uppercase">Allergy Specialist</p>
</div>
</div>
<div className="flex items-center gap-1 mb-4 text-secondary">
<span className="material-symbols-outlined text-sm">star</span>
<span className="text-sm font-bold">5.0 (50+ reviews)</span>
</div>
<button className="w-full py-3 bg-surface-container-lowest border border-secondary text-secondary rounded-lg font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all">Select</button>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-surface-container-highest border-t border-outline-variant/10 py-8 mt-auto">
<div className="w-full px-10 max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col items-center md:items-start">
<span className="font-headline-md text-headline-md font-bold text-primary mb-1">MedLink</span>
<p className="text-on-surface-variant text-body-sm font-body-sm">© 2024 MedLink Healthcare Systems. All rights reserved.</p>
</div>
<div className="flex gap-4">
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">HIPAA Compliance</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors font-label-md text-label-md" href="#">Contact Support</a>
</div>
</div>
</footer>
</div>
    </div>
  )
}

export default AISymptomsCheckerPage;