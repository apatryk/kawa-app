import Layout, { Header } from "antd/lib/layout/layout";
import { CoffeeOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import { SearchCoffee } from "./SearchCoffee";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const redirectToMainPage = () => {
    navigate("/");
  };

  const LoginSingupButton = () => {
    if (localStorage.getItem("user_name")) {
      return (
        <Button
          style={{
            float: "right",
            height: "auto",
            marginLeft: "auto",
          }}
          type="primary"
          onClick={logoutForm}>
          Logout
        </Button>
      )
    } else {
      return (
        <Button
          style={{
            float: "right",
            height: "auto",
            marginLeft: "auto",
          }}
          type="primary"
          onClick={redirectToLogin}>
          Login
        </Button>)

    }
  }

  const logoutForm = () => {
    localStorage.clear();
    window.location.reload()
  }

  const redirectToLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Layout>
        <Header>
          <div
            style={{
              cursor: "pointer",
              float: "left",
              width: "120px",
              height: "31px",
              margin: "0 24px 0 0",
              color: "#ffffff",
            }}
            onClick={redirectToMainPage}
          >
            <CoffeeOutlined style={{ fontSize: "30px" }} />
            cocoffee
          </div>
          <Menu theme="dark" mode="horizontal">
            <div
              style={{
                float: "left",
                height: "auto",
                margin: "0 0 0 0",
                color: "#ffffff",
              }}
            >
              <SearchCoffee />
            </div>
            <LoginSingupButton />
          </Menu>
        </Header>
      </Layout>
    </>
  );
};
