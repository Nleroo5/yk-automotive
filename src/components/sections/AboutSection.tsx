import { motion } from "framer-motion";
import { CarCard } from "../ui/CarCard";

export function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative" id="about">
      {/* Subtle metallic accent stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-transparent via-chrome to-transparent opacity-20" />
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Owner Video with Decorative Accents */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto lg:mx-0 bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/about-video.webm" type="video/webm" />
                <source src="/about-video.mp4" type="video/mp4" />
              </video>
              {/* Decorative Accent Blocks */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-dark/50 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </motion.div>

          {/* Car-Shaped Card */}
          <CarCard />
        </div>
      </div>
    </section>
  );
}
