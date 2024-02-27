import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"28ebc7fc05414cd8bd9048733befd5d3"
    }
})