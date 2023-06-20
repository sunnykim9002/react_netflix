import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "752758f4a076475b2b86b70a704157e7",
    language: "ko-KR",
  },
});

export default instance;
