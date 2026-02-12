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
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Branding */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-xl">YK</span>
              </div>
              <span className="text-lg font-bold text-white">YK Automotive</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your trusted partner for automotive service and quality used vehicles in Atlanta, GA.
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
                href="tel:7706321515"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (770) 632-1515
              </a>
              <a
                href="tel:4044558817"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                (404) 455-8817
              </a>
              <a
                href="mailto:yksalesrepairs@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                yksalesrepairs@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/place/33.3846983,-84.5821946"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>313 Dividend Drive<br />Peachtree City, GA 30269</span>
              </a>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Business Hours</h4>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <p>Mon–Fri: 8:00 AM – 5:00 PM</p>
                <p>Sat–Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} YK Automotive. All rights reserved.</p>
          <p>Proudly serving Peachtree City, GA</p>
        </div>
      </div>
    </footer>
  );
}
