import axios from "axios";
import { useEffect, useState } from "react";
import { CategoryServices } from "../services/CategoryServices";
import { toast } from "react-toastify";

const useCategory = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateCategory = async (categoryName) => {
    setError("");
    if (!categoryName) {
      alert("Please select an category name.");
      return;
    }
    setIsLoading(true);
    let newCategoryData = undefined;
    try {
      const response = await CategoryServices.createCategory({ name: categoryName });
      if (response.success) {
        newCategoryData = response.data;
        toast.success(`New category "${categoryName}" created`);
      } else {
        setError(response?.error || "Create category failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Create category failed");
    }
    setIsLoading(false);
    return newCategoryData;
  };

  const fetchAllCategories = async () => {
    setIsLoading(true);
    let categories = undefined;
    try {
      const response = await CategoryServices.getCategories();
      if (response.success) {
        categories = response.data;
        console.log(categories);
      } else {
        toast.error(response?.error || "Failed to fetch categories");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Failed to fetch categories");
    }
    setIsLoading(false);
    return categories;
  };

  return { handleCreateCategory, error, isLoading, fetchAllCategories };
};

export default useCategory;
