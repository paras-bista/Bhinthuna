import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef } from "react";

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  review: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Thompson",
    rating: 5,
    review: "Absolutely phenomenal! The Burmese curry had such depth of flavor, and the tea leaf salad was unlike anything I've tasted. The family who runs this place treats you like their own. Can't wait to come back!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    review: "Best Burmese food in Sydney, hands down. Everything is prepared fresh to order, and you can taste the authenticity in every dish. The mohinga is a must-try. Service is warm and attentive.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Priya Sharma",
    rating: 5,
    review: "We ordered catering for our office event and everyone loved it! The samosas were crispy and flavorful, the curries were perfectly spiced. Great value and excellent presentation. Highly recommend for any occasion!",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 5,
    review: "A hidden gem in Parramatta. The atmosphere is cozy and inviting. Traditional recipes passed down through generations—you can really taste the heritage. The coconut rice is divine!",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    rating: 5,
    review: "The attention to detail is incredible. Every ingredient tastes fresh and authentic. The staff explained each dish with such passion. This is more than a restaurant—it's a cultural experience!",
    date: "4 days ago"
  },
  {
    id: 6,
    name: "James Anderson",
    rating: 5,
    review: "I've been coming here for years and the quality never wavers. The chicken curry is my go-to, but honestly, everything on the menu is exceptional. Warm hospitality and delicious food!",
    date: "2 weeks ago"
  },
  {
    id: 7,
    name: "Aisha Patel",
    rating: 5,
    review: "Finally found authentic Burmese cuisine in Sydney! The flavors remind me of my travels through Myanmar. The tea leaf salad is spot-on. Highly recommend to anyone seeking genuine Southeast Asian food.",
    date: "1 week ago"
  },
  {
    id: 8,
    name: "Robert Kim",
    rating: 5,
    review: "Outstanding food and service! We celebrated our anniversary here and the team made it so special. The lamb curry was tender and flavorful. Will definitely be returning soon!",
    date: "3 days ago"
  },
  {
    id: 9,
    name: "Sophie Martinez",
    rating: 5,
    review: "Best takeaway in Parramatta! Food arrives hot, perfectly packaged, and tastes amazing. The portion sizes are generous and prices are very reasonable. My family's new favorite!",
    date: "5 days ago"
  },
  {
    id: 10,
    name: "Daniel O'Brien",
    rating: 5,
    review: "Exceptional experience from start to finish. The staff are friendly and knowledgeable. The food is authentic and delicious. This place deserves all the recognition it gets!",
    date: "1 week ago"
  }
];

interface TestimonialsProps {
  limit?: number;
  className?: string;
}

const Testimonials = ({ limit, className = "" }: TestimonialsProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  
  // Duplicate testimonials for seamless infinite loop
  const duplicatedTestimonials = [...displayedTestimonials, ...displayedTestimonials];
  
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? 260 : 450; // Approximate card width + gap
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section className={`py-10 md:py-28 bg-gradient-to-br from-cream via-amber-50 to-orange-50 overflow-hidden ${className}`}>
      <div className="container px-2 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-20">
            <p className="text-primary font-bold text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.25em] uppercase mb-2 md:mb-5">
              Customer Reviews
            </p>
            <h2 className="font-heading text-xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 text-navy leading-tight px-2">
              What Our Guests Say
            </h2>
            <p className="text-navy/70 text-sm md:text-xl leading-snug md:leading-relaxed max-w-3xl mx-auto font-normal md:font-medium px-4">
              Trusted by locals and loved by visitors. Read what our community has to say about their experience.
            </p>
          </div>

          {/* Carousel Container with Auto-sliding and Manual Controls */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <style>{`
              @keyframes slide {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-slide {
                animation: slide 60s linear infinite;
              }
              .animate-slide.paused {
                animation-play-state: paused;
              }
            `}</style>

            {/* Previous Button */}
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white border border-primary/30 md:border-2 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-md md:shadow-lg hover:shadow-xl hover:scale-110 group"
              aria-label="Scroll to previous reviews"
            >
              <ChevronLeft className="w-4 h-4 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
            </button>

            {/* Next Button */}
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white border border-primary/30 md:border-2 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center shadow-md md:shadow-lg hover:shadow-xl hover:scale-110 group"
              aria-label="Scroll to next reviews"
            >
              <ChevronRight className="w-4 h-4 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
            </button>
            
            {/* Testimonials Continuous Slider */}
            <div 
              ref={scrollContainerRef}
              className="overflow-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className={`flex gap-4 md:gap-8 animate-slide ${isPaused ? 'paused' : ''}`}>
                {duplicatedTestimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.id}-${index}`}
                    className="flex-shrink-0 w-[240px] md:w-[420px] bg-white border border-primary/20 md:border-2 rounded-lg md:rounded-2xl p-3 md:p-8 hover:shadow-2xl hover:border-primary hover:scale-[1.02] transition-all duration-300 shadow-md md:shadow-lg"
                  >
                    {/* Rating */}
                    <div className="flex gap-0.5 md:gap-1.5 mb-2 md:mb-5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={`star-${testimonial.id}-${index}-${i}`} className="w-3 h-3 md:w-6 md:h-6 fill-primary text-primary drop-shadow-sm" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-navy/85 text-xs md:text-lg leading-snug md:leading-relaxed mb-3 md:mb-6 h-[72px] md:h-32 overflow-hidden font-normal md:font-medium">
                      "{testimonial.review}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-between pt-2 md:pt-5 border-t border-primary/15 md:border-t-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-navy text-xs md:text-lg truncate">{testimonial.name}</p>
                        <p className="text-[10px] md:text-sm text-navy/60 font-medium mt-0.5 md:mt-1">{testimonial.date}</p>
                      </div>
                      <div className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center shadow-md flex-shrink-0 ml-2">
                        <span className="text-white font-bold text-sm md:text-xl">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fade edges for visual effect */}
            <div className="absolute top-0 left-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-cream via-amber-50/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-cream via-orange-50/80 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
