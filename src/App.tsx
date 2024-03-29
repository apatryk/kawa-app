import "./App.css";
import "antd/dist/antd.css";

import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "./app/404";
import { AddCoffee } from "./app/AddCoffee";
import { Coffee } from "./app/Coffee";
import { MainPage } from "./app/MainPage";
import { NavBar } from "./app/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px 0 0 0",
        }}
      >
        <Routes>
          <Route path="addcoffee" element={<AddCoffee />} />
          <Route path="/" element={<MainPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="coffee" element={<Coffee />}>
            <Route path=":coffeeId" element={<Coffee />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
