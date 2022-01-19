import axios from "axios";

export interface Values {
  id: number;
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

export const getCoffee = async (searchValue: any) => {
  return await axios.get<Array<Values>>("http://localhost:4000/coffees?q=" + searchValue);
};
export const getCoffeeById = async (searchId: any) => {
  return await axios.get("http://localhost:4000/coffees/" + searchId);
};
