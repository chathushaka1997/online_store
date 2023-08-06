import { useEffect, useState } from "react";
import { BrandServices } from "../services/BrandServices";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addBrand, toggleInitalLoading } from "../features/brand/brandSlice";

const useBrands = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const brands = useSelector((state) => state.brand.brands);
  const isInitalLoaded = useSelector((state) => state.brand.isInitialLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllBrands = async () => {
      console.log("Initali brands fetch");
      setIsLoading(true);
      let brands = undefined;
      try {
        const response = await BrandServices.getBrands();
        if (response.success) {
          brands = response.data;
          dispatch(addBrand(brands));
          dispatch(toggleInitalLoading(true));
        } else {
          toast.error(response?.error || "Failed to fetch brands");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.message || "Failed to fetch brands");
      }
      setIsLoading(false);
      return brands;
    };
    if (!isInitalLoaded) {
      fetchAllBrands();
    }
  }, []);

  const handleCreateBrand = async (brandName) => {
    setIsLoading(true);
    let newBrandData = undefined;
    try {
      const response = await BrandServices.createBrand({ name: brandName });
      console.log(response);
      if (response.success) {
        newBrandData = response.data;
        dispatch(addBrand([...brands, newBrandData]));
        toast.success(`New brand "${brandName}" created`);
      } else {
        setError(response?.error || "Create brand failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Create brand failed");
    }
    setIsLoading(false);
  };

  const handleEditBrand = async (brandData) => {
    setIsLoading(true);
    let newBrandData = undefined;
    try {
      const response = await BrandServices.editBrand(brandData);
      console.log(response);
      if (response.success) {
        newBrandData = response.data;
        dispatch(
          addBrand(
            brands.map((brand) => {
              if (brand._id == brandData._id) {
                return newBrandData;
              }
              return brand;
            })
          )
        );
        toast.success(`"${brandData?.name}" updated`);
      } else {
        setError(response?.error || "Update brand failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Update brand failed");
    }
    setIsLoading(false);
  };

  const getBrandById = (id) => {
    return brands?.find((brand) => brand?._id == id);
  };

  return { handleCreateBrand, error, isLoading, brands, getBrandById, handleEditBrand };
};

export default useBrands;
