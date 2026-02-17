import { Star } from "lucide-react";

const reviews = [
  {
    text: "The momos are absolutely incredible — best I've had outside of Nepal. The warmth of the staff makes every visit feel like home.",
    author: "Priya S.",
    rating: 5,
  },
  {
    text: "We ordered catering for our family event and every single dish was perfect. Authentic flavours and beautifully presented.",
    author: "James R.",
    rating: 5,
  },
  {
    text: "A hidden gem in Parramatta. The dal bhat is comforting and flavourful. Highly recommend for anyone who loves genuine Nepali food.",
    author: "Anita K.",
    rating: 5,
  },
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Our Community
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by Parramatta
          </h2>
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Trusted by families, food lovers, and the local community since day one.
          </p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-background rounded-lg p-6 md:p-8 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
                "{review.text}"
              </p>
              <p className="text-primary font-semibold text-sm">
                — {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
