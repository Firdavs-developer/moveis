import axios from 'axios'

 const axiosInstance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "e7d74392ee79934e4486da15a8122726"
    }
})

export { axiosInstance }


