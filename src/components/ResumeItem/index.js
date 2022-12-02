/* eslint-disable */
import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <Icon />
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <C.Total>{value}</C.Total>
      </C.Header>
    </C.Container>
  );
};

export default ResumeItem;
