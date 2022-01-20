import { List, Spin } from "antd";
import { useEffect, useState } from "react";

import { getCoffee, Values } from "../lib/coffee";

export const CoffeeList = () => {
  const [response, setResponse] = useState<Array<Values>>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getCoffee();
      setResponse(result.data);
      setLoaded(true);
    })();
  }, [response]);

  if (!loaded) {
    return <Spin size="large" />;
  }

  return (
    <>
      <List
        bordered
        dataSource={response}
        renderItem={(item) => (
          <List.Item>
            {item.id} {item.roastery} {item.name}
          </List.Item>
        )}
      />
    </>
  );
};
