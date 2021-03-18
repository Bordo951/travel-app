import styled from "styled-components";

export const Button = styled.button`
  padding: 18px;
  margin-top: 35px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  border-radius: 5px;
  outline: none;
  border: 2px solid #df5900;
  color: #df5900;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #df5900;
  }
`;
