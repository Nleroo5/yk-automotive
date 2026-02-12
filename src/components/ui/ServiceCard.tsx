import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  // Determine slide direction for outer cards
  const isLeftCard = index === 0 || index === 3;
  const isRightCard = index === 2 || index === 4;

  const initialX = isLeftCard ? -300 : isRightCard ? 300 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, x: initialX }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "linear" }}
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25), 0 0 0 2px rgba(220, 38, 38, 0.1)"
      }}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 cursor-pointer"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Top Light Gradient Effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

      {/* Decorative Background Number (CRITICAL FEATURE) */}
      <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 text-[80px] sm:text-[100px] lg:text-[120px] font-display font-light tracking-wide leading-none text-primary/50 select-none pointer-events-none rotate-12">
        {service.number}
      </div>

      {/* Icon Container with Gradient Background */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-linear-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300"
      >
        <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
      </motion.div>

      {/* Content */}
      <h3 className="text-lg sm:text-xl font-black text-foreground mb-2 sm:mb-3">
        {service.title}
      </h3>
      <p className="text-muted text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
        {service.description}
      </p>

      {/* Hover Arrow (appears on hover with translate-x animation) */}
      <div className="flex items-center gap-2 text-primary font-bold text-sm">
        <span>Learn More</span>
        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </div>
    </motion.div>
  );
}
