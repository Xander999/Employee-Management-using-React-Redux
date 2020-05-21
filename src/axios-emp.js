import axios from 'axios';


const instance= axios.create({
    baseURL: "https://employee-fbe0c.firebaseio.com/"
});

export default instance;