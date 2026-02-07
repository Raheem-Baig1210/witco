import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, CheckCircle2, Loader2, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import Confetti from 'react-confetti'; // Import Confetti

export const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [subject, setSubject] = useState("Industrial Batteries");
  const [showConfetti, setShowConfetti] = useState(false); // State for confetti

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // FIX: Paste your verified keys here
    const SERVICE_ID = "your_service_id"; 
    const TEMPLATE_ID_ADMIN = "your_admin_template_id"; // Template for your email
    const TEMPLATE_ID_USER_AUTO_REPLY = "your_user_auto_reply_template_id"; // Template for user's email
    const PUBLIC_KEY = "your_public_key"; 

    if (formRef.current) {
      // 1. Send to Admin
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_ADMIN, formRef.current, PUBLIC_KEY)
        .then(() => {
          // 2. Send Auto-reply to User
          // Note: EmailJS templates can also include auto-reply logic,
          // but sending a separate template gives more control.
          // Ensure your user auto-reply template has {{user_email}} as recipient.
          emailjs.sendForm(SERVICE_ID, TEMPLATE_ID_USER_AUTO_REPLY, formRef.current, PUBLIC_KEY)
            .then(() => {
              setSuccess(true);
              setShowConfetti(true); // Trigger confetti
              setLoading(false);
              formRef.current?.reset();
              setSubject("Industrial Batteries"); // Reset dropdown
              
              // Confetti will stop after a short duration
              setTimeout(() => setShowConfetti(false), 5000); 
              setTimeout(() => setSuccess(false), 8000); // Success message lasts a bit longer
            }, (error) => {
              console.error("EmailJS User Auto-Reply Error:", error);
              alert("Message sent to admin, but failed to send auto-reply. Please check settings.");
              setLoading(false);
              // Decide if you want to show success even if auto-reply failed
              setSuccess(true); 
              setTimeout(() => setSuccess(false), 5000);
            });
        }, (error) => {
          console.error("EmailJS Admin Send Error:", error);
          alert("Failed to send message. Please try again or contact directly.");
          setLoading(false);
        });
    }
  };

  return (
    <section id="contact" className="pt-40 lg:pt-52 pb-24 bg-background relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Confetti Animation */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60]" // Ensure confetti is above all else
          >
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false} // Don't loop confetti
              numberOfPieces={500}
              tweenDuration={4000}
              gravity={0.1}
              colors={['#FFD700', '#FF4500', '#FF6347', '#FF8C00', '#FFDAB9', '#ADD8E6']} // Custom colors
            />
          </motion.div>
        )}
      </AnimatePresence>


      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT SIDE: BRANDING & CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase tracking-widest">
                <Sparkles size={12} /> Global Support
              </div>
              <h2 className="text-5xl md:text-7xl font-semibold uppercase italic tracking-tight text-secondary leading-[0.9]">
                Request a <br /> <span className="text-primary">Consultation</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md font-normal leading-relaxed">
                Connect with our certified engineers to discuss bespoke power systems and technical specifications for your next project.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-card border border-border flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-primary mb-1">Direct Line</h4>
                  <p className="text-xl font-medium tracking-tight">0044 (0) 7832285692</p>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-card border border-border flex items-center gap-6 group hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-secondary mb-1">Corporate Email</h4>
                  <p className="text-xl font-medium tracking-tight">inayath.khan@witco.com</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden border border-border shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
                alt="Engineering Team" 
                className="w-full h-64 object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: PROFESSIONAL FORM */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] border border-border shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence>
              {success && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-card/95 backdrop-blur-md flex flex-col items-center justify-center text-center p-10"
                >
                  <motion.div 
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 size={48} className="text-primary" />
                  </motion.div>
                  <h3 className="text-3xl font-semibold uppercase tracking-tight mb-4">Transmission Sent</h3>
                  <p className="text-muted-foreground font-normal mb-8 max-w-xs leading-relaxed">
                    Your inquiry has been logged. An automated confirmation has been sent to your inbox.
                  </p>
                  <Button variant="outline" className="rounded-full px-8 h-12 font-medium uppercase text-xs tracking-wide" onClick={() => setSuccess(false)}>
                    Send New Message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-primary ml-1">Full Name</label>
                  <input type="text" name="user_name" required className="contact-input" placeholder="Your Full Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-semibold uppercase tracking-widest text-primary ml-1">Work Email</label>
                  <input type="email" name="user_email" required className="contact-input" placeholder="name@company.com" />
                </div>
              </div>

              {/* Inquiry Dropdown */}
              <div className="space-y-2 relative">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-primary ml-1">Service Required</label>
                <div className="relative">
                  <select 
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="contact-input appearance-none pr-10 cursor-pointer"
                  >
                    <option value="Industrial Batteries">Industrial Batteries</option>
                    <option value="UPS Systems">UPS Systems</option>
                    <option value="Solar Solutions">Solar Solutions</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Installation & Supervision">Installation & Supervision</option>
                    <option value="Spare Parts Management">Spare Parts Management</option>
                    <option value="Customer Training">Customer Training</option>
                    <option value="Site Visit / As-Builts">Site Visit / As-Builts</option>
                    <option value="Other">Other (Please Specify)</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" size={18} />
                </div>
              </div>

              {/* Conditional Extra Field for "Other" */}
              <AnimatePresence>
                {subject === "Other" && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 pb-2">
                      <label className="text-[10px] font-semibold uppercase tracking-widest text-primary ml-1">Specify Inquiry Type</label>
                      <input type="text" name="custom_subject" required className="contact-input border-primary/40 bg-primary/5" placeholder="e.g., Custom Enclosures, Field Services" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-widest text-primary ml-1">Project Brief</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  required 
                  className="contact-input resize-none" 
                  placeholder="Describe your project requirements and how we can help..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-16 rounded-2xl font-semibold uppercase tracking-widest text-sm group shadow-xl shadow-primary/30 relative overflow-hidden"
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Submit Inquiry <Send size={16} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
                {/* Visual hover effect for button */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-input {
          width: 100%;
          background: rgba(var(--muted), 0.3); /* Slightly less opaque background */
          border: 1px solid hsl(var(--border)); /* Softer border */
          border-radius: 1rem;
          padding: 1rem;
          font-weight: 500; /* Less bold */
          font-size: 0.95rem; /* Slightly larger text */
          outline: none;
          transition: all 0.3s ease;
        }
        .contact-input:focus {
          border-color: hsl(var(--primary));
          background: transparent;
          box-shadow: 0 0 15px rgba(var(--primary), 0.15); /* Softer shadow */
        }
      `}</style>
    </section>
  );
};