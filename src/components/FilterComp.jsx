import React from "react";
import { useNavigate } from "react-router-dom";

const FilterComp = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const keyword = e.target.elements.keyword.value;
    const category = e.target.elements.category.value;
    const brand = e.target.elements.brand.value;
    const inStock = e.target.elements.inStock.value;
    const rating = e.target.elements.rating.value;

    if (keyword) {
      params.set("keyword", keyword);
    } else {
      params.delete("keyword");
    }
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    if (brand) {
      params.set("brand", brand);
    } else {
      params.delete("brand");
    }
    if (inStock) {
      params.set("inStock", inStock);
    } else {
      params.delete("inStock");
    }
    if (rating) {
      params.set("rating", rating);
    } else {
      params.delete("rating");
    }
    // Build the new URL with the updated parameters
    const newURL = `${window.location.pathname}?${params.toString()}`;

    // Update the URL without reloading the page
    navigate(newURL);
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: 1000 }}>
        <form action="submit" onSubmit={handleSubmit}>
          <div className="d-flex mb-4">
            <div className="form-group  w-100 me-4">
              <label>Search keyword</label>
              <input name="keyword" className="form-control" type="text" placeholder="Enter keyword..." />
            </div>

            <button type="submit" className="btn  btn-secondary align-self-end">
              Search
            </button>
          </div>

          <div className="d-flex justify-content-around mb-5">
            <div className="form-group w-100 me-4">
              <label>Category</label>
              <select className="form-control" name="category">
                <option value={""}>All</option>
                <option value={"smartphones"}>Smartphones</option>
                <option value={"laptops"}>Laptops</option>
                <option value={"fragrances"}>Fragrances</option>
                <option value={"skincare"}>Skincare</option>
              </select>
            </div>
            <div className="form-group w-100 me-4">
              <label>Brand</label>
              <select className="form-control" name="brand">
                <option value={""}>All</option>
                <option value={"Apple"}>Apple</option>
                <option value={"Samsung"}>Samsung</option>
                <option value={"OPPO"}>OPPO</option>
                <option value={"Golden"}>Golden</option>
              </select>
            </div>
            <div className="form-group w-100 me-4">
              <label>In Stock</label>
              <select className="form-control" name="inStock">
                <option value={""}>All</option>
                <option value={"instock"}>In Stock</option>
              </select>
            </div>
            <div className="form-group w-100">
              <label>Ratings</label>
              <select className="form-control" name="rating">
                <option value={""}>All</option>
                <option value={4}>4+</option>
                <option value={3}>3+</option>
                <option value={2}>2+</option>
                <option value={1}>1+</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterComp;
