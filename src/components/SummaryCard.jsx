import { Statistic } from "antd";
import React from "react";

const SummaryCard = ({ value = 0 }) => (
  <Statistic
    title="Account Balance (CNY)"
    value={value}
  />
);

export default SummaryCard;
