import { Spin } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { axiosErrors } from "../lib/axiosErrors";
import { getCoffeeById, Coffee as CoffeeType } from "../lib/coffee";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";

export const Coffee = () => {
  const [result, setResult] = useState<CoffeeType | null>(null);
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
    <div style={{display: "flex", flexDirection: "column"}}>
      <h2>ID: {result.id}</h2>
      <h2>Coffee name: {result.name}</h2>
      <h2>Coffee roastery: {result.roastery}</h2>
      <h2>Coffee origin: {result.origin}</h2>
      <h2>Coffee processing method: {result.method}</h2>
      <h2>Coffee roast: {result.roast}</h2>
      <h2>Coffee species: {result.species}</h2>
      <h2>Coffee type: {result.type}</h2>
      <h2>Coffee destination: {result.destination}</h2>
      <CommentForm data={result.id}/>
      <CommentList data={result.id}/>
    </div>
  );
};
