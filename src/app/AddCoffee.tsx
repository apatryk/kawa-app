import { Button, Form, Input } from "antd";
import { addCoffee, Values } from "../lib/coffee";
import { NavBar } from "./NavBar";

export const AddCoffee = () => {
  const onFinish = (values: Values) => {
    addCoffee(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
    <NavBar/>
      <Form
        name="addcoffeform"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Coffee Roastery"
          name="roastery"
          rules={[{ required: true, message: "Please input coffee roastery!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Coffee's Name"
          name="name"
          rules={[{ required: true, message: "Please input coffee's name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
