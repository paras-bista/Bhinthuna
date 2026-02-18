import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Data structure matching requirements
const menuData = {
  starters: [
    { name: "Chhatamari", description: "Nepali rice crepe topped with minced meat or vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop&q=80" },
    { name: "Bara (Plain)", description: "Traditional lentil pancake, crispy and savory", price: "$8.99", image: "/bara.jpg" },
    { name: "Bara (Egg)", description: "Lentil pancake topped with fresh eggs", price: "$9.99", image: "/bara-egg.png" },
    { name: "Bara (Chicken)", description: "Lentil pancake with spiced chicken topping", price: "$10.99", image: "/bara.jpg" },
    { name: "Bara (Mix)", description: "Lentil pancake with mixed toppings", price: "$12.99", image: "/bara.jpg" },
    { name: "Samosa Chat", description: "Crispy samosa with chickpeas and tangy chutneys", price: "$10.99", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80" },
    { name: "Nimki Chat", description: "Crunchy fried dough with spicy chickpea topping", price: "$9.99", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80" },
    { name: "Veggie Pakoda", description: "Crispy vegetable fritters with mint chutney", price: "$8.99", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=600&fit=crop&q=80" },
    { name: "Chana Fry", description: "Stir-fried chickpeas with Nepali spices", price: "$5.99", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=600&fit=crop&q=80" },
    { name: "Panipuri", description: "Crispy hollow puri filled with spicy water", price: "$10.99", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&h=600&fit=crop&q=80" },
    { name: "Laphing (Dry)", description: "Spicy cold mung bean noodles, dry style", price: "$11.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Laphing (Jhol)", description: "Spicy cold mung bean noodles in soup", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
  ],
  momo: [
    { name: "Steamed Momo (Chicken)", description: "Classic hand-crafted dumplings, steamed to perfection", price: "$13.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80", featured: true },
    { name: "Steamed Momo (Veg)", description: "Fresh vegetable dumplings, light and healthy", price: "$12.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Kothey Momo (Chicken)", description: "Pan-fried dumplings with crispy bottom", price: "$14.99", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop&q=80", featured: true },
    { name: "Kothey Momo (Veg)", description: "Pan-fried vegetable dumplings, crispy and golden", price: "$13.99", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&h=600&fit=crop&q=80" },
    { name: "Fried Momo (Chicken)", description: "Deep-fried dumplings, extra crispy", price: "$14.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Fried Momo (Veg)", description: "Crispy fried vegetable dumplings", price: "$13.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "Jhol Momo (Chicken)", description: "Dumplings in flavorful spicy soup", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", featured: true },
    { name: "Jhol Momo (Veg)", description: "Vegetable dumplings in aromatic broth", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Chilli Momo (Chicken)", description: "Spicy stir-fried dumplings with peppers", price: "$15.99", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80" },
    { name: "Chilli Momo (Veg)", description: "Spicy stir-fried vegetable dumplings", price: "$14.99", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop&q=80" },
    { name: "C-Momo (Chicken)", description: "Creamy dumplings in rich gravy sauce", price: "$15.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
    { name: "C-Momo (Veg)", description: "Vegetable dumplings in creamy sauce", price: "$14.99", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&h=600&fit=crop&q=80" },
  ],
  noodles: [
    { name: "Veg Chowmin", description: "Stir-fried noodles with fresh vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", featured: true },
    { name: "Egg Chowmin", description: "Stir-fried noodles with scrambled eggs", price: "$13.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Chicken Chowmin", description: "Stir-fried noodles with tender chicken", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", featured: true },
    { name: "Buff Chowmin", description: "Stir-fried noodles with buffalo meat", price: "$15.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Momo Chowmin", description: "Unique combination of momo and noodles", price: "$16.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Veg Thukpa", description: "Hearty noodle soup with vegetables", price: "$12.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Egg Thukpa", description: "Noodle soup with boiled eggs", price: "$13.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80" },
    { name: "Chicken Thukpa", description: "Traditional chicken noodle soup", price: "$14.99", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop&q=80", featured: true },
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

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredItems = () => {
    if (activeCategory === "all") {
      return [
        ...menuData.starters,
        ...menuData.momo,
        ...menuData.noodles,
      ];
    }
    return menuData[activeCategory as keyof typeof menuData] || [];
  };

  const filteredItems = getFilteredItems();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Page Header */}
        <section className="bg-navy py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary font-medium text-sm tracking-[0.2em] uppercase mb-3">
                Complete Menu
              </p>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Our Full Menu
              </h1>
              <p className="text-foreground/70 text-base md:text-lg">
                Explore our complete selection of authentic Nepali dishes, crafted with love and tradition.
              </p>
            </div>
          </div>
        </section>

        {/* Category Tabs - Horizontal Scrollable */}
        <section className="bg-card border-b border-border sticky top-16 md:top-20 z-40">
          <div className="container">
            <div className="menu-tabs-container overflow-x-auto scrollbar-hide">
              <div className="menu-tabs flex gap-2 min-w-max py-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`menu-tab px-6 py-2.5 rounded-full font-semibold text-sm md:text-base whitespace-nowrap transition-all ${
                      activeCategory === category.id
                        ? "menu-tab-active bg-primary text-primary-foreground shadow-warm"
                        : "bg-background text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-12 md:py-16 bg-cream">
          <div className="container">
            <div className="menu-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className="menu-card bg-white rounded-lg overflow-hidden border border-navy/10 hover:border-primary/40 transition-all hover:shadow-warm group"
                >
                  {/* Image Container - Fixed aspect ratio to prevent CLS */}
                  <div className="menu-card-image relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/20 to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="menu-card-price absolute bottom-3 right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-warm">
                      {item.price}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="menu-card-content p-5">
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-navy mb-2">
                      {item.name}
                    </h3>
                    <p className="text-navy/70 text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* No Results Message */}
            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-navy/60 text-lg">No items found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-navy-dark text-center">
          <div className="container">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              Ready to Order?
            </h2>
            <p className="text-foreground/70 mb-8 max-w-xl mx-auto">
              Call us now to place your order or make a reservation for dine-in.
            </p>
            <a
              href="tel:+610286064818"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-bold text-lg hover:bg-gold-dark transition-colors shadow-warm"
            >
              Call Now: 02 8606 4818
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FullMenu;
