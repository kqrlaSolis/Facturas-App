import { GET } from "../utils/axios";

export const invoices = async () => {
    try {
        const response = await GET('/allinvoices');
        return response.data;
       
    } catch ( error ) {
        console.error('Error fetching invoices:', error);
        throw error;
    }
};