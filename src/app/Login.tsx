import { Button, Checkbox, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginForm, LoginRegisterFormValues } from "../lib/loginRegister";


export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/");
    }
  });

  const onFinish = (values: LoginRegisterFormValues) => {
    loginForm(values, (response: string) => {
      localStorage.removeItem("access_token");
      localStorage.setItem("access_token", response);
      window.location.reload()
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}