import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "../../data/reviews";

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 relative" id="reviews">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header with Star Rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-foreground">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            {/* 5 Gold Stars */}
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-trust-gold text-trust-gold" />
              ))}
            </div>
            <span className="text-foreground font-bold text-lg">5.0</span>
            <span className="text-muted text-sm">on Google</span>
          </div>
        </motion.div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{
                y: -4,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)",
                borderColor: "rgba(220, 38, 38, 0.2)"
              }}
              className="bg-white rounded-2xl p-8 shadow-md border border-blue-500 transition-all duration-300 relative"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-trust-gold text-trust-gold" />
                ))}
              </div>

              <p className="text-foreground text-sm leading-relaxed italic mb-6">
                "{review.quote}"
              </p>
              <p className="text-primary font-bold text-sm">{review.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Link to Google Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.google.com/maps/place/YK+Automotive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold text-sm hover:underline"
          >
            Read all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
