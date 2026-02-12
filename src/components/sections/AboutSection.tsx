import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-accent" id="about">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Owner Photo with Decorative Accents */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-gradient-to-br from-primary/20 to-accent-dark">
              <div className="w-full h-full flex items-center justify-center text-muted">
                {/* Placeholder - will be replaced with actual image */}
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-4xl font-black text-primary">YK</span>
                  </div>
                  <p className="text-sm font-semibold">Owner Photo</p>
                </div>
              </div>
            </div>
            {/* Decorative Accent Blocks */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-dark/50 rounded-2xl -z-10" />
          </motion.div>

          {/* Content with Quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">
              Professional. Honest. Reliable.
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              At YK Automotive, we treat every vehicle like our own. We're committed to providing honest, high-quality service that keeps your car running at its best. From routine oil changes to complex engine and transmission repairs, our experienced technicians have you covered.
            </p>
            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              Located in Peachtree City, GA, we service all domestic and import vehicles, including vintage and classic cars. We also offer quality used vehicles for sale and purchase vehicles in all conditions.
            </p>

            {/* Quote Card with Glass Morphism */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 mb-8">
              <Quote className="w-8 h-8 text-primary/40 mb-3" />
              <p className="text-foreground italic text-base leading-relaxed">
                "Quality service, honest pricing, and customer satisfaction are our top priorities."
              </p>
              <p className="text-primary font-bold text-sm mt-3">— YK Automotive</p>
            </div>

            {/* Service Highlights */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl font-black text-primary">★★★★★</p>
                <p className="text-muted text-xs mt-1">5-Star Rated</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-primary">All</p>
                <p className="text-muted text-xs mt-1">Makes & Models</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-primary">M-F</p>
                <p className="text-muted text-xs mt-1">8am - 5pm</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
