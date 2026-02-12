import { motion } from "framer-motion";
import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";

export function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white" id="services">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Complete Automotive Care
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
            From routine maintenance to complex repairs, we handle it all with expertise and precision.
          </p>
        </motion.div>

        {/* 3D Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
