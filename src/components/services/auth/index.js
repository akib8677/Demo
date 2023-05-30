import axios from "axios";

const url = "http://localhost:8000";

async function register(userData) {
    try {
        const res = await axios.post(`${url}/api/user/register`, userData);
        if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data))
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function login(userData) {
    try {
        const res = await axios.post(`${url}/api/user/login`, userData);
        if (res.data) {
            localStorage.setItem('user', JSON.stringify(res.data))
        }
        return res.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const logout = () => {
    localStorage.removeItem('user')
}
 
const authService = {
    register,
    logout,
    login
}

export default authService;