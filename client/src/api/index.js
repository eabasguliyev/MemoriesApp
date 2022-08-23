import axios from "axios";

const uri = "http://localhost:5000/posts";

const fetchPosts = () => axios.get(url);

export { fetchPosts };
