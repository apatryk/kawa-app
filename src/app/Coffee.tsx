import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { axiosErrors } from "../lib/axiosErrors";
import { getCoffeeById, Values } from "../lib/coffee";

export const Coffee = () => {
  const [result, setResult] = useState<Values | null>(null);
  let params = useParams<{ coffeeId: string | undefined }>();
  axiosErrors();
  useEffect(() => {
    (async () => {
      const response = await getCoffeeById(params.coffeeId);
      setResult(response.data);
    })();
  }, [params.coffeeId]);
  if (!result) {
    return <Spin size="large" />;
  }
  return (
    <>
      <h2>ID number: {result.id}</h2>
      <h2>ID number: {result.name}</h2>
      <h2>ID number: {result.roastery}</h2>
    </>
  );
};
