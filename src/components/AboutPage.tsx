import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Repeat, 
  Award, 
  Target, 
  ChevronRight, 
  MapPin, 
  Mail, 
  Phone, 
  UserCircle,
  ExternalLink 
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sync scroll state with the Header's logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageFolder = "/images/A3S Solutions Limited_files/";

  const rawCustomerImages = [
    '1679048499_c-1.png', '1679048499_c-2.png', '1679048500_c-3.png', 
    '1679048500_c-4.png', '1679048500_c-5.png', '1679048500_c-6.png',
    '1679052985_cus-1.png', '1679052985_cus-2.png', '1679052985_cus-3.png',
    '1679052985_cus-4.png', '1679052986_cus-5.png', '1679052986_cus-6.png',
    '1679052986_cus-7.png', '1679052986_cus-8.png', '1679052986_cus-9.png',
    '1679052986_cus-10.png', '1679052987_cus-11.png', '1679052987_cus-12.png',
    '1679052987_cus-13.png', '1679052987_cus-14.png', '1679052987_cus-15.png',
    '1679052987_cus-16.png', '1679052988_cus-17.png', '1679052988_cus-18.png',
    '1679052988_cus-19.png', '1679052988_cus-20.png'
  ];

  const customerImages = rawCustomerImages.length % 2 === 0 
    ? rawCustomerImages 
    : rawCustomerImages.slice(1);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#00a859] selection:text-white">
      
      {/* 1. HEADER PADDING */}
      <div className="h-[152px] w-full" />

      {/* SECONDARY NAV BAR */}
      <nav 
        className={`sticky z-40 bg-[#152332] border-t border-white/10 shadow-2xl transition-all duration-300 ${
          isScrolled ? "top-16" : "top-[152px]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-10 py-5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <li><a href="#where-we-are" className="hover:text-[#00a859] transition-all hover:tracking-[0.3em]">Where we are</a></li>
            <li><a href="#company-profile" className="hover:text-[#00a859] transition-all hover:tracking-[0.3em]">Company Profile</a></li>
            <li><a href="#history" className="hover:text-[#00a859] transition-all hover:tracking-[0.3em]">History</a></li>
            <li><a href="#customers" className="hover:text-[#00a859] transition-all hover:tracking-[0.3em]">Our Customers</a></li>
            <li><a href="#team" className="hover:text-[#00a859] transition-all hover:tracking-[0.3em]">Our Team</a></li>
            <li><a href="#location" className="hover:text-[#00a859] transition-all hover:tracking-[0.3em]">Our Location</a></li>
          </ul>
        </div>
      </nav>

      {/* SECTION: WHERE WE ARE */}
      <section id="where-we-are" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-40">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[#152332] text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">Strategic Presence</h2>
            <p className="text-gray-500 text-lg">Delivering critical power and control solutions across the globe's most demanding sectors.</p>
          </div>
          <div className="h-1 w-24 bg-[#00a859]"></div>
        </div>

        <div className="grid grid-cols-1 gap-20">
          <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-[#00a859]"></span>
                <h3 className="text-[#152332] text-2xl font-bold uppercase tracking-widest">Oil & Gas</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                {['Offshore platforms', 'Onshore production sites', 'Pipelines upstream & downstream', 'Remote locations'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <ChevronRight size={18} className="text-[#00a859]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-2xl border-b-8 border-[#00a859]">
              <img src="/images/1.png" alt="Oil & Gas" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          <div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl shadow-2xl border-b-8 border-[#00a859]">
              <img src="/images/2.png" alt="Utilities" className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="md:pl-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-[#00a859]"></span>
                <h3 className="text-[#152332] text-2xl font-bold uppercase tracking-widest">Utilities</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                {['Electricity generation', 'Gas turbine power plants', 'Water treatment & Desalination', 'Mobility Solutions'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <ChevronRight size={18} className="text-[#00a859]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-32 bg-[#152332] rounded-[2.5rem] p-12 md:p-16 text-white overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a859] opacity-10 rounded-full -mr-32 -mt-32"></div>
          <h3 className="text-2xl font-bold text-center mb-12 relative z-10 uppercase tracking-[0.3em] text-[#00a859]">Core Value Delivery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {[
              { icon: Zap, label: "Responsiveness" },
              { icon: Repeat, label: "Flexibility" },
              { icon: Award, label: "Quality" },
              { icon: Target, label: "Efficiency" }
            ].map((value) => (
              <div key={value.label} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-2xl flex flex-col items-center hover:bg-[#00a859]/20 transition-all duration-500 group">
                <value.icon className="w-12 h-12 text-[#00a859] mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-black tracking-widest uppercase">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: COMPANY PROFILE */}
      <section id="company-profile" className="py-24 bg-[#f8fafc] scroll-mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-8 border-l-8 border-[#00a859] z-0"></div>
              <img src={`${imageFolder}1679059990_img-1.png`} alt="Facility" className="rounded-2xl shadow-2xl relative z-10 w-full" />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-black text-[#152332] uppercase tracking-tighter">Company Profile</h2>
              <div className="h-1.5 w-20 bg-[#00a859]"></div>
              <div className="text-gray-600 leading-relaxed text-lg space-y-6">
                <p className="font-bold text-[#152332] text-xl">Powering Industry Since 2010.</p>
                <p>A3S Solutions evolved from a trading firm into a premier staging facility and distribution leader. We specialize in industrial AC & DC systems, ensuring reliability in the most extreme environments.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "AC/DC UPS & Rectifiers",
                  "Solar Photovoltaic Systems",
                  "Fiber Glass Enclosures",
                  "Control System Cabinets",
                  "Wireless Technologies",
                  "Project Commissioning"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#152332] border-l-4 border-[#00a859] pl-4 py-2 bg-white shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HISTORY */}
      <section id="history" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-40">
        <div className="text-center mb-20">
          <h2 className="text-[#152332] text-4xl font-black uppercase tracking-tighter italic">Corporate Evolution</h2>
          <div className="h-1.5 w-24 bg-[#00a859] mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { year: "2010", title: "Foundation", desc: "Specialized Distribution & Trading unit established." },
            { year: "2011", title: "Expansion", desc: "Diversified into PLC/ESD Integration and Solar systems." },
            { year: "2013", title: "Manufacturing", desc: "Established manufacturing hub in Hyderabad for battery enclosures." },
            { year: "2010", title: "Global Presence", desc: "Headquarters established in Dubai for the Middle East market." },
            { year: "2016", title: "Offshore Leadership", desc: "Preferred provider for complex offshore technology projects." },
            { year: "2018", title: "Global Growth", desc: "Expanded footprint into India and Saudi Arabia." }
          ].map((card, i) => (
            <div key={i} className="group p-10 bg-white border-b-[10px] border-[#152332] shadow-xl hover:border-[#00a859] transition-all duration-300 transform hover:-translate-y-2">
              <span className="text-[#00a859] font-black text-4xl italic">{card.year}</span>
              <h4 className="text-[#152332] text-xl font-bold mt-2 uppercase tracking-tight">{card.title}</h4>
              <p className="text-gray-500 mt-6 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: CUSTOMERS */}
      <section id="customers" className="py-24 bg-[#152332] text-white scroll-mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-[0.4em] text-[#00a859] mb-4">Distinguished Partners</h2>
            <div className="h-px w-48 bg-white/20"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {customerImages.map((img, index) => (
              <div key={index} className="bg-white p-6 rounded-xl flex items-center justify-center h-32 border border-white/5 shadow-inner hover:scale-105 transition-transform duration-300">
                <img 
                  src={`${imageFolder}${img}`} 
                  alt="Partner Logo" 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: OUR TEAM */}
      <section id="team" className="py-24 max-w-7xl mx-auto px-6 scroll-mt-40">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-[#152332] text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">Expert Leadership</h2>
            <p className="text-gray-500 text-lg">Specialized engineers and directors driving global energy solutions.</p>
          </div>
          <div className="h-1 w-24 bg-[#00a859]"></div>
        </div>

        <div className="space-y-12">
          {/* Executive Leadership */}
          <div className="bg-[#152332] rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00a859] opacity-20 rounded-bl-full transition-all group-hover:w-40 group-hover:h-40"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
              <div className="w-24 h-24 bg-[#00a859] rounded-full flex items-center justify-center shrink-0">
                <UserCircle size={56} className="text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-black uppercase tracking-tight">M. Inayath Khan</h3>
                <p className="text-[#00a859] font-bold tracking-[0.2em] uppercase text-xs mb-4">Director of A3S Solutions Limited</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
                  <a href="tel:00447832285692" className="flex items-center gap-2 hover:text-[#00a859] transition-colors"><Phone size={16}/> 0044 (0) 78322 85692</a>
                  <a href="mailto:inayath.khan@a3ssolution.com" className="flex items-center gap-2 hover:text-[#00a859] transition-colors"><Mail size={16}/> inayath.khan@a3ssolution.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sales Team */}
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#00a859] border-b border-gray-100 pb-2">Sales Team</h4>
              <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-[#152332] hover:border-[#00a859] transition-all">
                <p className="font-bold text-[#152332] uppercase text-sm">Mohammed Ashar Riyan Khan</p>
                <div className="mt-4 space-y-2 text-[11px] text-gray-500">
                  <p className="flex items-center gap-2"><Phone size={14} className="text-[#00a859]"/> 00971 (0) 564774307</p>
                  <p className="flex items-center gap-2"><Mail size={14} className="text-[#00a859]"/> ashar.khan@a3ssolution.com</p>
                </div>
              </div>
            </div>

            {/* Project & Execution Team */}
            <div className="space-y-6 lg:col-span-2">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#00a859] border-b border-gray-100 pb-2">Project & Execution</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Aamer Khan", tel: "+966 55007 3626", mail: "aamer.khan@a3ssolution.com" },
                  { name: "Mohammed Waseem Khan", tel: "+966 532207019", mail: "logistics@a3ssolution.com" },
                  { name: "Afroz Samee", tel: "+966 565404787", mail: "afroz.samee@a3ssolution.com" },
                  { name: "Syed Faisal", tel: "+966 532 789 427", mail: "services@a3ssolution.com" }
                ].map((member) => (
                  <div key={member.name} className="bg-gray-50 p-5 rounded-xl hover:bg-white hover:shadow-lg transition-all group border border-transparent hover:border-gray-100">
                    <p className="font-bold text-[#152332] text-xs uppercase group-hover:text-[#00a859]">{member.name}</p>
                    <p className="text-[10px] text-gray-500 mt-2 font-medium">{member.tel}</p>
                    <p className="text-[10px] text-gray-400">{member.mail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Team */}
            <div className="space-y-6 lg:col-span-3 mt-4">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#00a859] border-b border-gray-100 pb-2">Service Team</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "M. Akhib Ahmed", tel: "00966 551483658", mail: "akhib.ahmed@a3ssolution.com" },
                  { name: "Muhammed Shahabaz", mail: "m.shahabaz@a3ssolution.com" },
                  { name: "Mohammed Shahabaz Ali", mail: "shahabaz.ali@a3ssolution.com" }
                ].map((member) => (
                  <div key={member.name} className="border border-gray-100 p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="font-bold text-[#152332] text-xs uppercase">{member.name}</p>
                    {member.tel && <p className="text-[10px] text-gray-500 mt-1 font-medium">{member.tel}</p>}
                    <p className="text-[10px] text-[#00a859] mt-1 break-all">{member.mail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR LOCATIONS (FIXED: EMBED URL & NO HOVER) */}
      <section id="location" className="py-24 bg-[#f8fafc] scroll-mt-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-[#152332] text-4xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">Our Location</h2>
              <p className="text-gray-500 text-lg font-medium">Strategic operations center in Al Jubail Industrial City.</p>
            </div>
            <div className="h-1 w-24 bg-[#00a859]"></div>
          </div>

          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row min-h-[550px]">
            {/* LEFT SIDE: FORMAL ADDRESS DETAILS */}
            <div className="lg:w-1/3 p-10 md:p-14 flex flex-col justify-between bg-white relative">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a859]/10 border border-[#00a859]/20 text-[#00a859] text-[10px] font-black uppercase tracking-widest mb-10">
                  <MapPin size={12} /> Regional Headquarters
                </div>
                
                <h3 className="text-3xl font-black text-[#152332] uppercase tracking-tight mb-8">
                  Al Jubail, <br />
                  <span className="text-[#00a859]">Saudi Arabia</span>
                </h3>
                
                <div className="space-y-10">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      <Target size={20} className="text-[#00a859]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Primary Office</p>
                      <p className="text-[#152332] font-bold leading-relaxed text-sm">
                        World Integrated Services Cont. Est.<br />
                        Ibn Hajar Al Asqalani St, Teabah District<br />
                        Al Jubail 35513
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 shadow-sm">
                      <Phone size={20} className="text-[#00a859]" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Support line</p>
                      <p className="text-[#152332] font-bold text-lg">+966 55007 3626</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 pt-8 border-t border-gray-100 relative z-10">
                <a 
                  href="https://www.google.com/maps/place/World+Integrated+Services+Cont.+Est./@26.9866493,49.6553696,17z/data=!4m6!3m5!1s0x3e35a1ab80d0ff41:0xf0c188563bb14095!8m2!3d26.9867213!4d49.6553327!16s%2Fg%2F11dftps7lw!5m2!1e4!1e1!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full bg-[#152332] hover:bg-[#00a859] text-white p-5 rounded-2xl transition-all duration-500 shadow-xl shadow-[#152332]/20"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">Get Directions</span>
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: FIXED IFRAME (EMBED FORMAT) */}
            <div className="lg:w-2/3 h-[450px] lg:h-auto bg-gray-200 relative">
              <iframe
                title="World Integrated Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3566.255678326557!2d49.6262444!3d26.6402482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a1ab80f0ff41%3A0xf0c188563bb14095!2sWorld%20Integrated%20Services%20Cont.%20Est.!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Subtle inner shadow overlay for blending */}
              <div className="absolute inset-0 pointer-events-none border-l border-gray-100/50 shadow-[inset_20px_0_40px_-20px_rgba(0,0,0,0.05)]" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-[#152332] border-t border-white/5 py-16 text-center">
        <p className="text-white/40 text-[10px] font-bold tracking-[0.5em] uppercase">© 2026 WORLD INTEGRATED TRADING & CONTRACTING COMPANY | Industrial Excellence</p>
      </footer> */}
    </div>
  );
};

export default AboutPage;