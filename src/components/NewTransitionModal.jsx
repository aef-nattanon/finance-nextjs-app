import { Modal, Form, Input, Radio, InputNumber } from 'antd';
import { useState, useRef } from 'react';
export default function NewTransitionModal({ loading = false, onFinish = () => { } }) {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onReset()
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    onReset()
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <button class="btn" onClick={showModal}>New Transaction</button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} maskClosable={false} closable={false}>
        <div class="modal-title">Add New Transaction</div>
        <Form
          form={form}
          labelWrap
          onFinish={onFinish}>
          <Form.Item
            label="Transaction Name"
            name="title"
            required>
            <Input />
          </Form.Item>
          <Form.Item
            label="Transaction Type"
            name="type"
            required>
            <Radio.Group
              optionType="button"
              buttonStyle="solid">
              <Radio.Button value="income">Income</Radio.Button>
              <Radio.Button value="expend">Expenses</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="Amount"
            name="amount"
            required>
            <InputNumber />
          </Form.Item>
          <Form.Item>
            <section class="modal-action">
              <button
                onClick={handleCancel}
                loading={loading}
                class="btn"
                htmlType="button">
                Cancel
              </button>
              <button
                loading={loading}
                class="btn btn--primary"
                htmlType="submit">
                Add
              </button>
            </section>
          </Form.Item>
        </Form>
      </Modal >
    </>
  );
};