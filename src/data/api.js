import axios from 'axios';

const data = axios.get(' https://panorbit.in/api/users.json').then(
    (response) =>{
        console.log(response);
    }
)