import axios from "axios";

export interface Values {
  roastery: string;
  name: string;
  id: number;
}

export interface ServerResults {
  roastery: string;
  name: string;
  id: number;
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

export const getCoffee = async (searchValue?: string) => {
  return await axios.get<Array<ServerResults>>(
    "http://localhost:4000/coffees?q=" + searchValue
  );
};

export const getCoffeeById = async (searchId: string | undefined) => {
  return await axios.get<ServerResults>(
    "http://localhost:4000/coffees/" + searchId
  );
};
