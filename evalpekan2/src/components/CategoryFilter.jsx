import React from 'react';

const categories = [
  'all',
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing"
];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-filter">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;