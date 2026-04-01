import { ChevronRight, ChevronLeft } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";

// Featured Dishes - Mixed categories for variety (6 per row)
const featuredDishes = [
  // Row 1 - Mixed Categories
  { name: "Chhatamari", description: "Nepali rice crepe with savory toppings", price: "$12.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80", category: "Chow & Chat" },
  { name: "Steamed Momo", description: "Classic hand-crafted dumplings", price: "$13.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80", category: "Chef's Specials" },
  { name: "Veg Chowmin", description: "Stir-fried noodles with fresh vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", category: "Noodles" },
  { name: "Samosa Chat", description: "Crispy samosa with chickpeas & chutneys", price: "$10.99", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80", category: "Chow & Chat" },
  { name: "Kothey Momo", description: "Pan-fried dumplings with golden crust", price: "$14.99", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop&q=80", category: "Chef's Specials" },
  { name: "Chicken Chowmin", description: "Noodles with tender chicken pieces", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", category: "Noodles" },
  // Row 2 - Mixed Categories
  { name: "Panipuri", description: "Crispy hollow puri with spiced water", price: "$10.99", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80", category: "Chow & Chat" },
  { name: "Jhol Momo", description: "Dumplings in flavorful spicy soup", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", category: "Chef's Specials" },
  { name: "Chicken Thukpa", description: "Traditional noodle soup with chicken", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", category: "Noodles" },
  { name: "Bara (Egg)", description: "Lentil pancake topped with eggs", price: "$9.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80", category: "Chow & Chat" },
  { name: "Chilli Momo", description: "Spicy stir-fried dumplings with peppers", price: "$15.99", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80", category: "Chef's Specials" },
  { name: "C-Momo", description: "Creamy dumplings in rich sauce", price: "$15.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80", category: "Chef's Specials" },
];

interface FoodItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const FoodCard = ({ item }: { item: FoodItem }) => (
  <motion.div className="group flex-shrink-0 w-64 md:w-72" variants={cardVariants}>
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <motion.img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        {/* Price Badge */}
        <div className="absolute bottom-3 right-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-bold text-base shadow-warm">
          {item.price}
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        {/* Category Tag */}
        <span className="inline-block px-3 py-1 rounded-full bg-cream text-primary text-xs font-semibold tracking-wide uppercase mb-3">
          {item.category}
        </span>
        {/* Dish Name */}
        <h4 className="font-heading text-xl font-bold mb-2 text-navy group-hover:text-primary transition-colors leading-tight">
          {item.name}
        </h4>
        {/* Description */}
        <p className="text-navy/80 text-sm leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const MenuPreview = () => {
  // Duplicate items for seamless infinite scroll
  const duplicateRow = (items: FoodItem[]) => [...items, ...items, ...items];

  const rowItems = duplicateRow(featuredDishes);

  const rowContainerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Scroll one item when button is clicked
  const handleScroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right', setPaused: (val: boolean) => void) => {
    if (ref.current) {
      const cardWidth = 320; // card width (288px) + gap (32px)
      const scrollAmount = direction === 'right' ? cardWidth : -cardWidth;
      
      // Pause animation and scroll
      setPaused(true);
      ref.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      
      // Resume animation after scroll
      setTimeout(() => setPaused(false), 1500);
    }
  };

  return (
    <AnimateOnScroll>
      <section className="py-16 md:py-20 bg-cream" id="menu">
      <div className="container">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            Featured Dishes
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy">
            Taste Our Specialties
          </h2>
          <motion.span
            className="block h-0.5 w-28 bg-primary mx-auto mb-5"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
          <p className="text-navy/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover our most loved dishes, handpicked by our chefs and customers.
          </p>
        </div>

        {/* Auto-Sliding Row with Navigation Buttons */}
        <div className="w-full overflow-hidden py-4">
          <div className="relative">
            {/* Navigation Buttons - Always Visible */}
            <button
              onClick={() => handleScroll(rowContainerRef, 'left', setPaused)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-navy hover:text-primary transition-all hover:scale-110"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => handleScroll(rowContainerRef, 'right', setPaused)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white/95 hover:bg-white shadow-lg rounded-full flex items-center justify-center text-navy hover:text-primary transition-all hover:scale-110"
              aria-label="Next item"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Auto-Sliding Container with Hover Pause */}
            <div 
              ref={rowContainerRef}
              className="overflow-x-auto scrollbar-hide scroll-smooth"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <motion.div
                className={`flex gap-8 animate-slide-left ${paused ? 'pause' : ''}`}
                variants={gridContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {rowItems.map((item, index) => (
                  <FoodCard key={`${item.name}-${index}`} item={item} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* View All Menu CTA */}
        <div className="text-center mt-12">
          <a
            href="/menu"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:bg-gold-dark transition-all duration-300 shadow-warm hover:shadow-xl group"
          >
            View All Menu
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      </section>
    </AnimateOnScroll>
  );
};

export default MenuPreview;
