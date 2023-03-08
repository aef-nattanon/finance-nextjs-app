
import { List } from "antd";
import React from "react";

const TransitionRow = ({ item: { email = '' } }) => (
  <List.Item key={email}>
    <List.Item.Meta
      title={<a href="https://ant.design">{email}</a>}
      description={email}
    />
    <div>Content</div>
  </List.Item>
);

export default TransitionRow;
