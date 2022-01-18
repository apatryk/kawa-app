import 'antd/dist/antd.css';

import { List, Spin } from 'antd';
import { useEffect, useState } from 'react';

import { getCoffee } from '../lib/coffee';

export const CoffeeList = () => {
  const [response, setResponse] = useState<any[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await getCoffee;
      setResponse(result.data);
      setLoaded(true);
    })();
  }, [response]);

<<<<<<< HEAD
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
=======
  if (loaded == true) {
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
  } else {
    return <Spin size="large" />;
  }
>>>>>>> Add and receive coffee data to and from server
};
