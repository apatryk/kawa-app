import axios from "axios";

export interface Values {
  roastery: string;
  name: string;
}
export const addCoffee = (values: Values) => {
  axios
    .post("http://localhost:4000/coffees", {
      roastery: values.roastery,
      name: values.name,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getCoffee = axios.get("http://localhost:4000/coffees");
