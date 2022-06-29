import { List, Spin } from "antd";
import { useEffect, useState } from "react";

import { getCoffee, Coffee } from "../lib/coffee";

export const CoffeeList = () => {
  const [response, setResponse] = useState<Array<Coffee>>([]);
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
            {item._id} {item.roastery} {item.name}
          </List.Item>
        )}
      />
    </>
  );
};
