export interface Category {
  id: string;
  name: string;
  image: string;
  itemCount: number;
}

interface CategoryGridProps {
  categories: Category[];
  onCategoryClick?: (categoryId: string) => void;
}

const CategoryCard = ({ category, onClick }: { category: Category; onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="group cursor-pointer flex-shrink-0 w-64 md:w-72 text-left"
    type="button"
  >
    <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image */}
      <div className="aspect-square overflow-hidden relative">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="font-heading text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm">
          {category.itemCount} Item{category.itemCount === 1 ? "" : "s"} Available
        </p>
      </div>
    </div>
  </button>
);

const CategoryGrid = ({ categories, onCategoryClick }: CategoryGridProps) => {
  // Split categories into 3 rows
  const itemsPerRow = Math.ceil(categories.length / 3);
  const row1 = categories.slice(0, itemsPerRow);
  const row2 = categories.slice(itemsPerRow, itemsPerRow * 2);
  const row3 = categories.slice(itemsPerRow * 2);

  // Duplicate items for seamless infinite scroll
  const duplicateRow = (items: Category[]) => [...items, ...items];

  const row1Items = duplicateRow(row1);
  const row2Items = duplicateRow(row2);
  const row3Items = duplicateRow(row3);

  return (
    <div className="w-full overflow-hidden space-y-8 py-8">
      {/* Row 1 - Slide Left */}
      <div className="group/slider hover:[&>div]:pause">
        <div className="flex gap-6 animate-slide-left">
          {row1Items.map((category, index) => (
            <CategoryCard
              key={`${category.id}-${index}`}
              category={category}
              onClick={() => onCategoryClick?.(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Row 2 - Slide Right */}
      <div className="group/slider hover:[&>div]:pause">
        <div className="flex gap-6 animate-slide-right">
          {row2Items.map((category, index) => (
            <CategoryCard
              key={`${category.id}-${index}`}
              category={category}
              onClick={() => onCategoryClick?.(category.id)}
            />
          ))}
        </div>
      </div>

      {/* Row 3 - Slide Left */}
      <div className="group/slider hover:[&>div]:pause">
        <div className="flex gap-6 animate-slide-left">
          {row3Items.map((category, index) => (
            <CategoryCard
              key={`${category.id}-${index}`}
              category={category}
              onClick={() => onCategoryClick?.(category.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryGrid;
