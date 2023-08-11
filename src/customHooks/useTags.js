import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TagServices } from "../services/TagServices";
import { useDispatch, useSelector } from "react-redux";
import { addTag, toggleInitalLoading } from "../features/tag/tagSlice";

const useTags = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const tags = useSelector((state) => state.tag.tags);
  const isInitalLoaded = useSelector((state) => state.tag.isInitialLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllTags = async () => {
      setIsLoading(true);
      let tags = undefined;
      try {
        const response = await TagServices.getTags();
        if (response.success) {
          tags = response.data;
          console.log(tags);
          dispatch(addTag(tags));
          dispatch(toggleInitalLoading(true));
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
    if (!isInitalLoaded) {
      fetchAllTags();
    }
  }, [])
  

  const handleCreateTag = async (tagName) => {
    setIsLoading(true);
    let newTagData = undefined;
    try {
      const response = await TagServices.createTag({ name: tagName });
      console.log(response);
      if (response.success) {
        newTagData = response.data;
        dispatch(addTag([...tags, newTagData]));
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

  const handleEditTag = async (tagData) => {
    setIsLoading(true);
    let newTagData = undefined;
    try {
      const response = await TagServices.editTag(tagData);
      console.log(response);
      if (response.success) {
        newTagData = response.data;
        dispatch(
          addTag(
            tags.map((tag) => {
              if (tag._id == tagData._id) {
                return newTagData;
              }
              return tag;
            })
          )
        );
        toast.success(`"${newTagData?.name}" updated`);
      } else {
        setError(response?.error || "Update brand failed");
      }
    } catch (error) {
      console.log(error);
      setError(error?.message || "Update brand failed");
    }
    setIsLoading(false);
  };

  const getTagById = (id) => {
    return tags?.find((tag) => tag?._id == id);
  };



  return { handleCreateTag, error, isLoading, tags,getTagById,handleEditTag };
};

export default useTags;
