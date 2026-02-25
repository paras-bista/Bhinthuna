import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConversionModule from "@/components/ConversionModule";

// Menu data structure
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
  { id: "momo", label: "Chef's Specials" },
  { id: "noodles", label: "Noodles" },
];

// Food Card Component
const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="group">
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border h-full">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-sm shadow-lg">
          {item.price}
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-heading text-lg font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h4>
        <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
      </div>
    </div>
  </div>
);

// Static Grid Component - 4 items per row
const StaticGrid = ({ items }: { items: MenuItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
      {items.map((item, index) => (
        <FoodCard key={`${item.name}-${index}`} item={item} />
      ))}
    </div>
  );
};

// Category Section Component for "All Items" view
const CategorySection = ({ title, items }: { title: string; items: MenuItem[] }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-1 h-8 bg-primary rounded-full"></div>
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
        {title}
      </h3>
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

  // Scroll to menu section when category changes (but not on first render)
  useEffect(() => {
    // Skip scroll on initial render
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (menuSectionRef.current) {
      // Get the sticky header height (64px on mobile, 80px on desktop)
      const headerHeight = window.innerWidth >= 768 ? 80 : 64;
      // Add additional offset for the category tabs (approximately 72px)
      const tabsHeight = 72;
      const offset = headerHeight + tabsHeight;
      
      const elementPosition = menuSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  return (
    <>
      <Helmet>
        <title>Menu | Bhintuna House - Authentic Burmese Cuisine in Parramatta</title>
        <meta
          name="description"
          content="Browse our menu of authentic Burmese dishes. Traditional curries, tea leaf salad, mohinga, momo, and noodles. Dine-in, takeaway & catering available in Parramatta."
        />
        <meta
          name="keywords"
          content="Burmese menu, Myanmar food, Burmese curry, momo, noodles, Parramatta restaurant menu, Nepali food"
        />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bhinthuna.pages.dev/menu" />
        <meta property="og:title" content="Menu | Bhintuna House - Authentic Burmese Cuisine" />
        <meta
          property="og:description"
          content="Browse our menu of authentic Burmese dishes. Traditional curries, momo, noodles, and more."
        />
        <meta property="og:image" content="https://bhinthuna.pages.dev/og-image.jpg" />
        <link rel="canonical" href="https://bhinthuna.pages.dev/menu" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bhinthuna.pages.dev/menu" />
        <meta property="twitter:title" content="Menu | Bhintuna House" />
        <meta property="twitter:image" content="https://bhinthuna.pages.dev/og-image.jpg" />
      </Helmet>
      <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-navy via-navy-dark to-navy py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&h=1080&fit=crop&q=80')] bg-cover bg-center opacity-10" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
                COMPLETE MENU
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Our Full Menu
              </h1>
              <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
                Explore our complete selection of authentic Nepali dishes, crafted with love and tradition.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="bg-card border-b border-border sticky top-16 md:top-20 z-40 shadow-sm">
          <div className="container">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-2 min-w-max py-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    type="button"
                    className={`px-6 py-2.5 rounded-full font-semibold text-sm md:text-base whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "bg-muted text-foreground/70 hover:text-primary hover:bg-muted/80"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Static Grid Menu Items */}
        <section ref={menuSectionRef} className="py-12 md:py-16 bg-white">
          <div className="container">
            {activeCategory === "all" && (
              // Show all categories with headers and static grid
              <div>
                <CategorySection 
                  title="Chow & Chat" 
                  items={menuData.starters} 
                />
                <CategorySection 
                  title="Chef's Specials" 
                  items={menuData.momo} 
                />
                <CategorySection 
                  title="Noodles" 
                  items={menuData.noodles} 
                />
              </div>
            )}
            
            {activeCategory !== "all" && filteredItems.length > 0 && (
              <StaticGrid items={filteredItems} />
            )}
            
            {activeCategory !== "all" && filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Conversion Module */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50">
          <div className="container max-w-4xl">
            <ConversionModule />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 border-y border-amber-100">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-navy">
                Why Choose Us?
              </h2>
              <p className="text-navy/70 max-w-2xl mx-auto">
                We pride ourselves on delivering exceptional quality and taste in every dish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🍴</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-navy">Fresh Ingredients</h3>
                <p className="text-navy/70 text-sm">
                  We use only the freshest, high-quality ingredients in all our dishes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👨‍🍳</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-navy">Expert Chefs</h3>
                <p className="text-navy/70 text-sm">
                  Our experienced chefs bring authentic flavors from around the world
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-navy">Fast Service</h3>
                <p className="text-navy/70 text-sm">
                  Quick preparation and delivery without compromising on quality
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Menu;
