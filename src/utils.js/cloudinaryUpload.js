import axios from "axios";
import { CLODINARY_CLOUD_NAME, CLODINARY_UPLOAD_PRESET } from "../app/config";

export const cloudinaryUpload = async (image) => {
  if (!image) return "";
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLODINARY_UPLOAD_PRESET);
    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/${CLODINARY_CLOUD_NAME}/image/upload`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    const ImageUrl = response.data.secure_url;
    return ImageUrl;
  } catch (error) {
    throw error;
  }
};
