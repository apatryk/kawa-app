import { AutoComplete } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCoffee } from '../lib/coffee';
import { Option } from '../lib/option';

export const SearchCoffee = () => {
  const [options, setOptions] = useState<Array<Option>>([]);
  const navigate = useNavigate();
  const onSelectCoffee = (id: number) => {
    navigate(`/coffee/${id}`);
  }

  const coffeeSearch = async (value: string) => {
    if (!value) {
      return setOptions([]);
    }
    const response = await getCoffee(value);
    const result = response.data.map((item) => ({
      label: `${item.roastery} ${item.name}`,
      value: item.id,
    }));
    setOptions(result);
  };

  return (
    <>
      <AutoComplete
        style={{ width: 200 }}
        options={options}
        onSearch={coffeeSearch}
        onSelect={onSelectCoffee}
        placeholder="input here"
      ></AutoComplete>
    </>
  );
};
