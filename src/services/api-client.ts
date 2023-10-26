import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "35f63eee9ffb4096a603d20af96f4dbd",
  },
});
