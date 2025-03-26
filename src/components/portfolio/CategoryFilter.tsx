
import React from 'react';
import Container from '../../components/ui/Container';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <section className="py-12 border-b border-border">
      <Container>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-secondary hover:bg-primary/10 text-foreground/70'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategoryFilter;
