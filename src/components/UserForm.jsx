import { Form, Input, Col, Row } from 'antd'
export default function UserForm({ onFinish = () => { }, children, textBtSubmit = '' }) {
  return ( 
      <Row>
        <Col span={6} />
        <Col span={12}>
          <Form
          size="large"
            onFinish={onFinish}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{
                required: true,
                message: 'Please input your username!',
              }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{
                required: true,
                message: 'Please input your Password!',
              }]}
            >
              <Input.Password />
            </Form.Item>
            <section class="authen-action">
              <button class="btn btn--primary" type="submit">{textBtSubmit}</button>
              {children}
            </section>
          </Form >
        </Col>
        <Col span={6} />
      </Row> 
  );
}