import React from "react";
import PropTypes from "prop-types";
import FiltersByCategory from "./Filters/FiltersByCategory";
import FiltersByPrice from "./Filters/FiltersByPrice";

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilters = {
      ...filters,
      categoryId: newCategoryId,
    };
    onChange(newFilters);
  };
  const handlePriceChange = (value) => {
    if (onChange) onChange(value);
  };
  return (
    <div>
      <FiltersByCategory onChange={handleCategoryChange} />
      <FiltersByPrice onChange={handlePriceChange} />
    </div>
  );
}

export default ProductFilters;
