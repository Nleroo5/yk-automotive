import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md border border-gray-100 hover:shadow-[0_0_0_1px_rgba(34,110,147,0.2),0_20px_40px_rgba(0,0,0,0.1)] hover:border-primary/20 transition-all duration-300"
    >
      {/* Top Light Gradient Effect */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />

      {/* Decorative Background Number (CRITICAL FEATURE) */}
      <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 text-[80px] sm:text-[100px] lg:text-[120px] font-display font-light tracking-wide leading-none text-primary/50 select-none pointer-events-none rotate-12">
        {service.number}
      </div>

      {/* Category Badge */}
      <div className="mb-4 sm:mb-5 lg:mb-6">
        <span className="inline-block px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold text-muted bg-accent rounded-full">
          {service.category}
        </span>
      </div>

      {/* Icon Container with Gradient Background */}
      <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-5 sm:mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
        <Icon className="w-7 sm:w-8 h-7 sm:h-8 text-primary" />
      </div>

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
