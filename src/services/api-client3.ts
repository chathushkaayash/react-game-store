import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // key: "c7b18323a47d40c394ea5b019646b1f5",
    key: "0896be4b90fb4060b4c2f5dc1275fde1",
  },
});
