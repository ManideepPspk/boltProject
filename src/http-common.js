import axios from "axios";

export default axios.create({
  baseURL: "https://jsonkeeper.com",
  headers: {
    "Content-type": "application/json"
  }
});
