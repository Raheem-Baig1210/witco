import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#0f172a] overflow-hidden">
      {/* CRAZY BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container-main pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMN 1: BRAND IDENTITY */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center gap-4 group">
              <div className="relative">
                <img
                  src="/images/wic-logo.png.jpeg"
                  alt="WITCO logo"
                  className="h-20 w-auto rounded-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                />
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-tighter text-white">WITCO</span>
                <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase max-w-[280px] leading-tight">
                  World Integrated Trading & Contracting Company
                </span>
              </div>
            </a>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              A progressive force in global trading and industrial contracting, delivering precision engineering and reliable supply chain solutions.
            </p>
            <div className="flex gap-4">
               {/* Decorative Stats or Tags */}
               <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-white/50 uppercase tracking-widest">Global Operations</span>
               <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] text-white/50 uppercase tracking-widest">Certified Excellence</span>
            </div>
          </div>

          {/* COLUMN 2: CONTACT GRID */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-primary pl-4">Direct Lines</h3>
            <div className="space-y-4">
              <a href="tel:00971526111172" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20">
                    <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium">UAE Support</span>
                    <span className="font-semibold tracking-wide">00971 526111172</span>
                </div>
              </a>
              <a href="tel:00447832285692" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20">
                    <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500 font-medium">UK Operations</span>
                    <span className="font-semibold tracking-wide">0044 (0) 7832285692</span>
                </div>
              </a>
            </div>
          </div>

          {/* COLUMN 3: DIGITAL HUB */}
          <div className="space-y-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-sm border-l-2 border-primary pl-4">Digital Hub</h3>
            <div className="space-y-4">
              <a href="mailto:inayath.khan@WITCO.com" className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20">
                    <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium truncate">inayath.khan@WITCO.com</span>
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=00971526111172" 
                target="_blank" 
                className="flex items-center justify-between w-full bg-primary p-4 rounded-xl text-white font-bold group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" /> WHATSAPP NOW
                </span>
                <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-wide">
            © {currentYear} <span className="text-slate-300 font-semibold">WITCO LIMITED</span>. ENGINEERED FOR SUCCESS.
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};