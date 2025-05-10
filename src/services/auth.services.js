import apiClient from './apiClient';

const authService = {    

    async login(body) {
        const response = await apiClient.post("auth/login", body);
        return response.data
    },

    async logout() {
        await apiClient.post("auth/logout");
    },

    async isTokenValid() {
        const response = await apiClient.post("auth/validate");
        return response.status === 200
    },

    async registrateUser(body) {
        const response = await apiClient.post("auth/register", body);
        return response.data
    },

    async registrateGuest(body) {
        const response = await apiClient.post("guests", body);
        return response.data
    },

    async getLoggedUserData(){
        const response = await apiClient.get("users/me")
        return response.data
    },
    
};

export default authService;