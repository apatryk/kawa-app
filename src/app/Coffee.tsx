
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCoffeeById } from "../lib/coffee";

export const Coffee = () => {
  const [result, setResult] = useState<any>([]);
  let params = useParams();

  useEffect(() => {
    (async () => {
      const response = await getCoffeeById(params.coffeeId);
      setResult(response.data);
    })();
  }, []);

  return (
    <>
      <h2>ID number: {result.id}</h2>
      <h2>ID number: {result.name}</h2>
      <h2>ID number: {result.roastery}</h2>
    </>
  );
};
