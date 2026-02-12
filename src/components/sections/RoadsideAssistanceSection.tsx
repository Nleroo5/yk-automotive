import { motion } from "framer-motion";
import { Phone, Shield, CheckCircle } from "lucide-react";

export function RoadsideAssistanceSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative overflow-hidden bg-linear-to-br from-red-50 via-red-100/50 to-red-50">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-semibold text-xs uppercase tracking-wider text-primary">Emergency Support</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 text-foreground leading-tight">
              24/7 Roadside Assistance
            </h2>

            <p className="text-lg text-muted mb-8 leading-relaxed">
              We've got you covered with nationwide support, available around the clock for warranty and roadside assistance.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-8">
              {[
                "Coast-to-coast nationwide coverage",
                "Available 24 hours a day, 7 days a week",
                "Warranty & roadside support included"
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Fine Print */}
            <div className="space-y-2 text-sm text-muted">
              <p className="flex items-start gap-2">
                <span className="text-danger font-bold">*</span>
                <span>Commercial vehicles are excluded from the program.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary font-bold">→</span>
                <span>More details available at the repair facility.</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-primary/10">
              <div className="text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
                  <Phone className="w-8 h-8 text-primary" />
                </div>

                {/* Label */}
                <p className="text-muted text-sm uppercase tracking-wider mb-4 font-bold">
                  Need Assistance?
                </p>

                {/* Phone Number */}
                <a
                  href="tel:18884119567"
                  className="block text-3xl sm:text-4xl lg:text-5xl font-black text-primary hover:text-primary-dark transition-colors mb-6"
                >
                  1-888-411-9567
                </a>

                {/* Call Button */}
                <motion.a
                  href="tel:18884119567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-primary-dark transition-colors w-full justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.a>

                {/* Helper Text */}
                <p className="text-muted text-sm mt-6">
                  Available 24/7 for emergency roadside support
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
