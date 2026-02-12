import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-[#0F3D52] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Ready to Get Your Car Serviced?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Call us today or stop by our shop. We're here to help with all your automotive needs.
            </p>

            {/* CTA Button with Pulse Animation */}
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 rounded-xl bg-white/20 blur-sm"
              />
              <motion.a
                href="tel:4044558817"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-6 h-6" />
                Call Now: (404) 455-8817
              </motion.a>
            </div>

            {/* Hours */}
            <div className="mt-8 flex items-start gap-3 text-white/80">
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
            className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.8!2d-84.449!3d33.751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ1JzAzLjYiTiA4NMKwMjYnNTYuNCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-80 sm:h-96"
              title="YK Automotive Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
