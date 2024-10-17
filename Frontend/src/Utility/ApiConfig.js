import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://evangadi-forum-5-6v8q.onrender.com" + "/api",
});

export default axiosBaseURL;
export const axiosImageURL = "https://evangadi-forum-5-6v8q.onrender.com";
