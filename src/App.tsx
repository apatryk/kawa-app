import "./App.css";
import "antd/dist/antd.css";
import { AddCoffee } from "./app/AddCoffee";
import { CoffeeList } from "./app/CoffeeList";
import { SearchCoffee } from "./app/SearchCoffee";
import { Route, Routes } from "react-router-dom";
import { Coffee } from "./app/Coffee";

function App() {
  return (
    <>
      <Routes>
        <Route path="addCoffee" element={<AddCoffee />} />
        <Route path="about" element={<CoffeeList />} />
        <Route path="/" element={<SearchCoffee />} />
        <Route path="coffee" element={<Coffee />}>
          <Route path=":coffeeId" element={<Coffee />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
