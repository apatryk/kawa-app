import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";

export const MainPage = () => {
  let navigate = useNavigate();
  const toAddCoffee = () => {
    navigate("addcoffee");
  };
  return (
    <>
      <NavBar />
      <Button onClick={toAddCoffee} type="primary">
        Add Your Own Coffee!
      </Button>
    </>
  );
};
