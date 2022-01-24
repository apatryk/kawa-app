import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  const redirectToAddCoffeeForm = () => {
    navigate("addcoffee");
  };
  return (
    <>
      <Button onClick={redirectToAddCoffeeForm} type="primary">
        Add Your Own Coffee!
      </Button>
    </>
  );
};
