import { useState } from "react";
import { toast } from "react-toastify";
import { TagServices } from "../services/TagServices";

const useTags = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateTag = async (tagName) => {
    setIsLoading(true);
    let newTagData = undefined;
    try {
      const response = await TagServices.createTag({ name: tagName });
      console.log(response);
      if (response.success) {
        newTagData = response.data;
        toast.success(`New tag "${tagName}" created`);
      } else {
        setError(response?.error || "Create tag failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Create tag failed");
    }
    setIsLoading(false);
    return newTagData;
  };

  const fetchAllTags = async () => {
    setIsLoading(true);
    let tags = undefined;
    try {
      const response = await TagServices.getTags();
      if (response.success) {
        tags = response.data;
        console.log(tags);
      } else {
        toast.error(response?.error || "Failed to fetch tags");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.message || "Failed to fetch tags");
    }
    setIsLoading(false);
    return tags;
  };

  return { handleCreateTag, error, isLoading, fetchAllTags };
};

export default useTags;
