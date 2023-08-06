import axios from "axios";
import React from "react";

const ImageUpload = () => {
  const handleUpload = async (file) => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append("key", "b10fb2baa8e39acf5a20f0871ef715c1");
    try {
      const image = await axios.post("https://api.imgbb.com/1/upload", formData);
      console.log(image);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input type="file" onChange={(event) => handleUpload(event.target.files[0])} />
    </div>
  );
};

export default ImageUpload;
