import axios from "axios";

const axiosDishes = axios.create({
  baseURL: "https://js-8-timur-ermolaev-default-rtdb.firebaseio.com/HM72"
});

export default axiosDishes;
