import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 0,
});

export const POST = async (url: string, data: any) => {
  try {
    return await axiosInstance.post(url, data);
  } catch (error) {
    throw error;
  }
};

export const GET = async (url: string) => {
  try {
    return await axiosInstance.get(url);
  } catch (error) {
    throw error;
  }
};

export const PUT = async (url: string, data: any) => {
  try {
    return await axiosInstance.put(url, data);
  } catch (error) {
    throw error;
  }
};

export const DELETE = async (url: string) => {
  try {
    return await axiosInstance.delete(url);
  } catch (error) {
    throw error;
  }
};

export const PATCH = async (url: string, data: any) => {
  try {
    return await axiosInstance.patch(url, data);
  } catch (error) {
    throw error;
  }
};
