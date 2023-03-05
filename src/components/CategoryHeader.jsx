import React from "react";

function CategoryHeader({ category }) {
  return (
    <div className="w-full bg-secondary">
      <h1 className="text-3xl font-bold text-center tracking-wider uppercase text-white py-8">
        {category}
      </h1>
    </div>
  );
}

export default CategoryHeader;
