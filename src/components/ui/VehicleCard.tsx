import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Vehicle } from "../../data/vehicles";

interface VehicleCardProps {
  vehicle: Vehicle;
  index: number;
}

export function VehicleCard({ vehicle, index }: VehicleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
    >
      {/* Vehicle Image */}
      <div className="aspect-video overflow-hidden bg-accent">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-1 text-xs font-semibold bg-success/10 text-success rounded-full">
            {vehicle.status === "available" ? "Available" : vehicle.status === "sold" ? "Sold" : "Pending"}
          </span>
        </div>

        {/* Vehicle Name */}
        <h3 className="text-xl font-black mb-2 text-foreground">{vehicle.name}</h3>

        {/* Details */}
        <p className="text-muted text-sm mb-4">
          {vehicle.year} • {vehicle.mileage.toLocaleString()} miles
        </p>

        {/* Price and Arrow */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-black text-primary">
            ${vehicle.price.toLocaleString()}
          </p>
          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  );
}
