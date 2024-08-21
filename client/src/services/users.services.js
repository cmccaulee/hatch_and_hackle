import axios from 'axios';

const UserService = {
    login: (user) => {
        return axios.post("http://localhost:8000/api/login", user, {
            withCredentials: true,
        });
    },
    register: (user) => {
        return axios.post("http://localhost:8000/api/register", user, {
            withCredentials: true,
        });
    },
    logoutUser: () => {
        return axios.post("http://localhost:8000/api/logout", {}, {
            withCredentials: true,
        });
    },
}
export default UserService;