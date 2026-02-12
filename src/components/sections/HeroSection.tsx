import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on video
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        }
      });
    }

    // Fade out content on scroll
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
    }

    // Darken overlay on scroll
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        }
      });
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative text-white section-padding overflow-hidden">
      {/* Video Background with Parallax */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-[120%] object-cover"
      >
        <source src="/hero-video.webm" type="video/webm" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay - Professional Automotive */}
      <div ref={overlayRef} className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-black/80" />

      {/* Red Accent Gradient */}
      <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent" />

      {/* Subtle Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 0%, black/40 100%)" />

      <div ref={contentRef} className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-primary fluid-body-sm font-bold uppercase tracking-widest">
              Peachtree City's Trusted Auto Repair
            </span>
          </motion.div>

          <h1 className="fluid-heading-xl font-black mb-6 leading-tight tracking-tight">
            Your Vehicle.
            <br />
            <span className="text-primary">Our Expertise.</span>
          </h1>

          <p className="fluid-body-lg text-white/90 mb-8 sm:mb-10 max-w-2xl font-medium">
            Professional automotive service and repair in Peachtree City, GA.
            <span className="text-white/70 block mt-2">Quality work. Honest pricing. Expert technicians.</span>
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(220, 38, 38, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-dark shadow-2xl transition-all border-2 border-primary"
            >
              Schedule Service
            </motion.a>
            <motion.a
              href="tel:4706299948"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all border-2 border-white/30"
            >
              <span className="mr-2">📞</span> (470) 629-9948
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Indicator - 4.8-Star Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 sm:mt-16 max-w-xs"
        >
          <div className="p-6 text-center">
            {/* Swooping Stars Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180, x: -100 }}
              animate={{ opacity: 1, scale: 1, rotate: 0, x: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="text-3xl sm:text-4xl font-black mb-2 flex items-center justify-center gap-0.5"
            >
              <span>★★★★</span>
              <span className="opacity-80">★</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-white font-bold text-base sm:text-lg"
            >
              4.8 Star Rated
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
