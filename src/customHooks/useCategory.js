import { useEffect, useState } from "react";
import { CategoryServices } from "../services/CategoryServices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, toggleInitalLoading } from "../features/category/categorySlice";

const useCategory = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const categories = useSelector((state) => state.category.categories);
  const isInitalLoaded = useSelector((state) => state.category.isInitialLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllCategories = async () => {
      setIsLoading(true);
      let categories = undefined;
      try {
        const response = await CategoryServices.getCategories();
        if (response.success) {
          categories = response.data;
          console.log(categories);
          dispatch(addCategory(categories));
          dispatch(toggleInitalLoading(true));
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
    if (!isInitalLoaded) {
      fetchAllCategories();
    }
  }, [])
  

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
        dispatch(addCategory([...categories, newCategoryData]));
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

  const handleEditCategory = async (categoryData) => {
    setIsLoading(true);
    let newCategoryData = undefined;
    try {
      const response = await CategoryServices.editCategory(categoryData);
      console.log(response);
      if (response.success) {
        newCategoryData = response.data;
        dispatch(
          addCategory(
            categories.map((category) => {
              if (category._id == categoryData._id) {
                return newCategoryData;
              }
              return category;
            })
          )
        );
        toast.success(`"${newCategoryData?.name}" updated`);
      } else {
        setError(response?.error || "Update brand failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Update brand failed");
    }
    setIsLoading(false);
  };

  const getCategoryById = (id) => {
    return categories?.find((category) => category?._id == id);
  };




  return { handleCreateCategory, error, isLoading ,categories, getCategoryById,handleEditCategory };
};

export default useCategory;
