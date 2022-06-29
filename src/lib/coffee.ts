import axios from "axios";

export type CoffeeAddFormValues = {
  roastery: string;
  name: string;
  origin: string | null;
  method: string | null;
  roast: string | null;
  species: string | null;
  type: string | null;
  destination: string | null;
};

export type Coffee = { _id: number } & CoffeeAddFormValues;

export const addCoffee = (values: CoffeeAddFormValues) => {
  axios
    .post("http://localhost:4000/coffees", {
      roastery: values.roastery,
      name: values.name,
      origin: values.origin,
      method: values.method,
      roast: values.roast,
      species: values.species,
      type: values.type,
      destination: values.destination,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getCoffee = async (searchValue?: string) => {
  return await axios.get<Array<Coffee>>(
    "http://localhost:4000/coffees?searchCoffee=" +
      searchValue
  );
};

export const getCoffeeById = async (searchId: string | undefined) => {
  return await axios.get<Coffee>(
    "http://localhost:4000/coffees/" +
      searchId
  );
};
