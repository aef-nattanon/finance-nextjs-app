import { Modal } from 'antd';
import { useState } from 'react';
export default function NewTransitionModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button class="btn" onClick={showModal}>New Transaction</button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} maskClosable={false} closable={false}>
        <div class="modal">
          <div class="modal-title">Add New Transaction</div>
          <form>
            <section class="modal-input">
              <div class="input-group">
                <label>Transaction Name</label>
                <input type="text" />
              </div>
              <div class="input-group">
                <label>Transaction Type</label>
                <div class="radio-group">
                  <label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <span>Income</span>
                  </label>
                  <label>
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <span>Expenses</span>
                  </label>
                </div>
              </div>
              <div class="input-group">
                <label>Amount</label>
                <input type="text" />
              </div>
            </section>
            <section class="modal-action">
              <button type="button" class="btn" onClick={handleCancel}>Cancel</button>
              <button class="btn btn--primary">Add</button>
            </section>
          </form>
        </div>
      </Modal >
    </>
  );
};