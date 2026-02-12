import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/6 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="fluid-heading-lg font-black mb-6 text-foreground">
              Ready to Get Your Car Serviced?
            </h2>
            <p className="text-muted fluid-body mb-8">
              Call us today or stop by our shop. We're here to help with all your automotive needs.
            </p>

            {/* CTA Button with Pulse Animation */}
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-xl bg-primary/10 blur-sm"
              />
              <motion.a
                href="tel:4044558817"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-primary-dark transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call Now: (404) 455-8817
              </motion.a>
            </div>

            {/* Hours */}
            <div className="mt-8 flex items-start gap-3 text-muted">
              <Clock className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                <p>Saturday & Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Interactive Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13268.492!2d-84.5821946!3d33.3846983!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4eb69084bbd2b%3A0x6e2174450fabd163!2sYK%20Automotive!5e0!3m2!1sen!2sus!4v1707700000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 sm:h-96"
              title="YK Automotive - 313 Dividend Drive, Peachtree City, GA 30269"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
