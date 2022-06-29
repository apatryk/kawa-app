import { AutoComplete } from "antd";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCoffee } from "../lib/coffee";
import { Option } from "../lib/option";

export const SearchCoffee = () => {
  const [options, setOptions] = useState<Array<Option>>([]);
  const navigate = useNavigate();
  const onSelectCoffee = (_id: number) => {
    navigate(`/coffee/${_id}`);
  };

  const coffeeSearch = async (value: string) => {
    if (!value) {
      return setOptions([]);
    }
    const response = await getCoffee(value);
    const result = response.data.map((item) => ({
      label: `${item.name}`,
      value: item._id,
    }));
    setOptions(result);
  };

  return (
    <AutoComplete
      style={{ width: 200 }}
      options={options}
      onSearch={coffeeSearch}
      onSelect={onSelectCoffee}
      placeholder="Search your coffee here!"
    />
  );
};
