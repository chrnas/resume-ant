import { Form, Button, Col, Row, Input } from "antd";
import { center } from "./styles";

const { TextArea } = Input;

export default function Email() {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
    // Here you can send the email using values.email
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <h2 style={center}>Reach out</h2>
          <Form
            layout="vertical"
            style={{ maxWidth: 1000 }}
            name="mail"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
            </Form.Item>
            <Input/>
            <Form.Item
              label="Text"
              name="text"
              rules={[{ required: true, message: "Please input your text!" }]}
            >
              <TextArea rows={10} cols={91} />
            </Form.Item>
            <Form.Item>
              <Button type="default" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
