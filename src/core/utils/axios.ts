import axios from "axios";

const API_URL = "http://localhost:3000";

const axiosInstance = axios.create({
    baseURL: API_URL,
});

export const POST = async (url: string, data: any) => {
    try {
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const GET = async (url: string) => {
    try {
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}





