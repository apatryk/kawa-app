import axios from "axios";

export type LoginRegisterFormValues = {
  email: string;
  password: string;
};

type LoginCallback = {
  (response: string): void
}

export const registerForm = (values: LoginRegisterFormValues) => {
  axios
    .post("http://localhost:4000/users", {
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
export const loginForm = (values: LoginRegisterFormValues, callback: LoginCallback) => {
  axios
    .post("http://localhost:4000/auth/login", {
      email: values.email,
      password: values.password,
    })
    .then(function (response) {
      callback(response.data.access_token)
    })
    .catch(function (error) {
      console.log(error);
    });

};