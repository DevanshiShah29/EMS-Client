import { IRequestParams } from '../types';
import api from './api';

export const apiCall = async ({
    endPoint,
    method,
    headers = { "Content-Type": "application/json" },
    body,
    withToken = true,
    isFormData = false,
}: IRequestParams) => {
    try {
        const finalHeaders: Record<string, string> = {
            ...headers,
        };

        // Include Authorization token if needed
        if (withToken && typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                finalHeaders['Authorization'] = `Bearer ${token}`;
            }
        }

        if (!isFormData) {
            finalHeaders['Content-Type'] = 'application/json';
        }

        const config = {
            url: endPoint,
            method,
            headers: finalHeaders,
            data: isFormData ? body : JSON.stringify(body),
        };

        const response = await api(config);
        return response.data;

    } catch (err) {
        console.error('API Error:', err);
        throw err;
    }
};
