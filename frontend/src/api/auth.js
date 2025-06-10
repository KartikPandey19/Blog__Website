import axios from "../services/axiosInstance";

export const loginUser = async (data) => {
  try {
    const res = await axios.post("/auth/login", data);
    return res.data;
  } catch (error) {
    console.error("Login API error:", error.response?.data || error.message);
    throw error;
  }
};

export const registerUser = async (data) => {
  try {
    const res = await axios.post("/auth/register", data);
    return res.data;
  } catch (error) {
    console.error("Register API error:", error.response?.data || error.message);
    throw error;
  }
};