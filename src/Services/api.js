import axios from 'axios';


const api = axios.create({
   baseURL:"http://localhost:5000",
    headers:"application/json"
   
})
export default api