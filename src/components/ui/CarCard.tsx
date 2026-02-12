import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function CarCard() {
  const features = [
    "Expert technicians with years of experience",
    "Honest pricing and transparent service",
    "All makes and models serviced",
    "Quality used vehicles for sale",
    "We purchase vehicles in any condition"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      whileHover={{
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="relative w-full cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      {/* Main Card */}
      <div
        className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-2deg) rotateX(2deg)",
          boxShadow: `
            0 2px 4px rgba(0, 0, 0, 0.05),
            0 8px 16px rgba(0, 0, 0, 0.08),
            0 16px 32px rgba(0, 0, 0, 0.06),
            0 24px 48px rgba(220, 38, 38, 0.04)
          `
        }}
      >
        {/* Header */}
        <div className="card-padding-sm pb-6 border-b border-gray-100">
          <h2 className="fluid-heading-md font-black text-foreground mb-3">
            Professional. Honest. Reliable.
          </h2>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <div className="h-1 w-6 bg-primary/50 rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="card-padding-sm space-y-6">
          {/* Description */}
          <p className="text-foreground fluid-body leading-relaxed">
            At YK Automotive, we treat every vehicle like our own. Located in Peachtree City, GA, we're committed to providing honest, high-quality service that keeps your car running at its best.
          </p>

          {/* Features List */}
          <div className="space-y-3 pt-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.1 + 0.2,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                </motion.div>
                <p className="text-sm text-foreground">{feature}</p>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-foreground italic text-base leading-relaxed">
              "Quality service, honest pricing, and customer satisfaction are our top priorities."
            </p>
            <p className="text-primary font-bold text-sm mt-3">— YK Automotive</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
