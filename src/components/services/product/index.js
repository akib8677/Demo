import axios from "axios";

const url = "http://localhost:8000"

export async function getProduct(){
    try {
        const res = await axios.get(`${url}/api/products`);
        return res.data;
    } catch (error) {
        console.log(error);
        return false;
    } 
}