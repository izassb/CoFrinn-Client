/* eslint-disable */

import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  border-radius: 5px;
  max-width: 1100px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding: 1em;
  color: #262626;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  padding: 1em;
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px;
  width: 143px;
  height: 39px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: teal;
`;
