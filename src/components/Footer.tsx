import { Phone, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary py-12">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#" className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-secondary-foreground">
                  a<span className="text-primary">3</span>s
                </span>
                <span className="text-xs text-primary font-medium tracking-wider uppercase">Solutions</span>
              </div>
            </a>
            <p className="mt-4 text-secondary-foreground/70 text-sm">
              A3S Solutions Limited is a progressive and efficient trading and contracting company.
            </p>
          </div>

          {/* Quick Connect */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-secondary-foreground mb-4">Quick Connect</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=00971526111172"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Whatsapp Now
              </a>
              <a
                href="tel:00971526111172"
                className="inline-flex items-center gap-2 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                00971 526111172
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h3 className="text-lg font-semibold text-secondary-foreground mb-4">Contact Info</h3>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <p>inayath.khan@a3ssolution.com</p>
              <p>0044 (0) 7832285692</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {new Date().getFullYear()} A3S Solutions Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
