import axios from "../services/axiosInstance";

export const getAllBlogPost = async () => {
  try {
    const res = await axios.get("/blogPost");
    return res.data;
  } catch (error) {
    console.error(
      "Error while fetching blogs",
      error.response?.data || error.message
    );
    throw error;
  }
};
