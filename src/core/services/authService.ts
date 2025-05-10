import { POST } from "../utils/axios";
import { decodeToken } from "react-jwt";

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await POST("/login", { email, password });
    if (response) {
      const token = response.token;
      const decodedToken: any = decodeToken(token);
      return { ...decodedToken, token };
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};