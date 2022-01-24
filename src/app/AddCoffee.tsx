import { Button, Checkbox, Form, Input, Radio, Select, Slider } from "antd";
import { addCoffee, CoffeeAddFormValues } from "../lib/coffee";

export const AddCoffee = () => {
  const onFinish = (values: CoffeeAddFormValues) => {
    addCoffee(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const sliderTipFormatter = (value: number | undefined) => {
    switch (value) {
      case 0:
        return `100% Arabica`;
      case 100:
        return `${value}% Robusta`;
      default:
        return `${100 - value!}% Arabica | ${value}% Robusta`;
    }
  };

  const coffeeRoastOptions = ["Light", "Medium", "Dark"];

  const coffeeDestinationList = [
    "drip",
    "drip&espresso",
    "espresso",
    "coffeeCapsule",
  ];

  const { Option } = Select;

  return (
    <>
      <Form
        name="addcoffeform"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
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
        <Form.Item name="type" label="Coffee Type">
          <Radio.Group>
            <Radio value="coffeeBeans">coffee beans</Radio>
            <Radio value="coffeeGround">ground coffee</Radio>
            <Radio value="coffeeInstant">instant coffee</Radio>
            <Radio value="coffeeCapsule">capsule coffee</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="destination" label="Coffee Destination">
          <Checkbox.Group options={coffeeDestinationList} />
        </Form.Item>
        <Form.Item name="roast" label="Coffee Roast">
          <Radio.Group
            options={coffeeRoastOptions}
            optionType="button"
            buttonStyle="solid"
          />
        </Form.Item>
        <Form.Item name="method" label="Coffee Processing Method">
          <Select placeholder="Coffee Processing Method">
            <Option value="washed">Washed</Option>
            <Option value="natural">Natural</Option>
          </Select>
        </Form.Item>
        <Form.Item name="species" label="Coffee Species">
          <Slider
            min={0}
            max={100}
            step={5}
            tipFormatter={sliderTipFormatter}
            marks={{
              0: "Arabica",
              100: "Robusta",
            }}
          />
        </Form.Item>
        <Form.Item name="origin" label="Origin Of Coffee">
          <Select placeholder="Origin Of Coffee">
            <Option value="kenya">Kenya</Option>
            <Option value="brazil">Brazil</Option>
          </Select>
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
