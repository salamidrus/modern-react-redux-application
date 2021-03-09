import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _tg-OovNojV2Qd15fp-2W88r3jK4cIRWeKL-3rHDnDs",
  },
});
