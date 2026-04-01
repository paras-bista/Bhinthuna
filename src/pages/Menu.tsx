import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { AnimatePresence, motion } from "framer-motion";
import { Drumstick, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionModule from "@/components/ConversionModule";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

const menuData = {
  starters: [
    { name: "Chhatamari", description: "Nepali rice crepe topped with minced meat or vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
    { name: "Bara (Plain)", description: "Traditional lentil pancake, crispy and savory", price: "$8.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
    { name: "Bara (Egg)", description: "Lentil pancake topped with fresh eggs", price: "$9.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
    { name: "Bara (Chicken)", description: "Lentil pancake with spiced chicken topping", price: "$10.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
    { name: "Bara (Mix)", description: "Lentil pancake with mixed toppings", price: "$12.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
    { name: "Samosa Chat", description: "Crispy samosa with chickpeas and tangy chutneys", price: "$10.99", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80" },
    { name: "Nimki Chat", description: "Crunchy fried dough with spicy chickpea topping", price: "$9.99", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80" },
    { name: "Veggie Pakoda", description: "Crispy vegetable fritters with mint chutney", price: "$8.99", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80" },
    { name: "Chana Fry", description: "Stir-fried chickpeas with Nepali spices", price: "$5.99", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop&q=80" },
    { name: "Panipuri", description: "Crispy hollow puri filled with spicy water", price: "$10.99", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80" },
    { name: "Laphing (Dry)", description: "Spicy cold mung bean noodles, dry style", price: "$11.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Laphing (Jhol)", description: "Spicy cold mung bean noodles in soup", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
  ],
  momo: [
    { name: "Steamed Momo (Chicken)", description: "Classic hand-crafted dumplings, steamed to perfection", price: "$13.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Steamed Momo (Veg)", description: "Fresh vegetable dumplings, light and healthy", price: "$12.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Kothey Momo (Chicken)", description: "Pan-fried dumplings with crispy bottom", price: "$14.99", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop&q=80" },
    { name: "Kothey Momo (Veg)", description: "Pan-fried vegetable dumplings, crispy and golden", price: "$13.99", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop&q=80" },
    { name: "Fried Momo (Chicken)", description: "Deep-fried dumplings, extra crispy", price: "$14.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Fried Momo (Veg)", description: "Crispy fried vegetable dumplings", price: "$13.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Jhol Momo (Chicken)", description: "Dumplings in flavorful spicy soup", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Jhol Momo (Veg)", description: "Vegetable dumplings in aromatic broth", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Chilli Momo (Chicken)", description: "Spicy stir-fried dumplings with peppers", price: "$15.99", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80" },
    { name: "Chilli Momo (Veg)", description: "Spicy stir-fried vegetable dumplings", price: "$14.99", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80" },
    { name: "C-Momo (Chicken)", description: "Creamy dumplings in rich gravy sauce", price: "$15.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "C-Momo (Veg)", description: "Vegetable dumplings in creamy sauce", price: "$14.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
  ],
  noodles: [
    { name: "Veg Chowmin", description: "Stir-fried noodles with fresh vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Egg Chowmin", description: "Stir-fried noodles with scrambled eggs", price: "$13.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Chicken Chowmin", description: "Stir-fried noodles with tender chicken", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Buff Chowmin", description: "Stir-fried noodles with buffalo meat", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Momo Chowmin", description: "Unique combination of momo and noodles", price: "$16.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Veg Thukpa", description: "Hearty noodle soup with vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Egg Thukpa", description: "Noodle soup with boiled eggs", price: "$13.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Chicken Thukpa", description: "Traditional chicken noodle soup", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Buff Thukpa", description: "Rich buffalo meat noodle soup", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Momo Thukpa", description: "Soup with dumplings and noodles", price: "$16.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
  ],
};

const categories = [
  { id: "all", label: "All Items" },
  { id: "starters", label: "Chow & Chat" },
  { id: "momo", label: "Momo" },
  { id: "noodles", label: "Chowmin & Thukpa" },
];

const FoodCard = ({ item }: { item: MenuItem }) => {
  const isVeg = /(\(veg\)|\bveg\b|vegetable|plain)/i.test(item.name);

  return (
    <div className="group">
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 h-full">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-white/95 text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200">
            {isVeg ? <Leaf className="w-3.5 h-3.5 text-green-600" /> : <Drumstick className="w-3.5 h-3.5 text-red-600" />}
            <span className={isVeg ? "text-green-700" : "text-red-700"}>{isVeg ? "Veg" : "Non-Veg"}</span>
          </div>

        </div>

        <div className="p-4">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h4 className="font-heading text-lg font-semibold text-navy group-hover:text-primary transition-colors leading-tight">
              {item.name}
            </h4>
            <span className="text-primary font-bold text-base whitespace-nowrap">{item.price}</span>
          </div>
          <p className="text-navy/70 text-sm line-clamp-2">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

const StaticGrid = ({ items }: { items: MenuItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-4">
      {items.map((item, index) => (
        <FoodCard key={`${item.name}-${index}`} item={item} />
      ))}
    </div>
  );
};

const CategorySection = ({ title, items }: { title: string; items: MenuItem[] }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-8 bg-primary rounded-full"></div>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">{title}</h3>
      <div className="flex-1 h-px bg-border ml-4"></div>
    </div>
    <StaticGrid items={items} />
  </div>
);

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const menuSectionRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  const getFilteredItems = () => {
    if (activeCategory === "all") {
      return [...menuData.starters, ...menuData.momo, ...menuData.noodles];
    }
    return menuData[activeCategory as keyof typeof menuData] || [];
  };

  const filteredItems = getFilteredItems();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (menuSectionRef.current) {
      const headerHeight = window.innerWidth >= 768 ? 80 : 64;
      const tabsHeight = 72;
      const offset = headerHeight + tabsHeight;

      const elementPosition = menuSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Menu | Bhintuna House - Authentic Nepali Cuisine in Parramatta</title>
        <meta
          name="description"
          content="Browse our menu of authentic Nepali dishes. Traditional curries, momo, chowmin and thukpa. Dine-in, takeaway & catering available in Parramatta."
        />
        <meta
          name="keywords"
          content="Nepali menu, momo, chowmin, thukpa, Parramatta restaurant menu"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 md:pt-24">
          <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy py-12 md:py-16 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-10" />
            <div className="container relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">COMPLETE MENU</p>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Our Full Menu</h1>
                <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
                  Explore our complete selection of authentic Nepali dishes, crafted with love and tradition.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border-b border-border sticky top-16 md:top-20 z-40 shadow-sm">
            <div className="container">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex md:justify-center">
                  <div className="inline-flex gap-2 min-w-max py-4">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        type="button"
                        className={`relative px-6 py-2.5 rounded-full font-semibold text-sm md:text-base whitespace-nowrap transition-colors ${
                          activeCategory === category.id ? "text-primary" : "text-foreground/70 hover:text-primary"
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        {activeCategory === category.id && (
                          <motion.span
                            layoutId="active-menu-tab"
                            className="absolute inset-0 rounded-full bg-primary/12 border border-primary/35"
                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10">{category.label}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section ref={menuSectionRef} className="py-12 md:py-16 bg-white">
            <div className="container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  {activeCategory === "all" ? (
                    <div>
                      <CategorySection title="Chow & Chat" items={menuData.starters} />
                      <CategorySection title="Momo" items={menuData.momo} />
                      <CategorySection title="Chowmin & Thukpa" items={menuData.noodles} />
                    </div>
                  ) : filteredItems.length > 0 ? (
                    <StaticGrid items={filteredItems} />
                  ) : (
                    <div className="text-center py-16">
                      <p className="text-muted-foreground text-lg">No items found in this category.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
            <div className="container max-w-4xl">
              <ConversionModule />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Menu;
