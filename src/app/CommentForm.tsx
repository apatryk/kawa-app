import { Button, Form, Input, Rate } from "antd";
import { addComment } from "../lib/comment";

export const CommentForm = (props: any) => {
    return (
        <>
            <Form
                name="comment"
                onFinish={(value) => addComment(value, props)}
            >
                <Form.Item
                    name="comment"
                    label="Comment"
                    rules={[{ required: true, message: 'Please input comment' }]}
                >
                    <Input.TextArea showCount maxLength={100} />
                </Form.Item>
                <Form.Item name="rate">
                        <Rate />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
