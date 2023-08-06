import axios from "axios";
import { useState } from "react";

const useImageUpload = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async (file) => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", "b10fb2baa8e39acf5a20f0871ef715c1");
    let imageData = undefined;
    try {
      const response = await axios.post("https://api.imgbb.com/1/upload", formData);
      imageData = {
        originalUrl: response.data?.url,
        displayUrl: response.data?.display_url,
        deleteUrl: response.data.data?.delete_url,
        tumbnailUrl: response.data?.thumb?.url,
        mediumUrl: response.data?.medium?.url,
      };
    } catch (error) {
      console.log(error);
      setError(error?.message || "Image upload failed");
    }
    setIsLoading(false);
    return imageData;
  };

  return [handleUpload, error, isLoading];
};

export default useImageUpload;
