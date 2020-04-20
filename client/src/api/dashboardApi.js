import axios from 'axios';
const token = localStorage.getItem('Token')

export default axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' +token
    }
})