import { motion } from "framer-motion";
import { VehicleCard } from "../ui/VehicleCard";
import { vehicles } from "../../data/vehicles";

export function VehiclesSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white" id="vehicles">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-14 sm:mb-16 lg:mb-20">
            <p className="text-primary text-sm font-bold uppercase tracking-widest mb-3">
              Vehicle Inventory
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-4">
              Quality Pre-Owned Vehicles
            </h2>
            <p className="text-muted text-base sm:text-lg max-w-2xl mx-auto">
              Carefully inspected and serviced vehicles ready for their next owner. Each vehicle comes with a detailed service history.
            </p>
          </div>

          {/* Vehicle Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {vehicles.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <p className="text-muted text-sm">
              Looking for something specific?{" "}
              <a href="tel:4044558817" className="text-primary font-bold hover:underline">
                Call us at (404) 455-8817
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
