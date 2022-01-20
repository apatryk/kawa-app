import axios from "axios";

export const axiosErrors = () =>
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 404) {
        window.location.href = "/404";
      }
      throw err;
    }
  );
