import axios from "axios";
const KEY = "AIzaSyDn7HnixOLnnl8T7yKYHY8tTIPtS5kVF2s";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
