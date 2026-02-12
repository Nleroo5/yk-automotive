import { Phone, MapPin, Clock, Mail } from "lucide-react";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 relative" id="contact">
      {/* Red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-primary" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {/* Column 1: Branding */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="text-white font-black text-xl mb-4">VAP Performance & Auto Care</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for automotive service and repair in Peachtree City, GA.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "About", href: "#about" },
                { label: "Reviews", href: "#reviews" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:4706299948"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (470) 629-9948
              </a>
              <a
                href="mailto:info@vapautomotive.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@vapautomotive.com
              </a>
              <a
                href="https://www.google.com/maps/place/341+D+Bob+Industrial+Dr,+Peachtree+City,+GA+30269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>341 D Bob Industrial Drive, Unit C<br />Peachtree City, GA 30269</span>
              </a>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Business Hours</h4>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                <p>Sat–Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} VAP Performance & Auto Care. All rights reserved.</p>
          <p>Proudly serving Peachtree City, GA</p>
        </div>
      </div>
    </footer>
  );
}
