import "./App.css";
import "antd/dist/antd.css";

import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "./app/404";
import { AddCoffee } from "./app/AddCoffee";
import { Coffee } from "./app/Coffee";
import { MainPage } from "./app/MainPage";
import { NavBar } from "./app/NavBar";
import { Register } from "./app/Register";
import { Login } from "./app/Login";

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
          <Route index element={<MainPage />} />
          <Route path="/addcoffee" element={<AddCoffee />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/coffee" element={<Coffee />}>
            <Route path=":coffeeId" element={<Coffee />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
