import axios from "axios";

const YTSApiInstance = axios.create({
    baseURL: "https://yts.mx/api/v2/",
    timeout: 10000,
})

export default YTSApiInstance;