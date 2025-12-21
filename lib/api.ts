import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                window.location.href = '/login';
            }
        }
        return Promise.reject(error);
    }
);

export const authApi = {
    register: (data: {
        name: string;
        email: string;
        mobile: string;
        password: string;
        password_confirmation: string;
        mobile_country_code: string;
    }) => api.post('/auth/register', data),

    login: (data: { email: string; password: string }) =>
        api.post('/auth/login', data),

    verifyEmail: (data: { email: string; code: string }) =>
        api.post('/auth/verify-email', data),

    resendVerificationCode: (data: { email: string }) =>
        api.post('/auth/resend-verification', data),

    getUserData: () => api.get('/auth/user-data'),

    logout: () => api.post('/auth/logout'),
};

export default api;