import { motion } from "framer-motion";

export function HeroSection() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-[#0F3D52] text-white py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="max-w-4xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            Expert Auto Repair You Can Trust
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl">
            Professional automotive service in Peachtree City, GA. Quality repairs, honest pricing, experienced technicians.
          </p>

          {/* CTA Button */}
          <div>
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 shadow-lg transition-colors"
            >
              Schedule Service
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-3 gap-6 mt-12 sm:mt-16 max-w-3xl"
        >
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black">★★★★★</p>
            <p className="text-white/70 text-xs sm:text-sm mt-1">5-Star Rated</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black">All</p>
            <p className="text-white/70 text-xs sm:text-sm mt-1">Makes & Models</p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black">M-F</p>
            <p className="text-white/70 text-xs sm:text-sm mt-1">8am - 5pm</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
