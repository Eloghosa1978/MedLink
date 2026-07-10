import  'react'

const MessagingPage = () => {
  return (
    <div>
      <div className="bg-background text-on-surface font-body-md overflow-hidden h-screen flex">
<aside className="fixed left-0 top-0 h-screen flex flex-col p-3 z-40 bg-surface-container-lowest dark:bg-surface-container-low h-full w-64 border-r border-outline-variant dark:border-outline-variant/5 shadow-sm">
<div className="mb-6 px-1">
<h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">MedLink</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">Patient Portal</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-1 text-on-surface-variant dark:text-outline-variant p-3 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant dark:text-outline-variant p-3 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-label-md text-label-md">Appointments</span>
</a>
<a className="flex items-center gap-1 bg-secondary-container dark:bg-on-secondary-fixed-variant text-on-secondary-container dark:text-on-secondary-fixed rounded-lg p-3 translate-x-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
<span className="font-label-md text-label-md">Messaging</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant dark:text-outline-variant p-3 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">monitoring</span>
<span className="font-label-md text-label-md">Health Metrics</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant dark:text-outline-variant p-3 hover:bg-surface-container dark:hover:bg-surface-container-high rounded-lg transition-colors" href="#">
<span className="material-symbols-outlined">description</span>
<span className="font-label-md text-label-md">Medical Records</span>
</a>
</nav>
<div className="mt-auto space-y-1 border-t border-outline-variant pt-3">
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center gap-1 text-on-surface-variant p-3 hover:bg-surface-container rounded-lg" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md text-label-md">Logout</span>
</a>
</div>
</aside>
<main className="ml-64 flex-1 flex h-full">
<section className="w-80 border-r border-outline-variant bg-surface-container-lowest flex flex-col">
<div className="p-4 border-b border-outline-variant">
<div className="flex items-center justify-between mb-3">
<h2 className="font-headline-md text-headline-md">Messages</h2>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-on-secondary shadow-sm hover:scale-105 transition-transform">
<span className="material-symbols-outlined">edit_square</span>
</button>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-secondary transition-colors">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:border-secondary transition-all font-body-sm" placeholder="Search conversations..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto chat-scrollbar">
<div className="p-4 bg-secondary-container/10 border-l-4 border-secondary cursor-pointer hover:bg-secondary-container/20 transition-colors">
<div className="flex gap-3">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-full object-cover" data-alt="A professional medical headshot of a female doctor with a kind expression, wearing a white lab coat and a stethoscope. She has a high-key studio background with soft corporate lighting in a modern clinical setting. The image is clean, sharp, and instills trust with a minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA94m0EFAiTR60hdzl8R7oD1fHO49kDHxYEUSHiZIn1jQMk4jZykcL3vXacma0lACZPV0zP-aNb8Wr7pnOo9ha6xm8P_QinqT3miZICaQUuNSAaHWvwr4kcjyEojTrcVRODIevT83TO3s9hSF6SlOjL5GpnQZBO6ryOWQWZ84vD5DtveQh3GuYlqx8ip-Xrt7eJn2B52SFg3-j3GK7bxcLJBkogZCx37Ib6060EPL3pdddR2-EA0cLapu6yYE7jDJaW1uGvLwallzQn"/>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-surface-container-lowest rounded-full"></span>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-label-md text-label-md truncate">Dr. Sarah Jenkins</h3>
<span className="text-[10px] text-outline font-semibold">10:24 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface truncate">Your latest lab results are ready for review...</p>
</div>
</div>
</div>
<div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex gap-3">
<img className="w-12 h-12 rounded-full object-cover" data-alt="A friendly male physician with graying hair and glasses, wearing a blue shirt under a white medical coat. The portrait is taken in a brightly lit, modern office environment with blurred medical equipment in the background. High professional quality and a clean minimalist style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTWUh2GhCMdZrL83ojD-8ZLljQyxwjH02Vg2SkHF0Zo7T1nVhNvdtmFS4o_LXxd9-hNtT2s5rVXfXLJucFUJzwI3lyC7wGXJ1WZOQWdFG_YrfG927NQRgI1MSxYnCf3O9XRa7b0tmMuhhqwqK6ayoZJaq1SaCjVBD4xfrzIkmTXunKyR3KbWMsibWLPsBtemcIx6SfdToJTy2GUK4R6i2CmFJlS2plT2CdUu5uOMSG-s94fQz_HPHAH3fZmS2HxxBc2BAEj6tgjJul"/>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-label-md text-label-md truncate">Dr. Michael Chen</h3>
<span className="text-[10px] text-outline font-semibold">Yesterday</span>
</div>
<p className="font-body-sm text-body-sm text-outline truncate">Great, let's schedule that follow-up for next week.</p>
</div>
</div>
</div>
<div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed-dim flex items-center justify-center text-on-tertiary-fixed font-bold">NS</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline">
<h3 className="font-label-md text-label-md truncate">Nurse Sarah Thompson</h3>
<span className="text-[10px] text-outline font-semibold">Tuesday</span>
</div>
<p className="font-body-sm text-body-sm text-outline truncate">Please confirm your current medication list.</p>
</div>
</div>
</div>
</div>
</section>
<section className="flex-1 flex flex-col bg-surface shadow-[inset_0px_0px_10px_rgba(0,0,0,0.02)]">
<header className="h-[72px] px-6 border-b border-outline-variant flex items-center justify-between bg-surface/80 backdrop-blur-md sticky top-0 z-10">
<div className="flex items-center gap-3">
<div className="relative">
<img className="w-10 h-10 rounded-full" data-alt="Professional headshot of Dr. Sarah Jenkins, a middle-aged woman in a doctor's uniform. Clean medical background, bright office lighting, minimalist corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY-OsmWwa-P6QBg8XEd38YRR-wjYxrr8dAuRFuldKE_qR4p0FgFsB1pRf4RSvvU5Y0qRW_jUQk46FJqoyUNMcNM3gSa97-LwQWPpgQxwf18KoJGmc9HHHXKKC3oK0Cd0LlWCM031VZAR5vKwH1XO_zsCL6vUwJ1AZLcwznN2pEe8ZW5F4JcBAQr3qu_Jh0Bl3ZhaLhTmTz2vZoo5OeDqyGW2uLBfFqwqeDu3RDK4HjntwezfHb_DlQV5DdHydg4fpeILqPUPx8lxiF"/>
<span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-surface rounded-full"></span>
</div>
<div>
<h2 className="font-label-md text-label-md">Dr. Sarah Jenkins</h2>
<p className="text-[12px] text-on-tertiary-container flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                            Online • Cardiology
                        </p>
</div>
</div>
<div className="flex gap-1">
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-outline">call</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-outline">videocam</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-outline">info</span>
</button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 space-y-6 chat-scrollbar">
<div className="flex items-center gap-4">
<div className="flex-1 h-[1px] bg-outline-variant/30"></div>
<span className="text-[12px] font-semibold text-outline tracking-wider uppercase">Today</span>
<div className="flex-1 h-[1px] bg-outline-variant/30"></div>
</div>
<div className="flex gap-3 max-w-[80%]">
<img className="w-8 h-8 rounded-full shrink-0" data-alt="Medical avatar for Dr. Sarah Jenkins. Professional, soft light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIySxTG7ICNp-v9Qc_e-sZcUlhqv47-XUbxg7a6VMlZF0NkSV8vfKZNUAHE_bqtZ_GqTkYNod9PATzIm7fD5OCVMd0cuSsfCUkpDiSbr6WQEEBItn_0m3h1cTNafKWjwKqhM2vtIQellS0Dbx9UcbjKrKfja0n55cmVA5p2rAdvOOhLgNq2yjaMU1PIiTrSPag5mQyRoWBaPA9Hcon7OmAVIHKfA6fqhlRfmYMZf3EYE4NCvKJq88fzvWwq4cb79obreqI89u5o5bi"/>
<div className="space-y-1">
<div className="bg-surface-container-high text-on-surface p-4 rounded-xl message-bubble-inbound shadow-sm">
<p className="font-body-md">Hello! I've reviewed your latest blood work results. Everything looks very stable, but I'd like to adjust your evening dosage slightly.</p>
</div>
<span className="text-[10px] text-outline ml-1">10:24 AM</span>
</div>
</div>
<div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
<div className="space-y-1 items-end flex flex-col">
<div className="bg-secondary text-on-secondary p-4 rounded-xl message-bubble-outbound shadow-md">
<p className="font-body-md">Thank you, Dr. Jenkins. Should I start the new dosage tonight? I've attached my blood pressure logs from this week as well.</p>
</div>
<span className="text-[10px] text-outline mr-1">10:28 AM</span>
</div>
</div>
<div className="flex flex-row-reverse gap-3 max-w-[80%] ml-auto">
<div className="space-y-1 items-end flex flex-col w-full">
<div className="bg-surface-container-lowest border border-outline-variant p-3 rounded-xl flex items-center gap-3 w-full max-w-sm hover:shadow-md transition-shadow cursor-pointer">
<div className="w-12 h-12 bg-error/10 text-error rounded flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>picture_as_pdf</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md truncate">Weekly_BP_Logs_Oct24.pdf</p>
<p className="text-[12px] text-outline">1.2 MB • PDF Document</p>
</div>
<span className="material-symbols-outlined text-outline">download</span>
</div>
<span className="text-[10px] text-outline mr-1">10:29 AM</span>
</div>
</div>
<div className="flex gap-3 max-w-[80%]">
<img className="w-8 h-8 rounded-full shrink-0" data-alt="Medical avatar for Dr. Sarah Jenkins." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMmyq6x_3n8VH8081otJqcijqUufdsZ9JcWlypMXdrS0D9bd496jjZbNcI6pmNFhy7NvdrWAL31zn68E5uWbik9d9z8PNY4sKNinx_xFYaYAUy-tEQlsjtol3a7wpuy2QbTvlbhpdlgamsRfOAVPDUN9igLeN6a7p7_EtfGkKHXqIFtFjdC_FkIxJZX_BK18T-jB7OClNZOcJEIdYCVji7KHSe8N0pvdzvp_WrpFDMyhDdI-FQhi5IPnSyzod9G0GKpTR8vuosKdf0"/>
<div className="space-y-1">
<div className="bg-surface-container-high p-1 rounded-xl message-bubble-inbound shadow-sm">
<img className="rounded-lg w-full max-w-sm border border-outline-variant/20" data-alt="A clean, medical-grade chart visualization showing a stable heart rate trend over 7 days. Calming teal and medical blue colors. High-resolution digital display style with a minimalist background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHlPuK49lvKDLhNflRLpVJFB2BTyfZkS7WYjxVUBZ2jvWUFePbYIyoGdNp5NDyyxs-_fzyWVIsbqFYVjtnPUlM0GgBYX6dK3_2Rvfzpp7izeCkpkb3bddJf_OKAHRqZO14jcAsHefINY5afppEgHUOs55aRozaLiYjPAzlAo2RUgXUzzrfD7NWyQJ8oHY2qd0I2ySZXbMlSNnMJKJ6WCoM7qvsViQOKhYzn9djBbXGaYvHIax0CKmePrCf9ltzPGNw_2ghh2IcJE0_"/>
</div>
<div className="bg-surface-container-high text-on-surface p-4 rounded-xl message-bubble-inbound shadow-sm">
<p className="font-body-md">This chart shows your progress. Very consistent.</p>
</div>
<span className="text-[10px] text-outline ml-1">10:35 AM</span>
</div>
</div>
</div>
<footer className="p-6 bg-surface/50 backdrop-blur-sm">
<div className="max-w-4xl mx-auto">
<div className="relative bg-surface-container-lowest border border-outline-variant rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-secondary/20 focus-within:border-secondary transition-all">
<div className="flex items-center gap-1 px-3 py-1 border-b border-outline-variant/50">
<button className="p-2 hover:bg-surface-container-high rounded-lg text-outline hover:text-secondary transition-colors" title="Attach Files">
<span className="material-symbols-outlined">attach_file</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-lg text-outline hover:text-secondary transition-colors" title="Upload Image">
<span className="material-symbols-outlined">image</span>
</button>
<button className="p-2 hover:bg-surface-container-high rounded-lg text-outline hover:text-secondary transition-colors" title="Medical Records">
<span className="material-symbols-outlined">description</span>
</button>
<div className="w-[1px] h-6 bg-outline-variant mx-1"></div>
<button className="p-2 hover:bg-surface-container-high rounded-lg text-outline hover:text-secondary transition-colors">
<span className="material-symbols-outlined">sentiment_satisfied</span>
</button>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 px-4 py-4 font-body-md resize-none max-h-40 chat-scrollbar" id="message-input" placeholder="Type your secure message..." rows={1}></textarea>

<div className="flex justify-between items-center px-4 pb-4">
<div className="flex items-center gap-2 text-[12px] text-on-tertiary-container font-medium">
<span className="material-symbols-outlined text-[16px]">lock</span>
                                End-to-end encrypted
                            </div>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-xl font-label-md hover:opacity-90 active:scale-95 transition-all flex items-center gap-2" id="send-button">
                                Send
                                <span className="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</div>
<p className="text-center text-[11px] text-outline mt-3">Your messages are private and HIPAA compliant.</p>
</div>
</footer>
</section>
</main>
</div>
    </div>
  )
}

export default MessagingPage