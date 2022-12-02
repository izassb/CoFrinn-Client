/* eslint-disable */
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
  margin-top: 1em;
  svg {
    width: 60px;
    height: 60px;
    margin-left: 1em;
    margin-top: 5px;
  }
  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
    svg {
      width: 50px;
      height: 50px;
      margin-left: 1em;
      margin-top: 5px;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  padding: 0 1em 0 1em;
  align-items: flex-start;
  margin: 10px auto;
  flex-direction: column;
`;

export const HeaderTitle = styled.p`
  margin-top: 20px;
  font-weight: 800;
  font-size: 32px;
  color: #152536;
  margin-bottom: 0px;
`;

export const Total = styled.span`
  font-size: 30px;
  margin-right: 20px;
  color: #68717a;
  font-weight: 400;
  font-size: 24px;
`;
