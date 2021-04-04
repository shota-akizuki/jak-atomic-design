import styled from "styled-components";

export const Input = ({ placeholder }) => {
  return <SInput placeholder={placeholder} type="text" />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd;
  outline: none;
  border-radius: 9999px;
`;
