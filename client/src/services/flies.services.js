import axios from 'axios';

const http = axios.create({
    "baseURL": "http://localhost:8000/api/flies",
});

const FlyService = {
    "getAll": async () => {
        try {
            const response = await http.get('/');
            return response.data
        }
        catch (error) { throw error }
    },
    "create": async (fly) => {
        try {
            const response = await http.post('/', fly);
            return response.data
        }
        catch (error) { throw error }
    },
    "getOne": async (id) => {
        try {
            const response = await http.get(`/${id}`);
            return response.data;
        } catch (error) { throw error }
    },
    "update": async (id, fly) => {
        try {
            const response = await http.put(`/${id}`, fly);
            return response.data;
        } catch (error) { throw error }
    },
    "delete": async (id) => {
        try {
            const response = await http.delete(`/${id}`);
            return response.data;
        } catch (error) { throw error }
    }
}
export default FlyService;