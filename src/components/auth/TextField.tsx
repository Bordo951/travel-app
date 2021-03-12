import styled from "styled-components";

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: #756f86;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-size: 16px;
  font-family: "IBM Plex Sans", sans-serif;
  color: #2c2738;
  border: 1px solid #dbe2ea;
  box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 34px;
  outline: none;
  &:focus {
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04), 0 0 0 2px #756f86;
  }
  &::placeholder {
    color: #756f86;
  }
`;
