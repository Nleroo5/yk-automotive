import { motion } from "framer-motion";
import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";

export function ServicesSection() {
  return (
    <section className="section-padding relative bg-linear-to-b from-blue-50 via-blue-100/50 to-blue-50" id="services" style={{ overflowX: 'visible' }}>
      {/* Top-down fade overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-white/60 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10" style={{ overflowX: 'visible' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="fluid-heading-lg font-black text-foreground mb-4">
            Complete Automotive Care
          </h2>
          <p className="text-muted fluid-body max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we handle it all with expertise and precision.
          </p>
        </motion.div>

        {/* Service Cards Grid - 3-2 Layout */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-10">
          {/* Top Row: 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 md:gap-8 lg:gap-10">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>

          {/* Bottom Row: 2 Cards Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-6 md:gap-8 lg:gap-10 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
