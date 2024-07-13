import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6d1328c8fd36431fba2f4b1d95aca45c",
  },
});
