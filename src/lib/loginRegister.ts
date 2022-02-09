import axios from "axios";

export type LoginRegisterFormValues = {
  email: string;
  password: string;
};


export const registerForm = (values: any) => {
    axios
      .post("http://localhost:4000/signup", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  export const loginForm = (values: any) => {
    axios
      .post("http://localhost:4000/login", {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("access_token", response.data.accessToken)
        localStorage.setItem("email", response.data.user.email)
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };