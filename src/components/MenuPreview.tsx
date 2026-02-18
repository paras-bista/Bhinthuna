import { UtensilsCrossed, ChevronRight } from "lucide-react";

// Featured Dishes - Top 3 from each category
const featuredDishes = [
  {
    category: "Chow & Chat",
    items: [
      { name: "Chhatamari", description: "Nepali rice crepe topped with minced meat or vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
      { name: "Samosa Chat", description: "Crispy samosa with chickpeas and tangy chutneys", price: "$10.99", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80" },
      { name: "Panipuri", description: "Crispy hollow puri filled with spicy water", price: "$10.99", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80" },
    ],
  },
  {
    category: "Chef's Specials",
    items: [
      { name: "Steamed Momo", description: "Classic hand-crafted dumplings, steamed to perfection", price: "$13.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
      { name: "Kothey Momo", description: "Pan-fried dumplings with crispy golden bottom", price: "$14.99", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop&q=80" },
      { name: "Jhol Momo", description: "Dumplings in flavorful spicy soup", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    ],
  },
  {
    category: "Noodles",
    items: [
      { name: "Veg Chowmin", description: "Stir-fried noodles with fresh vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
      { name: "Chicken Chowmin", description: "Stir-fried noodles with tender chicken", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
      { name: "Chicken Thukpa", description: "Traditional chicken noodle soup", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    ],
  },
];

const MenuPreview = () => {
  return (
    <section className="py-16 md:py-24 bg-cream" id="menu">
      <div className="container">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Featured Dishes
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-navy">
            Taste Our Specialties
          </h2>
          <p className="text-navy/70 text-base md:text-lg max-w-2xl mx-auto">
            Discover our most loved dishes, handpicked by our chefs and customers.
          </p>
        </div>

        {/* Featured Dishes by Category */}
        {featuredDishes.map((section, sectionIdx) => (
          <div key={section.category} className={sectionIdx > 0 ? "mt-16 md:mt-20" : ""}>
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-8">
              <UtensilsCrossed className="w-6 h-6 text-primary" />
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                {section.category}
              </h3>
            </div>

            {/* Menu Cards Grid - Mobile First: 1 col, Desktop: 3 cols */}
            <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {section.items.map((item) => (
                <article
                  key={item.name}
                  className="menu-card bg-white rounded-lg overflow-hidden border border-navy/10 hover:border-primary/40 transition-all hover:shadow-warm group"
                >
                  {/* Image Container - Fixed aspect ratio (no CLS) */}
                  <div className="menu-card-image relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
                    
                    {/* Price Badge - High Contrast */}
                    <div className="menu-card-price absolute bottom-3 right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-warm">
                      {item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="menu-card-content p-5">
                    <h4 className="font-heading text-xl md:text-2xl font-semibold text-navy mb-2">
                      {item.name}
                    </h4>
                    <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* View All Menu CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-bold text-base md:text-lg hover:bg-gold-dark transition-colors shadow-warm group"
          >
            View All Menu
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
